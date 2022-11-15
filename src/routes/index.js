const { Router } = require("express");

const usersRoutes = require("./users.routes");
const MoviesNotesRoutes = require("./moviesNotes.routes");
const sessionsRoutes = require("./sessions.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/movies-notes", MoviesNotesRoutes);
routes.use("/sessions", sessionsRoutes);

module.exports = routes;
