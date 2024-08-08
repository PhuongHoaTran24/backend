const Course = require('../models/Course'); 

class SiteController {
    //GET /home
    index(req, res) {

        /* Course.find({}); */
        /* res.render('home'); */
    }
    //GET /news/
    search(req, res) {
        res.send('NEW DETAIL');
    }
}

module.exports = new SiteController();
