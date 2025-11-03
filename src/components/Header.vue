<script setup>
import { ref, inject, watch } from 'vue';
import {dispatch} from "@/store/store.js";

const MONTHS = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December"
};

const state = inject('store'); // accessing state using inject function

console.log('state', state);

// const [ _, month, __, year ] = state.value.date.dateString.split(' '); // extracting month & year from dateString

/* const current = ref({
  month: MONTHS[month], // getting month
  // llname from MONTHS object using monts first 3 initials
  year
}); */

const current = ref({
  month: MONTHS[5], // getting month
  // llname from MONTHS object using monts first 3 initials
  year: 2024
});

const handleClick = (direction) => dispatch({type: 'updateDate', payload: {direction}});

// watching date so that we can update current 👇🏻
/* watch(()=>state.value.date, (updatedDate) => {
  const [ _, month, __, year ] = updatedDate.dateString.split(' ') // extracting updated month and year

  // updating current👇🏻
  current.value = {
    month: MONTHS[month],
    year
  }
}); */

</script>

<template>
  <div class="header">
    <div class="info">
      <div class="year">
        <p>{{ current.year }}</p> <!-- Using year from current state above -->
      </div>
    </div>
    <div class="wrapper">
      <div class="left-chev chev" @click="handleClick('left')">
        <<<
      </div>
      <div class="month">
        <h2>{{ current.month }}</h2> <!-- Using month from current state above -->
      </div>
      <div class="right-chev chev" @click="handleClick('right')">
       >>>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: antiquewhite;
  border-radius: 5px 5px 0 0;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    .month {
      h2 {
        font-size: 32px;
        font-weight: bolder;
        letter-spacing: 5.5px;
      }
    }

    .chev {
      user-select: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color .5s;

      &:hover {
        background-color: rgb(243, 206, 158);
      }
    }
  }
}
</style>