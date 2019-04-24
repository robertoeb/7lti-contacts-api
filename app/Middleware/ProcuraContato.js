"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Contato = use("App/Models/Contato");

class ProcuraContato {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle(
    {
      request,
      response,
      params: { id }
    },
    next
  ) {
    console.log(id);
    const contato = await Contato.find(id);

    if (!contato) {
      return response.status(404).json({
        message: "Contato não encontrado.",
        id
      });
    }

    request.body.contato = contato;

    console.log(request.body);

    await next();
  }
}

module.exports = ProcuraContato;
