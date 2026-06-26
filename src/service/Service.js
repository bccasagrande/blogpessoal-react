import axios from 'axios'

const api = axios.create({
  baseURL: 'https://blogpessoal-7qr2.onrender.com'
})

export default api
