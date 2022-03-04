const express = require('express')
const connectDB = require('./config/db')
const app = express()
const dotenv = require('dotenv')

dotenv.config({path: 'variables.env'});
connectDB();

app.use(express.json({ extender: true}))

const PORT = process.env.PORT || 4000;


app.use('/api/auth', require('./routes/auth'))

app.use('/api/users', require('./routes/users'))

app.use('/api/MoviesAndSeries', require('./routes/moviesAndSeries'))
// app.use('/api/projects', require('./routes/projects'))
// app.use('/api/tasks', require('./routes/tasks'))


app.listen(PORT, () =>{

    console.log(`Server running on port ${PORT}`)
})






