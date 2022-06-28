import axios from "axios";

export const Category = {
    async getCategoriesTitle(id) {
        //axios.get
        let res = await axios.get(`api/categories/${id}`)
        return res.data
    },

    async getCategories() {
        let res = await axios.get('api/categories')
        return res.data
    },

    async getByCategory(category, page) {
        let pageLimit = 4
        let res
        if (page && page > 0) {
            res = await axios.get(`api/articles?_where[categories.id_contains]=${category}&_start=${(page - 1) * pageLimit}&_limit=${pageLimit}`)
        } else {
            res = await axios.get(`api/articles?_where[categories.id_contains]=${category}`)
        }
        return res.data
    }
}
