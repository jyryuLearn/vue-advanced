import {fetchAskList, fetchJobsList, fetchNewsList} from "@/api/index";

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

}