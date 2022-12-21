const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('Hello Sadaf')
})
app.listen(5000,() => {
    console.log('====================================');
    console.log(`server is up on port 5000`);
    console.log('====================================');
})