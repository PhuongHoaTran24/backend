class SiteController {
    //GET /home
    index(req, res) {
        res.render('home');
    }
    //GET /news/
    search(req, res) {
        res.send('NEW DETAIL');
    }
}

module.exports = new SiteController();
