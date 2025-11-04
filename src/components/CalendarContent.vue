<script setup>
import {computed} from 'vue';
  import {useStore} from "vuex";

  const WEEKDAYS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const WEEKDAYS_RU = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  const store = useStore();

  const date = computed(() => store.getters.getDate);
  const month = computed(() => store.getters.getMonth);
  const year = computed(() => store.getters.getFullYear);
  const weekDays = computed(() => {
    return store.getters.isRussian ? WEEKDAYS_RU : WEEKDAYS_EN;
  });

  const countTotal = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const isToday = (number) => {
    return Number(number) === Number(date.value);
  };

  const getFirstDayNumber = () => {
    const firstDate = new Date(year.value, month.value, 1);

    return firstDate.getDay();
  };

  const getStyle = (index) => {
    if (index === 1) {
      const shift = getFirstDayNumber();

      return {
        gridColumnStart: shift
      };
    }
  };

  const total = countTotal(year.value, month.value);

  const switchToday = (index) => {
    store.dispatch('switchCurrentDay', index);
  };
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

    <div class="dates">
      <div v-for="index in total"
           :key="index"
           :style="getStyle(index)"
           @click="switchToday(index)"
           :data-value="index"
           :class="['date', {'today': isToday(index)}]"
      >
        <span>
          {{ index }}
        </span>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
  .calendar__content {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    @media(min-width: 670px) {
      margin-top: 30px;
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
      margin-top: 10px;

      @media(min-width: 670px) {
        margin-top: 30px;
      }
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
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-width: 40px;
      height: 100%;
      text-align: center;
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

        @media(min-width: 670px) {
          min-height: 70px;
        }
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