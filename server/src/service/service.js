const { createUserDB, getUserDB, getUserByEmail, updateUserDB } = require('../repository/repository');
const bcrypt = require('bcrypt');

const salt = 10;

const createUser = async user => {
  const foundEmail = await getUserByEmail(user.email);
  if (foundEmail.length) throw new Error('error. already exists');

  const hashPassword = await bcrypt.hash(user.password, salt);

  return await createUserDB({ ...user, password: hashPassword });
};

const getAuth = async user => {
  const foundEmail = await getUserByEmail(user.email);
  if (!foundEmail.length) throw new Error('error. email not found');

  if (!(await bcrypt.compare(user.password, foundEmail[0].password))) throw new Error('error. invalid password');

  return foundEmail;
};

const getUser = async () => await getUserDB();

const updateUser = async (_id, user) => await updateUserDB(_id, user);

module.exports = { createUser, getUser, getAuth, updateUser };
