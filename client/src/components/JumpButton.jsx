import React from 'react'
import styles from './styles.css'

function JumpButton(props){
    let text = props.scene === 1 ? 'FTL' : 'Forth, For Farnia!'
    let visible = !props.visible
    return(
    <form>
      <button id="hyper" type="button" className={visible? `${styles.showJumpButton}` : `${styles.hideJumpButton}`} onClick={visible? props.onClick : null} >{text}</button>
      <div className="range">
        <label htmlFor="range">{text}</label>
        <input id="hyper-range" 
               type="range" 
               min="0" 
               max="2" 
               step=".2" 
               defaultValue="0" 
               
        />
      </div>
    </form>
  )
}

export default JumpButton