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
      <button class="btn btn-primary m-2" @click="set=!set">Inicialize</button>
      <button class="btn btn-success m-2" @click="command=!command">Commands</button>
      <button class="btn btn-danger m-2" @click="reset()">Reset</button>
    </div>
    <Inicialize v-if="set" @info="info = $event" @set="set = $event" />
    <Command v-if="command" @action="move($event)" @command="command = $event" />

    <div class="container py-3">
      <table class="table table-light bg-transparent table-bordered table-hover" style="table-layout: fixed;">
        <tbody>
          <tr v-for="h in height+1" :key="h">
            <th v-for="w in width+1" :key="w" style="height:40px">
              <span v-if="y == height+1-h && x == w-1" class="d-flex justify-content-center align-items-center p-0 m-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Red_Arrow_Right.svg/2048px-Red_Arrow_Right.svg.png" style="height:15px" :style="'transform: rotate('+rotation+'deg);'" class="p-0 m-0">
              </span>
              <span v-else></span>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="justify-content-center d-flex pb-5">
      <div class="card col-2 p-0 bg-primary">square: {{width+1}} x {{height+1}}</div>
      <div class="card col-2 p-0 bg-warning text-dark mx-3">rover: ({{x}}, {{y}}) {{orientation}}</div>
      <div class="card col-2 p-0 bg-success" v-if="inSquare && !alert"> inside square</div>
      <div class="card col-2 p-0 bg-danger" v-else>Outside square</div>
    </div>
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
      counter: 0,
      alert: false,
    }
  },
  computed: {
    height: function() {
      return this.$store.getters.getHeight;
    },
    width: function() {
      return this.$store.getters.getWidth;
    },
    x: function() {
      return this.$store.getters.getX;
    },
    y: function() {
      return this.$store.getters.getY;
    },
    orientation: function() {
      return this.$store.getters.getOrientation;
    },
    inSquare: function() {
      if (this.y>this.height || this.x>this.width || this.y<0 || this.x<0) { this.$store.dispatch('setInSquare', false);}
      else  {this.$store.dispatch('setInSquare', true);}
      return this.$store.getters.getInSquare;
    },
    rotation: function() {
      let degrees;
      if (this.orientation=='N') {degrees=270;}
      else if (this.orientation=='S') {degrees=90;}
      else if (this.orientation=='W') {degrees=180;}
      else {degrees=0;}
      return degrees;
    }
  },
  methods: {
    move(e) {
      this.alert = false;
      setTimeout(function(e) {
          switch (e.charAt(this.counter)) {
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
          this.counter++;
          if(this.counter < e.length) {
            this.move(e)
          } else {
            this.counter = 0;
          }
      }.bind(this,e), 1000);
    },
    advance() {
      switch (this.orientation) {
        case 'N':
          if(this.y<this.height) {
            this.$store.dispatch('setY', this.y+1);
          } else {
            alert('Rover left the square to the North');
            this.alert = true;
          }
          break;
        case 'S':
          if(this.y>0) {
            this.$store.dispatch('setY', this.y-1);
          } else {
            alert('Rover left the square to the South');
            this.alert = true;
          }
          break;
        case 'E':
          if(this.x<this.width) {
            this.$store.dispatch('setX', this.x+1);
          } else {
            alert('Rover left the square to the East');
            this.alert = true;
          }
          break;
        case 'W':
          if(this.x>0) {
            this.$store.dispatch('setX', this.x-1);
          } else {
            alert('Rover left the square to the West');
            this.alert = true;
          }
          break;
      }
    },
    right() {
      switch (this.orientation) {
        case 'N':
          this.$store.dispatch('setOrientation', 'E');
          break;
        case 'S':
          this.$store.dispatch('setOrientation', 'W');
          break;
        case 'E':
          this.$store.dispatch('setOrientation', 'S');
          break;
        case 'W':
          this.$store.dispatch('setOrientation', 'N');
          break;
      }
    },
    left() {
      switch (this.orientation) {
        case 'N':
          this.$store.dispatch('setOrientation', 'W');
          break;
        case 'S':
          this.$store.dispatch('setOrientation', 'E');
          break;
        case 'E':
          this.$store.dispatch('setOrientation', 'N');
          break;
        case 'W':
          this.$store.dispatch('setOrientation', 'S');
          break;
      }
    },
    reset() {
      this.$store.dispatch('setX', 0);
      this.$store.dispatch('setY', 0);
      this.$store.dispatch('setOrientation', 'N');
      this.alert = false;
    }
  }
}
</script>