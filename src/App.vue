<script setup>
  import Calendar from './components/Calendar.vue';

  const currentDate = {
    year: new Date().getFullYear(),
    month: 7,
    date: 14
  };
</script>

<template>
    <Calendar :currentDate="currentDate" />
</template>
