// Importamos el modelo "Pais" que define la estructura de los documentos en MongoDB
import { Pais } from '../models/paisModel.mjs';


// OBTENER PAIS POR CREADOR:
// Recibe un nombre o array de nombres y busca todos los países que tengan ese "creador"
export const obtenerPaisesPorCreador = async (nombres) => {
  return await Pais.find({ creador: nombres });
};


// OBTENER PAIS POR ID:
// Busca un país en la base por su ID único
export const obtenerPaisPorId = async (id) => {
  return await Pais.findById(id);
};



// CREAR UN NUEVO PAIS:
// Recibe los datos y guarda un nuevo documento en la colección
export const crearPais = async (datos) => {
  return await Pais.create(datos);
};



// ACTUALZIAR UN PAIS EXISTENTE:
// Busca un país por ID y lo actualiza con los nuevos datos
// La opción { new: true } devuelve el documento actualizado
// runValidators: true → aplica las validaciones del modelo durante la actualización
export const actualizarPais = async (id, datos) => {
  return await Pais.findByIdAndUpdate(id, datos, { new: true, runValidators: true });
};


// ELIMINAR UN PAIS:
// Elimina el país que tenga el ID recibido
export const eliminarPais = async (id) => {
  return await Pais.findByIdAndDelete(id);
};