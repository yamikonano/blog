<template>

  <div class="container">
    <ArticlePreview v-for="(art,ind) in articlesObj.arts" :article="art" :key="ind">
    </ArticlePreview>
    <div class="turner-container">
      <div v-for="(hi,id) in Math.ceil( articlesObj.count/4)" class="page-turner" @click="goPage(id+1)">{{ id + 1 }}</div>
    </div>
  </div>
</template>

<script>
import ArticlePreview from "../ArticlePreview/ArticlePreview.vue";
import {onMounted, reactive, watch} from "vue";
import {Articles} from "../../models/articles";
import {useRoute, useRouter} from "vue-router";

export default {
  name: "LeftNav",
  setup(props) {
    const route = useRoute()

    const articlesObj = reactive({
      arts: [],
      count: 0,
      page: route.query.page || null
    })
    const router = useRouter()

    watch(
        //?=query
        () => route.query.page,
        async newId => {
          console.log('changed' , newId)
          articlesObj.arts = await Articles.getArticleList(newId||1)
          let temp = await Articles.getArticleList()
          articlesObj.count = temp.length
          window.scrollTo(0,0)
        }
    )
    const goPage = async (id) => {
      console.log('gopage', id)
      await router.push({
        path: `/`, query: {
          page: id
        }
      })
    }
    onMounted(async () => {
      articlesObj.arts = await Articles.getArticleList(articlesObj.page||1)
      console.log('mounted',articlesObj.arts)
      let temp = await Articles.getArticleList()
      articlesObj.count = temp.length
    })
    return {
      articlesObj,
      goPage
    }
  },
  components: {
    ArticlePreview
  }

}
</script>

<style lang="scss" scoped>


html, body {
  height: 100%;
}

.container {
  box-shadow: darkgrey;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.turner-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.page-turner {
  padding: 20px;
  background-color: #fff;
  border: 1px solid #DEE2E6;
  cursor: pointer;
}

.page-turner:hover {
  background: #4154F1;
}


</style>