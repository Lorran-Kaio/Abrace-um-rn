function mostrarSection(tipo) {
  const section = document.getElementById('section-content')
  let html = ''

  if (tipo !== undefined) {
    section.scrollIntoView({ behavior: 'smooth' })
  }

  if (tipo === 'money' || tipo === undefined) {
    html = `
      <div class="mt-5 bg-white rounded-4 p-3">
        <div class="qr-container">
          <h2 class="h3 mb-4 fw-semibold">Faça sua doação aqui:</h2>
          <div class="gap-3">
            <img class="qr-code" src="./assets/qrcode-pix.jpeg" width="200" height="auto" alt="QR Code">
            <h2 class="mt-2 px-3 fw-semibold">Chave PIX: 262.191.664-34</h2>
            <h2 class="mt-2 px-3 fw-semibold">Nome: Maria Cavalcanti Freire</h2>
            <h2 class="mt-2 px-3 fw-semibold">Banco: Banco do Brasil</h2>
            <button id="btnChavePix" class="mt-3 btn-donate">Copiar chave PIX</button>
          </div>
        </div>
      </div>
    `
  } else if (tipo === 'used') {
    html = `
      <div class="map-section mt-5 bg-white rounded-4 p-3">
        <h2 class="h3 mb-4 fw-semibold">Nosso ponto de coleta:</h2>

        <div class="mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0817433626507!2d-35.895171!3d-7.231516999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e3fd944fb89%3A0xcda786a5ecaa446e!2sR.%20do%20Progresso%2C%20228%20-%20Quarenta%2C%20Campina%20Grande%20-%20PB%2C%2058416-180!5e0!3m2!1spt-BR!2sbr!4v1746539154116!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        
        ${
          /* Quando a Unifacisa for um ponto de coleta, descomentar esse trecho. 
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15831.668590248479!2d-35.8833422!3d-7.2502702!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1dd56c7b510f%3A0x7f9090ed2cec933c!2sUNIFACISA%20-%20Centro%20Universit%C3%A1rio!5e0!3m2!1spt-BR!2sbr!4v1746539215198!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */
          ''
        }
      </div>
    `
  } else if (tipo === 'store') {
    html = `
      <style>
        .btn-visit-lojinha {
          display: inline-block;
          padding: 15px 30px;
          background-color: #f48494;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-size: 1.2em;
          transition: background-color 0.3s, transform 0.3s;
        }

        .btn-visit-lojinha:hover {
          background-color: #b10e70;
          transform: scale(1.05);
        }
      </style>
      <div class="mt-5 bg-white rounded-4 p-3">
        <h2 class="h3 mb-4 fw-semibold">Visite Nossa Lojinha Virtual!</h2>
        <p>
          Que tal apoiar uma causa especial e, ao mesmo tempo, levar para
          casa produtos lindos? Na nossa lojinha, todo o dinheiro arrecadado
          é destinado a ajudar mães e bebês em situação de vulnerabilidade.
        </p>
        <a href="lojinha.html" class="mt-4 btn-lojinha">Acesse a Lojinha Agora</a>
      </div>
    `
  }

  section.innerHTML = html
}

mostrarSection()

function copyPix() {
  navigator.clipboard.writeText('26219166434')
}

const btn = document.getElementById('btnChavePix')
btn.addEventListener('click', (e) => {
  copyPix()
  e.target.textContent = 'Chave PIX copiada!'
  e.target.disabled = true

  setTimeout(() => {
    e.target.textContent = 'Copiar chave PIX'
    e.target.disabled = false
  }, 2000)
})
