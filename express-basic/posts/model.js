const { DataTypes, Model } = require('sequelize')

class Post extends Model {}

/**
 * Create Post model
 * @param {import('sequelize').Sequelize} sequelize Sequelize instance
 */
function postModel (sequelize) {
  return Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Post'
  })
}

module.exports = postModel
