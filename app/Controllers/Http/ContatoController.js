"use strict";
const Contato = use("App/Models/Contato");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with contatoes
 */
class ContatoController {
  /**
   * Show a list of all contatoes.
   * GET contatoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const contatos = await Contato.all();

    response.status(200).json({ contatos });
  }

  /**
   * Create/save a new contato.
   * POST contatoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const contatoData = request.only(["nome", "email", "telefone"]);

    const contato = await Contato.create(contatoData);

    response.status(201).json({
      message: "Contato salvo com sucesso!",
      data: contato
    });
  }

  /**
   * Update contato details.
   * PUT or PATCH contatoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request, response }) {
    const { nome, email, telefone, contato } = request.post();

    contato.nome = nome;
    contato.email = email;
    contato.telefone = telefone;

    await contato.save();

    response.status(200).json({
      message: "Contato atualizado com sucesso.",
      data: contato
    });
  }

  /**
   * Delete a contato with id.
   * DELETE contatoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ request, response, params: { id } }) {
    const contato = request.post().contato;

    await contato.delete();

    response.status(200).json({
      message: "Contato deletado com sucesso.",
      id
    });
  }
}

module.exports = ContatoController;
