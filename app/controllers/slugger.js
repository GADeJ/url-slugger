const slug = require("../helpers/slug");
const url = require("../helpers/url");
const utils = require("../helpers/utils");

const sluggerModel = require("../models/slugger");

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

exports.generateSlug = (req, res, next) => {

	if (url.isValid(req.body.url)) {
		sluggerModel.fetchByUrl(req.body.url, (err, ret, col) => {
			// Check is slug in empty then return the slug that was found
			if (ret.length > 0 && !req.body.slug){	
				// Assume that only one record is returned
				utils.respondWithData(res, {slug: ret[0].slug, url: ret[0].url});
			}
			else {
				if (slug.isValid(req.body.slug)) {
					// Check if trying to create a custom slug
					var custom = slug.isValid(req.body.slug);

					if (!custom) {
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
				else {
					// Return error: slug was specified but invalid
					utils.respondWithCode(res, 102);
				}
			}
		})
  	}
  	else {
		// Return error: Invalid URL
		utils.respondWithCode(res, 104);
	}

};