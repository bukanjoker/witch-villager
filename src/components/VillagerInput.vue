<script setup>
  import Villager from '../models/Villager';

  defineProps({
    index: Number,
    person: Villager
  })
</script>

<template>
  <h5 class="mb-3">Person {{ index + 1 }}</h5>
  <div class="row">
    <label class="col-sm-4 col-form-label">Age of Death</label>
    <div class="col-sm-8">
      <input type="number" class="form-control" v-model="person.ageOfDeath" >
    </div>
  </div>
  <div class="row">
    <label class="col-sm-4 col-form-label">Year of Death</label>
    <div class="col-sm-8">
      <input type="number" class="form-control" v-model="person.yearOfDeath" >
    </div>
  </div>
</template>
