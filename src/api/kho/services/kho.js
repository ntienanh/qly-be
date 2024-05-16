'use strict';

/**
 * kho service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kho.kho');
