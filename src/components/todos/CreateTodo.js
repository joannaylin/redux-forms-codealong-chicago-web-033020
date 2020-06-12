import React, { Component } from 'react'
import { connect } from "react-redux"

class CreateTodo extends Component {
  constructor() {
    super() 
    this.state = {
      todo: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
    this.setState({
      todo: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" name="todo" value = {this.state.todo} onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({type: "ADD_TODO", payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo)
