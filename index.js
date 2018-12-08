const faker = require('faker');

const range = [...Array(50).keys()];

const users = range.map((id) => {
  return {
    id: id + 1,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
  };
});

module.exports = () => {
  return {
      users
  };
};
