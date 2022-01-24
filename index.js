import express from 'express'
import cors from 'cors'
import chalk from 'chalk'

import { user, tweets } from './data/data.js'
import { checkIfParameterIsEmpty, multiplyByTen }  from './utils/validator.js'

const app = express()
const port = 5000
let id = 1

app.use(cors())
app.use(express.json())

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body

    if (checkIfParameterIsEmpty([username, avatar])) {
        res.status(400).send('Todos os campos são obrigatórios!')
        return
    }

    user.username = username
    user.avatar = avatar

    res.status(201).send('OK')
})

app.post('/tweets', (req, res) => {
    const { tweet } = req.body
    const username = req.header('User')

    if (checkIfParameterIsEmpty([username, tweet])) {
        res.status(400).send('Todos os campos são obrigatórios!')
        return
    }

    tweets.push({ id, username, tweet, avatar: user.avatar })

    id++;

    res.status(201).send('CREATED')
})

app.get('/tweets', (req, res) => {
    const PAGINATION_NUMBER = 10
    const INVALID_PAGE_NUMBER = 0

    let page = parseInt(req.query.page)
    let initialPageResult = 0
    let tweetsSlice = []

    if (page <= INVALID_PAGE_NUMBER) {
        res.status(400).send('Informe uma página válida!')
        return
    }

    tweets.sort((a, b) => b.id - a.id)

    initialPageResult = multiplyByTen(page) - PAGINATION_NUMBER

    tweetsSlice = tweets.slice(initialPageResult, multiplyByTen(page))

    res.send(tweetsSlice)
})

app.get('/tweets/:username', (req, res) => {
    res.send(tweets.filter(tweet => tweet.username === req.params.username))
})

app.listen(port, () => {
    console.log(chalk.green('Servidor rodando... 👽'))
})
