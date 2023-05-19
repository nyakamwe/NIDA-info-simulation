'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('People', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sex: {
        type: Sequelize.STRING,
        allowNull: false
      },
      IDNumber: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      ubudeheCategory: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      children: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      dateOfBirth: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'rwandan'
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('People');
  }
};