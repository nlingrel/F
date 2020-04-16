import React from 'react'
import Choice from './Choice'
import styles from './styles.css'

function Choices(props){
    let scn = props.scene
    let choices = []
    choices = props.choices.map((choice, key) => {
    
        return<Choice key={key} value={key} onSelect={props.onSelect} deSelect={props.deSelect} symbols={props.symbols} colors={props.colors} choice={choice}/>
    })
    
    return props.jumping ? (<div></div>) : (
        <div>
            <table className={`${styles.choicesContainer}`}>
                <thead>
                    <tr>
                        <th colSpan={`${props.choices.length}`} className={`${styles.tblHd}`} >
                          {props.prompt}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       {choices}
                    </tr>
                </tbody>
            </table>
        </div>
    ) 
}

export default Choices