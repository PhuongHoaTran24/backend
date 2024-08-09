const Course = require('../models/Course'); 
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    //GET /home
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
                
            })
            .catch(next);

        /* res.render('home'); */
    }
    //GET /news/
    search(req, res) {
        res.send('NEW DETAIL');
    }
}

module.exports = new SiteController();
