import axios from 'axios'

const api = axios.create({
	baseURL: 'https://api.openai.com/v1/completions'
})

export default api
