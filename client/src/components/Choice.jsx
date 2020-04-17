import React from 'react'
import styles from './styles.css'
import HudIcon from './HudIcon'

function Choice (props){
    // console.log(props.choice)
    
    return(
        <td  tabIndex={props.value}  >
            <button style={{"listStyleType" : "none"}} 
                    className={`${styles.tdText} ${styles.choiceCard} `} 
                    onFocus={props.onSelect} type="button" 
                    value={props.value}>
                {props.choice.name}
                {props.choice.distance ? 
                <li value={props.value} style={{background: props.colors.farsecs}}>
                    {props.choice.distance}<HudIcon symbol={props.symbols.farsecs} />
                </li> : ''}
                {props.choice.encounters ? 
                <li value={props.value} style={{ background: props.colors[props.choice.encounters[0].mainResource] }}>
                <HudIcon symbol={props.symbols[props.choice.encounters[0].mainResource]} /></li> : ''}
            </button>
        </td>
    )
}

export default Choice