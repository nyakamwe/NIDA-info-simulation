export default (sequelize, DataTypes) => {
  const People = sequelize.define(
    'People',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
      ubudeheCategory: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      children: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
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
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
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
  People.associate = (models) => {
    People.hasOne(models.Partner, {
      foreignKey: 'personId',
      as: 'spouse'
    })
   };
  return People;
};