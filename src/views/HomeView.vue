<template>
  <main>
    <div class="home-divider-left">
    <h1>Hello, I am Wesley</h1>
    <p>I'm a Software Engineering student at Hogeschool van Amsterdam, passionate about solving problems through technology. From front-end to back-end development, I enjoy creating innovative solutions and am excited to share my journey and projects with you.</p>
      <br>
    <p>Let’s build something great together!</p>
    </div>
    <div class="home-divider-right">
    <div class="image-placeholder"></div>
    </div>


  </main>
</template>

<script setup lang="ts">

</script>

<style>
main {
  display: flex;
  align-items: center;
  margin: auto;
}

.image-placeholder {
  width: 200px; /* Set the width of the placeholder */
  height: 200px; /* Set the height of the placeholder */
  background-color: black; /* Set the background color to black */
  margin: 2rem 2rem;
}

h1 {
  margin-bottom: 1rem;
}

.home-divider-left {
  margin: 2rem;
  align-content: center;
  padding: 1rem;
}

.home-divider-right {
  padding: 1rem;
}

</style>
