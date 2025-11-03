<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const isRussian = computed(() => store.getters.isRussian);

const toggleLanguage = () => {
  store.dispatch('toggleLang')
};
</script>

<template>
  <div class="language-switcher">
    <label class="switch">
      <input
          type="checkbox"
          :checked="isRussian"
          @change="toggleLanguage"
      />
      <span class="slider"></span>
    </label>

    <div class="switch__title">{{ isRussian ? 'RU' : 'EN' }}</div>
  </div>
</template>

<style scoped lang="scss">
  .language-switcher {
    display: flex;
    padding: 20px;
    text-align: center;
  }

  .switch__title {
    margin-left: 20px;
    color: black;
    font-size: 1.6em;
    font-weight: bold;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    cursor: pointer;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fad7d7;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: lightpink;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + .slider {
    background-color: deeppink;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px deeppink;
  }
</style>