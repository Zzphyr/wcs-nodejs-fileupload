const fs = require('fs');

const uploadFiles = (req, res, next) => {
   // the [xxx] is required since req.files is an array...
   for (let file in req.files) {
      const name = req.files[file].originalname+"-"+Date.now()
      if (req.files[file].mimetype === "image/png") {
         fs.rename(req.files[file].path,'public/' + name, (err)=>{
            if (err) {
               return res.send('Ops, something went wrong with the upload!', err);
            }
         });
      } else {
         // if any of the files aren't of the correct type, it stops the upload
         return res.send('Please only upload image type png');
      }
   }
   res.send('Uploaded successfully');
}

module.exports = { uploadFiles };