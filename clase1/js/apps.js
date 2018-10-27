var varString = "Esto es un String";
var varArray = ["ale",true,"ale3"];
var varBool = true;


console.log(varString);
console.log(varArray);
console.log(varBool);



// Objetos Literales

var ironMan = {
  nombre: "Iron Man",
  equipo: "Avengers",
  poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
  energia: 100,
  getPoder: function(nro){
    return this.poderes[nro];
  },
  usarPoder: function(){
    var nroRandom = Math.floor(Math.random() * 3);
    var poderElegido = this.getPoder(nroRandom);
    console.log(poderElegido);
    if (poderElegido === "Volar") {
      this.energia = this.energia - 20;
    }
    if (poderElegido === "Lanzar misiles") {
      this.energia = this.energia - 45;
    }
    if (poderElegido === "Disparar láser") {
      this.energia = this.energia - 75;
    }
    return "energia final " + this.energia;
  }
}

var Hulk = {
  nombre: "Hulk",
  equipo: "Avengers",
  poderes: ["Aplastar", "Gritar", "Golpear"],
  energia: 100,
  getPoder: function(nro){
    return this.poderes[nro];
  },
  usarPoder: function(){
    var nroRandom = Math.floor(Math.random() * 3);
    var poderElegido = this.getPoder(nroRandom);
    console.log(poderElegido);
    if (poderElegido === "Aplastar") {
      this.energia = this.energia - 45;
    }
    if (poderElegido === "Gritar") {
      this.energia = this.energia - 15;
    }
    if (poderElegido === "Golpear") {
      this.energia = this.energia - 25;
    }
    return "energia final " + this.energia;
  }
}

var misDatos = {
  nombre: "Paula",
  apellido: "Castex",
  dni: "99299292",
  comidaFavorita: "Milanesa Napolitana",
  edad: "30",
  saludar: function(){
    return "Hola mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años";
  }

}


for (var key in misDatos) {
  console.log(key + ": " + misDatos[key]);
}
