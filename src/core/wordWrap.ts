export const wrap = (text: string, width: number): string => {
  if (text === "") {
    return "";
  }
  if (text.length > width) {
    let newText = ""
    if (text.includes(" ") && text.indexOf(" ") < width){
      newText = text.replace(" ", "\n")
    }else {
      // let startIndex = 0
      let endIndex = width
      for (let startIndex = 0; startIndex < text.length; startIndex += width){
        newText += `${text.substring(startIndex,endIndex)}\n`
        endIndex += width
      }
    }
    return newText.trim()
  }
  return text;

}

// ("Hello World", 4) -> "Hello--World"
// si el ancho de columna es inferior a la longitud de la cadena,
//      busco el espacio para sustituir el espacio por un salto de linea \n
