const express = require('express')
const app = express()
const port = 3000

//static files
app.use(express.static('public'))

//Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/formTemplate', (req, res) => {
    res.render('formTemplate')
})

app.get('/JDTemplate', (req, res) => {
    res.render('JDTemplate')
})

app.get('/brandprofileTemplate', (req, res) => {
    res.render('brandprofileTemplate')
})

app.get('/jobapplicationformTemplate', (req, res) => {
    res.render('jobapplicationformTemplate')
})

app.get('/jobapplicationformTemplate', (req, res) => {
    res.render('jobapplicationformTemplate')
})

app.get('/meetcreaters', (req, res) => {
    res.render('meetcreaters')
})
//3000
app.listen(port, () => console.info(`Listening on port ${port}`))