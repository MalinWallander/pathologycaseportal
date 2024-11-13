import "./footerDesktop.css";
import Logo from "../../assets/PathologyCasePortal_logo2.png";

function FooterDesktop() {
  return (
    <div className='footerDesktopContainer'>
      <img src={Logo} alt='Logo' className='logoDesktopFooter' />
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

export default FooterDesktop;
