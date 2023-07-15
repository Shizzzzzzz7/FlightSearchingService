'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: "	Netaji Subhas Chandra Bose International Airport",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "	Bagdogra International Airport",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "	Cooch Behar Airport",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "	Sonari Airport",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "	Netaji Subhas Chandra Bose International Airport",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "	Indira Gandhi International Airport",
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "	Jaipur International Airport",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "	Chatrapati Shivaji Maharaj International Airport",
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
