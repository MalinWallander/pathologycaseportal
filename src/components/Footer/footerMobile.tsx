import Logo from "../../assets/PathologyCasePortal_logo2.png";
import "./footerMobile.css";

function FooterMobile() {
  return (
    <div className='footerMobileContainer'>
      <img src={Logo} alt='Logo' className='logoMobileFooter' />
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

export default FooterMobile;
