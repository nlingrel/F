import React from 'react'
import Choice from './Choice'
import Message from './Message'
import styles from './styles.css'

function Choices(props){
    let scn = props.scene
    let choices = []
    choices = props.choices.map((choice, key) => {
    
        return<Choice key={key} value={key} onSelect={props.onSelect} symbols={props.symbols} colors={props.colors} choice={choice}/>
    })
    
    return props.jumping ? (<div></div>) : (
        <div >
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
                <tfoot>
                    <tr>
                        <th colSpan={`${props.choices.length}`} className={styles.messageContainer}  >
                            <Message message={props.message} />
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    ) 
}

export default Choices