const animacion = {
    duration: 3000, // Duración en milisegundos
    easing: 'ease-out', // Función de aceleración (opcional)
    fill: 'forwards' // Mantiene el estado final de la animación
}

function sleep(milisegundos){
    return new Promise((accept, reject)=>{
        setTimeout(accept, milisegundos);
    });
}
async function change_subtitle() {
    let subtitle = document.getElementById("subtitle");

    await sleep(10000);
    if (subtitle) {
        subtitle.innerHTML = "Perdón...no encuentro el telefono...ya vuelvo...";
        await sleep(4000)
        subtitle.animate([{ transform: 'translateX(0)', opacity: '1' }, { transform: 'translateX(-100%)', opacity: '0' }], animacion)
        await sleep(5000)
        subtitle.animate([{ transform: 'translateX(-100%)', opacity: '0' }, { transform: 'translateX(0)', opacity: '1' }], animacion)
        subtitle.innerHTML = "Ya volví!";
    } else {
        console.error("No se encontró el elemento con id 'subtitle'");
    }
    await sleep(4000);
        subtitle.innerHTML = "¿Qué te estaba diciendo?...";
}

change_subtitle();
