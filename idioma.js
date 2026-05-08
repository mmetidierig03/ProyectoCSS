// Idioma por defecto: español
var idiomaActual = localStorage.getItem('idioma') || 'es';

function aplicarIdioma(idioma) {
  // Actualiza el textContent de todos los elementos con data-es y data-en
  document.querySelectorAll('[data-es][data-en]').forEach(function(el) {
    el.textContent = el.getAttribute('data-' + idioma);
  });
  // Actualiza el botón para mostrar el idioma al que se puede cambiar
  var btn = document.getElementById('btn-idioma');
  if (btn) {
    btn.textContent = idioma === 'es' ? '🇬🇧 EN' : '🇪🇸 ES';
  }
  idiomaActual = idioma;
  localStorage.setItem('idioma', idioma);
}

document.addEventListener('DOMContentLoaded', function() {
  // Aplica el idioma guardado al cargar la página
  aplicarIdioma(idiomaActual);
  var btn = document.getElementById('btn-idioma');
  if (btn) {
    btn.addEventListener('click', function() {
      aplicarIdioma(idiomaActual === 'es' ? 'en' : 'es');
    });
  }
});
