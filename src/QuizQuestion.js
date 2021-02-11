import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
render() {
    return (
          <main>
          <p>{this.props.quiz_question.instruction_text}</p>
          <ul>
            <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]}/>
          </ul>
      </main>
    )
  }
}

export default QuizQuestion