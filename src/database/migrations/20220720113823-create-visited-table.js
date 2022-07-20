'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('visits', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{model:'users', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      product_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{model:'products', key:'id'},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      created_at:{
        type:Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updated_at:{
        type:Sequelize.DataTypes.DATE,
        allowNull: false
      }
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('visits');
  }
};
