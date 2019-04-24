"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Contato = use("App/Models/Contato");

class ChecaEmail {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response }, next) {
    if (request.body.email) {
      const email = await Contato.findBy("email", request.body.email);

      if (email) {
        return response.status(409).json({
          message: "Já existe um contato cadastrado com esse email."
        });
      }
    }

    await next();
  }
}

module.exports = ChecaEmail;
