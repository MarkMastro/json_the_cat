const request=require('request')

breed=process.argv.slice(2)[0].substring(0,3);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,(error,response,body)=>{
  
  try{
  console.log(JSON.parse(body)[0].description)
  }catch{
    console.log('error, breed not found')
  }
})