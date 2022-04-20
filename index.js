//configuração inicial
const express = require('express') 
const mongoose = require('mongoose') 
const app = express()

//forma de leitura do json / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)    

app.use(express.json())

//rotas da API

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//rota inicial /endpoint
app.get('/', (req, res) => {

    //mostrar requisição

    res.json({ message: 'Hello Express!' })
})

mongoose
.connect(
    'mongodb+srv://danilo:131197@apicluster.bhb4j.mongodb.net/bancodaapi?retryWrites=true&w=majority',
)
.then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))