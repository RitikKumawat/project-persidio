module.exports = (req,res,next)=>{
    if (req.user.userType !== 'seller') {
        return res.status(403).json({ msg: 'Access denied. Only sellers can perform this action.' });
      }
      next();
}