class AppHeader extends HTMLElement {
  connectedCallback() {
    const currentPage = window.location.pathname
    this.innerHTML = `
    <header class="app-header">
      <div class="container app-header-content">
        <a href="index.html" class="logo">
          <img src="assets/Logo.png" width="80" height="60" />
        </a>

        <div class="desktop-nav">
          <ul class="desktop-nav-links">
            <li>
              <a class="${currentPage === "/" ? "active" : ""}" href="/">Início</a>
            </li>
            <li>
              <a class="${currentPage === "/galeria.html" ? "active" : ""}" href="/galeria.html">Galeria</a>
            </li>
            <li>
              <a class="${currentPage === "/lojinha.html" ? "active" : ""}" href="/lojinha.html">Lojinha</a>
            </li>
            <li>
              <a class="${currentPage === "/voluntarie-se.html" ? "active" : ""}" href="/voluntarie-se.html">Voluntarie-se</a>
            </li>
            <li>
              <a class="${currentPage === "/sobre.html" ? "active" : ""}" href="/sobre">Sobre</a>
            </li>
          </ul>

          <div class="desktop-nav-buttons">
            <a class="botao pequeno-rosa" href="/receber.html">
              Receber
            </a>
            <a class="botao pequeno-azul" href="/doar-inicial.html">
              Doar
            </a>
          </div>
        </div>

        <div class="nav-toggle navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Abrir menu">
          <span class="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <div class="offcanvas sidebar-container offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <a href="index.html" class="logo">
              <img src="assets/Logo.png" width="80" height="60" />
            </a>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Fechar"></button>
          </div>

          <div class="offcanvas-body sidebar">
            <ul class="nav-links sidebar-nav-links">
              <li>
                <a class="${currentPage === "/" ? "active" : ""}" href="/">Início</a>
              </li>
              <li>
                <a class="${currentPage === "/galeria.html" ? "active" : ""}" href="/galeria.html">Galeria</a>
              </li>
              <li>
                <a class="${currentPage === "/lojinha.html" ? "active" : ""}" href="/lojinha.html">Lojinha</a>
              </li>
              <li>
                <a class="${currentPage === "/voluntarie-se.html" ? "active" : ""}" href="/voluntarie-se.html">Voluntarie-se</a>
              </li>
              <li>
                <a class="${currentPage === "/sobre.html" ? "active" : ""}" href="/sobre">Sobre</a>
              </li>
            </ul>

            <div class="sidebar-buttons">
              <a class="botao pequeno-rosa" href="/receber.html">
                Receber
              </a>
              <a class="botao pequeno-azul" href="/doar-inicial.html">
                Doar
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
`
  }
}

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-container">
          <div class="footer-left">
            <img src="./assets/LogoTexto.png" alt="LogoText" class="footer-logo" />
          </div>
          <div class="footer-right">
            <p>Acompanhe nas redes</p>
            <div class="social-icons">
              <a target="_blank" href="https://www.instagram.com/abraceumrn/">
                <img src="./assets/instagram.svg" alt="Instagram" />
              </a>
              <a target="_blank" href="https://abrir.link/bOXtq">
                <img src="./assets/wpp.svg" alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    `
  }
}

window.customElements.define('app-header', AppHeader);
window.customElements.define('app-footer', AppFooter);
