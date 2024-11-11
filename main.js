const usabilidadBtn = document.getElementById('usabilidad-btn');
const accesibilidadBtn = document.getElementById('accesibilidad-btn');
const contenido = document.getElementById('contenido');
const usabilidad = document.getElementById('usabilidad');
const accesibilidad = document.getElementById('accesibilidad');

usabilidadBtn.addEventListener('click', () => {
    usabilidad.classList.add('active');
    accesibilidad.classList.remove('active');
    usabilidadBtn.classList.add('active');
    accesibilidadBtn.classList.remove('active');
});

accesibilidadBtn.addEventListener('click', () => {
    accesibilidad.classList.add('active');
    usabilidad.classList.remove('active');
    accesibilidadBtn.classList.add('active');
    usabilidadBtn.classList.remove('active');
});