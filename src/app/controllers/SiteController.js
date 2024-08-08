const Course = require('../models/Course'); 

class SiteController {
    //GET /home
    index(req, res) {


/*         await MyModel.find({});

        Course.find({}, function(err, courses) {
            if (!err) res.json();
            res.status(400).json({ error: 'ERROR!!!'})
        }) */
        /* res.render('home'); */
    }
    //GET /news/
    search(req, res) {
        res.send('NEW DETAIL');
    }
}

module.exports = new SiteController();
