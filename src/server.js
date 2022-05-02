/* 
    -App config
    -General Middlewares
    -Routes & specific middlewares
    -App start

*/

import express from 'express'
import {json, urlencoded} from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { connect } from './utils/db'
import { config } from './config/config'
import placeRouter from './resources/place/place-router'

export const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({extended: true}))
app.use(morgan('dev'))

app.use('/api/place', placeRouter)

export const start = async()=>{
    try {
        await connect()
        app.listen(config.serverPORT, ()=>{
            console.log(`REST API on http://localhost:${config.serverPORT}/ HappyHacking(; `)
        })
    } catch (error) {
        console.error(error)
    }
}