"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

// Contatos

Route.get("contatos", "ContatoController.index");

Route.post("contatos", "ContatoController.store").middleware(["checaEmail"]);

Route.patch("contatos/:id", "ContatoController.update").middleware([
  "procuraContato",
  "checaEmail"
]);

Route.delete("contatos/:id", "ContatoController.destroy").middleware([
  "procuraContato"
]);
