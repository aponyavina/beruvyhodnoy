<template>
  <div class="filters-type">
    <label for="">Крепость</label>
    <md-field>
    <md-select v-model="aDraft">
      <md-option value="">Все</md-option>
      <md-option 
        v-for="(alcho, index) in alchoDraft" 
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
    alchoDraft: {
      type: Array,
      required: true
    }
  },
  computed: {
    aDraft: {
      get() {
        return this.$store.getters['getAlchoDraft']
      },
      set(val) {
        this.$store.dispatch('setAlchoDraft', val)
      }
    }
  }
}
</script>
