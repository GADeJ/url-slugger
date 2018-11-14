const validUrl = require("valid-url");
const slug = require("../helpers/slug");

const Slugger = require("../models/slugger");

exports.redirectUrl = (req, res, next) => {
  if (req.params.slug.length < 6 || req.params.slug.length > 10) {
    res.status(404).json({
      error: {
        number: 102,
        message: "Invalid slug"
      }
    });
  }

  Slugger.fetchBySlug(req.params.slug, (err, ret, col) => {
    if (err) {
      res.status(404).json({
        error: {
          number: 101,
          message: "System not responding"
        }
      });
    }
    if (ret.length === 1){
      res.redirect(ret[0].url);
    }
    else {
      res.status(404).json({
        error: {
          number: 101,
          message: "System not responding"
        }
      });
    }
  })

};

exports.generateSlug = (req, res, next) => {
  if (req.body.url || validUrl.isUri(req.body.url)) {
    Slugger.fetchByUrl(req.body.url, (err, ret, col) => {
      if (err) {
        res.status(404).json({
          error: {
            number: 101,
            message: "System not responding"
          }
        });
      }
      else {
        if (ret.length > 0 && !req.body.slug){
          res.status(200).json({
            success: {
              slug: ret[0].slug,
              url: ret[0].url
            }
          });
        }
        else {
          var custom = true;
          if (!req.body.slug) {
            custom = false;
            req.body['slug'] = slug.generate();
          }
          Slugger.createSlug(req.body.slug, req.body.url, custom, (err, ret, col) => {
            if (err) {
              res.status(404).json({
                error: {
                  number: 101,
                  message: "Unable to create slug"
                }
              });
            }
            else {
              res.status(200).json({
                success: {
                  slug: req.body.slug,
                  url: req.body.url
                }
              });
            }
          })
          
        }
      }
    })
  }
  else {
    res.status(404).json({
      error: {
        number: 104,
        message: "Unspecified url"
      }
    });
  }

};