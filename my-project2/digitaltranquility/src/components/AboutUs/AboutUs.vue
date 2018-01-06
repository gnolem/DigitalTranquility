<template>
<v-layout row wrap>
	<v-flex xs8 offset-xs1 pb-1>
		<h1>Projects</h1>
	</v-flex>
    <v-flex xs8 offset-xs1 pb-3 
     v-for="card in cards"
     :key="card.title">
      <v-card>
        <v-card-media
          :src="card.src"
          height="550px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ card.title }}</div>
            <span class="grey--text">{{ card.subtitle }}</span>
          </div>
        </v-card-title>
        <v-chip
	         v-for="chips in card.chips"
	         :key="card.title">{{ chips }}</v-chip>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="card.show = !card.show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="card.show" v-html="card.text">
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Bikesharing', subtitle: 'Mobile App & Backend application for bike maintenance - 5000+ users', src: '/static/img/bikesharing/bikesharing.jpg', text: 'For roughly a year I have helped in creating a bikesharing platform for a big bikesharing company in the Netherlands. This consist as both a backend system as well as the mobile app. The mobile app was created using cordova which loaded Oracle Apex in an iframe.</br> <img src="/static/img/bikesharing/bikefrontend.png"></img></br> This solution was a strategic choice of the company we worked for at the time. Oracle Apex was their main weapon of choice, hence the cordova - apex - iframe solution. It did offer some convenience: sometimes one could make due with a hotfix without having to release the app. If I was in the driver seat I would have chosen a different setup, but company wise I can respect the decision. Oracle Apexs mobile solution is jQuery mobile, also not ideal. To interface with the bikelocks, as payment method and location API we used Node.js.</br></br><img src="/static/img/bikesharing/bikebackend.png"></img></br>', show: false, chips: ['Node.js', 'Oracle Apex 5', 'Cordova', 'Oracle Database 12c', 'Google maps javascript API'] },
        { title: 'Quality Control Application', subtitle: 'Managing inspection reports and certification - 10+ users', src: '/static/img/quality/maxresdefault.jpg', text: 'Responsible for the design and development of an application where the Quality department of a large freight company could manage their purchase orders and requisitions.', show: false, chips: ['Oracle Apex', 'Oracle Database 12c'] },
        { title: 'Energy portal', subtitle: 'Customer portal to view energy usage, billing and reports - 1000+ users', src: '/static/img/energy/energie.jpg', text: 'For a company specialized in mainting and fixing energy infrastructure we made an energy portal. This offered customer to view their energy usage, bills and benchmark capabilities to see how their energy-usage relates to that of their compatitors. The fact that this companys clients were situated in one of the most competative garderning glass house argitectural regions, made this specially interesting. To displaying the data in a nice graphical way we used highcharts.js. An interactive javascript chart framework. Many of our users were companies specialized in energy advice.', show: false, chips: ['Highcharts.js', 'Oracle Apex', 'Oracle Database 12c'] },
        { title: 'Calamaty Maintenance Application', subtitle: 'Customer portal to view energy usage, billing and reports - 100+ users', src: '/static/img/calamity/stroomstoring.jpg', text: 'In this application the company specialized in mainting and fixing energy infrastructure can register calamities on the grid. The questionaire is editable as is the flow of questions and status flows. The application is responsive, so the mechanics in the field could also use it on their tablet. Included integration with the device camera and reporting on the different statusses. This allows the company to monitor SLAs more closely. A restful interface was created with an external customer call center during out of office hours. Google maps integration to show active calamities.', show: false, chips: ['Oracle Apex', 'Restful Interface', 'Oracle Database 12c', 'Google maps javascript API'] }
      ]
    })
  }
</script>