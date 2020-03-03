const sharp = require("sharp");
const path = require('path');
const resizeImages = async (req, res, next) => {
  if (!req.files) return next();

  req.body.images = [];
  await Promise.all(
    req.files.map(async file => {
        const ext = path.extname(file.originalname);
        const name =path.basename(file.originalname, ext);

      await sharp(file.buffer)
        .resize(640, 320)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`upload/${name}`);

      req.body.images.push(name);
    })
  );

  next();
};

module.exports=resizeImages;