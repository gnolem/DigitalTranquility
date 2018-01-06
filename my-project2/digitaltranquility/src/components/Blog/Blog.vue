<template>
  <v-content>
    <v-container>
      <v-layout row wrap align-center>
        <v-dialog v-model="dialog3" max-width="1000px">
          <v-card class="my-3" hover>
            <v-card-media
              class="white--text"
              height="500px"
              :src="imgUrl"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <h1>{{ title }}</h1>
                  </v-flex>
                  <v-flex xs5 offset-xs0 offset-md2 offset-lg7>
                    {{ date }}
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-text>
              <p v-html="content"></p>
            </v-card-text>
            <v-card-actions>
              <v-btn icon class="blue--text text--darken-4" v-on:click="link( title, 'linkedin' )">
                <v-icon medium>fa-linkedin</v-icon>
              </v-btn>
              <v-btn icon class="light-blue--text" v-on:click="link( title, 'twitter' )">
                <v-icon medium>fa-twitter</v-icon>
              </v-btn>
              <v-btn icon class="red--text" v-on:click="link( title, 'reddit' )">
                <v-icon medium style="cursor: pointer">fa-reddit</v-icon>
              </v-btn>
              <v-btn icon class="blue--text text--darken-4" v-on:click="link( title, 'facebook' )">
                <v-icon medium>fa-facebook</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
               <v-btn color="primary" flat @click.stop="dialog3=false">Close</v-btn>
            </v-card-actions>
          </v-card>
          </v-dialog>
        <v-flex xs12 md4>
          <div class="text-xs-center">
            <v-avatar size="175px" class="mb-2">
              <img
                class="img-circle elevation-6 mb-2"
                src="/static/img/take.jpg" 
              >
            </v-avatar>
            <h4>Take <span style="font-weight:bold">Kerkhof</span></h4>
            <h5 class="text-xs-center">Developer, Father, Motorfanatic</h5>
          </div>
        </v-flex>
        <v-flex xs12 md5 offset-md2>
          <div v-for="post in reversePosts" :key="post.id">
            <v-card class="my-3" hover>
              <v-card-media
                class="white--text"
                height="170px"
                :src="post.imgUrl"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">{{ post.title }}</span>
                    </v-flex>
                    <v-flex xs5 offset-xs0 offset-md2 offset-lg6>
                      {{ post.date }}
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-text>
                <p>{{ post.content | truncate('200') }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn icon class="blue--text text--darken-4" v-on:click="link( post.title, 'linkedin' )">
                  <v-icon medium>fa-linkedin</v-icon>
                </v-btn>
                <v-btn icon class="light-blue--text" v-on:click="link( post.title, 'twitter' )">
                  <v-icon medium>fa-twitter</v-icon>
                </v-btn>
                <v-btn icon class="red--text" v-on:click="link( post.title, 'reddit' )">
                  <v-icon medium style="cursor: pointer">fa-reddit</v-icon>
                </v-btn>
                <v-btn icon class="blue--text text--darken-4" v-on:click="link( post.title, 'facebook' )">
                  <v-icon medium>fa-facebook</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn flat @click.native="itemClicked(post)" class="blue--text">Read More</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<style>
a {
    text-decoration: none;
    }
</style>

<script>
   export default {
     name: 'Blog',
     data () {
       return {
         imgUrl: '',
         date: '',
         content: '',
         title: 'Your Logo',
         dialog3: false,
         posts: [
           {
             id: 1,
             title: 'Off to a fresh start!',
             content: 'Digital Tranquility was officially launched today. Ive been playing with the idea to go freelance for quite some time now. This plus the fact I wanted to try and build a site with Vue.js made me take the leap. So this is it. Decided to start with a basic company section and a little blog.</br></br> If only I knew how to resize this avatar item. I look like a midget. Guess the component still needs some work. As a workaround back to GIMP for now ;)',
             imgUrl: '/static/img/blog/new_experience.jpg',
             date: '25-12-2017'
           },
           {
             id: 2,
             title: 'About us / Projects section updated',
             content: 'Took a little stroll down memory lane and added a few more projects. Still needs some more in depth information, but we\'re getting there',
             imgUrl: '/static/img/blog/halfway.jpg',
             date: '29-12-2017'
           }
         ]
       }
     },
     methods: {
       link: function (title, socialMedium) {
         if (socialMedium === 'reddit') {
           window.open('http://www.reddit.com/submit?url=' + window.location.href + '&title=' + title)
         } else if (socialMedium === 'twitter') {
           window.open('https://twitter.com/intent/tweet?url=' + window.location.href + '&text=' + title + '&hashtags=DigitalTranquility')
         } else if (socialMedium === 'linkedin') {
           window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + window.location.href + '&title=' + title)
         } else {
           window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href + ' ' + title)
         }
       },
       itemClicked: function (post) {
         this.id = post.id
         this.title = post.title
         this.content = post.content
         this.imgUrl = post.imgUrl
         this.date = post.date
         this.dialog3 = true
       }
     },
     filters: {
       truncate: function (string, value) {
         return string.substring(0, value) + '...'
       }
     },
     computed: {
       reversePosts () {
         return this.posts.slice().reverse()
       }
     }
}
</script>
