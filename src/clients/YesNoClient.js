import axios from 'axios';

// hay que extender el await - async sucesivamente
// axios viene con await incluido:

const consultarRespuesta = async () => /*await*/ axios.get('https://yesno.wtf/api').then(resp => resp.data)

// funciones fachada
// extender el await - async
export const consultarFachada = async () => await consultarRespuesta();