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
        key: 'address',
        question: 'Dirección*',
        required: true,
        options: null,
        type: 'text',
        answer: undefined
      },
      {
        key: 'city',
        question: 'Municipio*',
        required: true,
        options: ['Balancán', 'Cárdenas', 'Centla', 'Centro', 'Comalcalco', 'Cunduacán', 'Emiliano Zapata', 'Huimanguillo', 'Jalapa', 'Jalpa de Méndez', 'Jonuta', 'Macuspana', 'Nacajuca', 'Paraíso', 'Tacotalpa', 'Teapa', 'Tenosique'],
        type: null,
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