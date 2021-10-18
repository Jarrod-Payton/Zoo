import { Human } from "../Models/Human.js"

//constructor(name, weight, ethnicity, politicalView, superPower) {
//  this.name = name
//  this.weight = weight
//  this.ethnicity = ethnicity
//  this.politicalView = politicalView
//  this.superPower = superPower

let HumanTestPod = {
  Steven: new Human('Steven', 180, 'White', 'Republican', 'Average'),
  Jake: new Human('Jake', 160, 'Tan', 'Vegan', 'Curly Hair'),
  Alfred: new Human('Alfred', 130, 'Fancy', 'Democrat', 'Incredibly Polite'),
  Bruce: new Human('Bruce', 220, 'Orphan', 'Equality', 'Smart'),
  Hal: new Human('Hal', 160, 'White', 'Pilot', 'Fancy Ring'),
  Clark: new Human('Clark', 220, 'Lonely', 'Alien'),
  Jack: new Human('Jack', 300, 'Couch Potato', 'Xbox is better than PlayStation', '360 NoScope'),
  Mark: new Human('Mark', 100, 'Dark', 'Dark', 'Hero')
}

export class ZooMan {

  IncreaseWeight(HumanName) {
    let HumanWeight = HumanTestPod[HumanName]
    HumanWeight.weight++
  }
}