// === dodanie trybu czarnego (ze istnieje klasa taka) przez to mozna go oscylowac
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("ciemny");
});

// === TRYB CIEMNY funkcja ktora nasluchuje klikniecia przycisku tryb, ktory klikniety zamienia na ciemny a pozniej na jasny
document.addEventListener('DOMContentLoaded', () => {

  const btn = document.getElementById('tryb');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('ciemny');
    btn.textContent = document.body.classList.contains('ciemny')
      ? 'Tryb jasny'
      : 'Tryb ciemny';
  });

  // === MAPA (LEAFLET) mapa, ktora ma przypiete najciekawsze miejsca w gdansku, ktore wybralem i zdjecia dodalem
  const mapa = L.map('mapa-leaflet').setView([54.352, 18.646], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(mapa);

  L.marker([54.409, 18.576]).addTo(mapa).bindPopup("Wrzeszcz");
  L.marker([54.433, 18.584]).addTo(mapa).bindPopup("Przymorze");
  L.marker([54.347, 18.648]).addTo(mapa).bindPopup("Gdańsk Główny");
  L.marker([54.425, 18.600]).addTo(mapa).bindPopup("Plaża Jelitkowo");

  // === DYNAMICZNE KOMENTARZE czyli ze dodaja sie tam gdzie sa 2 wyzsze ale po odswiezeniu strony znikaja gdyz nie ma bazy danych podpietaj i wogole nie ma czyli leca w eter i nie zapisuja sie
  const przycisk = document.getElementById('przycisk');
  const textarea = document.querySelector('.comment-form textarea');
  const commentBox = document.querySelector('.comments');

  przycisk.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (text) {
      const div = document.createElement('div');
      div.classList.add('comment');
      div.innerHTML = `<strong>Użytkownik:</strong> ${text}`;
      commentBox.appendChild(div);
      textarea.value = '';
    }
  });

  // === ANIMACJE POJAWIANIA SIĘ (scroll reveal) jak strone odswieze rzeczy leca od dolu do gory i sie pojawiaja 
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  });

  document.querySelectorAll('#al > div, section, footer div').forEach(el => observer.observe(el));
});
const textarea = document.querySelector(".comment-form textarea");

// FAQ – rozwijanie
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".accordionbtn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const info = btn.nextElementSibling;

      btn.classList.toggle("active");

      if (info.style.maxHeight) {
        info.style.maxHeight = null;
      } else {
        info.style.maxHeight = info.scrollHeight + "px";
      }
    });
  });
});

// Po załadowaniu strony włącz tryb ciemny
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("ciemny");
});