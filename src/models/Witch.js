export default class Witch {
  constructor() {}

  killingVillagerByYear(year) {
    let numberKilled = 0;
    let dump = [1, 1];
  
    for (let i = 0; i < year; i++) {
      if (i > 0) {
        dump.push(dump[i] + dump[i-1])
      }
      numberKilled = numberKilled + dump[i];
    }

    return numberKilled;
  }
}