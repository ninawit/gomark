'use strict';

const logger = require('../utils/logger');
const bookmarksCollection = require('../models/bookmarks-store.js');

const bookmarks = {
  index(request, response) {
    const bookmarksId = request.params.id;
    logger.debug('Bookmarks id = ', bookmarksId);
    const viewData = {
      title: 'Bookmarks',
    };
    response.render('bookmarks', viewData);
  },
module.exports = bookmarks;
  
  
  
  
//TO DELETE BOOKMARKS  
// deleteBookmarks(request, response) {
//    const bookmarksId = request.params.id;
//    const songId = request.params.songid;
//    logger.debug(`Deleting Bookmarks ${songId} from Bookmarks ${bookmarksId}`);
//    bookmarksStore.removeBookmarks(bookmarksId, bookmarksId);
//    response.redirect('/bookmarks/' + bookmarksId);
//  },  
//};



//TO DISPLAY BOOKMARKS
//const logger = require('../utils/logger');
//const bookmarksStore = require('../models/bookmarks-store.js');

//const bookmarks = {
//  index(request, response) {
//    const bookmarksId = request.params.id;
//    logger.debug('Bookmarks id = ', bookmarksId);
//    const viewData = {
//      title: 'Bookmarks',
//      bookmarks: bookmarksStore.getBookmarks(bookmarksId),
//    };
//    response.render('bookmarks', viewData);
//  },
//};


