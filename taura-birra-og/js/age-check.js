  const ageCheck = document.getElementById('age-check');
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');

  const allowed = localStorage.getItem('taura-mayor-edad');

  if (allowed === 'true') {
    ageCheck.style.display = 'none';
  } else if (allowed === 'false') {
    window.location.href = 'https://www.google.com/';
  }

  yesBtn.addEventListener('click', () => {
    localStorage.setItem('taura-mayor-edad', 'true');
    ageCheck.style.display = 'none';
  });

  noBtn.addEventListener('click', () => {
    localStorage.setItem('taura-mayor-edad', 'false');

    // Desactivar ambos botones
    yesBtn.disabled = true;
    noBtn.disabled = true;

    // Cambiar estilos de los botones
    yesBtn.style.backgroundColor = '#534439';
    yesBtn.style.color = '#aca190';
    noBtn.style.backgroundColor = '#534439'; // rojo oscuro
    noBtn.style.color = '#aca190';

    // Iniciar cuenta regresiva
    let seconds = 4;
    const countdown = setInterval(() => {
      noBtn.textContent = `Redirigiendo... (${seconds})`;
      seconds--;
      if (seconds < 0) {
        clearInterval(countdown);
        window.location.href = 'https://www.google.com/';
      }
    }, 1000);
  });