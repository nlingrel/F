import {systemNames, femaleNames, maleNames, letters, systemBodies} from './lib'
import System from'./System'
import Encounter from './Encounter'
import {Farnian} from './Farnian'


const resources = ['food', 'fuel', 'fitness']


const getRandomResource = function (){
    let chosen = resources[getRandom(resources.length - 1)]
    return chosen;   
}

const getRandom = function (max = 5){
   let random =  Math.floor(Math.random() * (max + 1))
//    console.log(random)
   return random;
}

const successCheck = function(successRatePct = 50){
  let roll = getRandom(100)
  return roll <= successRatePct
}

const generateSystem = function(number = 1){
    let systems = []
    for(let i = 0; i < number; i++ ){
       let name = systemNames[getRandom(systemNames.length)]
       let neg = successCheck(75)? -1 : 1
       //75% of the time, distance will be negative getting you closer to destination
       let distance = getRandom() * neg 
       distance === -0? distance = 0 : null;
        systems.push(new System(name,distance))
    }
    return systems;
}

const generateSystemPreview = function (resource){
    return generateEncounter(resource)
}

const generateEncounter = function (mainResource = getRandomResource()){
    let main = mainResource
    let appendCount = getRandom(3)
    let append = ''
    for(let i = 0; i < appendCount; i++){
       append+= letters[getRandom(letters.length)]
    }
      
    let name = getRandom(333) + append
    let type = systemBodies[getRandom(systemBodies.length)]
    let enc = new Encounter(name, type, mainResource)
    let rew = generateReward(mainResource)
    enc.rewards.push(rew)
    //test
    
    return enc;
}
const generateReward = function(resource = getRandomResource(), double = false, bad = false){
   let reward = {};
   let max = 1;
    switch(resource){
     case 'food':
        max = 10
         break;
     case 'fuel':
         max = 2
         break;
     case 'fitness':
         max = 2
         break;
     default: max = 1
   }
    let amount = getRandom(max);
   amount = (double && bad)? amount *= -2 : double? amount *= 2 : bad? amount *= -1 : amount
   
   reward.name = resource
   reward.amount = amount
   
   return reward;

}

class Game {
    constructor( difficulty = 0, name = 'Forty Forty Four'){
        const startingFuel = 10;
        const startingFood = 35;
        const startingFarnians = 10;
        const startingFitness = 3;
        const difficultyMultiplier = [0, 0.25, 0.33, 0.5]
        this.message = '';
        this.name = name
        this.fuelCount = startingFuel - Math.floor(startingFuel * difficultyMultiplier[difficulty])
        this.foodCount = startingFood - Math.floor(startingFood * difficultyMultiplier[difficulty])
        this.farniansCount = startingFarnians - Math.floor(startingFarnians * difficultyMultiplier[difficulty])
        this.fitnessCount = startingFitness - Math.floor(startingFitness * difficultyMultiplier[difficulty] * 2)
        this.farniansCrew = []
        for(let i = 0; i < this.farniansCount; i++){
            let farn = this.generateFarnian()
            farn.key = i;
            this.farniansCrew.push(farn)
        }
        this.choices = []
        this.foodConsumptionRate = 1
        this.fuelConsumptionRate = 1
        this.foodConsumptionModifiers = [{mod: -.25, time: 1}]  //people ate before they left
        this.fuelConsumptionModifiers = []
        this.fitnessModifiers = [] 
        this.crewKey = 10;
        this.distanceLeft = 20;
    }
    decayFitness(double = false){
      let extraBaseDecay = double? 1 : 0
      let naturalDecay = successCheck(50)? 0 : 1
      console.log(naturalDecay)
      let additionalDecay = this.getModifedFitnessDecayRate()
      let totalDecay = naturalDecay + extraBaseDecay + additionalDecay
      console.log(totalDecay)
      this.fitnessCount = this.fitnessCount - totalDecay <= -5? -5 : this.fitnessCount - totalDecay;

      return totalDecay;
    }

    getModifedFitnessDecayRate(){
      let total = 0;
        if(this.fitnessModifiers.legnth > 0){
          for(mod of this.fitnessModifiers){
              total += mod.mod
          }
        }

        return total;
    }

    consumeFood(){
        let eaten = Math.floor(this.getTotalFoodConsumptionRate())
        let currentFood = this.foodCount 
        this.foodCount = currentFood - eaten < 0 ? 0 : this.foodCount -= eaten
        return eaten;
    }

    tickAllModifiers(){
        this.decayFoodConsumptionModifiers()
    }
    
    decayFoodConsumptionModifiers(){
        for(let mod of this.foodConsumptionModifiers){
            // console.log(mod)
            mod.time-= 1
        }
        // console.log(this.foodConsumptionModifiers)
        let newMods = this.foodConsumptionModifiers.filter(item =>{
        //    console.log(item)
            return item.time > 0
        })
        // console.log(newMods)
        this.foodConsumptionModifiers = newMods;
    }

    getTotalFoodConsumptionRate(){
        let baseRate = this.getBaseFoodConsumptionRate()
        // console.log(baseRate)
        let modRate = this.getModifiedFoodConsumptionRate() 
        // console.log(modRate)
        return (baseRate + modRate) * this.farniansCount

    }
    getBaseFoodConsumptionRate(){
        let fitnessScale =  {min: -5, max: 5}
        let consumptionScale = {max: 2, min: .66}
        let fitnessArray = [5,4,3,2,1,0,-1,-2,-3,-4,-5]
        let fitnessRange = fitnessScale.max - fitnessScale.min
        let consumptionRange = consumptionScale.max - consumptionScale.min
        let baseConsumptionRate = (consumptionRange/fitnessRange * fitnessArray.indexOf(this.fitnessCount) + consumptionScale.min)
        
        // console.log(baseConsumptionRate)
       
        return baseConsumptionRate;
    }

    addFoodConsumptionModifier(newMod, time = 1){
        this.foodConsumptionModifiers.push({mod : newMod, time : time})
    }

    getModifiedFoodConsumptionRate(newMod, time = 1){
        let totalMod = 0;
        if(this.foodConsumptionModifiers.length > 0){
           for(let item of this.foodConsumptionModifiers){
             totalMod += item.mod
           }
        //   console.log(totalMod)
        }
        return totalMod;
    }
    
    updateCrewCount(){
        this.farniansCount = this.farniansCrew.length
    }

    generateFarnian(name, age){
        if(name === null || name === '' || name === undefined){
            if(getRandom(2) === 1){
                name = femaleNames[getRandom(femaleNames.length)]
            }else{
                name = maleNames[getRandom(maleNames.length)]
            }
        }
        if(age === null || age === undefined){
          age = getRandom(35) + 20 
        }
        
        return new Farnian(name, age)
    }

    addCrew(name , age){
        return new Promise((resolve, reject) => {
            // todo
        let crewMember = this.generateFarnian(name,age);
        //    console.log(this.crewKey);
         crewMember.key = this.crewKey;
         this.farniansCrew.push(crewMember)
         this.updateCrewCount()
         this.crewKey++;
         resolve ('added');
         reject ('not added');
        }); 
    }

    loseRandomCrew(){
        
        let index = getRandom(this.farniansCrew.length)
        let lostCrew = this.farniansCrew.splice(index, 1)
        this.updateCrewCount()
        return lostCrew;

    }

    loseSpecificCrew(name, key){
        let newCrew = this.farniansCrew.filter(function (crew){
            console.log(crew.key !== key) 
          return crew.key !== key 
        })
    //   console.log(newCrew)
      this.farniansCrew = newCrew
      this.fitnessCount = this.farniansCrew.length;
      return `Crew member ${name} is no longer with us`
    }
    expedition(){
        let stats = {}
        let noFood = this.foodCount <= 0;
        let noFarnians = this.farniansCount <= 0;
        let noFitness = this.fitnessCount <= -5
        let noFuel = this.fuelCount <= 0;
        stats.foodEaten = this.consumeFood();
        stats.fitnessChange = this.decayFitness(noFood);
        if (noFood && noFitness) stats.died = this.loseRandomCrew();
        this.tickAllModifiers();
        if(noFarnians || noFuel) this.loseGame(noFarnians? 'Farnians' : 'Fuel')
        return stats;
    }

    jump(system, cost = 1){
        let stats = {}
        let noFood = this.foodCount <= 0;
        let noFitness = this.fitnessCount <= -5;
        let noFuel = this.fuelCount <= 0;
        this.fuelCount-= cost;
        stats.foodChange = this.consumeFood();
        stats.fitnessChange = this.decayFitness(noFood);
        if(noFitness){
            stats.died = this.loseRandomCrew();
        }
        let noFarnians = this.farniansCount <= 0;
        
        this.tickAllModifiers();
        if(noFarnians || noFuel) this.loseGame(noFuel? "Fuel" : 'Farnians')
        this.newSystems();
        return stats;
    }

    newSystems(){
        
        let systems = generateSystem(4)
        
      for(let i = 0; i < 3; i++){
        systems[i].encounters.push(generateSystemPreview(resources[i]))
      }
      systems[3].encounters.push(generateSystemPreview())
        
        this.choices = systems;
        
        return systems;
    }
    newEncounters(num = 4){
       let encounters = []
       for(let i =0; i < num; i++){
           encounters.push(generateEncounter())
       }
       return encounters;
    }
    
    loseGame(param){
        return window.alert(`Game Over! You ran out of ${param}`)
        
    }
    

}


// var game1 = new Game()
// console.log(game1)

// let testAddSpecific = game1.addCrew('', 5)
// console.log(testAddSpecific, game1)

// let testAddRandom = game1.addCrew()
// console.log(testAddRandom, game1)

// let testLoseSpecific = game1.loseSpecificCrew('F1')
// console.log(testLoseSpecific, game1)

// let testLost = game1.loseRandomCrew()
// console.log(testLost, game1)
// game1.addFoodConsumptionModifier(5, 2)
// console.log(game1)
// console.log(game1.foodConsumptionRate)
// game1.consumeFood()
// console.log(game1)
// game1.decayFoodConsumptionModifiers()
// console.log(game1)

// chooseRandomResource()
// getRandom()


export default Game