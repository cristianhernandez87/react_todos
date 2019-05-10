import React, { Component } from 'react';

import { todos } from '../jodos.json';

class Navigation extends Component {

    constructor() {
        super();
        this.state = {
            todos
        }
        
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    render() {
        const todos = this.state.todos.map((todo, i) => {
            return (
                <div className="col-12 col-md-6 col-lg-4" key={i}>
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{ todo.title }</h3>
                            <span className="badge badge-pill badge-danger ml-2">{ todo.priority }</span>
                        </div>
                        <div className="card-body">
                            <p className="text">{ todo.description }</p>
                            <p className=""><b>{ todo.responsable }</b></p>
                        </div>
                        <p className="mt-3">{ todo.id } / { this.state.todos.length }</p>
                    </div>
                </div>
            )
        })

        return (
            <div className="row mt-5">
                { todos }
            </div>
        )
    }
}

export default Navigation;