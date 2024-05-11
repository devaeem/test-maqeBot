class MAQEBot {
 x: number;
 y: number;
 direction: string;

 constructor() {
     this.x = 0;
     this.y = 0;
     this.direction = 'North';
 }

 move(command: string) {
     for (let i = 0; i < command.length; i++) {
         const char = command[i];
         switch (char) {
             case 'R':
                 this.turnRight();
                 break;
             case 'L':
                 this.turnLeft();
                 break;
             case 'W':
                 let steps = '';
                 i++;
                 while (!isNaN(parseInt(command[i]))) {
                     steps += command[i];
                     i++;
                 }
                 i--;
                 this.walk(parseInt(steps));
                 break;
         }
     }
 }

 turnRight() {
     switch (this.direction) {
         case 'North':
             this.direction = 'East';
             break;
         case 'East':
             this.direction = 'South';
             break;
         case 'South':
             this.direction = 'West';
             break;
         case 'West':
             this.direction = 'North';
             break;
     }
 }

 turnLeft() {
     switch (this.direction) {
         case 'North':
             this.direction = 'West';
             break;
         case 'West':
             this.direction = 'South';
             break;
         case 'South':
             this.direction = 'East';
             break;
         case 'East':
             this.direction = 'North';
             break;
     }
 }

 walk(steps: number) {
     switch (this.direction) {
         case 'North':
             this.y += steps;
             break;
         case 'South':
             this.y -= steps;
             break;
         case 'East':
             this.x += steps;
             break;
         case 'West':
             this.x -= steps;
             break;
     }
 }
}

const maqeBot = new MAQEBot();
const command = process.argv[2];

if (command) {
 maqeBot.move(command);
 console.log(`X: ${maqeBot.x} Y: ${maqeBot.y} Direction: ${maqeBot.direction}`);
} else {
 console.log('โปรดระบุคำสั่งสำหรับหุ่นยนต์ MAQE Bot');
}
