//*************************** */
// DEPENDENCIES
// Brings things from libraries and other files
//*************************** */
// require('thing'): it will return the exported value of the library or file we specify

//import the express library
const express = require("express")


//*************************** */
// Create Express Application Object
// This is the center of our express universe
//**************************** */
// express(): returns an express application object

const app = express()


//**************************** */
// MIDDLEWARE
// Special Utilities that run before our routes
//****************************+ */


//*****************************
// ROUTES
// Which function should run for differnt (method/url) pairs
// ****************************
// methods: GET, POST, PUT, DELETE
// url: anything after the domain so xyz.com/cheese -> url: /cheese

// a GET request to the ROOT url or "/" xyz.com/ => "/"
// app.get(url, function)
// function: (request, response) => {}
// req (request): an object with details about the request
// res (response): an object with functions to send the response
app.get("/", (req, res) => {
    // res.send(something) will send the response based on the input
    // an html string: will send back as html
    // js array or object: will send back json
    // string: sends back as text
    res.send("<h1>Hello World</h1>")
})

app.get("/me", (req, res) => {
    // req.query is the object all your query params ?key=value&key=value
    console.log(req.query)
    const hairColor = req.query.haircolor
    const eyeColor = req.query.eyecolor
    const me = {name: "Alex Merced", age: 38, hairColor, eyeColor}
    res.send(me)
})

// section with a : are "params", meaning they are variable
// so /say/alex/merced = {"firstname": "alex", "lastname": "merced"}
// those values are available in req.params
app.get("/say/:firstname/:lastname", (req, res) => {
    const firstName = req.params.firstname
    const lastName = req.params.lastname
    res.send(`<h1>${firstName} ${lastName}</h1>`)
})



// *****************************
// TURNING ON SERVER LISTENER
// WILL TELL OUR APP TO LISTEN FOR REQUESTS
// ON A CERTAIN PORT
// *****************************
// app.listen(PORT, FUNCTION)
// The function will run after the server turns on
app.listen(3000, () => {console.log("server is listening on port 3000")})