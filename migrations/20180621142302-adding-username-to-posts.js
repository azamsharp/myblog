'use strict';

module.exports = {
  // db:migrate will run the up function
  up: (queryInterface, Sequelize) => {

      queryInterface.addColumn(
        'Posts',
        'username',{
          type :Sequelize.STRING
        }
      )

  },

  // db:migrate:undo will run the down function
  // db:migrate:all
  // db:migrate:all --to 'nameofmigration'
  down: (queryInterface, Sequelize) => {

    queryInterface.removeColumn(
      'Posts',
      'username'
    )

  }
};
