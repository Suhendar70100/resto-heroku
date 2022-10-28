class NavItem extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="#mainContent" class="skip-link">Skip to content ?</a>
    <header class="app-bar">
        <div class="app-bar__menu">
            <button id="hamburgerButton" aria-label="hamburger button">☰</button>
        </div>
        <div class="app-bar__brand">
            <h1>Resto Catalogue</h1>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a class="menu__link" href="#/home">Home</a></li>
                <li><a class="menu__link" href="#/favorite">Favorite</a></li>
                <li><a class="menu__link" href="https://github.com/Suhendar70100">About Us</a></li>
            </ul>
        </nav>
    </header>
        `;
  }
}

customElements.define('nav-item', NavItem);