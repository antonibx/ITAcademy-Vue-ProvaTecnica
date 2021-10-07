<template>
  <div class="container px-2 text-dark">
    <div class="modal-content bg-transparent text-light">
      <form>
        <div class="modal-body py-0">
          <div class="row">
            <div class="input-group flex-column">
              <div class="d-flex">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-transparent border-0 text-light" id="basic-addon1">Commands </span>
                </div>
                <input type="text" class="form-control" v-model="commands" aria-label="Width" aria-describedby="basic-addon1">
                <button type="button" class="btn btn-primary mx-2" @click="add('A')">A</button>
                <button type="button" class="btn btn-warning mr-2" @click="add('L')">L</button>
                <button type="button" class="btn btn-warning mr-2" @click="add('R')">R</button>
                <button type="button" class="btn btn-success mr-2" @click="save">Run</button>
                <button type="button" class="btn btn-danger mr-2" @click="reset()">Reset</button>
                <button type="button" class="btn btn-secondary" @click="cancel">Close</button>
              </div>
            </div>
          </div>
          
        </div>
      </form>
    </div>
  </div>
    
</template>

<script>
export default {
  name: 'Inicialize',
  data() {
    return {
      commands: ''
    }
  },
  methods: {
    save() {
      this.$emit('action', this.commands.toUpperCase());
      this.reset();
    },
    cancel() {
      this.$emit('command', false);
    },
    add(action) {
      this.commands += action;
    },
    reset() {
      this.commands = '';
    }
  },
  updated() {
      let lastChar = this.commands.charAt(this.commands.length-1);
      if(lastChar != 'A' && lastChar != 'L' && lastChar != 'R') {
        this.commands = this.commands.slice(0, -1);
      }
    }
}
</script>