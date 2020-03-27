import React from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import axios from '../../axios/axios-quiz'
import Loader from '../../components/UI/Loader/Loader'


export default class QuizList extends React.Component {

    state = {
        quizes: [],
        loading: true
    }

    renderQuizes() {
        return this.state.quizes.map((quiz) => {
            //console.log(quiz);
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }
    /*
        componentDidMount() {
            axios.get('https://react-quiz-534d3.firebaseio.com/quiz.json').then(response => {
                console.log(response)
            })
        }
    */

    async componentDidMount() {
        try {
            const response = await axios.get('/quizes.json')
            //console.log(response.data)

            const quizes = []
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест № ${index + 1}`
                })
            })

            this.setState({
                quizes,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    {
                        this.state.loading
                            ? <Loader />
                            :
                            <ul>
                                {this.renderQuizes()}
                            </ul>

                    }

                </div>
            </div>
        )
    }
}