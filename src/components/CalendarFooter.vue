<script setup>
  import { useStore } from 'vuex';
  import { computed } from 'vue';

  const store = useStore();
  const today = computed(() => store.getters.getFormattedDate);
  const lang = computed(() => store.getters.getLang);
</script>

<template>
  <footer class="calendar__footer">
    <span v-if="lang === 'ru-RU'">Текущая дата: </span>
    <span v-else>Current date: </span>
    &nbsp;{{ today }}
  </footer>
</template>

<style scoped lang="scss">
  .calendar__footer {
    display: flex;
    width: 100%;
    margin: 10px 0;
    color: black;
    font-size: 1.2em;
    text-align: left;

    @media(min-width: 670px) {
      margin: 40px;
      font-size: 1.6em;
    }
  }
</style>