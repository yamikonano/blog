import axios from "axios";

export const Galleries = {
    async getGallery(id) {
        //axios.get
        let res = await axios.get(`/api/galleries/${id}`)
        return res.data
    },
}
