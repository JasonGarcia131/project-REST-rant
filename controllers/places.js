const router = require('express').Router()
//Not sure if this is where this goes. refer back to activity 3
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.png'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/img/pizza.jpg'
  }]

 router.get('/', (req,res)=>{

    res.send('GET /places')

 })

router.get('/', (req,res)=>{

    res.send('GET /store')

})

module.exports = router