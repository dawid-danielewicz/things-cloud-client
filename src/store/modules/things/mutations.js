export default {
    setThings(state, data) {
        state.things = data
    },
    setThing(state, data) {
        state.id = data.id;
        state.name = data.name;
        state.group = data.group;
        state.lamp = data.lamp;
        state.temperature = data.temperature;
        state.humidity = data.humidity;
    },
    setLamp(state, data) {
        state.lamp = data
    },
    setName(state, data) {
        state.name = data
    },
    setGroup(state, data) {
        state.group = data
    },
    deleteThing(state, data) {
        state.things.splice(state.things.indexOf(data), 1)
    },
    setMessage(state, data) {
        state.message = data.message
        state.type = data.type
    },
    clearMessage(state) {
        state.message = ''
        state.type = ''
    }
}