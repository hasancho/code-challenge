'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NoteTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Note, {
        foreignKey: 'id_note',
      });
      this.belongsTo(models.Tag, { foreignKey: 'id_tag' });
    }
  }
  NoteTag.init(
    {
      id_note: DataTypes.INTEGER,
      id_tag: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'NoteTag',
      timestamps: false,
    }
  );
  NoteTag.removeAttribute('id');
  return NoteTag;
};
