require 'pry'

class Character 
    
    def initialize
        @speed = 15
        @character_assets = 'assets/red'
        # @element = document.create_element('img')
        # @element.src = "#{@character_assets}/static.gif"
        # @element.style.position = 'absolute'
        # @element.style.left = '0px'
        # @element.style.top = '0px'
        # @element.style.width = "50px"
        # document.body.append_child(@element)
    end

    def speed
        @speed
    end

    def speed=(speed)
        @speed = speed
    end

    def walk_east
        stop
        @movement = set_interval(speed) do
            current_position = parse_int(@element.style.left)
            @element.style.left = current_position + 1 + 'px'
        end
        this.element.src = "#{@character_assets}/walkright.gif"
    end
    
    def walk_west
        stop
        @movement = set_interval(speed) do 
            current_position = parseInt(this.element.style.left)
            @element.style.left = current_position - 1 + 'px'
        end
        this.element.src = "#{@character_assets}/walkleft.gif"
    end
    
    def walkNorth
        stop
        @movement = set_interval(speed) do 
            current_position = parseInt(@element.style.top)
            @element.style.top = current_position - 1 + 'px'
        end
        @element.src = "#{@character_assets}/walkup.gif"
    end
    
    def walkSouth
        stop
        @movement = set_interval(speed) do 
            current_position = parseInt(@element.style.top)
            @element.style.top = current_position + 1 + 'px'
        end
        @element.src = "#{@character_assets}/walkdown.gif"
    end
    
    def stop
        clearInterval(this.movement)
        @element.src = "#{@character_assets}/static.gif"
    end

    def self.all
    end
end

binding.pry
0