export class Human {

  constructor(name, weight, ethnicity, politicalView, superPower) {
    this.name = name
    this.weight = weight
    this.ethnicity = ethnicity
    this.politicalView = politicalView
    this.superPower = superPower
  }
  changeRace(newEthnicity) {
    this.ethnicity = newEthnicity
    console.log(`${this.ethnicity}`)
  }
}