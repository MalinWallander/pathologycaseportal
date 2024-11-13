import "./aboutPage.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";

function AboutPage() {
  return (
    <>
      <div className='aboutPageContainer'>
        <Header />
        <div className='contentPage'>
          <h1 className='titlePage'>About pathology case portal</h1>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
