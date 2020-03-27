import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-534d3.firebaseio.com/'
})