<template>
  <v-app dark>
    <v-navigation-drawer 
      temporary
      v-model="drawer"
      dark
      absolute>
    <v-list>
      <v-list-tile 
         v-for="item in menuItems" 
         :key="item.title"
         router
         :to="item.link"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon 
        @click.native.stop="drawer = !drawer"
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Digital Tranquility</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn 
          flat 
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link"
        >
          <v-layout justify-space-around>
            <v-icon dark left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-layout>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        menuItems: [
          {icon: 'fa-newspaper-o', title: 'Blog', link: '/blog'},
          {icon: 'fa-user', title: 'About Us', link: '/aboutus'}
        ]
      }
    }
  }
</script>