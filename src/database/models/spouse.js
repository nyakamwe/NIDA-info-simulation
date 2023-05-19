export default (sequelize, DataTypes) => {
  const Partner = sequelize.define(
    'Partner',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      personId: {
        type: DataTypes.UUID,
        references: {
          model: 'People',
          key: 'id'
        },
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sex: {
        type: DataTypes.STRING,
        allowNull: false
      },
      IDNumber: {
        type: DataTypes.STRING(16),
        allowNull: false
      },
      dateOfBirth: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'rwandan'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );
  Partner.associate = (models) => { 
    Partner.belongsTo(models.People, {
      foreignKey: 'personId',
      as: 'spouse'
    })
  };
  return Partner;
};