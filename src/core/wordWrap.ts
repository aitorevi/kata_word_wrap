export const wrap = (text: string, width: number): string => {
  if (text === "") {
    return "";
  }
  if (text.length > width) {
    const newText = text.replace(" ", "\n")
    return newText
  }
  return text;

}

// ("Hello World", 4) -> "Hello--World"
// si el ancho de columna es inferior a la longitud de la cadena,
//      busco el espacio para sustituir el espacio por un salto de linea \n
