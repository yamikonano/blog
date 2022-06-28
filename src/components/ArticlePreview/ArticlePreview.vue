<template>
<!--  using markdown-->
  <div class="card">
    <div class="cover-photo p1" :style="{backgroundImage:`url(/api${article.coverImg[0].url})`}">
    </div>
    <div class="content-container">
      <div class="content-info">
        <div class="content-author">By {{ article.users_permissions_user.username }}</div>
        <div class="content-date">{{ haha.d(article.date).format('DD/MM/YYYY') }}</div>
      </div>
      <div class="content-title">{{ article.title }}</div>
      <div class="content">
        <Markdown langPrefix="md" :source="article.content"/>
      </div>
      <div class="content-btn" @click="openArticle">Read More</div>
    </div>

    <div class="page-turner"></div>
<!--    page turn , every page shows only 3, undone yet-->

  </div>

<!--  <div class="card">-->
<!--    <template v-for="(art,ind) in artObj.articles" :key="ind" >-->
<!--    <div class="cover-photo" :style="{backgroundImage:`url(/api${art?.coverImg[0]?.url})`}">-->
<!--    </div>-->
<!--    <div class="content-container">-->
<!--      <div class="content-info">-->
<!--        <div class="content-author">By {{ art.users_permissions_user.username }}</div>-->
<!--        <div class="content-date">{{ haha.d(art.date).format('DD/MM/YYYY') }}</div>-->
<!--      </div>-->
<!--      <div class="content-title">{{ art.title }}</div>-->
<!--      <div class="content">-->
<!--&lt;!&ndash;        <Markdown langPrefix="md" :source="art.content"/>&ndash;&gt;-->
<!--        {{art.content}}-->
<!--      </div>-->
<!--      <div class="content-btn" @click="openArticle">Read More</div>-->
<!--    </div>-->

    <!--    page turn , every page shows only 3, undone yet-->
<!--    </template>-->
    <div class="page-turner"></div>
<!--  </div>-->

</template>

<script>
import Markdown from 'vue3-markdown-it';
import * as dayjs from 'dayjs'
import {useRouter} from "vue-router";
import {onMounted, reactive} from "vue";
import {Articles} from "../../models/articles";

export default {
  name: "ArticlePreview",
  components:{
    Markdown
  },
  props: {
    article: {
      id: {
        type: String,
        required: true
      },
      users_permissions_user: {
        username: {
          type: String,
          required: true
        }
      },
      coverImg: {
        type: Array,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      }
    }

  },

  setup(props) {
    let router = useRouter()
    const haha = reactive({d:dayjs})
    const artObj = reactive({articles:[]})
    const openArticle = async () => {
      // let art = await Articles.getArticleList()
      await router.push({path: `/${props.article.id}`})
    }

    onMounted(async ()=>{
      // let art = await Articles.getArticleList()
      // artObj.articles=art
      // console.log(art)
    })
    return {
      artObj,
      openArticle,
      haha
    }
  }
}
</script>

<style scoped>
.card {
  width: 730px;
  height: 720px;
  font-family: Nunito, sans-serif;
  display: flow;
  margin-top: 90px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
  background-color: #FFFFFF;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.cover-photo {
  border-radius: 10px;
  width: 726px;
  height: 346px;
  background-size: cover;
}


.p1 {
  /*background-image: url(../../assets/img.png);*/

}

/*.p2 {*/
/*  background-image: url(../../assets/img_1.png);*/
/*  background-size: cover;*/
/*}*/

/*.p3 {*/
/*  background-image: url(../../assets/img_2.png);*/
/*  background-size: cover;*/
/*}*/

.content-info {
  margin-top: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 30px;
  text-transform: uppercase;
  color: #666666;
  display: flex;
  flex-direction: row;
  padding-left: 48px;
  margin-bottom: 14px;
}

.content-info .content-date {
  padding-left: 43px;
}

.content-title {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 34px;
  color: #232323;
  padding-left: 30px;
  margin-bottom: 20px;
}

.content {
  max-height: 90px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  color: #666666;
  padding-left: 30px;
  overflow: hidden;
}

.content-btn {
  width: fit-content;
  margin-top: 38px;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 52px;
  cursor: pointer;
  border-radius: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  text-transform: capitalize;
  border: 1px solid rgb(117, 129, 153);
  color: #4154F1;
}
</style>