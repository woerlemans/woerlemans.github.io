<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeSkillsPage'
})
</script>

<template>
  <div id="skills">

    <div class="section-divider">
      <p class="section-header">Skills</p>
      <p>Ervaren in zowel front-end als back-end development met de volgende technologieën:</p>
    </div>

    <div class="skills-container">
      <div class="skill-item">
        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" />
        <p>Git</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.skills-container {
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
}
.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-divider {
  text-align: center;
}

.section-divider .section-header {
  display: inline-block;
  font-size: 80%;
  border: solid 1px blue;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
  opacity: 0.4;
  fill: blue;
}
</style>
