// Importamos Mongoose, que usamos para definir el esquema del documento y conectarnos a MongoDB
import mongoose from 'mongoose';

// Creamos el esquema (estructura) que tendrán los documentos de tipo "país"
const paisSchema = new mongoose.Schema({

  // Campo 'name' para nombre del país en español (estructura anidada)
  name: {
    spa: {
      official: {
        type: String,        // Tipo texto
        required: true,      // Obligatorio
        minlength: 3,        // Mínimo 3 caracteres
        maxlength: 90        // Máximo 90 caracteres
      }
    }
  },

  // Campo 'capital' para lista de capitales (puede haber más de una)
  capital: {
    type: [String], // Es un array de strings
    validate: {
      validator: (arr) => arr.every(cap => cap.length >= 3 && cap.length <= 90),
      message: 'Cada capital debe tener entre 3 y 90 caracteres.'
    }
  },

  // Campo 'borders' para lista de códigos de países fronterizos (ej: "ARG", "BRA")
  borders: {
    type: [String],
    validate: {
      validator: (arr) => arr.every(code => /^[A-Z]{3}$/.test(code)),
      message: 'Cada código de frontera debe tener 3 letras mayúsculas.'
    }
  },

  // Campo 'area' para superficie del país en km²
  area: {
    type: Number,
    required: true,
    min: [0, 'El área debe ser un número positivo.'] // Valor mínimo permitido
  },

  // Campo 'population' para cantidad de habitantes
  population: {
    type: Number,
    required: true,
    min: [0, 'La población debe ser un número entero positivo.']
  },

  // Campo 'gini' para índice Gini (opcional), entre 0 y 100
  gini: {
    type: Number,
    min: 0,
    max: 100
  },

  // Campo 'timezones' para lista de zonas horarias del país
  timezones: {
    type: [String] // Array de strings (ej: ["UTC−03:00"])
  },

  // Campo 'creador' para el nombre de quien creó el país en la app (se valida al guardar)
  creador: {
    type: String,
    required: true
  }

});

// Exportamos el modelo 'Pais' usando este esquema.
// El tercer parámetro ('Grupo-19') indica explícitamente el nombre de la colección en MongoDB
export const Pais = mongoose.model('Pais', paisSchema, 'Grupo-19');