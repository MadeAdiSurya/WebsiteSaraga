class UnregisteredHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `        <header>
    <div class="wrapper">
      <div class="nav">
        <div class="logo-saraga">
          <img src="../img/logo-saraga.png" alt="logo-saraga" />
        </div>
        <div class="menu-navbar">
          <ul>
            <li><a href="#">BERANDA</a></li>
            <li><a href="#">BANTUAN</a></li>
            <li><a class="btn pesan" href="#">REGISTER</a></li>
            <li><a class="btn blue" href="#">LOGIN</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>`;
  }
}

customElements.define("header-unregistered", UnregisteredHeader);
