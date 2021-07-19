import router from '../../../router';
const server = 'http://192.168.0.102:3000';

export default {
    async getThings(context) {
        const response = await fetch(server + '/things', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${context.rootState.auth.token}`
            }
        })

        const responseData = await response.json()
        context.commit('setThings', responseData)
    },

    async getThing(context, id) {
        const response = await fetch(server + `/things/${id.id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${context.rootState.auth.token}`
            }
        })

        const responseData = await response.json()
        context.commit('setThing', responseData)
    },

    async updateLamp(context, params) {
        const response = await fetch(server + `/things/${params.id}/lamp`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${context.rootState.auth.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `lamp=${params.lamp}`
        })

        const responseData = await response.json()
        if(response.status !== 200) {
            console.log(responseData.message)
        }

        context.commit('setLamp', params.lamp)
    },

    async createThing(context, data) {
        console.log(data)
        const response = await fetch(server + '/things', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${context.rootState.auth.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${data.name}&group=${data.group}`
        })

        const responseData = await response.json()
        if (response.status !== 200) {
            console.log(responseData.message)
        } else {
            router.push('/things')
        }

    },

    async updateThing(context, params) {
        const response = await fetch(server + `/things/${params.id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${context.rootState.auth.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${params.name}&group=${params.group}`
        })

        const responseData = await response.json()
        if (response.status !== 200) {
            console.log(responseData.message)
        } else {
            context.commit('setName', params.name)
            context.commit('setGroup', params.group)
            router.push('/things')
        }
    },

    async deleteThing(context, params) {
        const response = await fetch(server + `/things/${params.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${context.rootState.auth.token}`
            }
        })

        const responseData = await response.json()
        if (response.status !== 200) {
            console.log(responseData.message)
        } else {
            console.log(responseData.message)
            context.commit('deleteThing', params.is)
            context.commit('setMessage', {
                message: responseData.message,
                type: 'success'
            })
        }
    }
}