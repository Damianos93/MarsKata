let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[{x:0, y:0}]
};

  //  Turn Left Command!!!


function turnLeft(rover){
    switch(rover.direction){
    case"N":
    rover.direction = "W";
    break;
    case"W":
    rover.direction = "S";
    break;
    case"S":
    rover.direction = "E";
    break;
    case"E":
    rover.direction = "N";
    break;
    default:
      console.log("Wrong Input")
  }
  console.log("Rover's currently facing " + rover.direction)
  console.log("turnLeft was called!");
  };
  
  // Turn Right Command!!!
    

function turnRight(rover){
  switch(rover.direction){
    case"N":
    rover.direction = "E";
    break;
    case"W":
    rover.direction = "N";
    break;
    case"S":
    rover.direction = "W";
    break;
    case"E":
    rover.direction = "S";
    break;
    default:
      console.log("Wrong Input")
  }
  console.log("Rover's currently facing " + rover.direction)
  console.log("turnRight was called!");
}

// Move forward Command!!!
  

function moveForward(rover){
  
  switch(rover.direction){
    case "N":
    rover.y--;
    console.log("The rover's current position is x="+rover.x + " " + "y=" +rover.y)
    break;
    case "S":
    rover.y++;
    console.log("The rover's current position is "+rover.x + " " + rover.y)
    break;
    case "W":
    rover.x--;
    console.log("The rover's current position is "+rover.x + " " + rover.y)
    break;
    case "E":
    rover.x++;
    console.log("The rover's current position is "+rover.x + " " + rover.y)
    break;
  }
  console.log("moveForward was called");}
 

  //  Move Backwards Command!!!

function moveBackwards(rover){

  switch(rover.direction){
    case "N":
    rover.y++;
    console.log("The rover's current position is "+rover.x + " " + rover.y)
    break;
    case "S":
    rover.y--;
    console.log("The rover's current position is "+rover.x + " " + rover.y)
    break;
    case "W":
    rover.x++;
    console.log("The rover's current position is "+rover.x + " " + rover.y)
    break;
    case "E":
    rover.x--;
    console.log("The rover's current position is "+rover.x + " " + rover.y)
    break;
    default:
    console.log("You cant go there.Try some other way")
  }
  console.log("moveBackwards was called")
};
 



      // Rover Total Moves Commands!!!
 
function commands(rover,log){

  for(let i =0;i<log.length;i++){
    switch(log[i]){
      
      case"f":
      if(rover.direction==="W" && rover.x<=0 || rover.direction==="N" && rover.y<=0 || rover.direction==="E" && rover.x===9 || rover.direction==="S" && rover.y===9){
        moveBackwards(rover)
      }
      else{
        moveForward(rover)
      }
      rover.travelLog.push({x:rover.x,y:rover.y})

      break;
      case"b":
      if(rover.direction==="W" && rover.x===9 || rover.direction==="N" && rover.y===9 || rover.direction==="E" && rover.x<=0 || rover.direction==="S" && rover.y<=0){
        moveForward(rover)
      }
      else{
        moveBackwards(rover)
      }
      rover.travelLog.push({x:rover.x,y:rover.y})

      break;
      case"r":
      turnRight(rover);
      rover.travelLog.push({x:rover.x,y:rover.y})

      break;
      case"l":
      turnLeft(rover);
      rover.travelLog.push({x:rover.x,y:rover.y})

      break;
      default:
        console.log("Wrong inputs,try(f,r,l,b)")
    }
   
    }
    
    console.log("The rover's current position is "+rover.x + " " + rover.y)
    rover.travelLog.push({x:rover.x,y:rover.y})
    
  }

commands(rover,"rfkj")
console.log("The rover's coordinates are ", rover.travelLog)