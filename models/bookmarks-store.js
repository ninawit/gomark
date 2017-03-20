'use strict';
  
const bookmarksCollection = require('./bookmarks-store.json').bookmarksCollection;
   
module.exports = bookmarksCollection;




//TO DELETE BOOKMARKS
//removeBookmark(id, bookmarksId) {
//    const bookmarks = this.getBookmarks(id);
// },






//TO DISPLAY SELECTED BOOKMARKS
//const bookmarksStore = {

//  bookmarksCollection: require('./bookmarks-store.json').bookmarksCollection,

//  getAllPlaylists() {
//    return this.bookmarksCollection;
//  },

//  getBookmarks(id) {
//    let foundBookmarks = null;
//    for (let bookmarks of this.bookmarksCollection) {
//     if (id == bookmarks.id) { //       foundBookmarks = bookmarks;
//      }
//   }

//    return foundBookmarks;
//  },
//};

//
//module.exports = bookmarksStore;

