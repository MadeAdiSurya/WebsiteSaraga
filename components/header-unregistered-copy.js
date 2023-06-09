class UnregisteredHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `        <header>
    <div class="wrapper">
      <div class="nav">
        <div class="logo-saraga">
          <img src="img/logo-saraga.png" alt="logo-saraga" />
        </div>
        <div class="menu-navbar">
          <ul>
            <li><a href="index.html">BERANDA</a></li>
            <li><a href="src/laman-bantuan.html">BANTUAN</a></li>
            <li><a class="btn pesan" href="src/register.html">REGISTER</a></li>
            <li><a class="btn blue" href="src/login.html">LOGIN</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>`;
  }
}

customElements.define("header-unregistered", UnregisteredHeader);
