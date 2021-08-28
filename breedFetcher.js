const request=require('request')

const fetchBreedDescription=(breed, callback)=>{

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,(error,response,body)=>{
  
    try{
      desc=JSON.parse(body)[0].description
    }catch{
      desc=null
      error='breed not found'
      
    }
    callback(error,desc)
  })
  
};
module.exports={fetchBreedDescription};