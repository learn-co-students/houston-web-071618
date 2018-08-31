
class Character {

    constructor(){
        this.element = document.createElement('img');
        this.speed = 15;
        this.assets= 'assets/green',
        this.movement = null
        this.element.src = `${this.assets}/static.gif`
        this.element.style.position = 'absolute'
        this.element.style.left = '0px'
        this.element.style.top = '0px'
        this.element.style.width = "50px"
        Character.all().push(this)
        document.body.appendChild(this.element)
    }

    walkEast(){
        this.stop()
        this.movement = setInterval(()  =>{
            let currentPosition = parseInt(this.element.style.left)
            this.element.style.left = currentPosition + 1 + 'px'
        }, this.speed)  
        this.element.src = `${this.assets}/walkright.gif`
    }

    walkWest(){
        this.stop()
        this.movement = setInterval(()  => {
            let currentPosition = parseInt(this.element.style.left)
            this.element.style.left = currentPosition - 1 + 'px'
        }, this.speed)  
        this.element.src = `${this.assets}/walkleft.gif`
    }
    
    walkNorth(){
        this.stop()
        this.movement = setInterval(()  =>{
            let currentPosition = parseInt(this.element.style.top)
            this.element.style.top = currentPosition - 1 + 'px'
        }, this.speed)  
        this.element.src = `${this.assets}/walkup.gif`
    }
    
    walkSouth(){
        this.stop()
        this.movement = setInterval(()  =>{
            let currentPosition = parseInt(this.element.style.top)
            this.element.style.top = currentPosition + 1 + 'px'
        }, this.speed)  
        this.element.src = `${this.assets}/walkdown.gif`
    }
    
    stop(){
        clearInterval(this.movement)
        this.element.src = `${this.assets}/static.gif`
    }

    static all(){
        return Character.prototype.all
    }

}

Character.prototype.all = new Array



// function Character(){
    // this.element = document.createElement('img');
    // this.speed = 15;
    // this.assets= 'assets/green',
    // this.movement = null
    // this.element.src = `${this.assets}/static.gif`
    // this.element.style.position = 'absolute'
    // this.element.style.left = '0px'
    // this.element.style.top = '0px'
    // this.element.style.width = "50px"
    // document.body.appendChild(this.element)
// }


// Character.prototype = {
    
    // walkEast: function(){
    //     this.stop()
    //     this.movement = setInterval(()  =>{
    //         let currentPosition = parseInt(this.element.style.left)
    //         this.element.style.left = currentPosition + 1 + 'px'
    //     }, this.speed)  
    //     this.element.src = `${this.assets}/walkright.gif`
    // },

    // walkWest: function(){
    //     this.stop()
    //     this.movement = setInterval(()  => {
    //         let currentPosition = parseInt(this.element.style.left)
    //         this.element.style.left = currentPosition - 1 + 'px'
    //     }, this.speed)  
    //     this.element.src = `${this.assets}/walkleft.gif`
    // },
    
    // walkNorth: function(){
    //     this.stop()
    //     this.movement = setInterval(()  =>{
    //         let currentPosition = parseInt(this.element.style.top)
    //         this.element.style.top = currentPosition - 1 + 'px'
    //     }, this.speed)  
    //     this.element.src = `${this.assets}/walkup.gif`
    // },
    
    // walkSouth: function(){
    //     this.stop()
    //     this.movement = setInterval(()  =>{
    //         let currentPosition = parseInt(this.element.style.top)
    //         this.element.style.top = currentPosition + 1 + 'px'
    //     }, this.speed)  
    //     this.element.src = `${this.assets}/walkdown.gif`
    // },
    
    // stop: function(){
    //     clearInterval(this.movement)
    //     this.element.src = `${this.assets}/static.gif`
    // }
// }

    // const character = {
    //     element: document.createElement('img'),
    //     speed: 15,
    //     assets: 'assets/green',
    //     movement: null,

        // walkEast: function(){
        //     character.stop()
        //     character.movement = setInterval(function(){
        //         let currentPosition = parseInt(character.element.style.left)
        //         character.element.style.left = currentPosition + 1 + 'px'
        //     }, character.speed)  
        //     character.element.src = `${character.assets}/walkright.gif`
        // },

        // walkWest: function(){
        //     character.stop()
        //     character.movement = setInterval(function(){
        //         let currentPosition = parseInt(character.element.style.left)
        //         character.element.style.left = currentPosition - 1 + 'px'
        //     }, character.speed)  
        //     character.element.src = `${character.assets}/walkleft.gif`
        // },
        
        // walkNorth: function(){
        //     character.stop()
        //     character.movement = setInterval(function(){
        //         let currentPosition = parseInt(character.element.style.top)
        //         character.element.style.top = currentPosition - 1 + 'px'
        //     }, character.speed)  
        //     character.element.src = `${character.assets}/walkup.gif`
        // },
        
        // walkSouth: function(){
        //     character.stop()
        //     character.movement = setInterval(function(){
        //         let currentPosition = parseInt(character.element.style.top)
        //         character.element.style.top = currentPosition + 1 + 'px'
        //     }, character.speed)  
        //     character.element.src = `${character.assets}/walkdown.gif`
        // },
        
        // stop: function(){
        //     clearInterval(character.movement)
        //     character.element.src = `${character.assets}/static.gif`
        // }

    // }




// let pry = require('pryjs')
// eval(pry.it)