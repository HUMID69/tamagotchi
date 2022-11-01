const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
  
getStatus: function() {
    if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
        this.name = 'Я умер :('
        return this.name
    }
    if (this.meal < 3){
        this.meal = `Я голоден (${this.meal})`
     }else {
        this.meal = `Я не голоден (${this.meal})`
     }
     if (this.energy < 3) {
        this.energy = `Я хочу спать (${this.energy})`
     } else {
        this.energy = `Я не хочу спать (${this.energy})`
     }
     if (this.mood < 3) {
        this.mood = `Мне скучно (${this.mood})`
     } else {
        this.mood = `Мне весело (${this.mood})`
     }
     
    return `Имя: ${this.name}, Еда: ${this.meal}, Энергия: ${this.energy}, Настроение: ${this.mood}.`
},

satName: function(name) {
    this.name=name
},

eat() {
    if (this.meal < 5) {
        this.meal++;
    }
    this.mood--;
},
 sleep() {
    if(this.energy < 5){
        this.energy++;
    }
    this.meal--;
 },
 play() {
    if (this.mood < 5) {
        this.mood++;
    }
    this.energy--;
 },


}
tamogotchi.satName('Jamic')
  console.log(tamogotchi.getStatus())