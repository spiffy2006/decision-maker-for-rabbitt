import React, { Component } from 'react';

export default class Option extends Component {
  render () {
    const { title, id, questionId} = this.props
    return (
      <div  className="optionList">
        <div key={id}>
          {title}
          <button className="delete" onClick={() => this.props.onDelete(questionId, id)}>
              X
          </button>
        </div>
      </div>
    )
  }
}