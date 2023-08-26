const {mongoose} = require("../helpers/mongoose");
import {userSchema} from "./user.model";

const sellerSchema = mongoose.Schema({
    user: {
        type: userSchema,
        required: true
    },
    businessName: {
        type: String,
        trim: true,
        required: [true, 'Business name required']
    },

    address: String,

    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    }

})

// Create the customer model
const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;