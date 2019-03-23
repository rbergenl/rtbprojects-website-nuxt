<template>
  <div>
    <!--The content below is only a placeholder and can be replaced.-->
    <header class="logo" style="text-align:center">
      <img src="../assets/profile-picture.jpeg" alt="profile picture" />
      <h1>RTB<span>projects</span></h1>
      <p>10 years of experience with Cloud, Frontend and Backend web technology</p>
      <p><button onclick="this.style.display='none';document.getElementById('contact').style.display='block'">Contact</button><span id="contact"><a href="mailto:robin@rtbprojects.com">robin@rtbprojects.com</a></span></p>
    </header>

    <div>
      <ul>
        <li v-for="cert in certificates">{{cert.title}}</li>
      </ul>
    </div>

    <main style="text-align:center">

      <div style="display: flex; width: 400px; margin: auto auto; margin-top: 2rem; justify-content: space-between;">
        <div class="badge">
          Mobile Web Specialist
          <img src="https://firebasestorage.googleapis.com/v0/b/rtbprojects-website.appspot.com/o/images%2Faws-developer-associate.png?alt=media&token=1efb63d3-2271-488f-905a-eba02ec1b108" alt="mobile web specialist certificate badge"/>
        </div>
        <div class="badge">
          AWS Developer
          <img src="../assets/aws-developer-associate.png" alt="aws developer associate certificate badge" />
        </div>
        <div class="badge">
          Professional Scrum Developer
          <img src="../assets/professional-scrum-developer.png" alt="professional scrum developer certificate badge" />
        </div>
      </div>
      <p>

      <!-- <h2>Experience</h2> -->
      <div style="display: flex; width: 400px; margin: auto auto; margin-top: 2rem; justify-content: space-between;">
        <div class="badge">
          NodeJS
          <img src="../assets/node-js.png" alt="nodejs ecosystem logo" />
        </div>
        <div class="badge">
          Angular 7
          <img src="../assets/angular_full_color_logo.png" alt="angular frontend framework logo" />
        </div>
        <div class="badge">
          Bootstrap 4
          <img style="width: 75%;" src="../assets/bootstrap-4-logo-png-transparent.png" alt="bootstrap 4 logo png transparent" />
        </div>
      </div>
      <button onclick="document.getElementById('experience-list').style.visibility='visible'">Full list...</button>
      <div id="experience-list" style="visibility: hidden;">
        <p><strong>Eco-systems: </strong>NodeJs | Amazon Web Services | Google Cloud Platform</p>
        <p><strong>Frontend frameworks: </strong>Angular/Ngrx | React/Redux | VueJs/Vuex</p>
        <p><strong>Frontend basics: </strong>HTML5 | CSS/Sass | ECMAScript 6 | Web Components | Typescript | Webpack</p>
        <p><strong>Backend: </strong>PHP | Java | Express</p>
        <p><strong>Mobile Web: </strong>Bootstrap | Progressive Web App | Ionic</p>
        <p><strong>Testing: </strong>Karma | Jasmine | Mocha | Protractor</p>
        <p><strong>CI/CD: </strong>Jenkins | SonarQube | Docker</p>
        <p><strong>Content Management Systems: </strong>Wordpress | Tridion</p>
        <p><strong>Database: </strong>MySQL | MongoDB</p>
        <p><strong>Architectures: </strong> Serverless | Authentication | Internet of Things | Ecommerce</p>
        <p><strong>Digital Marketing: </strong>Google Tag Manager | Analytics | Ads | Search Engine Optimization | Social Discovery</p>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['certificates'])
  }
}
</script>

<style scoped>

.logo {
  background-image: linear-gradient(to left, #2d3a4b, #192130);
  padding: 2rem;
  color: white;
}

.logo > img {
  display: inline;
  border-radius: 50%;
  height: 150px;
  margin-block-end: -0.67em;
}

h1 {
  display: inline;
}

a {
  color: white;
  text-decoration: underline;
}

#contact {
  display: none;
  margin-top: 2rem;
  position: relative;
}

h1 {
  font-size: 3rem;
  font-weight: 300;
  color: white;
}

span {
  color: rgba(255, 255, 255, 0.5);
}

button {
   padding: 1rem;
   background-color: #2d3a4b;
   border-radius: 5px;
   color: white;
   font-size: 1.5rem;
}

.badge {
  flex: 0 1 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.badge > img {
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

</style>
