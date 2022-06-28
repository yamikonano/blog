<template>
  <div class="container">
    <div class="cover-photo"></div>

    <div class="coverImg" :style="{backgroundImage:`url(/api${artObj.article?.coverImg[0]?.url})`}">
    </div>

    <div class="categories">
      <div class="category" v-for="(categories,ind) in artObj.article?.categories" :key="ind">
        {{ categories.category }}
      </div>
    </div>

    <div class="article-info-group">
      <div class="date">{{ haha.d(artObj.article?.date).format('DD/MM/YYYY') }}</div>
      <div class="author">BY {{ artObj.article?.users_permissions_user.username }}</div>
    </div>

    <div class="article-container">
      <div class="article-title">{{artObj.article?.title}}</div>
      <div class="article-content">
        <Markdown langPrefix="md" :source="artObj.article?.content"/>
        <div class="tags">
          <div v-for="(tags,ind) in artObj.article?.tags" :key="ind" class="right-tag">{{ tags }}</div>
        </div>

      </div>
      <div class="article-btn-1">
        <div class="previous-btn" @click="previousPost">Previous Post</div>
        <div class="next-btn" @click="nextPost">Next Post</div>
      </div>
    </div>

    <div class="article-separator"></div>
    <div class="article-btn-2">
      <div class="analysis-btn">Analysis</div>
      <div class="process-btn">Process</div>
    </div>


    <div class="comment-title">5 Comments</div>
    <div class="comments-container">
      <div class="comment">
        <div class="photo"></div>
        <div class="comment-name"></div>
        <div class="comment-separator"></div>
        <div class="comment-date"></div>
        <div class="comment-content"></div>
        <div class="reply-btn"></div>
        <div class="replay">
          <div class="photo"></div>
          <div class="comment-name"></div>
          <div class="comment-separator"></div>
          <div class="comment-date"></div>
          <div class="comment-content"></div>
          <div class="reply-btn"></div>
        </div>
      </div>

      <div class="comment-title">Leave A Comment</div>

    </div>
  </div>
</template>

<script>
import {onMounted, reactive, watch} from "vue";
import {Articles} from "../../models/articles";
import {useRoute, useRouter} from "vue-router";
import Markdown from 'vue3-markdown-it';
import * as dayjs from 'dayjs'
import rt from 'dayjs/plugin/relativeTime'

dayjs.extend(rt)

export default {
  name: 'Articles',
  setup(props) {
    let route = useRoute()
    let router = useRouter()
    const haha = reactive({d: dayjs})
    const artObj = reactive({
      article: null
    })

    watch(
        () => route.params.articleId,
        async newId => {
          let art = await Articles.getArticle(route.params.articleId)
          artObj.article = art
          window.scrollTo(0,0)
        }
    )

    const previousPost = async () => {
      let pp = await Articles.getPreviousPost(route.params.articleId)
      // let np =[]
      if (pp.length != 0) {
        await router.push({path: '/' + pp[0].id})
        // artObj.article = np[0]
        // window.location.reload();
      }
    }
    const nextPost = async () => {
      let np = await Articles.getNextPost(route.params.articleId)
      // let np =[]
      if (np.length != 0) {
        await router.push({path: '/' + np[0].id})
        // artObj.article = np[0]
        // window.location.reload();
      }

    }

    onMounted(async () => {
      // window.scrollTo(0,0)
      // console.log(route.params.articleId)
      let art = await Articles.getArticle(route.params.articleId)
      artObj.article = art
      console.log(art)
    })

    return {
      previousPost,
      nextPost,
      artObj,
      haha
    }
  },
  components: {
    Markdown
  },
}
</script>

<style scoped>
.container {
  font-family: Nunito, sans-serif;
  font-style: normal;
  font-weight: normal;
}


.coverImg {
  margin-top: 88px;
  padding-left: 164px;
  height: 346px;
  background-size: cover;
  border-radius: 10px;
}

.categories {
  display: flex;
  flex-direction: row;
}

.category {
  font-weight: bold;
  font-size: 15px;
  line-height: 30px;
  color: #232323;
  margin-top: 30px;
  margin-bottom: 14px;
}

.category:not(:first-child) {
  padding-left: 50px;
}

.article-info-group {
  font-size: 14px;
  line-height: 30px;
  text-transform: uppercase;
  color: #666666;
  padding-left: 14px;
  display: flex;
  flex-direction: row;
}

.article-info-group .author {
  padding-left: 50px;
}

.article-title {
  font-size: 24px;
  line-height: 34px;
  color: #232323;
  margin-top: 15px;
}

.article-content {
  font-size: 15px;
  line-height: 30px;
  color: #666666;
}

.article-btn-1 {
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  text-transform: capitalize;
  color: #4154F1;
  margin-top: 26px;
  margin-bottom: 51px;
  display: flex;
  justify-content: space-between;
}

.article-btn-1 .previous-btn, .article-btn-1 .next-btn {
  padding-left: 32px;
  padding-right: 32px;
  /*border-radius: 5px;*/
  /*border: 2px solid #E7E7E7;*/
  /*box-sizing: border-box;*/
  cursor: pointer;
}

.previous-btn:hover, .next-btn:hover{
  border-radius: 5px;
  border: 3px solid #E7E7E7;
  box-sizing: border-box;
}

.article-separator {
  height: 1px;
  border-bottom: 1px solid #E7E7E7;
}

.article-btn-2 {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  line-height: 30px;
  color: #232323;
  margin-top: 59px;
}

.article-btn-2 .analysis-btn {
  /*border: 2px solid #f7f7f7;*/

  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 9px 14px;
}

.article-btn-2 .process-btn {
  margin-left: 6px;
  border-radius: 5px;
  background-color: #f7f7f7;
  padding: 9px 14px;
}


.tags {
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: pointer;
}

.right-tag {
  /*width: fit-content;*/
  font-size: 14px;
  line-height: 30px;
  color: #666666;
  background: #F7F7F7;
  border: 1px solid #E7E7E7;
  padding-left: 26px;
  padding-right: 26px;
  margin: 5px;
  border-radius: 30px;
  border: 1px solid #E7E7E7;
  border-radius: 30px;
  cursor: pointer;
}

</style>