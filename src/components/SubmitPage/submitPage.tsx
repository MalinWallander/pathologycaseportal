import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./submitPage.css";
import { useForm, SubmitHandler } from "react-hook-form";
import baseUrl from "../../constants";
import SubmitPopup from "./submitPopup";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  backupEmail: string;
  institution: string;
  tumorClass: string;
  anatomicalLocation: string;
  histologicalDiagnosis: string;
  genetics: string;
  methylationCluster: string;
  evidence: string;
  comment: string;
};

function SubmitPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [isSubmitPopupVisible, setIsSubmitPopupVisible] = useState(false);

  const toggleSubmitPopup = () => {
    setIsSubmitPopupVisible(!isSubmitPopupVisible);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const jsonData = JSON.stringify(data);

    await fetch(`http://${baseUrl}/case`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    }).then(() => {
      reset();
      toggleSubmitPopup();
    });
  };

  return (
    <div className='pageContainer'>
      <Header />
      <div className='submitPageContainer'>
        <h1 className='titlePage'>Submit case</h1>
        <p className='infoText'>
          Enter the information about your case in the form below. Make sure to
          not include any identifiable information. Your email adress will not
          be visible to others, only a way for us to connect you.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='formSubmitCaseContainer'
        >
          <div className='inputComponentSubmitCase'>
            <label className='inputLabel'>Your name*</label>
            <input
              {...register("name", { required: true })}
              className='formInput'
            />
            {errors.name && (
              <span className='errorMessage'>This field is required</span>
            )}
          </div>
          <div className='inputComponentSubmitCase'>
            <label className='inputLabel'>Email*</label>
            <input
              {...register("email", { required: true })}
              className='formInput'
            />
            {errors.email && (
              <span className='errorMessage'>This field is required</span>
            )}
          </div>
          <div className='inputComponentSubmitCase'>
            <label className='inputLabel'>Backup email</label>
            <input {...register("backupEmail")} className='formInput' />
          </div>
          <div className='inputComponentSubmitCase'>
            <label className='inputLabel'>Institution</label>
            <input {...register("institution")} className='formInput' />
          </div>
          <div className='inputComponentSubmitCase'>
            <label className='inputLabel'>Tumor class</label>
            <select {...register("tumorClass")} className='formInput'>
              <option value=''>Select...</option>
              <option value='Soft tissue and bone'>Soft tissue and bone</option>
              <option value='Eye and orbit'>Eye and orbit</option>
              <option value='Skin'>Skin</option>
              <option value='Heamatolymphoid'>Heamatolymphoid</option>
              <option value='Head and neck'>Head and neck</option>
              <option value='Endocrine and neuroendocrine'>
                Endocrine and neuroendocrine
              </option>
              <option value='Urinary and male genital'>
                Urinary and male genital
              </option>
              <option value='Paedriatic'>Paedriatic</option>
              <option value='CNS'>CNS</option>
              <option value='Female genital'>Female genital</option>
              <option value='Breast'>Breast</option>
              <option value='Digestive system'>Digestive system</option>
            </select>
          </div>
          <div className='inputComponentSubmitCase'>
            <label className='inputLabel'>Anatomical location</label>
            <input {...register("anatomicalLocation")} className='formInput' />
          </div>
          <div className='inputComponentSubmitCase'>
            <label className='inputLabel'>Histological diagnosis*</label>
            <input
              {...register("histologicalDiagnosis", { required: true })}
              className='formInput'
            />
            {errors.histologicalDiagnosis && (
              <span className='errorMessage'>This field is required</span>
            )}
          </div>
          <div className='inputComponentSubmitCase'>
            <label className='inputLabel'>Genetics*</label>
            <input
              {...register("genetics", { required: true })}
              className='formInput'
            />
            {errors.genetics && (
              <span className='errorMessage'>This field is required</span>
            )}
          </div>
          <div className='inputComponentSubmitCase'>
            <label className='inputLabel'>Methylation cluster</label>
            <input {...register("methylationCluster")} className='formInput' />
          </div>
          <div className='inputComponentSubmitCase'>
            <label className='inputLabel'>Evidence from</label>
            <select {...register("evidence")} className='formInput'>
              <option value=''>Select...</option>
              <option value='RNA only'>RNA only</option>
              <option value='DNA only'>DNA only</option>
              <option value='DNA and RNA'>DNA and RNA</option>
              <option value='n:a'>n:a</option>
            </select>
          </div>
          <div className='inputComponentSubmitCase'>
            <label className='inputLabel'>Additional comment</label>
            <input {...register("comment")} className='formInput' />
          </div>
          <input type='submit' className='submitCaseButton' />
        </form>
      </div>
      {isSubmitPopupVisible && (
        <SubmitPopup toggleSubmitPopup={toggleSubmitPopup} />
      )}
      <Footer />
    </div>
  );
}

export default SubmitPage;
