import { createStore } from 'vuex';

export default createStore({
    state: () => ({
        today: {
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            date: new Date().getDate()
        },
        lang: 'ru-RU'
    }),

    mutations: {
        toggleLanguage(state) {
            state.lang = state.lang === 'ru-RU' ? 'en-EN' : 'ru-RU'
        },

        switchDate(state, date) {
            state.today.date = date;
        },

        switchMonth(state, month) {
            state.today.month = month;
        },

        switchYear(state, year) {
            state.today.year = year;
        }
    },
    actions: {
        toggleLang({ commit }) {
            commit('toggleLanguage');
        },

        switchCurrentMonth({ commit }, direction) {
            if (direction === 'back') {
                if (this.state.today.month === 0) {
                    commit('switchYear', this.state.today.year - 1);
                    commit('switchMonth', 11);
                } else {
                    commit('switchMonth', this.state.today.month - 1);
                }
            } else {
                if (this.state.today.month === 11) {
                    commit('switchYear', this.state.today.year + 1);
                    commit('switchMonth', 0);
                } else {
                    commit('switchMonth', this.state.today.month + 1);
                }
            }
        },

        switchCurrentDay({ commit }, index) {
            commit('switchDate', index);
        }
    },
    getters: {
        getFormattedDate: (state) => {
            const dt = new Date(state.today.year, state.today.month, state.today.date);

            return new Intl.DateTimeFormat(state.lang, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }).format(dt);
        },

        getShortFormattedDate: (state) => {
            const dt = new Date(state.today.year, state.today.month, state.today.date);

            return new Intl.DateTimeFormat(state.lang, {
                month: 'short',
                year: 'numeric'
                }).format(dt)
                .replace(/\.$/, '')
                .replace(/^\w/, char => char.toUpperCase())
        },

        getDate: (state) => {
            return state.today.date;
        },

        getMonth: (state) => {
            return state.today.month;
        },

        getFullYear: (state) => {
            return state.today.year;
        },

        isRussian: (state) => {
            return state.lang === 'ru-RU';
        }
    }
});
