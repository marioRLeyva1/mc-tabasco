export const state = {
  question: [
    {
        key: 'name',
        question: 'Nombre Completo*',
        required: true,
        options: null,
        type: 'text',
        answer: undefined
      },
      {
        key: 'birthDate',
        question: 'Fecha de Nacimiento*',
        required: true,
        options: null,
        type: 'date',
        answer: undefined
      },
      {
        key: 'email',
        question: 'Correo Electrónico',
        required: false,
        options: null,
        type: 'email',
        answer: undefined
      },
      {
        key: 'phone',
        question: 'Teléfono*',
        required: true,
        options: null,
        type: 'tel',
        answer: undefined
      },
      {
        key: 'mode',
        question: 'Modalidad*',
        required: true,
        options: ['Presencial', 'En línea o remoto'],
        type: 'text',
        answer: undefined
      },
      {
        key: 'address',
        question: 'Dirección*',
        required: true,
        options: null,
        type: 'text',
        answer: undefined
      },
      {
        key: 'city',
        question: 'Municipio o Localidad*',
        required: true,
        options: null,
        type: 'text',
        answer: undefined
      },
      {
        key: 'state',
        question: 'Estado*',
        required: true,
        options: ['Aguascalientes','Baja California','Baja California Sur','Campeche','Chiapas','Chihuahua','Coahuila de Zaragoza','Colima','Ciudad de México','Durango','Guanajuato','Guerrero','Hidalgo','Jalisco','Estado de Mexico','Michoacan de Ocampo','Morelos','Nayarit','Nuevo Leon','Oaxaca','Puebla','Queretaro de Arteaga','Quintana Roo','San Luis Potosi','Sinaloa','Sonora','Tabasco','Tamaulipas','Tlaxcala','Veracruz de Ignacio de la Llave','Yucatan','Zacatecas'],
        type: 'text',
        answer: undefined
      },
      {
        key: 'comment',
        question: 'Comentario',
        required: false,
        options: null,
        type: 'text',
        answer: undefined
      },
]
}