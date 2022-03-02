const express = require('express');
const app = express();
const reactViews = require('express-react-views')
const mongoose = require('mongoose');
// const Logger = require('nodemon/lib/utils/log');
const createEngine = reactViews.createEngine
const renderFile = createEngine()
const Logs = require('./models/logs')

//MVCSETUP
//views
app.set('view engine', 'jsx');
app.engine('jsx', renderFile);


app.get('/', (req, res) => {
    res.send('hi')
})

//middleware
app.use(express.urlencoded({ extended: true}))
app.use((req, res, next) => {
    console.log(req.body)
    next()
})

// Index
app.get('/logs', (req, res) => {
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
app.delete('/logs/:id', (req, res) => {
    Logs.findByIdAndDelete(req.params.id, (err, deletedLogs) => {
        if(!err) {
            res.redirect('/logs')
        } else {
            res.status(400).send(err)
        }
    })
}
)


//Update
app.put('/logs/:id', (req, res) => {
    if(req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    Logs.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLogs) => {
        if(err) {
            res.status(400).send(err)
        } else {
            res.redirect(`/logs/${req.params.id}`)
        }
    })
})



//Create
app.post('/logs', (req, res) => {
    if(req.body.shipIsBroken === 'on') {
        req.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    Logs.create(req.body, (err, createdLogs) => {
        if (err) {
            res.status(403).send(err)
        } else {
            console.log(createdLogs)
            res.redirect('/logs')
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

//Edit
app.get('/logs/:id/edit', (req, res) => {
    if(req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    Logs.findById(req.params.id, (err, foundLogs) => {
        if(err) {
            res.status(400).send(err)
        } else {
            res.render('fruits/Edit',{
                logs:foundLogs
            })
        }
    })
})

//Show
app.get('/logs/:id', (req, res) => {
    Logs.findById(req.params.id, (err, foundLogs) => {
        if(err) {
            res.status(400).send(err)
        } else {
            res.render('Show', {
                logs: foundLogs
            })
        }
    })
})

//Listening on Port 3000
app.listen(3000, () => {
    console.log("listening!")
})