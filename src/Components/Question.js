import React, { Component } from 'react';

export default class Question extends Component {
  state = {
    currentOption: ''
  }
  render () {
    const { id, title } = this.props
    return (
      <div key={id}>
        <div>
          <div>{title}</div>
          <input
            value={this.state.currentOption}
            onKeyPress={e => {
              if (e.charCode === 13) {
                this.props.onAddOption(id, e.target.value)
                this.setState({currentOption: ''})
              }
            }}
            onChange={e => this.setState({ currentOption: e.target.value })}
          />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}