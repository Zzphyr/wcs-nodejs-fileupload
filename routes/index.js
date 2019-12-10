const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer({ dest:'tmp/', limits: { fileSize: 3145728 } }); //3145728 bytes = 3MB

const { showHomepage, showUploadpage } = require('../controllers/pages-controller');
const { uploadFiles } = require('../controllers/files-controller');

/* GET home page. */
router.get('/', showHomepage)

/* GET upload page. */
router.get('/myupload', showUploadpage)

/* POST file */
router.post('/myupload', upload.array('myfile', 12), uploadFiles)


module.exports = router;
