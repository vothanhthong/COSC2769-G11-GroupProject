const Product = require("../models/product.model");

exports.createProduct = async(req,res,next) => {

    //take in data
    var data = {
        name : req.body.name,
        //lưu image (Xian)
        stock : req.body.stock,
        description : req.body.description,
        price : req.body.price,
        date : req.body.date,
        categoryName : req.body.categoryName,
        categoryDescription: req.body.categoryDescription,
        categoryAttribute : req.body.categoryAttribute
    }

    try{
        var product = null;
        product = await Product.create(data);
    }
    catch(error){
        //error handling (Xian)
    }
}

//function add attribute 
//add ntn tùy Xian
//giống như cart v 
//bên Na :))
exports.addAttributes = async(req,res,next) => {
    const product = Product.findById(req.params.id);
    //Check if attribute exists or not
    const existProductAttribute = product.category.attributeID.find(id => id.attributeID.equals(req.params.id));
    if(existProductAttribute){
        //error
    }
    else{
        const newAttribute = {
            attributeName : req.body.attributeName,
            attributeDescription : req.body.attributeDescription
        }
        product.category.attribute.push(newAttribute);
    }
}

exports.findProductByID = async(req,res,next) =>{
    const product = await Product(req.params.id);
    //render
}

exports.updateProduct = async(req,res,next) => {
    const product = await Product.findById(req.params.id);
    Product.findOneAndUpdate(
        {_id : product.id},
        {
            $set: {
               name: req.body.name,
                //change image(Xian)
                stock : req.body.stock,
                description : req.body.description,
                price : req.body.price,
                date : req.body.date,
                //category
            }
        },
        {new:true}
    )
    //render
    .catch(error =>{
        //error handle
    })
}

exports.deleteProduct = async(req,res,next) => {
    const product = Product.findById(req.params.id);
    //cần check product ko tồn tại ko (Xian)
    product.findOneAndDelete(product);

}

//filter product based on categories name
exports.filterProductByCategory1 = async(req,res) => {
    Product.find()
    .then((products) => {
        var category1 = [];
        for (var i = 0; i< products.length; i++) {
          // Check if the product's category fit with the category
          if (products[i].category == "category1") {
            category1.push(products[i]);
          }
        };
    } 
    )
}

//sort by name
exports.sortByName = async(req,res) => {
    Product.find()
    .then((products) => {
        var productName = [];
        var productSorted = [];
        for(var i = 0 ; i < products.length; i++){
            productName.push(products.name)
        }
        productName.sort()
        for(var i = 0; i < products.length; i++){
            var pro = Product.find({name : productName[i]});
            productSorted.push(pro)
        }
    }
    )
}
//sort by price
exports.sortByPrice = async(req,res) => {
    Product.find()
    .then((products) => {
        var productPrice = [];
        var productSorted = [];
        for(var i = 0 ; i < products.length; i++){
            productName.push(products.price)
        }
        productPrice.sort()
        for(var i = 0; i < products.length; i++){
            var pro = Product.find({price : productPrice[i]});
            productSorted.push(pro)
        }
    }
    )
}
//sort by date
exports.sortByPrice = async(req,res) => {
    Product.find()
    .then((products) => {
        var productDate = [];
        var productSorted = [];
        for(var i = 0 ; i < products.length; i++){
            productDate.push(products.date)
        }
        productDate.sort()
        for(var i = 0; i < products.length; i++){
            var pro = Product.find({dateAdded : productDate[i]});
            productSorted.push(pro)
        }
    }
    )
}