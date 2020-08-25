import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p>I am a Person and I am {Math.floor(Math.random()*30)} years old!</p>
            <p>I am a {props.name} and I am {props.age} years old!</p>
        </div>
    )
}

export default Person;