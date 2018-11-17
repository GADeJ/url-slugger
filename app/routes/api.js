const express = require("express");
const router = express.Router();

const CONFIG = require("../../config/local");

const sluggerController = require("../controllers/slugger");
const visitController = require("../controllers/visit");

/**
 * API Definition
 */
router.post("/", sluggerController.generateSlug);

router.get("/:slug", sluggerController.redirectUrl,
                     visitController.logVist);

router.get("/:slug/stats", visitController.fetchStats);

// API root responds with version
router.get("/", (req, res) => {
    res.json({
        api: {
            version: CONFIG.VER_MAJOR + "." +
                     CONFIG.VER_MAJOR + "." +
                     CONFIG.VER_BUILD,
            nuid: CONFIG.NUID
        }
    });
});

module.exports = router;