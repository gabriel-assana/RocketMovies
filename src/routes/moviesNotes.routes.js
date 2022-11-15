const { Router } = require("express");
const { route } = require("express/lib/router");

const routes = Router();
const MoviesNotesControllers = require("../controllers/MoviesNotesControllers");
const moviesNotesControllers = new MoviesNotesControllers();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

routes.use(ensureAuthenticated);
routes
  .post("/", moviesNotesControllers.create)
  .put("/:id", moviesNotesControllers.update)
  .delete("/:id", moviesNotesControllers.delete)
  .get("/:id", moviesNotesControllers.show)
  .get("/", moviesNotesControllers.index);

module.exports = routes;
