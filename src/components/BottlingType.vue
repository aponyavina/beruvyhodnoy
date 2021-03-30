<template>
  <div class="filters-type">
    <label for="">Тип</label>
    <md-field>
    <md-select v-model="selected">
      <md-option value="draft">Розлив</md-option>
      <md-option value="bottles">Тара</md-option>
    </md-select>
    </md-field>
  </div>
</template>

<script>
export default {
  computed: {
    selected: {
      get() {
        return this.$store.getters['getSelected']
      },
      set(select) {
        this.$store.dispatch('setSelect', select)
      }
    }
  }
}
</script>
