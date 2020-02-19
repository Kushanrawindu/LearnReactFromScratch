import React from 'react'

// export default function Greet() {
//     return (
//         <div>
//             <h1>Hello Kushan</h1>
//         </div>
//     )
// }

// export const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }

// =======================Destructuring props and state==========================================

export const Greet = ({name, heroName}) =>{
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}