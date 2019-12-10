const showHomepage = (req, res, next) => {
    res.render('index');
}

const showUploadpage = (req, res, next) => {
    res.render('upload');
}

module.exports = { showHomepage, showUploadpage };