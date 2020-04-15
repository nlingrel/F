import React, {Component} from 'react'
import HUD from './Hud'
import JumpButton from './JumpButton'
import Game from '../gameLogic/F'
import StarField from './Starfield';
import Choices from './Choices';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
          crewCount : 0,
          crew : [],
          fuel : 0,
          food : 0,
          fitness : 0,
          distanceLeft : 0,
          jumping : false,
          play: false,
          choices : [{name : "New Game?"}],
          prompt : "4044",
          selection : ''
        }
        this.game = new Game()
       
        this.jump = this.jump.bind(this)
        this.selectChoice = this.selectChoice.bind(this)
    }
    
    componentDidMount(){
    
      
      console.log(this.game)
      
      
    }

    selectChoice(event){
        console.log('button clicked')
        console.log(event)
    }

    updateState(jump = false){
        this.setState({
            crew : this.game.farniansCrew,
            crewCount : this.game.farniansCount,
            fuel : this.game.fuelCount,
            food : this.game.foodCount,
            fitness : this.game.fitnessCount,
            distanceLeft : this.game.distanceLeft,
            jumping : jump
        }) 
    }
    
    jump(event){
    //   event.preventDefault()
      console.log('prejump',this.game)
      this.game.jump()
      this.updateState(true)
      console.log('postjump',this.game)
    }
    

    render(){
        return <div className="App">
                    <HUD fuel={this.state.fuel} food={this.state.food} fitness={this.state.fitness} crewCount={this.state.crewCount} distanceLeft={this.state.distanceLeft}/>
                    <Choices choices={this.state.choices} prompt={this.state.prompt} onClick={this.selectChoice} />
                  <div className = "scene">
                    <StarField />
                    <JumpButton onClick={this.jump}/>

                  </div>
               </div>
        
    }
}

export default App