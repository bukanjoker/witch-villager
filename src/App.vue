<script>
import VillagerInput from './components/VillagerInput.vue';
import Villager from './models/Villager';
import Witch from './models/Witch';

export default {
  components: {
    VillagerInput,
    Villager,
    Witch
  },
  data() {
    return {
      result: 0,
      people: [],
      theWitch: new Witch()
    }
  },
  methods: {
    executeTheWitch() {
      // validation if has minus year of born
      if (this.people.some(v => v.getYearBorn() < 0)) {
        return this.result = -1;
      }

      // set average
      this.result = this.people.map(v => {
        return this.theWitch.killingVillagerByYear(v.getYearBorn())
      }).reduce((a,b) => a+b, 0) / this.people.length;
    },
    addVillager() {
      this.people.push(new Villager())
    },
    removeVillager() {
      this.people.pop()
    }
  },
  mounted() {
    // initiate
    this.result = 0;
    this.people.push(new Villager())
    this.people.push(new Villager())
  }
}
</script>

<template>
  <div class="mt-3 mb-4 text-center">
    <img src="./assets/witch_image.gif" class="witch-image" alt="witch" /><br>
    <a class="logo-app" href="https://mazeon.tumblr.com/post/65356579669/halloween-witch-cooking-up-something-nasty-shown">
      <i>image source</i>
    </a>
  </div>

  <div class="mb-5 text-center" v-if="result != 0">
    <h3>
      Result: {{ result }}
      <span v-if="result <= 0">(invalid value)</span>
      <span v-else>(witch leave the village)</span>
    </h3>
  </div>

  <div class="mb-4 col-sm-3 d-grid mx-auto">
    <div class="mb-3" v-for="(person, index) in people">
      <VillagerInput :index="index" :person="person" />
    </div>
  </div>

  <div class="mb-5 col-sm-3 d-grid gap-2 mx-auto">
    <button :disabled="people.length == 0" class="btn btn-danger" type="button" @click="executeTheWitch()">
      Execute
    </button>
    <button class="btn btn-light" type="button" @click="addVillager()">Add Villager</button>
    <button class="btn btn-light" type="button" @click="removeVillager()">Remove Villager</button>
  </div>
</template>

<style scoped>
.logo-app {
  font-size: smaller;
}
.witch-image {
  height: 10em;
}
</style>