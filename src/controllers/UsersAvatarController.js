const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class UsersAvatarController {
  async update(request, response) {
    const user_id = request.user.id;
    const avatarFile = request.file.filename;

    const diskStorage = new DiskStorage();

    const user = await knex("users").where({ id: user_id }).first();

    if (!user) {
      throw new AppError("Somente usuários autenticados podem mudar o avatar",401);
    }

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar);
    }

    const fileName = await diskStorage.saveFile(avatarFile);
    user.avatar = fileName;

    await knex("users").where({ id: user_id }).update(user);

    return response.json(user);
  }
}

module.exports = UsersAvatarController;
