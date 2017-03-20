'use strict';

const logger = require('../utils/logger');
const bookmarksCollection = require('../models/bookmarks-store.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Bookmarks Dashboard',
      bookmarks: bookmarksCollection,
    };
    logger.info('about to render', bookmarksCollection);
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;







//const logger = require('../utils/logger');
//const bookmarksStore = require('../models/bookmarks-store.js');

//const dashboard = {
//  index(request, response) {
//   logger.info('dashboard rendering');
//   const viewData = {
//      title: 'Bookmarks Dashboard',
//      bookmarks: bookmarksStore.getAllBookmarks(),
//    };
//    logger.info('about to render', bookmarksStore.getAllBookmarks());
//    response.render('dashboard', viewData);
//  },
//};


