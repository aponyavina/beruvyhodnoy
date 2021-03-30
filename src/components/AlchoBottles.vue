<template>
  <div class="filters-type">
    <label for="">Крепость</label>
    <md-field>
    <md-select v-model="aBottles">
      <md-option value="">Все</md-option>
      <md-option 
        v-for="(alcho, index) in alchoBottles" 
        :key="index" 
        :value="alcho"
      >{{ alcho }}</md-option>
    </md-select>
    </md-field>
  </div>
</template>

<script>
export default {
  props: {
    alchoBottles: {
      type: Array,
      required: true
    }
  },
  computed: {
    aBottles: {
      get() {
        return this.$store.getters['getAlchoBottles']
      },
      set(val) {
        this.$store.dispatch('setAlchoBottles', val)
      }
    }
  }
}
</script>
