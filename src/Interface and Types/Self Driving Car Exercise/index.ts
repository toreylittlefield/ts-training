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
}

class Car implements AutonomousCar {
  isRunning;
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
  }

  respond(events: Events) {
    if (this.isRunning === false) {
      console.log('The car is off.');
      return;
    }
  }
}

// const autonomousCar = new Car({ isRunning: true });
const autonomousCar = new Car({ isRunning: true }).respond(getObstacleEvents());
console.log(autonomousCar);

// console.log(autonomousCar.isRunning);
