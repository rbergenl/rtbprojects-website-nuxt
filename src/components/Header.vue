<template>

  <header class="background-primary uk-light" style="text-align:center">

    <div id="sticky">
    <!-- <div id="sticky" uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 150"> -->

      <nav class="uk-navbar-container background-primary" uk-navbar>
          <div class="uk-navbar-left">
            <img src="/media/profile-picture.jpeg" alt="profile picture" />
            <a class="uk-navbar-item uk-logo" href="#">RTB Projects</a>
          </div>
          <div class="uk-navbar-right uk-visible@m">
              <ul class="uk-navbar-nav">
                  <li><a href="#projects" uk-scroll>Projects</a></li>
                  <!-- <li><a href="#skillmatrix" uk-scroll>Skillmatrix</a></li> -->
                  <li><a href="#testimonials" uk-scroll>Testimonials</a></li>
                  <li><a href="#certificates" uk-scroll>Certificates</a></li>
                  <li><a href="#contact" uk-scroll>Contact</a></li>
              </ul>
          </div>
          <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true; flip: true">
              <div class="uk-offcanvas-bar uk-flex uk-flex-column">
                <button class="uk-offcanvas-close" type="button" uk-close></button>
                  <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                    <li><a href="#projects" uk-scroll>Projects</a></li>
                    <!-- <li><a href="#skillmatrix" uk-scroll>Skillmatrix</a></li> -->
                    <li><a href="#testimonials" uk-scroll>Testimonials</a></li>
                    <li><a href="#certificates" uk-scroll>Certificates</a></li>
                    <li><a href="#contact" uk-scroll>Contact</a></li>
                  </ul>
              </div>
          </div>

          <div class="uk-navbar-right uk-hidden@m">
              <a class="uk-navbar-toggle" href="#offcanvas-nav-primary" uk-toggle>
                  <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
              </a>
          </div>

      </nav>

    </div>

    <div class="uk-container uk-margin-top">
      <h2 class="uk-heading-divider">Hire an experienced Full Stack Web Developer</h2>
      <h5 class="uk-margin-bottom">10+ years working with Frontend, Backend and Cloud technology</h5>
    </div>

  </header>
</template>

<script>
export default {
  mounted() {
    // to prevent ssr/csr inconsistencies; render the sticky header when the header is mounted
    const element = document.querySelector('#sticky');
    const options = {
      animation: 'uk-animation-slide-top',
      selTarget: '.uk-navbar-container',
      clsActive: 'uk-navbar-sticky',
      clsInactive: 'uk-navbar-transparent',
      top: 150
    }
    UIkit.sticky(element, options);
  }
}
</script>

<style scoped>

h5 {
  margin-top: 0;
}

a:hover {
  cursor: pointer;
}
/* override for non transparent background of the navbar */
.uk-navbar-container:not(.uk-navbar-transparent) {
  background-color: #192130;
}
/* hide the image when navbar is sticky */
.uk-navbar-sticky img {
    display: none;
}

.uk-navbar-right {
  margin-right: 25px;
}

.uk-navbar-left {
  margin-left: 25px;
}

img {
  display: inline-block;
  border-radius: 50%;
  height: 50px;
  margin-block-end: -0.67em;
}

</style>
