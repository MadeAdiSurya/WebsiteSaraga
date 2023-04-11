class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<header>
            <div class="wrapper">
              <div class="nav">
                <div class="logo-saraga">
                  <img src="../img/logo-saraga.png" alt="logo-saraga" />
                </div>
                <div class="menu-navbar">
                  <ul>
                    <li><a class="btn pesan" href="#">Pesan</a></li>
                    <li><a href="#">Beranda</a></li>
                    <li><a href="#">Bantuan</a></li>
                    <li><a class="profile-icon" href="#"></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </header>`;
  }
}

customElements.define("header-elements", Header);
