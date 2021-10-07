<template>
  <div class="hello text-light">
    <img alt="Vue logo" src="../assets/mars.gif" style="height: 100px">
    <h1 class="text-warning mt-3">Rover in Mars</h1>
    <p class="text-light pt-3 container" style="oppacity: 0.5">
      A new rover has landed in Mars. It can <b class="text-warning"> Advance </b> (A),<b class="text-warning"> Turn left </b> (L) or<b class="text-warning"> Turn Right </b>(R) in a defined square. <br>
      You can set the info coordinates of the Rover -bottom left corner is considered (0,0)- and it’s info orientation (N, S, E or W). <br>
      Once infoized, you can enter a set of commands like <b class="text-warning"> AALAARALA </b> to move the rover as many times as you would like. <br>
    </p>
    <div class="mb-2">
      <button class="btn btn-success m-2" @click="set=!set">Inicialize</button>
      <button class="btn btn-warning m-2" @click="command=!command">Commands</button>
      <button class="btn btn-danger m-2">Reset</button>
    </div>
    <Inicialize v-if="set" @info="info = $event" @set="set = $event" />
    <Command v-if="command" @action="move($event)" @command="command = $event" />

    <div class="container py-3">
      <table class="table table-dark">
        <tbody>
          <tr v-for="h in info.height+1" :key="h">
            <th v-for="w in info.width+1" :key="w">
              <span v-if="info.y == info.height+1-h && info.x == w-1" class="d-flex justify-content-center align-items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Red_Arrow_Right.svg/2048px-Red_Arrow_Right.svg.png" style="height:20px" :style="'transform: rotate('+rotation+'deg);'">
              </span>
              <span v-else class="text-muted d-flex justify-content-center align-items-center">({{w-1}},{{info.height+1-h}})</span>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <p> square: {{info.width}} x {{info.height}} ---- rover: ({{info.x}}, {{info.y}}) {{info.orientation}} ---- rover inside square: {{info.inSquare}} </p>
  </div>
</template>

<script>
import Inicialize from '../components/Inicialize.vue'
import Command from '../components/Command.vue'

export default {
  name: 'Home',
  components: {
    Inicialize,
    Command
  },
  data() {
    return {
      set: false,
      command: false,
      info: {
        height:5,
        width:6,
        x:4,
        y:2,
        orientation:'N',
        inSquare:true
      }
    }
  },
  computed: {
    rotation: function() {
      let degrees;
      if (this.info.orientation=='N') {degrees=270;}
      else if (this.info.orientation=='S') {degrees=90;}
      else if (this.info.orientation=='W') {degrees=180;}
      else {degrees=0;}
      return degrees;
    }
  },
  methods: {
    move(e) {
      let i=0
      do {
        switch (e.charAt(i)) {
          case "A":
            this.advance();
            break;
          case "L":
            this.left();
            break;
          case "R":
            this.right();
            break;
        }
        i++
      } while (i < e.length && this.info.inSquare)
    },
    advance() {
      switch (this.info.orientation) {
        case 'N':
          if(this.info.y<this.info.height) {
            this.info.y++;
          } else {
            alert('Surt per dalt');
            this.info.inSquare = false;
          }
          break;
        case 'S':
          if(this.info.y>0) {
            this.info.y--;
          } else {
            alert('Surt per baix')
            this.info.inSquare = false;}
          break;
        case 'E':
          if(this.info.x<this.info.width) {
            this.info.x++;
          } else {
            alert('Surt per dreta')
            this.info.inSquare = false;}
          break;
        case 'W':
          if(this.info.x>0) {
            this.info.x--;
          } else {
            alert('Surt per esquerra')
            this.info.inSquare = false;}
          break;
      }
    },
    right() {
      switch (this.info.orientation) {
        case 'N':
          this.info.orientation = 'E';
          break;
        case 'S':
          this.info.orientation = 'W';
          break;
        case 'E':
          this.info.orientation = 'S';
          break;
        case 'W':
          this.info.orientation = 'N';
          break;
      }
    },
    left() {
      switch (this.info.orientation) {
        case 'N':
          this.info.orientation = 'W';
          break;
        case 'S':
          this.info.orientation = 'E';
          break;
        case 'E':
          this.info.orientation = 'N';
          break;
        case 'W':
          this.info.orientation = 'S';
          break;
      }
    },
  }
}
</script>