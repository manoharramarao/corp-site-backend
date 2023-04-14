'use strict';

/**
 * topnav service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::topnav.topnav');
