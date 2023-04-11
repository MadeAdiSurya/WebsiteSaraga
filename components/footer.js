class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<footer>
        <div class="footer-wrapper">
          <div class="logo-saraga footer">
            <img src="../img/logo-saraga-footer.svg" alt="" />
          </div>
          <div class="headline-footer">
            <div class="footer-layanan">
              <h4>Layanan</h4>
              <div class="footer-description layanan">
                <h5>Explore</h5>
                <h5>Reservasi Sarana Olahraga</h5>
                <h5>Beli Tiket</h5>
              </div>
            </div>
            <div class="footer-bantuan">
              <h4>Bantuan</h4>
              <div class="footer-description bantuan">
                <h5>FAQ</h5>
              </div>
            </div>
            <div class="footer-riwayat">
              <h4>Riwayat</h4>
              <div class="footer-description riwayat">
                <h5>Riwayat Pemesanan</h5>
              </div>
            </div>
            <div class="footer-pembayaran">
              <h4>Pembayaran</h4>
              <div class="footer-description pembayaran">
                <div class="payment-support">
                  <a href=""><img src="../img//qris.svg" alt="" /></a>
                  <a href=""><img src="../img//dana.svg" alt="" /></a>
                  <a href=""><img src="../img//shopeepay.svg" alt="" /></a>
                  <a href=""><img src="../img//gopay.svg" alt="" /></a>
                  <a href=""><img src="../img//ovo.svg" alt="" /></a>
                  <a href=""><img src="../img//mandiri.svg" alt="" /></a>
                  <a href=""><img src="../img//visa.svg" alt="" /></a>
                  <a href=""><img src="../img//master.svg" alt="" /></a>
                  <a href=""><img src="../img//bni.svg" alt="" /></a>
                  <a href=""><img src="../img//bca.svg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="copyright">
              <a href=""><img src="../img/copyright.svg" alt="" /></a>
              <h4>2022 Saraga ITB</h4>
            </div>
            <div class="social-media">
              <a href=""><img src="../img/facebook.svg" alt="" /></a>
              <a href=""><img src="../img/instagram.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </footer>`;
  }
}

customElements.define("footer-elements", Footer);
