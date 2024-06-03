// Función para mostrar el popup al hacer clic en la imagen
document.querySelector('.header-image').addEventListener('click', function() {
  document.getElementById('registerPopup').style.display = 'block';
});

// Función para cerrar el popup al hacer clic en la cruz de cierre
document.querySelector('.close-popup').addEventListener('click', function(event) {
  var popup = document.getElementById('registerPopup');
  popup.style.display = 'none';
  event.stopPropagation();
});

// Evitar que el popup se cierre al hacer clic en los campos de texto
var inputFields = document.querySelectorAll('.form-control');
inputFields.forEach(function(field) {
  field.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});

// Función para validar el formulario de registro
var registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  var nameInput = document.getElementById('nameInput');
  var emailInput = document.getElementById('emailInput');
  var passwordInput = document.getElementById('passwordInput');

  // Validar campos
  if (nameInput.value.trim() === '') {
    alert('Por favor, ingresa tu nombre.');
    nameInput.focus();
    return;
  }

  if (!emailInput.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    emailInput.focus();
    return;
  }

  if (passwordInput.value.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres.');
    passwordInput.focus();
    return;
  }

  // Guardar el registro en localStorage
  var registro = {
    nombre: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  };

  localStorage.setItem('registro', JSON.stringify(registro));

  // Limpiar los campos del formulario después de enviarlo
  registerForm.reset(); 

  // Mostrar el botón de inicio
  document.getElementById('loginBtn').style.display = 'inline-block';
});

// Redireccionar al hacer clic en "Inicio"
document.getElementById('loginBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Evitar que el botón ejecute su acción predeterminada
  
  // Mostrar el formulario de inicio de sesión
  var loginPopup = document.createElement('div');
  loginPopup.classList.add('popup');
  loginPopup.innerHTML = `
    <div class="popup-content">
      <span class="close-login-popup">&times;</span>
      <h2>Iniciar sesión</h2>
      <form id="loginForm">
        <div class="form-group">
          <input type="email" class="form-control" id="loginEmailInput" placeholder="Correo electrónico" required>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="loginPasswordInput" placeholder="Contraseña" required>
        </div>
        <button type="submit" class="btn btn-primary btn-lg btn-block">Iniciar sesión</button>
      </form>
    </div>
  `;
  document.body.appendChild(loginPopup);

  // Mostrar el popup de inicio de sesión
  loginPopup.style.display = 'block';

  // Función para cerrar el popup de inicio de sesión al hacer clic en la cruz de cierre
  document.querySelector('.close-login-popup').addEventListener('click', function(event) {
    loginPopup.style.display = 'none';
    document.body.removeChild(loginPopup);
    event.stopPropagation();
  });

  // Manejar el envío del formulario de inicio de sesión
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    var loginEmailInput = document.getElementById('loginEmailInput');
    var loginPasswordInput = document.getElementById('loginPasswordInput');

    // Recuperar el registro guardado en localStorage
    var registro = JSON.parse(localStorage.getItem('registro'));

    if (registro && registro.email === loginEmailInput.value && registro.password === loginPasswordInput.value) {
      
      // Redirigir a usuariologueado.html
     

      window.location.href = '../Codo-a-codo-Team3-front/usuario-logueado/usuarioLogueado.html';
      //window.location.href = '../usuario-logueado/usuarioLogueado.html';



    } else {
      alert('Correo electrónico o contraseña incorrectos.');
    }

    // Limpiar los campos del formulario de inicio de sesión después de enviarlo
    document.getElementById('loginForm').reset();
  });
});
