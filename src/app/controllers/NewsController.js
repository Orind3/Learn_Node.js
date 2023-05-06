class NewsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('This is details');
    }
}

module.exports = new NewsController();
