import express from 'express'
import cors from 'cors'
import chalk from 'chalk'

import { user, tweets } from './data/data.js'

const app = express()
const port = 5000
let id = 1

app.use(cors())
app.use(express.json())

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body

    user.username = username
    user.avatar = avatar

    res.send('OK')
})

app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body

    tweets.push({ id, username, tweet, avatar: user.avatar })

    id++;

    res.send('OK')
})

app.get('/tweets', (req, res) => {
    tweets.sort((a, b) => b.id - a.id)

    tweets.length > 9 && (tweets.length = 10)

    res.send(tweets)
})

app.listen(port, () => {
    console.log(chalk.green('Servidor rodando... 👽'))
})