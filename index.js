const axios = require('axios')
const nasa_api = 'https://api.nasa.gov/planetary'

const init = async()=>{
    const api_nasa = axios.get(`${nasa_api}/apod?api_key=hP7BBiN85Jx75ty933fkaNA7jErxAmQRwAoPGjkV`) 
    const [apod] = await Promise.all({
        api_nasa
    })
}


console.log({
    apodLength: apod?.data
})

init()