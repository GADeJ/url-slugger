const express = require("express");
const router = express.Router();

const sluggerController = require('../controllers/slugger');

router.get('/:slug', sluggerController.redirectUrl);

router.post('/', sluggerController.generateSlug);

// router.get('/:slug/stats', urlSlugController.redirectUrl);

router.get("/", (req, res) => {
	res.json({
    api: {
      version: "0.0.1"
    }
  });
});

module.exports = router;