import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
	  loadedBlogPosts: {
	  	submitted: false
	  }
	},
	mutations: {},
	action: {},
	getters: {
	  contactForm (state) {
	  	return state.contactForm.sort
	  }
	}
}) 