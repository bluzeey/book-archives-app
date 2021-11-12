const express=require('express')
const {graphqlHTTP}=require('express-graphql')
const schema=require('./schema/schema')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
app.use(cors())

mongoose.connect('mongodb+srv://sahilm:sahilm123@book-archive.pcr0u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.once('open',()=>{
    console.log("Connected to Database")
})
app.use('/graphql',graphqlHTTP({schema,graphiql:true}))

app.listen(4000,()=>{
    console.log('Now listening for requests on Port 4000')
})