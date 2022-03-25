const router = require('express').Router()



 router.get('/', (req,res)=>{
    //Not sure if this is where this goes. refer back to activity 3
    
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
    res.render('places/index', {places})

 })

router.get('/new', (req,res)=>{

    res.render('GET /places' )

})

module.exports = router