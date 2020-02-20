import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this)                    binding class constructor
    }
    
    // clickHandler(){
    //     this.setState({
    //         message: 'GoodBye!'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>                  binding in render aproach*/}
                {/* <button onClick={() => this.clickHandler()}>Click</button>                     arrow function in render*/}
                <button onClick={this.clickHandler}>Click</button>              
            </div>
        )
    }
}

export default EventBind
