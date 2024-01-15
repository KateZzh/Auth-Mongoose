const express = require('express');
const { createUser, getUser, getAuth, updateUser } = require('../service/service');
const buildResponse = require('../helper/buildResponse');
const createToken = require('../helper/jwt');

const route = express.Router();

route.post('/reg', async (req, res) => {
  try {
    const data = await createUser(req.body);
    console.log(data);

    const token = createToken(data.length - 1);

    res.cookie('Bearer', token, {
      httpOnly: false,
      secure: true,
    });
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/', async (req, res) => {
  try {
    const data = await getUser();

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/auth', async (req, res) => {
  try {
    const data = await getAuth(req.body);
    const token = createToken(data.length - 1);

    res.cookie('Bearer', token, {
      httpOnly: false,
      secure: true,
    });
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/', async (req, res) => {
  try {
    const data = await updateUser(req.params._id, req.body);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
