export default class Villager {
  constructor() {
    this.ageOfDeath = 0;
    this.yearOfDeath = 0;
  }

  getYearBorn() {
    return this.yearOfDeath - this.ageOfDeath;
  }
}