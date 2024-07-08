module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("blog", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.STRING,
        allowNull : false
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull:false
      }

    
    });
    return Blog;
  };