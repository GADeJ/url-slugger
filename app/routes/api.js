const express = require("express");
const router = express.Router();

const sluggerController = require('../controllers/slugger');
const visitController = require('../controllers/visit');

router.get('/:slug', sluggerController.redirectUrl);

router.get('/:slug/info', sluggerController.fetchInfo);

router.get('/:slug/stats', visitController.fetchStats);

router.get('/:slug/count', visitController.fetchCount);

router.post('/', sluggerController.generateSlug);

router.get("/", (req, res) => {
	res.json({
    api: {
      version: "0.0.1"
    }
  });
});

module.exports = router;