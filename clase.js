/*Clasificación de Burbujas*/
//https://www.youtube.com/watch?v=xli_FI7CuzA//
// el wall siempre es 1 - que el indice//
// mueve de a 2//

const bubbleSort = (arr) => {
    let wall = arr.length - 1; //se parte con largo del wall -1 pa q no siga comparando con n° q no hay en el arreglo
    while (wall > 0){ // mientras wall sea > 0 va a seguir recorriendo 
        let index = 0; // index = posicion del elemento
        while (index < wall) { 
          //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
          if (arr[index] > arr[index + 1]) { 
            let aux = arr[index]; //aux es el valor del elemento
            arr[index] = arr[index + 1];
            arr[index + 1] = aux;
          }
          index++;
        }
        wall--; //disminuir la pared para la optimización
    }
	return arr;
};


//Clasificación por selection//
//https://www.youtube.com/watch?v=g-PGLbMth_g//
//compara una posición con todas las posiciones y va corriendo el numero a la derecha//
//quien se mueve es el i//
const selectSort = (arr) => {
    let min = 0; 
    while (min < arr.length-1){ // lo recorre mientras minimo sea < a -1
        for(let i = min+1; i < arr.length-1; i++) { //incrementa el i hasta que encuentre el min sea un m° menor 
          if (arr[min] > arr[i]) {
            let aux = arr[min];
            arr[min] = arr[i];
            arr[i] = aux;
          }
        }
        min++;
    }
	return arr;
};


//Clasificación de la Cocktail Shaker//
//https://www.youtube.com/watch?v=g-PGLbMth_g//

const shakerSort = (arr) => {
    let max = arr.length - 1;
    let min = 0;
    while(min < max){
        let biggest = min;
      let smallest = max;
      //
        for (var i = min; i <= max; i++) if(arr[biggest] < arr[i]) biggest = i;
      if(max != biggest){ //swap the items
          let aux = arr[max]; arr[max] = arr[biggest]; arr[biggest] = aux;
      }
      max--;
      for (var j = max; j >= min; j--) if(arr[smallest] > arr[j]) smallest = j;
      if(min != smallest){ //swap the items
          let aux2 = arr[min]; arr[min] = arr[smallest]; arr[smallest] = aux2;
      }
      min++;
    }  
    return arr;
  }


  //Clasificación de Inserción//
//https://www.youtube.com/watch?v=JU767SDMDvA//

  const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
	    let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j].num > key.num) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
};


