import "./aboutPage.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";

function AboutPage() {
  return (
    <>
      <div className='pageContainer'>
        <Header />
        <div className='aboutPageContainer'>
          <h1 className='titlePage'>About pathology case portal</h1>
          <p>
            This initiative seeks to enhance the success of medical research on
            rare tumors by addressing key challenges in data sharing,
            collaboration, and knowledge validation. Rare tumors are inherently
            difficult to study due to their low incidence, making it challenging
            to gather sufficient data or validate findings. To tackle these
            issues, we have developed a user-friendly digital repository
            designed to streamline the process of contributing and accessing
            information.
          </p>
          <p>
            The repository allows researchers and clinicians to upload case data
            efficiently, ensuring that even the rarest diagnoses are
            represented. It also provides powerful search tools for identifying
            molecular targets and rare tumor diagnoses, enabling users to
            quickly find relevant information. By simplifying these processes,
            the platform fosters greater participation and builds a robust,
            centralized resource for the global research community.
          </p>
          <p>
            Facilitating collaboration is a central goal of this initiative.
            Research on rare tumors often occurs in isolated efforts, limiting
            the scope and impact of findings. By creating a shared platform, we
            aim to connect research groups, encourage knowledge exchange, and
            promote collective problem-solving. This collaborative model
            supports the verification of novel molecular discoveries and
            provides opportunities for pooling resources and expertise.
          </p>{" "}
          <p>
            A major benefit of this approach is the ability to generate larger,
            high-quality datasets. Aggregating data from diverse sources not
            only strengthens the reliability of research but also increases the
            likelihood of publication in leading journals. With larger datasets,
            researchers can uncover meaningful insights and translate
            discoveries into clinical advancements more effectively.
          </p>{" "}
          <p>
            In summary, this initiative is about breaking down barriers in rare
            tumor research, fostering collaboration, and enabling progress. By
            empowering researchers with better tools and a collaborative
            environment, we aim to accelerate discoveries and improve outcomes
            for patients with rare cancers.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
