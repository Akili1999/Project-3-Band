import axios from "axios";

export default {
    getItems: function() {
        return axios.get('/api/items')
    },
    getItem: function(id) {
        return axios.get('/api/items/' + id);
    }
}