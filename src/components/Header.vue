<template>
  <header class="background-primary" style="text-align:center">
    <nav class="header">Menu</nav>
    <img src="/media/profile-picture.jpeg" alt="profile picture" />
    <h1>RTB<span>projects</span></h1>
    <p>10 years of experience with Cloud, Frontend and Backend web technology</p>
    <p><button onclick="this.style.display='none';document.getElementById('contact').style.display='block'">Contact</button><span id="contact"><a href="mailto:robin@rtbprojects.com">robin@rtbprojects.com</a></span></p>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>

header {
  padding: 2rem;
  color: white;
}

img {
  display: inline;
  border-radius: 50%;
  height: 150px;
  margin-block-end: -0.67em;
}

h1 {
  display: inline;
  font-size: 3rem;
  font-weight: 300;
  color: white;
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

</style>
