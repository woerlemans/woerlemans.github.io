<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeAboutPage'
})
</script>

<template>
  <div class="section-divider">
    <p>About</p>
  </div>
<div id="about">

  <div class="home-divider-left">
    <div class="image-placeholder"></div>
  </div>
  <div class="home-divider-right">
    <h2>Meer over mij:</h2>

    <p>Gemotiveerde softwareontwikkelaar in opleiding met een sterke focus op zowel front-end als back-end development. Ik werk graag met moderne technologieën zoals HTML, CSS, TypeScript, Vue, SQL en Java, en heb ervaring met het bouwen van gebruiksvriendelijke en schaalbare oplossingen. Door mijn studie HBO-ICT aan de Hogeschool van Amsterdam heb ik niet alleen mijn technische kennis verdiept, maar ook waardevolle ervaring opgedaan in samenwerking, leiderschap en projectmanagement als student-assistent.</p>

    <p>Ik breng een proactieve houding mee naar elk team, met een sterk analytisch vermogen en probleemoplossende skills, vooral binnen Scrum-teams. Mijn doel is altijd om oplossingen te ontwikkelen die niet alleen technisch sterk zijn, maar ook bijdragen aan het succes van het team en de klant. Bovendien ben ik sociaal ingesteld en geloof ik in het belang van een positieve, ondersteunende werkomgeving waarin we van elkaar leren en groeien.</p>

  <p>In mijn vrije tijd ben ik actief met zwemmen, wandelen en fitness, activiteiten die mij helpen om gefocust en energiek te blijven, wat ik ook meeneem in mijn werk. Ik kijk ernaar uit om mijn energie en vaardigheden in te zetten binnen een dynamisch en innovatief team.</p>

  </div>

</div>
</template>

<style scoped>
#about {
  display: flex;
  align-items: center;
  margin: auto;
}

.image-placeholder {
  width: 200px; /* Set the width of the placeholder */
  height: 400px; /* Set the height of the placeholder */
  background-color: black; /* Set the background color to black */
  margin: 2rem 2rem;
}

.home-divider-right {
  margin: 2rem;
  align-content: center;
  padding: 1rem;
}

.home-divider-right p {
  margin-bottom: 0.8rem;
}

.section-divider {
  text-align: center;
}

.section-divider p {
  display: inline-block;
  font-size: 80%;
  border: solid 1px blue;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
  opacity: 0.4;
  fill: blue;
}


</style>