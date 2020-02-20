import React from 'react'

function NameList() {
    // const names = ['A' , 'B' , 'C' , 'D']
    // return (
    //     <div>
    //         {names.map(name => <h2>{name}</h2>)}                         //rendering array list using map method

    //         <h2>{name[0]}</h2>
    //         <h2>{name[1]}</h2>
    //         <h2>{name[2]}</h2>
    //         <h2>{name[3]}</h2>
    //     </div>
    // )

    const persons = [
        {
            id:1, 
            name:'Kushan', 
            age:24, 
            skill:'reactJs'
        }, 
        {
            id:2, 
            name:'Dilshan', 
            age:23, 
            skill:'angularJs'
        }]

    const personList = persons.map(person =>(<h2>I am {person.name}. I am {person.age} years old.I love {person.skill}</h2>))

    return <div>{personList}</div>
}

export default NameList
