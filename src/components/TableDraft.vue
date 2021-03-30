<template>
  <div class="table" >
    <div class="table__body" 
      v-for="(item, index) in draftData"
      :key="index"
    >
      <div class="table__item"> <b>№:</b> {{ item.i }}</div>
      <div class="table__item"> <b>Название:</b> {{ item.t }}</div>
      <div class="table__item"> <b>Производитель:</b> {{ item.m }}</div>
      <div class="table__item"> <b>Крепость:</b> {{ item.a }} %</div>
      <div class="table__item"> <b>Цена:</b> {{ item.p }} ₽</div>
      <div class="table__item"> <b>Стиль:</b> {{ item.s }}</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    draftData: {
      type: Array,
      required: true
    }
  }
}
</script>
