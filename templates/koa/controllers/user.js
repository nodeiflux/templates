/**
 *
 * @param {import('koa').Context} ctx
 */
async function listAll (ctx) {
  ctx.body = 'Hello'
}

module.exports = {
  listAll
}
