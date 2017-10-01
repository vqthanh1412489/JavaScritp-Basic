const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public'),
    filename: (req, file, cb) => {
        const originalname = file.originalname;
        const start = originalname.lastIndexOf('.');
        const end = originalname.length;
        const name = originalname.slice(start, end);
        const random = Math.random();
        cb(null, Date.now() + random + name);
    }
});
const upload = multer({storage});
const fields = upload.fields([{name: 'avatar'}, {name: 'product'}, {name: 'lol'}]);


module.exports = {upload, fields};