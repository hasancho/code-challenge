'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // add foreign key constraint for catatan_id in catatan_tag table
    await queryInterface.addConstraint('NoteTags', {
      fields: ['id_note'],
      type: 'foreign key',
      name: 'notetag_id_note_fk',
      references: {
        table: 'Notes',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    // add foreign key constraint for tag_id in catatan_tag table
    await queryInterface.addConstraint('NoteTags', {
      fields: ['id_tag'],
      type: 'foreign key',
      name: 'notetag_id_tag_fk',
      references: {
        table: 'Tags',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },
  down: async (queryInterface, Sequelize) => {
    // remove foreign key constraint for catatan_id in catatan_tag table
    await queryInterface.removeConstraint(
      'Catatan_Tags',
      'catatan_tag_id_catatan_fk'
    );

    // remove foreign key constraint for tag_id in catatan_tag table
    await queryInterface.removeConstraint(
      'Catatan_Tags',
      'catatan_tag_id_tag_fk'
    );
  },
};
