const Nasa = require('./class/api_nasa')
// import Nasa from './class/api_nasa.js'

const init = async()=>{
    const nasa = new Nasa('hP7BBiN85Jx75ty933fkaNA7jErxAmQRwAoPGjkV')

    const [apos] =  await Promise.all([
        nasa.getApod()
    ])

    console.log({
        aposData: apos?.data.date
    })
}

init()

