const express = require('express');
const app = express();
const reactViews = require('express-react-views')
const createEngine = reactViews.createEngine
const renderFile = createEngine()

//MVCSETUP
//views
app.set('view engine', 'jsx');
app.engine('jsx', renderFile);


//New
('/', (req, res) => {
    res.send('new')
})

//Create
('/create', (req, res) => {
    res.send(req.body)
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.readyToEat = false;
    }
})

// app.post('/fruits', (req, res) => {
//     if(req.body.readyToEat === 'on'){
//         req.body.readyToEat = true;
//     } else {
//         req.body.readyToEat = false;
//     }

//     Fruit.create(req.body, (err, createdFruit) => {
//         if (err) {
//             res.status(403).send(err)
//         } else {
//             console.log(createdFruit)
//             res.redirect('/fruits')
//         }
//     })
    
// })

//Listening on Port 3000
app.listen(3000, () => {
    console.log("listening!")
})