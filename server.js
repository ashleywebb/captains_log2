const express = require('express');
const app = express();
const reactViews = require('express-react-views')
const mongoose = require('mongoose');
const Logger = require('nodemon/lib/utils/log');
const createEngine = reactViews.createEngine
const renderFile = createEngine()
const Logs = require('./models/logs')

//MVCSETUP
//views
app.set('view engine', 'jsx');
app.engine('jsx', renderFile);

// Index
app.get('/', (req, res) => {
    Logs.find({}, (err, foundLogs) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Index', {
                logs: foundLogs
            })
        }
    })
});

//New
app.get('/new', (req, res) => {
    res.render('New')
})

//Delete




//Create
app.post('/', (req, res) => {
    res.send(req.body)
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    Logs.create(req.body, (err, createLogs) => {
        if (err) {
            res.status(403).send(err)
        } else {
            console.log(createLogs)
            res.redirect('/')
        }
    })
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