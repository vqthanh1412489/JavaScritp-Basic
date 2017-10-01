const Tinh = require('../models/Tinh');
const tinh = (req, res) => {
    const {so1, so2, operator} = req.params;

    const tinh1 = new Tinh(so1, so2, operator);
    res.send(tinh1.getResultString());
}

module.exports = tinh;