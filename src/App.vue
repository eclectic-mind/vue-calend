<script setup>
  import { ref } from 'vue';
  import CalendarTitle from './components/CalendarTitle.vue';
  import CalendarContent from './components/CalendarContent.vue';
  import CalendarFooter from './components/CalendarFooter.vue';
  import LangToggle from '@/components/LangToggle.vue';

  const isEnabled = ref(false);

  const onToggle = (value) => {
    console.log('Тоггл изменился:', value)
  };
</script>

<template>
  <div class="calendar">
    <LangToggle v-model="isEnabled" @toggle="onToggle" />
    <div class="calendar__wrapper">
      <CalendarTitle />
      <CalendarContent />
    </div>
    <CalendarFooter />
  </div>
</template>

<style scoped lang="scss">
  .calendar {
    width: 90vw;

    @media(min-width: 670px) {
      width: 500px;
    }

    .calendar__wrapper {
      width: 100%;
      padding: 30px;
      border-radius: 5px;
      background-color: lightpink;
      box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
    }
  }
</style>


