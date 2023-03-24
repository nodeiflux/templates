/**
 * Instantiate the Post service
 * @param {ReturnType<typeof import('./model')>} model Post model
 */
const postService = (model) => ({
  async getAll () {
    return model.findAll()
  }
})

module.exports = postService
