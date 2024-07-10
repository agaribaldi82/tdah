"use strict";

var animacion = {
  duration: 3000,
  // Duración en milisegundos
  easing: 'ease-out',
  // Función de aceleración (opcional)
  fill: 'forwards' // Mantiene el estado final de la animación

};

function sleep(milisegundos) {
  return new Promise(function (accept, reject) {
    setTimeout(accept, milisegundos);
  });
}

function change_subtitle() {
  var subtitle;
  return regeneratorRuntime.async(function change_subtitle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          subtitle = document.getElementById("subtitle");
          _context.next = 3;
          return regeneratorRuntime.awrap(sleep(10000));

        case 3:
          if (!subtitle) {
            _context.next = 14;
            break;
          }

          subtitle.innerHTML = "Perdón...no encuentro el telefono...ya vuelvo...";
          _context.next = 7;
          return regeneratorRuntime.awrap(sleep(4000));

        case 7:
          subtitle.animate([{
            transform: 'translateX(0)',
            opacity: '1'
          }, {
            transform: 'translateX(-100%)',
            opacity: '0'
          }], animacion);
          _context.next = 10;
          return regeneratorRuntime.awrap(sleep(5000));

        case 10:
          subtitle.animate([{
            transform: 'translateX(-100%)',
            opacity: '0'
          }, {
            transform: 'translateX(0)',
            opacity: '1'
          }], animacion);
          subtitle.innerHTML = "Ya volví!";
          _context.next = 15;
          break;

        case 14:
          console.error("No se encontró el elemento con id 'subtitle'");

        case 15:
          _context.next = 17;
          return regeneratorRuntime.awrap(sleep(4000));

        case 17:
          subtitle.innerHTML = "¿Qué te estaba diciendo?...";

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
}

change_subtitle();