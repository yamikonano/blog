import axios from "axios";

export const Articles = {
    async getArticleList(page) {
        let pageLimit = 4
        let res
        if(page && page>0) {
            res = await axios.get(`http://localhost:1337/articles?_start=${(page-1)*pageLimit}&_limit=${pageLimit}`)
        }else{
            res = await axios.get('http://localhost:1337/articles')
        }
        return res.data
    },

    async getArticle(id) {
        let res = await axios.get(`http://localhost:1337/articles/${id}`)
        return res.data
    },

    async searchArticle(keyword,page){
        let pageLimit = 4
        let res
        if(page && page>0){
           res = await axios.get(`api/articles?_where[_or][0][title_contains]=${
                keyword}&_where[_or][1][content_contains]=${
                keyword}&_where[_or][2][categories.category_contains]=${
                keyword}&_where[_or][3][tags_contains]=${
                keyword}&_start=${(page-1)*pageLimit}&_limit=${pageLimit}`)
        }
        else{
            res = await axios.get(`api/articles?_where[_or][0][title_contains]=${
                keyword}&_where[_or][1][content_contains]=${
                keyword}&_where[_or][2][categories.category_contains]=${
                keyword}&_where[_or][3][tags_contains]=${
                keyword}`)
        }
        return res.data
    },

    async getNextPost(id){
        let res = await axios.get(`api/articles?_where[id_gt]=${id}&_limit=1`)
        return res.data
    },

    async getPreviousPost(id){
        let res = await axios.get(`api/articles?_where[id_lt]=${id}&_sort=id:DESC&_limit=1`)
        return res.data
    },

    async getRecentPosts(){
        let res = await axios.get('api/articles?_sort=date:DESC&_limit=4')
        return res.data
    },

    async getPreviewArticle(){
        let res = await axios.get('api/articles?_start=4&_limit=4')
        return res.data
    },

}