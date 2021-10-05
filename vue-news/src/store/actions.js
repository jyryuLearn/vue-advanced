import {
    fetchAskList,
    fetchJobsList,
    fetchNewsList,
    fetchUserInfo,
    fetchAskItem,
} from "@/api/index";

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(res => {
                context.commit('SET_NEWS', res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_ASKS({ commit }) {
        fetchAskList()
            .then(( { data }) => {
                commit('SET_ASKS', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_USER({ commit }, username) {
        fetchUserInfo(username)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_ITEM({ commit }, id) {
        fetchAskItem(id)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(err => {
                console.log(err)
            })
    }

}