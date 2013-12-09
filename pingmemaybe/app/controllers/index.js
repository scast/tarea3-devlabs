/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('underscore'),
    request = require('request');


var BASE_GCACHE_URL = 'http://webcache.googleusercontent.com/search?q=cache:';
var BASE_ARCHIVE_URL = 'https://web.archive.org/web/*/';

function addHttp(url) {
    if (url.search(/^http[s]?\:\/\//) == -1) {
        url = 'http://' + url;
    }
    return url;
}

exports.check = function(req, res) {
    req.checkBody('url', 'URL Invalida').notEmpty().isUrl();
    var vErrors = req.validationErrors();
    var ans = {
        'status': null
    };
    if (vErrors) {
        ans.status = 'ERROR';
        ans.errors = vErrors;
        return res.json(ans);
    }
    req.body.url = addHttp(req.body.url);
    request(req.body.url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            ans.status = "OK";
        } else {
            ans.status = "DOWN";
            ans.archive = BASE_ARCHIVE_URL+req.body.url;
            ans.gcache = BASE_GCACHE_URL+req.body.url;
        }
        res.json(ans);
    });
};

exports.render = function(req, res) {
    res.render('index');
};
