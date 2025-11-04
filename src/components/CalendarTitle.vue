<script setup>
  import { useStore } from 'vuex';
  import { computed } from 'vue';

  const store = useStore();
  const monthYear = computed(() => store.getters.getShortFormattedDate);

  const changeMonth = (direction) => {
    store.dispatch('switchCurrentMonth', direction)
  };
</script>

<template>
  <header class="calendar__header">
    <div class="left-arrow arrow" @click="changeMonth('back')">
      &#9668;
    </div>
    <div class="month">
      {{ monthYear }}
    </div>
    <div class="right-arrow arrow" @click="changeMonth('forward')">
      &#9658;
    </div>
  </header>
</template>

<style scoped lang="scss">
  .calendar__header {
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;

    .month {
      display: flex;
      justify-content: center;
      align-content: center;
      color: deeppink;
      font-size: 1.6em;
      font-weight: bold;
      line-height: 1;

      @media(min-width: 670px) {
        font-size: 2.8em;
      }
    }

    .arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      color: deeppink;
      font-size: 1.6em;
      line-height: 1;
      cursor: pointer;
      transition: 0.4s;

      @media(min-width: 670px) {
        font-size: 3em;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
</style>