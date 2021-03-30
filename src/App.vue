<template>
    <div class="container">
      <header class="header">
        <div class="header__logo logo">
          <img class="logo__img" src="./assets/img/beer.svg" alt="logo-img">
          <span class="logo__title">Беру Выходной</span>
        </div>
      </header>
      <div class="main">
      <div class="filters">
        <!-- Фильтр Розлив/Тара -->
        <BottlingType />
        <!-- Фильтр по цене слайдер -->
        <div class="range-slider">
          <input type="range" min="0" max="1200" step="5" v-model.number="minPrice" @change="setRangeSlider">
            <label for="">Цена</label>
          <div class="range-slider__count">
            <p>Min:{{minPrice}}</p>
            <p>Max:{{maxPrice}}</p>
          </div>
          <input type="range" min="0" max="1200" step="5" v-model.number="maxPrice" @change="setRangeSlider">
        </div>
        <!-- Фильтр Производитель Розлива -->
        <ManufacturerDraft v-if="selected === 'draft'" :manufacturerDrafts="getManufacturerDraft" />
        <!-- Фильтр Производитель Тара -->
        <ManufacturerBottles v-if="selected === 'bottles'" :manufacturerBottles="getManufacturerBottles"/>
        <!-- Фильтр Алкоголь Розлив -->
        <AlchoDraft v-if="selected === 'draft'" :alchoDraft="getAlchoDraftArr" />
        <!-- Фильтра Алкоголь Тара -->
        <AlchoBottles v-if="selected === 'bottles'" :alchoBottles="getAlchoBottlesArr" />
        <!-- Фильтр по Таре -->
        <TareBottles v-if="selected === 'bottles'" :tareBottles="getTare"/>
      </div>
      <!-- Таблица Розлив -->
      <TableDraft v-if="selected === 'draft'" :draftData="filtredDraft"/>
      <!-- Таблица Тара -->
      <TableBottles v-if="selected === 'bottles'" :bottlesData="filtredBottles"/>

      <div class="table__info">
        <p>Current Page: {{page.current}}</p>
      </div>

      <div class="pagination" v-if="selected === 'draft'">
        <button @click="page.current = 1">First Page</button>
        <button @click="prevPage">←</button>
        <button @click="nextPage(getDraft)">→</button>
      </div>

      <div class="pagination" v-if="selected === 'bottles'">
        <button @click="page.current = 1">First Page</button>
        <button @click="prevPage">←</button>
        <button @click="nextPage(getBottles)">→</button>
      </div>
</div>

    </div>
</template>

<script>

import unique from './helpers'

import ManufacturerDraft from '@/components/ManufacturerDraft'
import ManufacturerBottles from '@/components/ManufacturerBottles'
import AlchoBottles from '@/components/AlchoBottles'
import AlchoDraft from '@/components/AlchoDraft'
import TableBottles from '@/components/TableBottles'
import TableDraft from '@/components/TableDraft'
import BottlingType from '@/components/BottlingType'
import TareBottles from '@/components/TareBottles'

export default {
  data: () => ({
    page: {
      current: 1,
      length: 10,
    },
    minPrice: 0,
    maxPrice: 1200
  }),
  methods: {
    prevPage() {
      if (this.page.current > 1) {
        this.page.current -= 1
      }
    },
    nextPage(type) {
      if ((this.page.current * this.page.length) < type.length) {
        this.page.current += 1
      }
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        [this.maxPrice, this.minPrice] = [this.minPrice, this.maxPrice]
      }
    },
  },
  components: { 
    ManufacturerDraft, 
    ManufacturerBottles,
    AlchoBottles,
    AlchoDraft,
    TableBottles,
    TableDraft,
    BottlingType,
    TareBottles
  },
  computed: {
    selected: {
      get() {
        return this.$store.getters['getSelected']
      },
      set() {
        this.$store.dispatch('setSelect')
      }
    },
    getManufacturerDraft() {
      return this.$store.getters['getManufacturerDraft']
    },
    getManufacturerBottles() {
      return this.$store.getters['getManufacturerBottles']
    },
    getManufDraftName() {
      return this.$store.getters['getManufDraft']
    },
    getManufBottlesName() {
      return this.$store.getters['getManufBottles']
    },
    getDraft() {
      return this.$store.getters['getDraft']
    },
    getBottles() {
      return this.$store.getters['getBottles']
    },
    getAlchoDraftArr() {
      return this.$store.getters['getAlchoDraftArr']
    },
    getAlchoBottlesArr() {
      return this.$store.getters['getAlchoBottlesArr']
    },
    getAlchoBottles() {
      return this.$store.getters['getAlchoBottles']
    },
    getAlchoDraft() {
      return this.$store.getters['getAlchoDraft']
    },
    getPriceDraftArr() {
      return this.$store.getters['getPriceDraftArr']
    },
    getPriceBottlesArr() {
      return this.$store.getters['getPriceBottlesArr']
    },
    getPriceDraft() {
      return this.$store.getters['getPriceDraft']
    },
    getPriceBottles() {
      return this.$store.getters['getPriceBottles']
    },
    getTare() {
      return this.$store.getters['getTare']
    },
    getTareVal() {
      return this.$store.getters['getTareVal']
    },
    filtredBottles() {
      return this.getBottles
        .filter(item => this.getAlchoBottles !== '' ? item.a === this.getAlchoBottles : item)
        .filter(item => this.getPriceBottles !== '' ? item.p === this.getPriceBottles : item)
        .filter(item => this.getManufBottlesName !== '' ? item.m === this.getManufBottlesName : item)
        .filter(item => item.p >= this.minPrice && item.p <= this.maxPrice)
        .filter(item => new RegExp(this.getTareVal).test(item.t) ? item : null)
        .filter((row, index) => {
          let start = (this.page.current - 1) * this.page.length
          let end = this.page.current * this.page.length

          if (index >= start && index < end) return true
        })
    },
    filtredDraft() {
      return this.getDraft
        .filter(item => this.getAlchoDraft !== '' ? item.a === this.getAlchoDraft : item)
        .filter(item => this.getPriceDraft !== '' ? item.p === this.getPriceDraft : item)
        .filter(item => this.getManufDraftName !== '' ? item.m === this.getManufDraftName : item)
        .filter(item => {
          return item.p >= this.minPrice && item.p <= this.maxPrice
        })
        .filter((row, index) => {
          let start = (this.page.current - 1) * this.page.length
          let end = this.page.current * this.page.length

          if (index >= start && index < end) return true
        })    
    }
  },
  created() {
    axios
      .get('http://localhost:3030/getData')
      .then(res => {
        this.$store.dispatch('setDraft', res.data.data.draft)
        this.$store.dispatch('setBottles', res.data.data.bottles)
        this.$store.dispatch('setManufacturerDraft', unique(this.$store.getters['getDraft'].map(item => item.m)).filter(item => item.replace(/(\r\n|\n|\r)/gm, '')).sort()) 
        this.$store.dispatch('setManufacturerBottles', unique(this.$store.getters['getBottles'].map(item => item.m)).filter(item => item.replace(/(\r\n|\n|\r)/gm, '')).sort())
        this.$store.dispatch('setAlchoDraftArr', unique(this.$store.getters['getDraft'].map(item => item.a)).sort())
        this.$store.dispatch('setAlchoBottlesArr', unique(this.$store.getters['getBottles'].map(item => item.a)).sort())
        this.$store.dispatch('setPriceBottlesArr', unique(this.$store.getters['getBottles'].map(item => item.p)).sort())
        this.$store.dispatch('setPriceDraftArr', unique(this.$store.getters['getDraft'].map(item => item.p)))
        const tareArr = []
        this.$store.getters['getBottles'].forEach(item => item.t.replace(/([0-9]){1,}(\.|\,){1,}?([0-9]){1,}/gi, str => tareArr.push(str)))
        this.$store.dispatch('setTare', unique(tareArr))
      })
  }
}
</script>
