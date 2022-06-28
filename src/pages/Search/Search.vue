<template>
  <div class="title">
    <div class="left-search-title">
      <div class="left-searchIcon"></div>
<!--      get para from right-->
      <div class="left-searchText">Searching:  {{route.params.keyword}}</div>
    </div>
  </div>

  <ArticlePreview v-for="(art,ind) in artObj.articles" :article="art" :key="ind">
  </ArticlePreview>

  <div class="turner-container">
<!--    loop, ceiling-->
    <div v-for="(hi,id) in Math.ceil( artObj.count/4)" class="page-turner" @click="goPage(id+1)">{{ id + 1 }}</div>
  </div>

</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {onMounted, reactive, watch} from "vue";
import * as dayjs from "dayjs";
import {Articles} from "../../../../vue-blog/src/models/articles";
import ArticlePreview from '@/components/ArticlePreview/ArticlePreview.vue'
// import { ref } from "vue";


export default {
  name: "Search",

  setup(props) {
    let route = useRoute()
    let router = useRouter()
    const artObj = reactive({
      articles: [],
      count:0,
      page:route.query.page ||null
    })
    // const res = await document.querySelector('#search').innerText

    // const keyword = async () => {
    //   let res = await Articles.searchArticle()
    //   return res.keyword
    // }


    watch(
        () => route.params.keyword,
        async newId => {
          let art = await Articles.searchArticle(route.params.keyword,newId||1)
          artObj.articles = art
          let temp = await Articles.searchArticle(route.params.keyword)
          artObj.count = temp.length
          window.scrollTo(0, 0)
        }
    )

    watch(
        () => route.query.page,
        async newId => {
          console.log('changed' , newId)
          artObj.articles = await Articles.searchArticle(route.params.keyword,newId||1)
          let temp = await Articles.searchArticle(route.params.keyword)
          artObj.count = temp.length
          window.scrollTo(0,0)
        }
    )

    //params :id
    const goPage = async (id) =>{
      console.log('gopage', id)
      await router.push({
        path: `/search/${route.params.keyword}`, query: {
          page: id
        }
      })
    }

    onMounted(async() => {
      // window.scrollTo(0,0)
      let art = await Articles.searchArticle(route.params.keyword,artObj.page||1)
      artObj.articles = art
      console.log(art)
      let temp = await Articles.searchArticle(route.params.keyword)
      artObj.count=temp.length
    })

    return {
      artObj,
      route,
      goPage
    }
  },

  components: {
    ArticlePreview
  }

}
</script>

<style scoped>


</style>