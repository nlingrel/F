import React from 'react'
import Choice from './Choice'
import styles from './styles.css'

function Choices(props){
    let choices = props.choices.map((choice, key) => {
        return<Choice name={choice.name} key={key} value={key} onClick={props.onClick} />
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