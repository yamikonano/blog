<template>
<div class="header">
<!--  <div class="upper-header">-->
<!--    <div class="boundary">-->
<!--      <div class="company-contact-info">-->
<!--        <div class="address">California, TX 70240</div>-->
<!--        <div class="email">info@gmail.com</div>-->
<!--        <div class="tel">+123 456 7890</div>-->
<!--      </div>-->
<!--      <div class="free-analysis-btn">-->
<!--        Free Analysis-->
<!--      </div>-->
<!--    </div>-->

<!--  </div>-->
  <div class="lower-header">
    <div class="boundary">
      <div class="icon"></div>
      <div class="nav-links">
        <div class="nav-link">Home</div>
        <div class="nav-link">Company</div>
        <div class="nav-link">Service</div>
        <div class="nav-link">Pages</div>
        <div class="nav-link" @click="$router.replace({path:'/'})">Blog</div>
        <div class="nav-link">Contact</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Header",

  setup(){
    const goSomeWhere = (url)=>{
      window.open(url,'_blank')
    }
    return{
      goSomeWhere
    }
  },

  // const App = { template: '<div>aAp</div>' }
  // const About = { template: '<div>About</div>' }

}
</script>

<style lang="scss" scoped>
.upper-header{
  background: #001D4C;
  height: 47px;
  color: #fff;
  & .boundary{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & .company-contact-info{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      height:47px;
      font-family: Nunito, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 30px;
      & > div:not(:last-child){
        margin-right: 42px;
      }
    }
    & .free-analysis-btn{
      background: #FF5621;
      padding: 4px 30px;
      cursor: pointer;
    }
  }
}
.lower-header{
  height: 90px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.04);
  & .boundary{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 90px;
  }
  & .icon{
    height: 50px;
    width: 50px;
    background-image: url(../../assets/Venbot.png);
    background-size: cover;
  }
  & .nav-links{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 121px;

    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.78px;
    text-transform: uppercase;
    & .nav-link{
      margin: auto 22px;
      &:hover{
        color: #4154F1;
        cursor: pointer;
      }
    }
  }
}
</style>