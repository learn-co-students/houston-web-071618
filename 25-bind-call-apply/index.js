function personSayPhrase(phrase, punctuation){
  console.log(`${this.fullName} says ${phrase}${punctuation}`)
}

let chantal = {
  fullName: "Chantal Wallace",
  favThings: ['pandas', 'coding', 'murder mysteries']
}

let pablyhan = {
  fullName: "Pablyhan Argowdry",
  favThings: ["existential crisis", "scientology"]
}

let humzah = {
  fullName: "Humzah Choudry",
  favThings: ["mozz sticks", "Houston.first"],
  humzahSay: function(greeting){
    console.log(this)
    return `${this.fullName} says ${greeting}`
  },
  humzahSayArrow: (greeting) => {
    console.log(this)
    return `${this.fullName} says ${greeting}`
  }
}
