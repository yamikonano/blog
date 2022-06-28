<template>

  <div class="search">
    <div class="search-field">
      <input type="text" id="search" v-model="searchObj.keyword" placeholder="" @keyup.enter="searchArticle"/>
      <SearchIcon @click="searchArticle" class="searchIcon"/>
    </div>
    <span class="line"></span>
  </div>

  <div class="right-heading">Recent Posts</div>

  <template v-for="(rpp,ind) in recentpostObj.recentposts" :key="ind">
    <div class="recent-post-container " @click="openArticle(rpp.id)">
      <div class="rp-img" :style="`background-image:url(/api${rpp.coverImg[0].url})`"></div>
      <div class="rp-info-container">
<!--        click title and then route-->
        <div class="right-subheading">{{ rpp.title }}</div>
        <div class="rp-date">{{ haha.d(rpp.date).format('DD/MM/YYYY') }}</div>
        <div class="test">{{rpp.id}}</div>
      </div>
    </div>
    <div class="right-separator"></div>
  </template>


  <div class="right-heading">Category List</div>
  <template v-for="(categories,ind) in categorylistObj.categories" :key="ind">
    <div class="category-list-container">
      <div class="category-name" @click="openCategory(categories.id)">
        {{categories.category}}
      </div>
      <div class="number">{{categories.articles.length}}</div>
    </div>
    <div class="right-separator"></div>
      </template>

<!--  <div class="right-heading">gallery</div>-->
<!--  <div class="gallery-container">-->
<!--<template v-for="(gl,ind) in galleryObj.gallery.Gallery" :key="ind">-->
<!--  <div class="gallery" v-if="ind<6" :style="`background-image: url(/api${gl.url})`"></div>-->
<!--</template>-->
<!--  </div>-->

  <div class="right-heading">Follow US</div>
  <div class="followus">
  <div class="share-btn facebook-btn"></div>
  <div class="share-btn twitter-btn"></div>
  <div class="share-btn quora-btn"></div>
  <div class="share-btn reddit-btn"></div>
  <div class="share-btn youtube-btn"></div>
  </div>


</template>

<script>
import {onMounted, reactive, watch} from "vue";
import {Galleries} from "../../models/Galleries/galleries";
import {Category} from "../../models/Categories/Category";
import {Articles} from "../../models/articles";
import * as dayjs from 'dayjs'
import rt from "dayjs/plugin/relativeTime";
import SearchIcon from '../../assets/search.svg'
dayjs.extend(rt)
import {useRoute, useRouter} from "vue-router";

export default {
  name: "Rightnav",
  components: {SearchIcon},



  setup(props) {
    const router = useRouter()
    const route = useRoute()
    const recentpostObj = reactive({recentposts: []})
    const categorylistObj = reactive({categories: []})
    const haha = reactive ({d:dayjs})
    const searchObj = reactive({keyword:''})
    const galleryObj = reactive({gallery:[]})

    const searchArticle = async()=>{
      await router.push({path: `/search/${searchObj.keyword}`})
    }

    const openArticle = async (id) => {
      await router.push({path: `/${id}`})
    }

    const openCategory = async(category)=>{
      await router.push({path:`/categories/${category}`})
    }



    onMounted(async () => {
      galleryObj.gallery = await Galleries.getGallery(1)
      categorylistObj.categories = await Category.getCategories()
      recentpostObj.recentposts = await Articles.getRecentPosts()

    })

    return {recentpostObj,
            categorylistObj,
            galleryObj,
            haha,
            searchObj,
            searchArticle,
            openCategory,
            openArticle
    }
  }

}
</script>


<style scoped>

* {
  font-family: Nunito, sans-serif;
}

/*.left-search-title{*/
/*  margin:20px 0 0 -820px;*/
/*  display:flex;*/
/*  flex-direction: row;*/
/*  align-items: center;*/
/*  font-size:30px;*/
/*  color:#ACC4C9;*/
/*  !*visibility: hidden;*!*/
/*}*/

/*.left-searchIcon{*/
/*  !*display: block;*!*/
/*  !*text-indent: -9999px;*!*/
/*  width: 50px;*/
/*  height: 50px;*/
/*  background: url(../../assets/search.svg);*/
/*  background-size:cover;*/
/*}*/

.search-field:focus .left-search-title{
  visibility: hidden;
}


.search-field{
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  text-align: left;
  background: #F7F7F7;
  border: 1px solid #E7E7E7;
  border-radius: 30px;
  padding-left: 50px;
  margin-top: 48px;
  color: #d4d4d4;
  outline: none;
  box-sizing: border-box;
}
.search{
  display: flex;
  flex-direction: row;
}

.searchIcon{
  width: 30px;
  height: 30px;
  margin-right: 30px;
  flex-shrink: 0;
  cursor: pointer;
}


#search {
  border:none;
  font-size:30px;
  text-align: left;
  background: transparent;
  max-width: 80%;
  color: #a7c2c7;
}

textarea:focus, input:focus{
  outline: none;
  color: #a7c2c7;
}

.rp-img {
  width: 80px;
  height: 80px;
  background-size: cover;
  position:absolute;
}


#search:focus {
  color: #a7c2c7;
}

.right-heading {
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  color: #232323;
  margin-top: 48px;
  margin-bottom: 32px;
  cursor: pointer;
}

.right-subheading {
  font-size: 16px;
  line-height: 30px;
  color: #666666;
  cursor: pointer;
}



.right-separator {
  height: 1px;
  margin: 16px;
  border-bottom: 1px solid #E7E7E7;
}

.recent-post-container {
  display: flex;
  flex-direction: row;
}

.rp-info-container {
  padding-left: 100px;
  font-size: 16px;
  line-height: 26px;
  color: #666666;
}

.rp-date {
  font-size: 13px;
  line-height: 26px;
  text-transform: capitalize;
  color: #837F7E;
  padding-left: 16px;
  margin-top: 23px;
}

.category-list-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.category-name{
  font-size: 15px;
  line-height: 30px;
  text-transform: capitalize;
  color: #666666;
  cursor: pointer;
}

.number{
  font-size: 13px;
  line-height: 30px;
  color: #232323;
  background: #F1F1F1;
  border-radius: 5px;
  padding:5px 10px;
}
.gallery-container{
  padding:14px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.gallery{
  margin-top: 14px;
  width: 100px;
  height: 100px;
  background-size: cover;
  cursor: pointer;
}

.followus{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 100px;
}
.share-btn{
  /*width: 188px;*/
  height:14px;
  width:50px;
  border-radius: 10px;
}
.facebook-btn{
  background-color: #001D4C;
}

.twitter-btn{
  background: #1DA1F2;
}

.quora-btn{
  background: #BD081C;
}

.reddit-btn{
  background: #DB4437;
}

.youtube-btn{
  background: #0077B5;
}
</style>