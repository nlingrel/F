import React from 'react'
import styles from './styles.css'

function Choice (props){
  
    return(
        <td  tabIndex="0"  >
            <button className={`${styles.tdText} ${styles.choiceCard} ` } onClick={props.onClick} type="button" value={props.name}>
                {props.name}
            </button>
        </td>
    )
}

export default Choice