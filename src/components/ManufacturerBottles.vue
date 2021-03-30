<template>
  <div class="filters-type">
    <label for="">Производитель</label>
    <md-field>
    <md-select v-model="mBottles">
      <md-option value="">Любой</md-option>
      <md-option 
        v-for="(manufBottles, index) in manufacturerBottles"
        :key="index"
        :value="manufBottles"
      >{{ manufBottles }}</md-option>
    </md-select>
    </md-field>
  </div>
</template>

<script>
export default {
  props: {
    manufacturerBottles: {
      type: Array,
      required: true
    }
  },
  computed: {
    mBottles: {
      get() {
        return this.$store.getters['getManufBottles']
      },
      set(val) {
        this.$store.dispatch('setManufBottles', val)
      }
    }
  }
}
</script>
