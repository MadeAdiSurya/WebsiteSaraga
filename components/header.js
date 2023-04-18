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
                    <li><a class="btn pesan" href="../src/ticket-reservation.html">Pesan</a></li>
                    <li><a href="../src/home.html">Beranda</a></li>
                    <li><a href="../src/laman-bantuan-copy.html">Bantuan</a></li>
                    <li><a class="profile-icon" href="../src/profile.html"></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </header>`;
  }
}

customElements.define("header-elements", Header);
