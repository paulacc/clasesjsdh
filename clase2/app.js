var estudiantes = {
  nombre: "Paula",
  curso: "Fullstack",
  dni: "99299292",
  email : "paulacasx@gmail.com"

  }

   var myArray = [];
   function fromObjectToArray (estudiantes){
      for(const prop in estudiantes){
        myArray.push('prop');
      }
      return myArray;
    console.log(myArray);
  }
