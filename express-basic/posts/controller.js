/**
 * Instantiate Post controller.
 * @param {ReturnType<typeof import('./service')>} service Post service
 */
const postController = (service) => ({
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async getAll (req, res) {
    const posts = await service.getAll()

    res.send({
      posts
    })
  }
})

module.exports = {
  postController
}
