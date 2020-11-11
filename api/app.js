import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import userRoute from './routes/user'
import orderRoute from './routes/order'
import productRoute from './routes/product'

console.log(userRoute)
console.log(orderRoute)
console.log(productRoute)

const app = express()
app.use(bodyParser.json())

//routes

app.use('/user', userRoute)
app.use('/order', orderRoute)
app.use('/product', productRoute)

//connect to db
var uri =
  'mongodb+srv://aoguz:mdpREST_API_Abdullah@cluster0.4iup9.mongodb.net/<dbname>?retryWrites=true&w=majority'
var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
mongoose.connect(uri, options, () => {
  console.log('db bağlandı')
})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))

// listening
app.listen(5000, () => {
  console.log('3000 portu çalıştırıldı')
})
