<template>
 <v-content>
    <section>
      <v-parallax src="static/img/thumb-1920-456498.jpg" height="600">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <h1 class="black--text mb-2 display-1 text-xs-center">Digital Tranquility</h1>
          <div class="black--text subheading mb-3 text-xs-center">Powered by T. Kerkhof</div>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            to="aboutus"
          >
            About us
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Go to bed with an eased state of mind</h2>
            <span class="subheading">
              Knowing your IT is in good hands
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Fast development</div>
                  </v-card-title>
                  <v-card-text class="text-xs-center">
                    First time right. Save money.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
              	<v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Allround Application Development</div>
                  </v-card-title>
                  <v-card-text>
                    Proficiant in a varity of solutions ranging from Oracle Database 8, 9, 10, 11, 12c to Oracle Apex for rapid backend data entry and reporting, to lean and mean Node.js API's, to Vue.js.  
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">10+ years experience</div>
                  </v-card-title>
                  <v-card-text class="text-xs-center">
                    Programming ever since I was wearing diapers. High quality and stable applications.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="static/img/alien_zen-wallpaper-1920x1080.jpg">
        <v-layout column align-center justify-center>
          <div class="headline black--text mb-3 text-xs-center">Focus on your core business</div>
          <em class="black--text">Leave your IT to the professionals</em>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            to="blog"
          >
            Blog
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Digital Tranquility is situated in the old city center of Rijswijk (ZH). 
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-flex offset-sm3>
              <a href="tel:+31655812339"><v-icon class="text--lighten-2 pl-3">phone</v-icon></a>
              <a href="https://api.whatsapp.com/send?phone=31655812339"><v-icon class="green--text text--lighten-2 pl-3">fa-whatsapp</v-icon></a>
              <a href="https://goo.gl/maps/8QUTChiiUZq"><v-icon class="red--text text--lighten-2 pl-3">place</v-icon></a>
              <a href="mailto:info@digitaltranquility.nl"><v-icon class="dark--text text--lighten-2 pl-3">email</v-icon></a>
              <a href="https://www.linkedin.com/in/digitaltranquility"><v-icon class="blue--text text--lighten-2 pl-3">fa-linkedin</v-icon></a>
              <!--<a href="contactme"><v-icon class="yellow--text text--lighten-2 pl-3">fa-address-card-o</v-icon></a>-->
          	</v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<style>
  a {
      text-decoration: none;
    }
</style>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>