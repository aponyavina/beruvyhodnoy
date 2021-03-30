<template>
  <div class="filters-type">
    <label for="">Тара</label>
    <md-field>
    <md-select v-model="tBottles">
      <md-option value="">Все</md-option>
      <md-option 
        v-for="(tare, index) in tareBottles" 
        :key="index" 
        :value="tare"
      >{{ tare }}</md-option>
    </md-select>
    </md-field>
  </div>
</template>

<script>
export default {
  props: {
    tareBottles: {
      type: Array,
      required: true
    }
  },
  computed: {
    tBottles: {
      get() {
        return this.$store.getters['getTareVal']
      },
      set(val) {
        this.$store.dispatch('setTareVal', val)
      }
    }
  }
}
</script>
