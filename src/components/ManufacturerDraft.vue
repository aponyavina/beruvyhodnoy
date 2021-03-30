<template>
  <div class="filters-type">
    <label for="">Производитель</label>
    <md-field>
    <md-select v-model="mDraft">
      <md-option value="">Любой</md-option>
      <md-option 
        v-for="(manufDraft, index) in manufacturerDrafts"
        :key="index"
        :value="manufDraft"
      >{{ manufDraft }}</md-option>
    </md-select>
    </md-field>
  </div>
</template>

<script>
export default {
  props: {
    manufacturerDrafts: {
      type: Array,
      required: true
    }
  },
  computed: {
    mDraft: {
      get() {
        return this.$store.getters['getManufDraft']
      },
      set(val) {
        this.$store.dispatch('setManufDraft', val)
      }
    }
  }
}
</script>
