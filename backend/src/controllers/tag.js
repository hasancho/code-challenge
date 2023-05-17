const { Tag } = require('../models');

const getTagById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Tag.findByPk(id);
    res.status(200).json({ message: 'successed to get tag', data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'failed to get tag', error: error.message });
  }
};

const getTags = async (req, res) => {
  try {
    const result = await Tag.findAll();
    res.status(200).json({ message: 'successed to get tags', data: result });
  } catch (error) {
    res.status(500).json({ message: 'failed to get tags', error: error });
  }
};

const createTag = async (req, res) => {
  try {
    const name = req.body.name;
    const result = await Tag.create({ name: name });
    res.status(200).json({ message: 'successed to create tag', data: result });
  } catch (error) {
    res.status(500).json({ message: 'failed to create tag', error: error });
  }
};

const updateTag = async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    await Tag.update({ name: name }, { where: { id: id } });
    res.status(200).json({ message: `successed to update tag with id ${id}` });
  } catch (error) {
    res.status(500).json({ message: 'failed to update tag', error: error });
  }
};

const deleteTag = async (req, res) => {
  try {
    const id = req.params.id;
    await Tag.destroy({ where: { id: id } });
    res.status(200).json({ message: `successed to delete tag with id ${id}` });
  } catch (error) {
    res.status(500).json({ message: 'failed to delete tag', error: error });
  }
};

module.exports = { getTagById, getTags, createTag, updateTag, deleteTag };
