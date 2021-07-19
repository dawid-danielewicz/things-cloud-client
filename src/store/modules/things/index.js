import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
    namespaced: true,
    state: {
        things: [],
        id: null,
        name: '',
        group: '',
        lamp: false,
        temperature: '',
        humidity: '',
        message: '',
        type: ''
    },
    actions,
    getters,
    mutations
}