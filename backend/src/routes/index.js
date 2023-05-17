const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tag');

router.get('/tag', tagController.getTags);
router.get('/tag/:id', tagController.getTagById);
router.post('/tag', tagController.createTag);
router.put('/tag/:id', tagController.updateTag);
router.delete('/tag/:id', tagController.deleteTag);

module.exports = router;
