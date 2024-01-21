const { TableUser, ObjectId } = require('../db');

const createUserDB = async user => await TableUser.create(user);

const getUserDB = async () => TableUser.find();

const getUserByEmail = async email => await TableUser.find({ email });

const updateUserDB = async (_id, user) => {
  await TableUser.updateOne({ _id: new ObjectId(_id) }, { $set: user });
  return await TableUser.findById({ _id: new ObjectId(_id) });
};

module.exports = { createUserDB, getUserDB, getUserByEmail, updateUserDB };
