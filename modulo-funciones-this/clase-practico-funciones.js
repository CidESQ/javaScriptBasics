//* Super girls
function PowerfullGirl(name, color, superPower) {
    this.name = name;
    this.color = color;
    this.superPower = superPower;
    this.isLeader = false;

    this.displayInfo = function () {
        console.log(`\nHey! Hands down I'm ${this.name} \n 
with my ${this.color} super suit \n
and you should be worried because my power is ${this.superPower} \n
Am I the leader: ${this.isLeader}\n`);
    };
}

const blossom = new PowerfullGirl("Blossom", "Pink", "Ice breath");
const buttercup = new PowerfullGirl("Buttercup", "Grenn", "Super Strenght");
const bubbles = new PowerfullGirl("Bubbles", "Blue", "Flight");

blossom.isLeader = true;

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();
