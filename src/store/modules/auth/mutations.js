export default {
    setMessage(state, data) {
        state.message = data.message
        state.type = data.type
    },
    setToken(state, data) {
        state.token  = data
    }
}