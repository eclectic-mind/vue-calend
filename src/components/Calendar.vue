<script setup>
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import CalendarTitle from './CalendarTitle.vue';
  import CalendarContent from './CalendarContent.vue';
  import CalendarFooter from './CalendarFooter.vue';
  import LangToggle from './LangToggle.vue';

  const store = useStore();
  const props = defineProps(['currentDate']);

  const isEnabled = ref(false);

  onMounted(() => {
    store.dispatch('setDefaultDate', props.currentDate);
  })
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
    width: 520px;
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

