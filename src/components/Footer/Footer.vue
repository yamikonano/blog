<template>
  <div class="footer">
    <div class="boundary">
      <div class="footer-upper-container">
        <div class="footer-column c-1">
          <div class="footer-icon">

          </div>
          <div class="footer-separator"></div>
          <div class="footer-info-group">
            <div class="footer-subheading">Email:</div>
            <div class="footer-content">support@themefora.com</div>
            <div class="footer-subheading">Phone:</div>
            <div class="footer-content">+44-20-7328-4499</div>
          </div>
        </div>
        <div class="footer-column c-2">
          <div class="footer-heading">Company</div>
          <div class="footer-content">Home</div>
          <div class="footer-content">About Us</div>
          <div class="footer-content">Meet Our Team</div>
          <div class="footer-content">Team Carousel</div>
          <div class="footer-content">Contact Us</div>
        </div>
        <div class="footer-column c-3">
          <div class="footer-heading">Useful Link</div>
          <div class="footer-content">FAQ</div>
          <div class="footer-content">Blog</div>
          <div class="footer-content">Services</div>
          <div class="footer-content">Home 2</div>
          <div class="footer-content">Case Studies</div>
        </div>
        <div class="footer-column c-4">
          <div class="footer-heading">Latest News</div>
          <div class="footer-content-1">Consulted admitting is power acuteness.</div>
          <div class="footer-date">9 January 2021 - ADMIN</div>
          <div class="footer-separator"></div>
          <div class="footer-content-1">Consulted admitting is power acuteness.</div>
          <div class="footer-date">9 January 2021 - ADMIN</div>
        </div>
      </div>
    </div>
    <div class="footer-separator-1"></div>
    <div class="boundary">
      <div class="footer-lower-container">
        <div class="copyright">
          Copyright © 2021. Designed by themefora
        </div>
        <div class="social-media-links">
          <div class="social-media-link" @click="goSomeWhere('https://www.google.com')">Facebook</div>
          <div class="social-media-link">Twitter</div>
          <div class="social-media-link">Instagram</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Footer",
  setup() {
    const goSomeWhere = (url) => {
      window.open(url, '_blank')
    }
    return {
      goSomeWhere
    }
  }
}
</script>

<style scoped>


.footer {
  background: #001D4C;
  color: #fff;

}

.footer-separator-1 {
  height: 1px;
  margin-top: 101px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
}

.footer-icon {
  height: 50px;
  width: 50px;
  background-image: url(../../assets/Venbot.png);
  background-size: cover;
  margin-top: 4px;
}

.footer-upper-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-top: 96px;
}

.footer-separator {
  height: 1px;
  border-bottom: 1px solid #2A3C68;
}

.c-1 .footer-separator {
  width: 310px;
  margin-top: 28px;
}

.footer-subheading {
  margin-top: 27px;
  margin-bottom: 13px;
  font-family: Nunito, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
}

.footer-content {
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  color: #96AAC1;
}

.footer-info-group {
  padding-left: 58px;
}

.footer-heading {
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  color: #FFFFFF;
  margin-bottom: 24px;
}

.c-2 .footer-content,
.c-3 .footer-content {
  margin-bottom: 10px;
}

.footer-content-1 {
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 32px;
  color: #96AAC1;
  margin-bottom: 16px;
}

.footer-date {
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 30px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-left: 15px;
}

.c-4 .footer-separator {
  margin-top: 32px;
  margin-bottom: 28px;
}

.footer-lower-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 27px;
  padding-bottom: 26px;
}

.social-media-links {
  display: flex;
  flex-direction: row;

}

.social-media-link {
  margin-left: 41px;
}

</style>