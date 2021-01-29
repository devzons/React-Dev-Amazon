import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://us-central1-dev-8070f.cloudfunctions.net/api',
  // 'http://localhost:5001/dev-8070f/us-central1/api',
})

export default instance
