import "../../design/footer.css";

export function FooterComponents() {
  const detectUserAgency = () => {
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");

    if (isIOSChrome) {
    } else if (
      isChromium !== null &&
      typeof isChromium !== "undefined" &&
      vendorName === "Google Inc." &&
      isOpera === false &&
      isIEedge === false
    ) {
    } else {
      // FIXME 한번만 눌러도 꺼지게하기
      window.alert("현재 페이지는 Chrome에 최적화 되어있습니다.");
    }
  };
  detectUserAgency();

  return (
    <div className="footer-div">
      <footer>
        <div id="footer-contact">
          <p id="footer-contact">©Elice AI Track 3기 16팀 식스틴</p>
          <p id="footer-contact">contact : @sixteen</p>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponents;
