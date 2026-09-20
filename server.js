const express = require('express')

const path = require("path")

const app = express()


const { MongoClient } = require('mongodb')

// Connection URL
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const dbName = 'StaySmartDB'
const collNameEmail = 'userEmail'
const collNameReport = 'userReport'
const collNameThanksEmail = 'thanksEmail'



app.use(express.json())

app.use('/', express.static(__dirname + '/dist'))

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
});

app.post('/save-home-email', async function (req, res) { // For the mondodb conenction, I make this function asynchronous.

    try { // This was added to catch any errors that may occur.

        // connect to mongodb database

        await client.connect()
        console.log('Connected successfully to server')

        // client connect to mongodb database
        const db = client.db(dbName)

        const collection = db.collection(collNameEmail)


        //save data to database
        await collection.insertOne({HeaderPageEmail:req.body.emailHeader}); // This inserts the data into the collection.

        // close home email database
        client.close()


        console.log("Home page email:", req.body.emailHeader)

        res.json({
            page: "Home",
            email: req.body.emailHeader
        })


    } catch (error) {

    console.log("MongoDB error:", error)

    }

})


app.post('/save-report-email', async function (req, res) {

    // connect to mongodb database

    await client.connect()
    console.log('Connected successfully to server')

    //connect to database
    const db = client.db(dbName)
    
    //connect to collection
    const collection = db.collection(collNameEmail)


    //save data to database
    await collection.insertOne({ReportPageEmail:req.body.emailHeader}); // This inserts the data into the collection.

    // close report email database
    client.close()


    console.log("Report page email:", req.body.emailHeader)

    res.json({
        page: "Report",
        email: req.body.emailHeader
    })

})
app.post('/save-report', async function (req, res) {

    // connect to mongodb database for the report

    await client.connect()
    console.log('Connected successfully to server')

    //connect to database
    const db = client.db(dbName)
    
    //connect to collection
    const collection = db.collection(collNameReport)

    //save data to database
    await collection.insertOne(
        {'Threat(s)':
            req.body.threats,
            Name:
            req.body.name,
            Othername:
            req.body.othername,
            Date:
            req.body.date,
            Incident:
            req.body.incident,
            Email:
            req.body.email,
            Phonenumber:
            req.body.phone,
            Advice:
            req.body.advice,
            Assistance:
            req.body.assistance
            })


    // close report database
    client.close()

    console.log("user report:", req.body)

    const userReport = req.body

    console.log(
        "Saved report:" + "\n" + 
        "threat(s): " + userReport.threats + "\n" + 
        "Name: " + userReport.name + "\n" + 
        "Othername: " + userReport.othername + "\n" +
        "date: " + userReport.date + "\n" +
        "incident: " + userReport.incident + "\n" +
        "email: " + userReport.email + "\n" +
        "phonenumber: " + userReport.phone + "\n" +
        "Advice: " + userReport.advice + "\n" +
        "Assistance: " + userReport.assistance + "\n"
    )

    res.json({
        threats: userReport.threats,
        name: userReport.name, 
        surname: userReport.othername,
        date: userReport.date,
        incident: userReport.incident,
        email: userReport.email,
        phonenumber: userReport.phone,
        advice: userReport.advice,
        assistance: userReport.assistance
    })

})

app.post('/save-thanks-email', async function(req, res){

    // mongodb connection for thank you email.
    await client.connect()
    console.log('Connected successfully to server')

    //connect to database
    const db = client.db(dbName)
    
    //connect to collection
    const collection = db.collection(collNameThanksEmail)

    //save data to database
    await collection.insertOne({ThankYouEmail:req.body.emailThanks})

    console.log("user thanks email: ", req.body.emailThanks)

    const thanksEmail = req.body

    console.log(
        "Thanks email: " + thanksEmail.emailThanks
    )

    res.json({
        emailThanks: thanksEmail.emailThanks
    })
})

app.listen(3000, function() {
    console.log("stay smart listening on port 3000")
} )