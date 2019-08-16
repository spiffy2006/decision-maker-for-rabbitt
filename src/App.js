import React, { Component } from 'react';
import './App.css';
import Question from './Components/Question'
import Option from './Components/Option'
import { createOption, createQuestion } from './libs/model'

class App extends Component {
  constructor() {
    super()
    let defaultQuestion = createQuestion('Default Question')
    this.state = {
      questions: [
        {
          ...defaultQuestion,
          options: [
            createOption(defaultQuestion.id, 'Default Option 1'),
            createOption(defaultQuestion.id, 'Default Option 2'),
            createOption(defaultQuestion.id, 'Default Option 3')
          ]
        }
      ],
      currentQuestion: ''
    }
  }

  deleteOption (questionId, optionId) {
      let questions = this.state.questions.map(q => {
        if (q.id === questionId) {
          q.options = q.options.filter(o => o.id !== optionId)
        }
        return q
      })
      this.setState({ questions })
  }

  addOption (id, title) {
    let questions = this.state.questions.map(q => {
      if (q.id === id) {
          q.options.push(createOption(id, title))
      }
      return q
    })
    this.setState({ questions })
  }

  getQuestions () {
    return this.state.questions.map(question => {
      return (
        <Question
          key={question.id}
          {...question}
          onAddOption={(id, title) => this.addOption(id, title)}
        >
          {question.options.map(option => {
            return <Option key={option.id} {...option} onDelete={(questionId, optionId) => {
              this.deleteOption(questionId, optionId)
            }} />
          })}
        </Question>
    )})
  }

  render () {
    return (
      <div>
        <div>
          <input
            value={this.state.currentQuestion}
            onKeyPress={(e) => {
              if (e.charCode === 13) {
                const questions = [...this.state.questions, createQuestion(e.target.value)]
                this.setState({ questions, currentQuestion: '' })
              }
            }}
            onChange={e => this.setState({ currentQuestion: e.target.value })}
          />
        </div>
        <div>
          {this.getQuestions()}
        </div>
      </div>
    )
  }
}

export default App;
