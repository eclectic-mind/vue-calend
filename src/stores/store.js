import { createStore } from 'vuex';

export default createStore({
    state: {
        today: new Date(),
        lang: 'ru-RU'
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
        },
    },
    getters: {
        formattedDate: (state) => {
            return state.today.toLocaleString(state.lang);
        },

        isoDate: (state) => {
            return state.today.toISOString();
        },

        monthYearDate: (state) => {
            return new Intl.DateTimeFormat(state.lang, {
                month: 'short',
                year: 'numeric'
            }).format(state.today).replace('.', '');
        },

        getLang: (state) => {
            return state.lang;
        },

        isRussian: (state) => {
            return state.lang === 'ru-RU';
        }
    }
});
