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
            console.log('MUTATION', date);
            state.today.date = date;
            console.log('day changed to', state.today);
        },

        switchMonth(state, month) {
            console.log('MUTATION', month);
            state.today.month = month;
            console.log('month changed to', state.today);
        },

        switchYear(state, year) {
            console.log('MUTATION', year);
            state.today.year = year;
            console.log('year changed to', state.today);
        }
    },
    actions: {
        toggleLang({ commit }) {
            commit('toggleLanguage');
        },

        switchCurrentMonth({ commit }, direction) {
            console.log('SWITCH MONTH, current:', this.state.today);

            if (direction === 'back') {
                console.log('back');
                if (this.state.today.month === 0) {
                    commit('switchYear', this.state.today.year - 1);
                    commit('switchMonth', 11);
                } else {
                    commit('switchMonth', this.state.today.month - 1);
                }
            } else {
                console.log('forward');
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
            console.log('dt', dt);

            return new Intl.DateTimeFormat(state.lang, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }).format(dt);
        },

        /* getMonthYearDate: (state) => {
            return new Intl.DateTimeFormat(state.lang, {
                month: 'short',
                year: 'numeric'
            }).format(state.today).replace('.', '');
        }, */

        getDate: (state) => {
            return state.today.date;
        },

        getMonth: (state) => {
            return state.today.month;
        },

        getFullYear: (state) => {
            return state.today.year;
        },

        getLang: (state) => {
            return state.lang;
        },

        isRussian: (state) => {
            return state.lang === 'ru-RU';
        }
    }
});
