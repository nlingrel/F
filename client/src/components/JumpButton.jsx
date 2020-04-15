import React from 'react'

function JumpButton(props){
    let text = props.scene === 1 ? 'Jump' : 'Go'
    return(
    <form>
      <button id="hyper" type="button" onClick={props.onClick} >{text}</button>
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