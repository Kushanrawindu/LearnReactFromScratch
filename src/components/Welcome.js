import React, { Component } from 'react'

// export default class Welcome extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
//             </div>
//         )
//     }
// }

// =======================Destructuring props and state==========================================

export default class Welcome extends Component {
    render() {
        const{name, heroName} = this.props
        return (
            <div>
                <h1>Hello {name} a.k.a {heroName}</h1>
            </div>
        )
    }
}