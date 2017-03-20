'use strict';

const logger = require('../utils/logger');

const about = {
  index(request, response) {
    const viewData = {
      title: 'About Bookmarks',
    };
    response.render('about', viewData);
  },
};

module.exports = about;
