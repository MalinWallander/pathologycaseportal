import FooterDesktop from "./footerDesktop";
import FooterMobile from "./footerMobile";
import "./footer.css";

function Footer() {
  return (
    <div className='footerContainer'>
      <div className='footerSmallScreen'>
        <FooterMobile />
      </div>
      <div className='footerBigScreen'>
        <FooterDesktop />
      </div>
    </div>
  );
}

export default Footer;
