import { setupdb } from './functions'
import express from 'express'
const app = express()

setupdb().then(() => {
    console.log("db connected ;)")
})

app.listen(8080)