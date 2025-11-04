import { createStore } from 'vuex';

export default createStore({
    state: {
        today: new Date(),
        lang: 'ru-RU',
    },
    mutations: {
        toggleLanguage(state) {
            state.lang = state.lang === 'ru-RU' ? 'en-EN' : 'ru-RU'
        },

        switchDate(state, date) {
            console.log(date, new Date(date));

            state.today = new Date(date);

            console.log('day changed', state.today);
        },
    },
    actions: {
        switchCurrentMonth({ commit }, direction) {
            let params = '';
            const newMonth = Number(this.state.today.getMonth());

            if (direction === 'back') {
                params = `${this.state.today.getFullYear()}, ${newMonth - 1}, ${this.state.today.getDate()}`;
                console.log('back', params);
            } else {
                params = `${this.state.today.getFullYear()}, ${newMonth + 1}, ${this.state.today.getDate()}`;
                console.log('forward', params);
            }
            commit('switchDate', params);
        },

        toggleLang({ commit }) {
            commit('toggleLanguage');
        },

        switchCurrentDay({ commit }, index) {
            const params = `${this.state.today.getFullYear()}, ${this.state.today.getMonth()}, ${index}`;
            console.log('m/y switchDate:', params);
            commit('switchDate', params);
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
            return state.today?.getDate();
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
