import { SubmitHandler, useForm } from "react-hook-form";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import { useState } from "react";
import "./contactPage.css";
import ContactPopup from "./contactPopup";
import baseUrl from "../../constants";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

function ContactPage() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<Inputs>();
  const [isContactPopupVisible, setIsContactPopupVisible] = useState(false);

  const toggleContactPopup = () => {
    setIsContactPopupVisible(!isContactPopupVisible);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const jsonData = JSON.stringify(data);

    await fetch(`http://${baseUrl}/email/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    }).then(() => {
      reset();
      toggleContactPopup();
    });
  };
  return (
    <div>
      <div className='pageContainer'>
        <Header />
        <div className='contactPageContainer'>
          <h1 className='titlePage'>Contact us</h1>
          <p className='infoText'>
            If you wish to get in touch with the people working on this project,
            please fill out the form below. We will get back to you as soon as
            possible.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='formContactContainer'
          >
            <div className='inputComponentContactPage'>
              <label className='inputLabel'>Your name</label>
              <input
                {...register("name", { required: true })}
                className='formInput'
              />
              {errors.name && (
                <span className='errorMessage'>This field is required</span>
              )}
            </div>
            <div className='inputComponentContactPage'>
              <label className='inputLabel'>Email</label>
              <input
                {...register("email", { required: true })}
                className='formInput'
              />
              {errors.email && (
                <span className='errorMessage'>This field is required</span>
              )}
            </div>
            <div className='inputComponentContactPage'>
              <label className='inputLabel'>Message</label>
              <textarea
                {...register("message", { required: true })}
                className='textAreaInput'
              />
              {errors.message && (
                <span className='errorMessage'>This field is required</span>
              )}
            </div>
            <input type='submit' className='contactButton' />
          </form>
        </div>
        {isContactPopupVisible && (
          <ContactPopup toggleContactPopup={toggleContactPopup} />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default ContactPage;
