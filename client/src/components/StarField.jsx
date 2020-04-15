import React from 'react'
import JumpStar from './JumpStar'

function StarField(props){
    let starCount = 75;
    let stars = [];
    for(let i = 0; i < starCount; i++){
        stars.push(<JumpStar key={i} value={i}/>)
    }
    return <>{stars}</>
}

export default StarField