import "./footerDesktop.css";
import Logo from "../../assets/PathologyCasePortal_logo2.png";

function FooterDesktop() {
  return (
    <div className='footerDesktopContainer'>
      <img src={Logo} alt='Logo' className='logoDesktopFooter' />
      <div className='adressFooterContainer'>
        Hosted by <br />
        Department of Oncology-Pathology
        <br />
        Karolinska Institutet
        <br />
      </div>
    </div>
  );
}

export default FooterDesktop;
