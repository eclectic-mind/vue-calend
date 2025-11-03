<script setup>
  import { useStore } from 'vuex';
  import { computed } from 'vue';

  const store = useStore();
  const today = computed(() => store.getters.formattedDate);
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
    margin: 40px;
    color: black;
    font-size: 1.6em;
    text-align: left;
  }
</style>