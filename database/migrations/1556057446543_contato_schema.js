"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ContatoSchema extends Schema {
  up() {
    this.create("contatos", table => {
      table.increments();
      table.timestamps();
      table.string("nome").notNullable();
      table
        .string("email")
        .notNullable()
        .unique();
      table.string("telefone", 30).notNullable();
    });
  }

  down() {
    this.drop("contatos");
  }
}

module.exports = ContatoSchema;
