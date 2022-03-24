require('dotenv').config()

const express = require('express')
const app = express()


app.use('/places', require('./controllers/places'))
//app.use('/store1', require('./controllers/places'))

app.get('/', (req,res)=>{

    res.send('Hello World')

})

app.get('*', (req,res)=>{

    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT, ()=>{

    console.log('Server is listening on port: ' + process.env.PORT)

});