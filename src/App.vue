<script setup>
  import { ref } from 'vue';
  import CalendarTitle from './components/CalendarTitle.vue';
  import CalendarContent from './components/CalendarContent.vue';
  import CalendarFooter from './components/CalendarFooter.vue';
  import LangToggle from '@/components/LangToggle.vue';

  const isEnabled = ref(false);
</script>

<template>
  <div class="calendar">
    <LangToggle v-model="isEnabled" />
    <div class="calendar__wrapper">
      <CalendarTitle />
      <CalendarContent />
    </div>
    <CalendarFooter />
  </div>
</template>

<style scoped lang="scss">
  .calendar {
    max-width: 94vw;

    @media(min-width: 670px) {
      width: 500px;
      max-width: 80%;
    }

    .calendar__wrapper {
      max-width: 100%;
      padding: 10px;
      border-radius: 5px;
      background-color: lightpink;

      @media(min-width: 670px) {
        width: 100%;
        padding: 30px;
      }
    }
  }
</style>


