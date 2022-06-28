<template>
  <div class="class"></div>
  <ArticlePreview v-for="(art,ind) in artObj.articles" :article="art" :key="ind">
  </ArticlePreview>
  <div class="turner-container">
    <div v-for="(hi,id) in Math.ceil( artObj.count/4)" class="page-turner" @click="goPage(id+1)">{{ id + 1 }}</div>
  </div>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview/ArticlePreview.vue'
import {onMounted, reactive, watch} from "vue";
// import {Category} from "../../models/Categories/Category";
import {useRoute, useRouter} from "vue-router";
import {Category} from "../../../../vue-blog/src/models/Categories/Category";
// import {Articles} from "../../models/articles";

export default {
  name: "Category",

   setup(props) {
    let route = useRoute()
    let router = useRouter()

    const artObj = reactive({
      articles: [],
      count: 0,
      page: null || null
    })
    console.log(route.query)


    watch(
        () => route.params.category,
        async newCategory => {
          let art = await Category.getByCategory(newCategory)
          artObj.articles = art
          let temp = await Category.getByCategory(route.params.category)
          artObj.count = temp.length
          window.scrollTo(0, 0)
        }
    )

    watch(
        () => route.query.page,
        async newId => {
          console.log('changed', newId)
          artObj.articles = await Category.getByCategory(route.params.category, newId||1)

          window.scrollTo(0, 0)
        }
    )
     onMounted(async () => {
       // let res = await Category.getCategoriesTitle(1)
       console.log('hihihihihihihihihihi mounted')
       let res = await Category.getByCategory(route.params.category, artObj.page || 1)

       let temp = await Category.getByCategory(route.params.category)

       artObj.articles = res
       artObj.count = temp.length
       console.log(route.params)
       // let art = await Category.getByCategory(res)
       // artObj.articles= art
       // console.log(art)
     })

    const goPage = async (id) => {
      console.log('gopppppage', id)
      await router.push({
        path: `/categories/${route.params.category}`, query: {
          page: id
        }
      })
    }




    return {
      goPage,
      artObj
    }

  },

  components: {
    ArticlePreview
  }


}
</script>

<style scoped>
.page-turner {
  padding: 20px;
  background-color: #fff;
  border: 1px solid #DEE2E6;
  cursor: pointer;
}

.page-turner:hover {
  background: #4154F1;
}

.turner-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>