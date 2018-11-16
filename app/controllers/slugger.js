const slug = require("../helpers/slug");
const url = require("../helpers/url");
const utils = require("../helpers/utils");

const sluggerModel = require("../models/slugger");

/**
 * Details about slug: url and time created
 * 
 * @param slug
 * @return slug, url, timestamp
 */
exports.fetchInfo = (req, res, next) => {

	if (!slug.isValid(req.params.slug)) {

		// Return error: Invalid slug
    	utils.respondWithCode(res, 101);
  	}
	else {
    	sluggerModel.fetchBySlug(req.params.slug, (err, ret, col) => {

			// Ensures that only one record is returned
			if (ret.length === 1){

				// Assume that only one record is returned
				utils.respondWithData(res, ret[0]);
			}
			else {

				// Return error: Unable to find slug
				utils.respondWithCode(res, 101);
			}
    	})
	}

};


/**
 * Retrieve url from slub, redirect to it and log the visit
 * TODO: Decouple relationship by creating a new controller
 * 
 * @param slug
 * @returns 
 */ 
exports.redirectUrl = (req, res, next) => {

	if (!slug.isValid(req.params.slug)) {

		// Return error: Invalid slug
    	utils.respondWithCode(res, 101);
  	}
	else {
    	sluggerModel.fetchBySlug(req.params.slug, (err, ret, col) => {

			// Ensures that only one record is returned
			if (ret.length === 1){

				// Assume that only one record is returned
				utils.redirectTheLogVist(res, req, ret[0]);
			}
			else {
				
				// Return error: Unable to find slug
				utils.respondWithCode(res, 101);
			}
    	})
	}

};


/**
 * Total count of how many time a slug has been accessed
 * 
 * @param slug, url
 * @return slug, url
 */
exports.generateSlug = (req, res, next) => {

	if (url.isValid(req.body.url)) {
		sluggerModel.fetchByUrl(req.body.url, (err, ret, col) => {

			// Check is slug in empty then return the slug that was found
			if (ret.length > 0 && !req.body.slug){	

				// Assume that only one record is returned
				utils.respondWithData(res, {slug: ret[0].slug, url: ret[0].url});
			}
			else {
				// Check if trying to create a custom slug
				var custom = true;

				if (!slug.isValid(req.body.slug)) {
					custom = false;
					req.body['slug'] = slug.generate();
				}

				sluggerModel.createSlug(req.body.slug, req.body.url, custom, (err, ret, col) => {
					if (err) {

						// Return error: duplicate slug
						utils.respondWithCode(res, 103);
					}
					else {

						// Send slug to API caller
						utils.respondWithData(res, {slug: req.body.slug, url: req.body.url});
					}
				});
			}
		})
  	}
  	else {

		// Return error: Invalid URL
		utils.respondWithCode(res, 104);
	}

};