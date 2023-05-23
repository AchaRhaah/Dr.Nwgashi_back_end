const requireAuth = async(req, res, next) => {
   const tokenHeader = req.headers.authorization;

   if (!tokenHeader) {
     return res
       .status(401)
       .send({ message: "Access denied. No token provided." });
   }

   const token = tokenHeader.split(" ")[1];

   try {
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
     req.user = decoded;
     next();
   } catch (error) {
     res.status(400).send({ message: "equest is not authorized." });
   }
    
}

module.exports = requireAuth