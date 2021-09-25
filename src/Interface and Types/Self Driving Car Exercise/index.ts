import { getObstacleEvents } from './computer-vision';

interface Events {
  [eventName: string]: boolean;
}

interface AutonomousCar {
  isRunning: boolean;
  respond: (events: Events) => void;
}

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering;
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class Car implements AutonomousCar {
  isRunning;
  steeringControl;
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }

  respond(events: Events) {
    if (this.isRunning === false) {
      console.log('The car is off.');
      return;
    }
    Object.keys(events).forEach((eventKey) => {
      if (!eventKey) return;
      switch (eventKey) {
        case 'ObstacleLeft':
          this.steeringControl.turn('right');
          break;
        case 'ObstacleRight':
          this.steeringControl.turn('left');
          break;
      }
    });
  }
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: ${command}`);
  }
  turn(direction: string) {
    this.execute(`turn ${direction}`);
  }
}

// const autonomousCar = new Car({ isRunning: true });
const steering = new SteeringControl();

const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond(getObstacleEvents());
// console.log(autonomousCar.isRunning);
