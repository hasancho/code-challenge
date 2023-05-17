const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note');
const tagController = require('../controllers/tag');

router.get('/note', noteController.getAllNoteTags);
router.get('/note/:id', noteController.getNoteTagById);
router.post('/note', noteController.createNoteTag);
router.put('/note/:id', noteController.updateNoteTag);
router.delete('/note/:id', noteController.deleteNoteTag);
router.get('/tag', tagController.getTags);
router.get('/tag/:id', tagController.getTagById);
router.post('/tag', tagController.createTag);
router.put('/tag/:id', tagController.updateTag);
router.delete('/tag/:id', tagController.deleteTag);

module.exports = router;
