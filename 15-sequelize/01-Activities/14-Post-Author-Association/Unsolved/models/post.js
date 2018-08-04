module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

    // 'use strict';
  module.exports = (sequelize, DataTypes) => {
    var Task = sequelize.define('Task', {
      title: DataTypes.STRING
    });

    Task.associate = function (models) {
      models.Task.belongsTo(models.User, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Task;
  };

  return Post;
};
