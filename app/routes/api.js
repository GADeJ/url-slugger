const express = require("express");
const router = express.Router();

const sluggerController = require('../controllers/slugger');
const visitController = require('../controllers/visit');

/**
 * API Definition
 * TODO: Include versioning such as /api/v1/
 */
router.post('/', sluggerController.generateSlug);

router.get('/:slug/info', sluggerController.fetchInfo);

router.get('/:slug/stats', visitController.fetchStats);

router.get('/:slug/count', visitController.fetchCount);

// TODO: Decouple relationship between controllers
router.get('/:slug', sluggerController.redirectUrl);

router.get("/", (req, res) => {
	res.json({
    api: {
      version: "0.0.1"
    }
  });
});

module.exports = router;