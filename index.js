import express from 'express'
import chalk from 'chalk'

const app = express()
app.use(express.json())

const port = 5000

app.listen(port, () => {
    console.log(chalk.green('Servidor rodando... 👽'))
})