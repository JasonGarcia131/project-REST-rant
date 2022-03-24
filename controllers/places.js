const router = require('express').Router()


 router.get('/', (req,res)=>{

    res.send('GET /places')

 })

router.get('/', (req,res)=>{

    res.send('GET /store')

})

module.exports = router