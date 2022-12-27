const person = {
  name: ["田中", "鈴木"],
  age: 32,
  gender: "male",
  interests: {
    sports: "soccer",
    music: "piano"
  },
  getFullName: function() {
    console.log(this.name[0] + this.name[1])
  }
};

console.log(person.name);
console.log(person.interests.sports);
person.getFullName();

// 結果
// (2) ['田中', '鈴木']
// soccer
// 田中鈴木
