const { Note, Tag, NoteTag } = require('../models');

const getNoteTagById = async (req, res) => {
  try {
    const id = req.params.id;
    const noteTag = await NoteTag.findAll({
      where: { id_note: id },
      include: [{ model: Note }, { model: Tag }],
    });

    if (noteTag.length === 0) {
      return res.status(404).send({
        message: `Note with id ${id} not founds`,
      });
    }

    const noteMap = new Map();
    noteTag.forEach((noteTag) => {
      const noteId = noteTag.Note.id;
      if (noteMap.has(noteId)) {
        if (noteTag.Tag !== null) {
          noteMap.get(noteId).Tag.push({
            id: noteTag.Tag.id,
            name: noteTag.Tag.name,
          });
        }
      } else {
        noteMap.set(noteId, {
          ...noteTag.Note.toJSON(),
          Tag: [],
        });

        if (noteTag.Tag !== null) {
          noteMap.get(noteId).Tag.push({
            id: noteTag.Tag.id,
            name: noteTag.Tag.name,
          });
        }
      }
    });
    const data = [...noteMap.values()];
    res.status(200).json({ data });
  } catch (error) {
    console.error(error.message);
  }
};

const getAllNoteTags = async (req, res) => {
  try {
    const noteTags = await NoteTag.findAll({
      include: [{ model: Note }, { model: Tag }],
      order: [[{ model: Note }, 'createdAt', 'DESC']],
    });
    const noteMap = new Map();
    noteTags.forEach((noteTag) => {
      const noteId = noteTag.Note.id;
      if (noteMap.has(noteId)) {
        if (noteTag.Tag !== null) {
          noteMap.get(noteId).Tag.push({
            id: noteTag.Tag.id,
            name: noteTag.Tag.name,
          });
        }
      } else {
        noteMap.set(noteId, {
          ...noteTag.Note.toJSON(),
          Tag: [],
        });
        if (noteTag.Tag !== null) {
          noteMap.get(noteId).Tag.push({
            id: noteTag.Tag.id,
            name: noteTag.Tag.name,
          });
        }
      }
    });
    const data = [...noteMap.values()];
    res.status(200).json({ data });
  } catch (error) {
    console.error(error.message);
  }
};

const createNoteTag = async (req, res) => {
  const { title, content, tags } = req.body;
  try {
    const newNote = await Note.create({ title, content });
    if (tags) {
      const allTags = Array.isArray(tags) ? tags : JSON.parse(tags);
      for (let i = 0; i < allTags.length; i++) {
        const tag = await Tag.findByPk(allTags[i]);
        if (!tag) {
          await Note.destroy({ where: { id: newNote.id } });
          res
            .status(404)
            .json({ message: `Tag with id ${allTags[i]} not founds` });
          return;
        }
        const dataNoteTag = {
          id_note: newNote.id,
          id_tag: allTags[i],
        };
        const noteTag = await NoteTag.create(dataNoteTag);
      }
    } else {
      const dataNoteTag = {
        id_note: newNote.id,
        id_tag: null,
      };
      const noteTag = await NoteTag.create(dataNoteTag);
    }
    res.status(201).json({ message: 'Successed to create note' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'failed to create note' });
  }
};

const updateNoteTag = async (req, res) => {
  const id = req.params.id;
  const { title, content, tags } = req.body;
  try {
    const updatedNote = await Note.update(
      { title, content },
      { where: { id: id } }
    );

    await NoteTag.destroy({ where: { id_note: id } });

    if (tags) {
      const allTags = Array.isArray(tags) ? tags : JSON.parse(tags);

      for (let i = 0; i < allTags.length; i++) {
        const tag = await Tag.findByPk(allTags[i]);
        if (!tag) {
          res
            .status(404)
            .json({ message: `Tag with id ${allTags[i]} not found` });
          return;
        }
        const dataNoteTag = {
          id_note: id,
          id_tag: allTags[i],
        };
        await NoteTag.create(dataNoteTag);
      }
    } else {
      const dataNoteTag = {
        id_note: id,
        id_tag: null,
      };
      await NoteTag.create(dataNoteTag);
    }

    res
      .status(200)
      .json({ message: `Successed to update NoteTag with id ${id}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update note and tags' });
  }
};

const deleteNoteTag = async (req, res) => {
  try {
    const id = req.params.id;
    await NoteTag.destroy({ where: { id_note: id } });
    res.status(200).json({ message: `successed to delete tag with id ${id}` });
  } catch (error) {
    res.status(500).json({ message: 'failed to delete tag', error: error });
  }
};

module.exports = {
  getNoteTagById,
  getAllNoteTags,
  createNoteTag,
  updateNoteTag,
  deleteNoteTag,
};
