const Product = require("../Models/Product");

exports.createProduct = async (req, res) => {
  try{
    const product = await Product.create(req.body)
    return res.status(200).send(product)
}
catch(err){
    return res.status(400).send({message : err.message})
}
};

exports.getProduct = async (req, res) => {
    try{
        const product = await Product.find()
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
  };

  exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        })
          .lean()
          .exec();
    
        return res.status(200).send(product);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
  };
