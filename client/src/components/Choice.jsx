import React from 'react'
import styles from './styles.css'
import HudIcon from './HudIcon'

function Choice (props){
    // console.log(props.choice)
    return(
        <td  tabIndex="0"  >
            <button className={`${styles.tdText} ${styles.choiceCard} ` } onClick={props.onClick} type="button" value={props.value}>
                {props.choice.name}
               <ul style={{"listStyleType" : "none"}}>
                 {props.choice.distance ? <li >{props.choice.distance} {''}<HudIcon symbol={props.symbols.farsecs} color={props.colors.farsecs} /></li> : ''}
               </ul>

            </button>
        </td>
    )
}

export default Choice