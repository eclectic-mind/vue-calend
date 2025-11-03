<script setup>
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
</script>

<template>
  <div class="calendar-grid">
    <div class="days-grid">
      <div
          v-for="(day, index) in DAYS"
          :key="index"
          class="day"
          :title="day"
      >{{ day[0] }}</div>
    </div>
    <div class="date-grid">
      <div class="date"
           v-for="date in 31"
      >
        <div
            class="val">
          {{ date }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calendar-grid {
  margin-top: 15px;
  display: grid;
  gap: 20px;
  user-select: none;

  .days-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: space-between;
    align-items: center;

    .day {
      text-align: center;
      font-weight: bold;

      &.today {
        color: blueviolet;
      }
    }
  }
  .date-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: space-between;
    align-items: center;
    row-gap: 20px;

    .date {
      display: flex;
      justify-content: center;
      cursor: pointer;

      .val {
        width: 20px;
        height: 20px;
        text-align: center;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        position: relative;
        background-color: antiquewhite;
      }
    }
  }
}
</style>