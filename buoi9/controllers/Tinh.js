const Tinh = require('../models/Tinh');
var tinhController = (req, res) => {
    const {soA, soB, tenPhepTinh} = req.params;
    const tinh = new Tinh(soA, soB, tenPhepTinh);
    res.send(tinh.getResultString())
}

module.exports = tinhController;