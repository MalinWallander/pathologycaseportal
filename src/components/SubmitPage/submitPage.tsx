import Header from "../Header/header";
import "./submitPage.css";
import { useForm, SubmitHandler } from "react-hook-form";

// Date submitted: [automatically generated upon submission]
// Case ID: generated

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
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
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
              <option value='soft tissue and bone'>Soft tissue and bone</option>
              <option value='eye and orbit'>Eye and orbit</option>
              <option value='skin'>Skin</option>
              <option value='heamatolymphoid'>Heamatolymphoid</option>
              <option value='head and neck'>Head and neck</option>
              <option value='endocrine and neuroendocrine'>
                Endocrine and neuroendocrine
              </option>
              <option value='urinary and male genital'>
                Urinary and male genital
              </option>
              <option value='paedriatic'>Paedriatic</option>
              <option value='cns'>CNS</option>
              <option value='female genital'>Female genital</option>
              <option value='breast'>Breast</option>
              <option value='digestive system'>Digestive system</option>
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
              <option value='rna'>RNA only</option>
              <option value='dna'>DNA only</option>
              <option value='skin'>DNA and RNA</option>
              <option value='na'>n:a</option>
            </select>
          </div>
          <div className='inputComponentSubmitCase'>
            <label className='inputLabel'>Additional comment</label>
            <input {...register("comment")} className='formInput' />
          </div>
          <input type='submit' className='recallCaseButton' />
        </form>
      </div>
    </>
  );
}

export default SubmitPage;
