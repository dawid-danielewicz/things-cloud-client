import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
    namespaced: true,
    state: {
      newEmail: '',
      newName: '',
      newPassword: '',
      message: '',
      type: '',
      token: ''
    },
    actions,
    getters,
    mutations
}