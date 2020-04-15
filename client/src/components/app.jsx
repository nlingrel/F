import React, {Component} from 'react'
import HUD from './Hud'
import JumpButton from './JumpButton'
import Game from '../gameLogic/F'
import StarField from './Starfield';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
          crewCount : 0,
          crew : [],
          fuel : 0,
          food : 0,
          fitness : 0,
          distanceLeft : 0
        }
        this.game = new Game()
        console.log(this.game)
        this.jump = this.jump.bind(this)
    }
    
    componentDidMount(){
    
      this.updateState()
      console.log(this.game)
      
      
    }

    updateState(){
        this.setState({
            crew : this.game.farniansCrew,
            crewCount : this.game.farniansCount,
            fuel : this.game.fuelCount,
            food : this.game.foodCount,
            fitness : this.game.fitnessCount,
            distanceLeft : this.game.distanceLeft
        }) 
    }
    
    jump(event){
    //   event.preventDefault()
      console.log('prejump',this.game)
      this.game.jump()
      this.updateState()
      console.log('postjump',this.game)
    }
    

    render(){
        return <div className="App">
                  <HUD fuel={this.state.fuel} food={this.state.food} fitness={this.state.fitness} crewCount={this.state.crewCount} distanceLeft={this.state.distanceLeft}/>
                  <div className = "scene">
                    <StarField />

                  </div>
                  <JumpButton onClick={this.jump}/>
               </div>
        
    }
}

export default App