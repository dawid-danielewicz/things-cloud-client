import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import AuthModule from './modules/auth/index';
import ThingsModule from './modules/things/index';

const store = createStore({
    modules: {
        auth: AuthModule,
        things: ThingsModule
    },
    plugins: [createPersistedState()]

})

export default store