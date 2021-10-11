<template>
  <div class="container px-2 text-dark">
    <div class="modal-content bg-transparent text-light">
      <form>
        <div class="modal-body py-0">
          <div class="row">
            <div class="col-4 input-group flex-column">
              <p>Square size</p>
              <div class="d-flex">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-transparent border-0 text-light" id="basic-addon1">Width </span>
                </div>
                <input type="number" min="0" max="20" class="form-control" v-model="width" @update="this.$store.dispatch('setWidth', this.width);" aria-label="Width" aria-describedby="basic-addon1">
              </div>
              <div class="d-flex mt-2">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-transparent border-0 text-light" id="basic-addon1">Height</span>
                </div>
                <input type="number" min="0" max="20" class="form-control" v-model="height" @update="this.$store.dispatch('setHeight', this.height);" aria-label="Height" aria-describedby="basic-addon1">
              </div>
            </div>
            <div class="col-4 input-group mb-3 flex-column">
              <p>Initial position</p>
              <div class="d-flex">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-transparent border-0 text-light" id="basic-addon1">X </span>
                </div>
                <input type="number" class="form-control" v-model="x" aria-label="x" aria-describedby="basic-addon1">
              </div>
              <div class="d-flex mt-2">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-transparent border-0 text-light" id="basic-addon1">Y</span>
                </div>
                <input type="number" class="form-control" v-model="y" @update="this.$store.dispatch('setY', this.y);" aria-label="y" aria-describedby="basic-addon1">
              </div>
            </div>
            <div class="col-4 input-group mb-3 flex-column">
              <p>Initial orientation</p>
              <div class="d-flex">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-transparent border-0 text-light" id="basic-addon1">Direction</span>
                </div>
                <select v-model="orientation" class="form-control">
                  <option selected value="N">North</option>
                  <option value="S">South</option>
                  <option value="E">East</option>
                  <option value="W">West</option>
                </select>  
              </div>
              <div class="d-flex mt-2 flex-row-reverse">
                <button type="button" class="btn btn-secondary ml-2" @click="cancel">Close</button>
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
  computed: {
    height: {
      get() {
        return this.$store.getters.getHeight+1;
      },
      set(value) {
        this.$store.dispatch('setHeight', value-1);
      }
    },
    width: {
      get() {
        return this.$store.getters.getWidth+1;
      },
      set(value) {
        this.$store.dispatch('setWidth', value-1);
      }
    },
    x: {
      get() {
        return this.$store.getters.getX;
      },
      set(value) {
        this.$store.dispatch('setX', value);
      }
    },
    y: {
      get() {
        return this.$store.getters.getY;
      },
      set(value) {
        this.$store.dispatch('setY', value);
      }
    },
    orientation: {
      get() {
        return this.$store.getters.getOrientation;
      },
      set(value) {
        this.$store.dispatch('setOrientation', value);
      }
    },
    inSquare: {
      get() {
        return this.$store.getters.getInSquare;
      },
      set(value) {
        this.$store.dispatch('setInSquare', value);
      }
    }
  },
  methods: {
    save() {
      this.$emit('info', this.info);
      this.$emit('set', false);
    },
    cancel() {
      this.$emit('set', false);
    }
  }
}
</script>