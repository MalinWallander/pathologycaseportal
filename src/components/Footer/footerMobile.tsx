import Logo from "../../assets/PathologyCasePortal_logo2.png";
import "./footerMobile.css";

function FooterMobile() {
  return (
    <div className='footerMobileContainer'>
      <img src={Logo} alt='Logo' className='logoMobileFooter' />
      <div className='adressFooterContainer'>
        Karolinska Institutet <br />
        Department of Oncology-Pathology
        <br />
        Anna Steckséns gata 30A, D2:04
        <br />
        171 64 Solna
      </div>
    </div>
  );
}

export default FooterMobile;
