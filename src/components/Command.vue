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
                <button type="button" class="btn btn-primary mx-2" @click="save">Save</button>
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
      commands: 'AA'
    }
  },
  methods: {
    save() {
      this.$emit('action', this.commands);
    },
    cancel() {
      this.$emit('command', false);
    }
  }
}
</script>