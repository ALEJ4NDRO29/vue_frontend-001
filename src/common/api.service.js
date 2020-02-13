import Vue from 'vue';
import Axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from './constants';

const ApiService = {
    init() {
        Vue.use(VueAxios, Axios)
        Vue.axios.defaults.baseURL = API_URL;
    },

    get(resource) {
        return Vue.axios.get(resource)
    },

    post() {

    },

    update() {

    },

    delete() {

    }
};

export default ApiService;
