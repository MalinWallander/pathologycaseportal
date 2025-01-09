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
            Start using Pathology Case Portal to search for a specific molecular
            markers other research groups may have found as well, or to announce
            your interest in a rare tumor subtype for which cohort size usually
            is a great problem when considering publication.
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
            <Link to={"/about"} className='titleDesktopNav'>
              <button className='navigationButtonFirstPage'>
                More about this project
              </button>
            </Link>
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
