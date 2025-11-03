<script setup>
import {computed, onMounted, ref} from 'vue';
  import {useStore} from "vuex";

  const WEEKDAYS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const WEEKDAYS_RU = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  const store = useStore();

  const todaysDay = computed(() => store.getters.getTodaysDay);
  const weekDays = computed(() => {
    return store.getters.getLang === 'ru-RU' ? WEEKDAYS_RU : WEEKDAYS_EN;
  });
  const month = computed(() => store.getters.getMonth);
  const year = computed(() => store.getters.getYear);

  const countTotal = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const isToday = (number) => {
    return Number(number) === Number(todaysDay.value);
  };

  const getFirstDayNumber = () => {
    const firstDayDate = new Date(year.value, month.value, 2, 0, 0);

    return firstDayDate.getDay();
  };

  const getStyle = (index) => {
    if (index === 0) {
      const shift = getFirstDayNumber();

      return {
        gridColumnStart: shift
      };
    }
  }

  const total = countTotal(year.value, month.value);
</script>

<template>
  <main class="calendar__content">
    <div class="weekdays">
      <div
          v-for="(day, index) in weekDays"
          :key="index"
          class="day"
      ><span>
        {{ day }}
      </span>
      </div>
    </div>

    <div class="dates"
    >
      <div :class="['date', {'today': isToday(item)}]"
           v-for="(item, index) in total"
           :key="index"
           :style="getStyle(index)"
      >
        <span>
          {{ item }}
        </span>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
  .calendar__content {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 0;

    @media(min-width: 670px) {
      margin: 20px 10px 0 10px;
    }

    .weekdays,
    .dates {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      justify-content: space-between;
      align-items: center;
      row-gap: 2px;
      column-gap: 2px;
    }

    .dates {
      margin-top: 20px;
    }

    .day {
      display: flex;
      justify-content: center;
      align-content: center;
      font-size: 1.4em;
      font-weight: bold;
      color: black;
    }

    span {
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .date {
      display: flex;
      justify-content: center;
      align-content: center;
      cursor: pointer;
      font-size: 1.2em;
      color: black;
      transition: 0.4s;

      @media(min-width: 670px) {
        &:hover {
          opacity: 0.7;
        }
      }

      span {
        min-height: 50px;
        background-color: #fad7d7;
      }

      &.today {
        span {
          background-color: deeppink;
          color: linen;
        }
      }
    }
  }
</style>