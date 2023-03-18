const express = require('express')
const app = express()
app.use(express.json())

app.post('/media', (req,res)=> {
    try{
        let {n1, n2} = req.body
        let media = (n1+n2)/2
        res.send(`A média é ${media}`)
    }
    catch(error){
        res.sendStatus(400)
    }
})

app.listen(8080, ()=>{console.log('rodando porta 8080');})
