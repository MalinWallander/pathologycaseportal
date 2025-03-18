import "./firstPage.css";
import Header from "../Header/header";
import Books from "../../assets/books.avif";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div className='pageContainer'>
      <Header />
      <div className='firstPageContainer'>
        <img className='imageFirstPage' src={Books} alt='picture of books' />
        <h1 className='titlePage'>Welcome to Pathology Case Portal</h1>
        <div className='infoAndButtons'>
          <p className='infoText'>
            Welcome to Pathology Case Portal. This web application was
            established to facilitate pathologists to connect over rare cases.
            We hope that you upload rare cases to the open portal and use it to
            you identify similar cases. In the end, we wish that you move from
            publishing case reports to case series. If you do connect through
            this application, feel free to mention it in the acknowledgements.
          </p>
          <div className='buttonContainerFirstPage'>
            <Link to={"/cases"} className='titleDesktopNav'>
              <button className='navigationButtonFirstPage'>
                See all cases
              </button>
            </Link>
            <Link to={"/submit"} className='titleDesktopNav'>
              <button className='navigationButtonFirstPage'>
                Submit a case
              </button>
            </Link>
            {/* <Link to={"/about"} className='titleDesktopNav'>
              <button className='navigationButtonFirstPage'>
                More about this project
              </button>
            </Link> */}
            <Link to={"/contact"} className='titleDesktopNav'>
              <button className='navigationButtonFirstPage'>Contact us</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      {/* <CaseCard /> */}
    </div>
  );
}

export default FirstPage;
