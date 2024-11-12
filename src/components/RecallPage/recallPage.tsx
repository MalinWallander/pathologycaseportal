import "./recallPage.css";
import Header from "../Header/header";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  caseID: string;
  note: string;
};

function RecallPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <Header />
      <div className='recallPageContainer'>
        <h1 className='titlePage'>Recall case</h1>
        <p className='infoText'>
          If you would like to recall a case you have submitted, please submit
          this form and we will delete the case from our database. Make sure you
          give the same information as when you submitted the case.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='formRecallCaseContainer'
        >
          <div className='inputComponentRecallCase'>
            <label className='inputLabel'>Your name</label>
            <input
              {...register("name", { required: true })}
              className='formInput'
            />
            {errors.name && (
              <span className='errorMessage'>This field is required</span>
            )}
          </div>
          <div className='inputComponentRecallCase'>
            <label className='inputLabel'>Email adress</label>
            <input
              {...register("email", { required: true })}
              className='formInput'
            />
            {errors.email && (
              <span className='errorMessage'>This field is required</span>
            )}
          </div>
          <div className='inputComponentRecallCase'>
            <label className='inputLabel'>Case ID</label>
            <p className='inputExtraInfo'>
              *Recieved in confirmation email when submitted
            </p>
            <input
              {...register("caseID", { required: true })}
              className='formInput'
            />
            {errors.caseID && (
              <span className='errorMessage'>This field is required</span>
            )}
          </div>
          <div className='inputComponentRecallCase'>
            <label className='inputLabel'>Additional notes</label>
            <input {...register("note")} className='formInput' />
          </div>
          <input type='submit' className='recallCaseButton' />
        </form>
      </div>
    </>
  );
}

export default RecallPage;
