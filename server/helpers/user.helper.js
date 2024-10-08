const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Confirm new user has been saved
const confirmNewUser = (doc, next) => {
  console.log("new user saved", doc);

  next();
};

// Hash password before the user is saved to db
const hashPassword = async function (password) {
  const salt = await bcrypt.genSalt();
  const hashed = await bcrypt.hash(password, salt);

  return hashed;
};

// Authentication using jwt
const maxAge = 1000 * 60 * 60 * 24;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    // Token expires in 1 day
    expiresIn: Date.now() + maxAge,
  });
};

// Auth middlewares
// Check if the jwt exists and is verified for the pages that require authentication
const requireAuth = (req, res, next) => {
    
    const token = req.cookies.jwt;
    if (token) {
          jwt.verify(token, process.env.JWT_KEY, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.status(401).json({error: "Authentication failed"});
            }
            else {
                console.log(decodedToken);
                req.id = decodedToken.id;
                console.log(req.id);
                next();
            }
        })
    }
    else {
        res.status(401).json({error: 'No token provided'});
    }
}

module.exports = { confirmNewUser, hashPassword, createToken, requireAuth };
