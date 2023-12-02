const createError = require("http-errors");
//  not found error handeler
const notFoundHandaler = (req, res, next) => {
  next(createError(404, "Your requiested content was not found"));
};

// default error handeler
const errorHandeler = (err, req, res, next) => {
  res.locals.error = err;

  res.status(err.status || 500);
 if(!res.locals.html){
    res.render("error",{title:"error page"})
 }else{
     res.json(res.locals.error);
 }


};

module.exports = { notFoundHandaler, errorHandeler };
