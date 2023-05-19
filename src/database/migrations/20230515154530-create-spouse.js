'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Partners', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      personId: {
        type: Sequelize.UUID,
        references: {
          model: 'People',
          key: 'id'
        },
        allowNull: false
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
      dateOfBirth: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'rwandan'
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
    await queryInterface.dropTable('Partners');
  }
};