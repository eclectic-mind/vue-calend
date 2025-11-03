import { createStore } from 'vuex';

export default createStore({
    state: {
        today: new Date(2025, 0, 18, 10, 30),
        lang: 'ru-RU',
    },
    mutations: {
        stepBack(state) {
            state.today.setMonth(state.today.getMonth() - 1);
        },

        stepForward(state) {
            state.today.setMonth(state.today.getMonth() + 1);
        },

        toggleLanguage(state) {
            state.lang = state.lang === 'ru-RU' ? 'en-EN' : 'ru-RU'
        }
    },
    actions: {
        changeMonth({ commit }, direction) {
            if (direction === 'back') {
                commit('stepBack');
            } else {
                commit('stepForward');
            }
        },

        toggleLang({ commit }) {
            commit('toggleLanguage');
        }
    },
    getters: {
        getFormattedDate: (state) => {
            return state.today.toLocaleString(state.lang);
        },

        getIsoDate: (state) => {
            return state.today.toISOString();
        },

        getMonthYearDate: (state) => {
            return new Intl.DateTimeFormat(state.lang, {
                month: 'short',
                year: 'numeric'
            }).format(state.today).replace('.', '');
        },

        getTodaysDay: (state) => {
            return state.today.getDate();
        },

        getMonth: (state) => {
            return state.today.getMonth();
        },

        getYear: (state) => {
            return state.today.getFullYear();
        },

        getLang: (state) => {
            return state.lang;
        },

        isRussian: (state) => {
            return state.lang === 'ru-RU';
        }
    }
});
