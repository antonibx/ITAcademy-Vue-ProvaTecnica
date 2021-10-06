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
                <input type="number" class="form-control" v-model="width" aria-label="Width" aria-describedby="basic-addon1">
              </div>
              <div class="d-flex mt-2">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-transparent border-0 text-light" id="basic-addon1">Height</span>
                </div>
                <input type="number" class="form-control" v-model="height" aria-label="Height" aria-describedby="basic-addon1">
              </div>
            </div>
            <div class="col-4 input-group mb-3 flex-column">
              <p>Initial position</p>
              <div class="d-flex">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-transparent border-0 text-light" id="basic-addon1">X </span>
                </div>
                <input type="number" class="form-control" v-model="x" aria-label="Width" aria-describedby="basic-addon1">
              </div>
              <div class="d-flex mt-2">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-transparent border-0 text-light" id="basic-addon1">Y</span>
                </div>
                <input type="number" class="form-control" v-model="y" aria-label="Height" aria-describedby="basic-addon1">
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
                <button type="button" class="btn btn-primary" @click="save">Save</button>
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
      height: 5,
      width: 6,
      x:2,
      y:3,
      orientation: 'N'
    }
  },
  computed: {
    info: function() {
      return {
        height: this.height,
        width: this.width,
        x: this.x,
        y: this.y,
        orientation: this.orientation
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