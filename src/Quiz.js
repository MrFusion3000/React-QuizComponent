import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {quiz_position: 1}
        };

    render() {
      const quest_text = quizData.quiz_questions[0];
        return <div>
        <div className="QuizQuestion"> {quest_text.instruction_text}
          </div>
</div>
    };
  }

    export default Quiz;
