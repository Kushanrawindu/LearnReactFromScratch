import React, { Component } from 'react'

class UserGreetings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render(){

        return(
            this.state.isLoggedIn ?
            <div>Hello Kushan</div> : <div>Hello Guest</div>
        )

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Kushan</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
    }

    //     if(this.state.isLoggedIn){
    //         return (
    //             <div>
    //                 <div>Hello Kushan</div>
    //             </div>
                
    //         )                                                        
    //     }else{
    //         return (
    //             <div>
    //                 <div>Hello Guest</div>
    //             </div>
                
    //         )
    //     }

}

export default UserGreetings
