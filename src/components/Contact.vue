<template>
  <section id="contact" class="uk-section background-primary uk-light">
    <div class="uk-container uk-text-center">
      <button onclick="this.style.display='none';document.querySelector('span.contact').style.display='block'">Contact</button><span class="contact"><a href="mailto:robin@rtbprojects.com">robin@rtbprojects.com</a></span>
    </div>
  </section>
</template>

<style scoped>

span {
  display: none;
  margin-top: 2rem;
  position: relative;
  color: rgba(255, 255, 255, 0.5);
}

button {
   padding: 1rem;
   background-color: #2d3a4b;
   border-radius: 5px;
   color: white;
   font-size: 1.5rem;
}

button:hover {
  cursor: pointer;
  background-color: #576980;
}

a {
  text-decoration: underline;
}
</style>
