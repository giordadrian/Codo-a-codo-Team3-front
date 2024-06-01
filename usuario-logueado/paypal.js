// ID de cliente de PayPal
const clientId = 'AZmW_e2pyHcMzI_ruE8__6XIutxjd8npjRTY3EDXIbL_vNNnYJDM5CvxUd03fyzt-UcJYUTqMmzgPV8q';

// Clave secreta de PayPal
const clientSecret = 'EE08FVm_WfKgQOX3bTJHFFCMA8X1uVS9sI6ShP8jrpM4qbu_Ifdfy2tICrxcdMvaxBA9hCHGzp9BeCTJ';

// Configura el objeto de pago
const payment = {
  transactions: [
    {
      amount: {
        total: '10.00', // Monto de pago (en este ejemplo, $10)
        currency: 'USD'
      },
      description: 'Donación para el proyecto'
    }
  ]
};

// Inicializa la instancia de PayPal
paypal.Buttons({
  env: 'sandbox', // Cambiar a 'production' para el entorno de producción
  client: {
    sandbox: clientId,
    production: clientId
  },
  secret: clientSecret,
  payment: payment,
  commit: true,

  onAuthorize: function(data, actions) {
    // Ejecutar el pago una vez que se autoriza
    return actions.payment.execute().then(function() {
      // Mostrar un mensaje de éxito al usuario
      alert('¡Gracias por tu donación!');
    });
  },

  onCancel: function(data) {
    // Mostrar un mensaje al usuario cuando se cancela el pago
    alert('Donación cancelada');
  },

  onError: function(err) {
    // Manejar errores
    alert('Error: ' + err);
  }

}).render('#paypal-button-container');