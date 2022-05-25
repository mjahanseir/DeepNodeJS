function log(req,res,next){
    console.log('loadaing...');
     next();
  }


  module.exports=log;