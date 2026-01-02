'use strict';

/**
 * finshala service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::finshala.finshala');
