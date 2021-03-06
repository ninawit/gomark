'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
//const bookmarks = require('./controllers/bookmarks.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
//router.get('/bookmarks/:id', bookmarks.index);
//router.get('/bookmarks/:id/deletebookmarks/:bookmarksid', bookmarks.deleteBookmarks);

module.exports = router;