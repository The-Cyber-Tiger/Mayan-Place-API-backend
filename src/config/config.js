require('dotenv').config()

export const config = {
    dbUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xye6j.mongodb.net/mayan-place-app?retryWrites=true&w=majority`,
    serverPORT: process.env.PORT || 3000
}