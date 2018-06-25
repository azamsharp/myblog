'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.addColumn(
      'Comments',
      'postid',{
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'Posts',
          key : 'id'
        }
      }
    )

  },

  down: (queryInterface, Sequelize) => {

      queryInterface.removeColumn(
        'Comments',
        'postid'
      )

  }
};
