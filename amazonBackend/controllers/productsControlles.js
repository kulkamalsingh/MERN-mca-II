const productModel=require('../models/productsModel')
const getAllProducts = async (req, res) => {
    const q=req.query;
    console.log(q)
    const data=await productModel.find()
    console.log(req.url);
  res.json({
    status: "success",
    results: 0,
    data: {
      products: data,
    },
  });
};

const addProduct = async (req, res) => {
    try {
        const data = await productModel.create(req.body);
        console.log(data);
        res.json({
            status: 'success',
            results: data.length,

        })
    }
    catch(err) {
        console.log(err)
    }
};

const replaceProduct = async (req, res) => {
    try {
        const reqId = req.params.id;
    const data = { ...req.body, reqId };
    const result = await productModel.findOneAndReplace({ _id: reqId }, data);
    res.json({
        status: 'success',
        data: {
            products: result,
        }
    });
    }
    catch (err) {
        res.status(500);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        })
    }
}

module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct,
};
