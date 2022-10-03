import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import DrawerReader from "./../DrawerReader/DrawerReader";
const FeedBackModal = () => {
  const { register, handleSubmit } = useForm();

  const [country, setCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  // all country fetch
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  // submit form
  const onSubmit = (data) => {
    if (!validator.isEmail(data.email)) {
      setErrorEmail("Please enter a valid e-mail");
    }

    if (!validator.isAlphanumeric(data.phone)) {
      setErrorPhone("Please enter a valid number");
    }
    console.log(data);
  };

  // reset error
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorEmail("");
      setErrorPhone("");
    }, 2000);
    return () => clearTimeout(timer);
  });
  // search function
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearchCountry(searchWord);
    const newFilter = country.filter((value) => {
      return value.name.common
        .toLowerCase()
        .includes(searchCountry.toLowerCase());
    });

    if (searchWord === "") {
      setCountry([]);
    } else {
      setCountry(newFilter);
    }
  };
  // console.log(country);

  return (
    <div className="card border-0 readerCard">
      <div className="card-body p-2">
        <h5>Have a Feedback?</h5>
        <div
          className="p-2 feedbackButton btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          We’re Listening!
        </div>
      </div>
      {/* modal start*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog drawer-dialog">
          <div className="modal-content drawer-content">
            <div className="modal-body ">
              <div className="row gx-5 container">
                {/* drawer start */}
                <div className="col-md-4">
                  <DrawerReader />
                  <div className="readerCard mt-4 p-2 bg-white">
                    <div className="card-body p-2">
                      <h5>Have a Feedback?</h5>
                      <div className="p-2 feedbackModalButton btn">
                        We’re Listening!
                      </div>
                    </div>
                  </div>
                </div>
                {/* drawer end */}
                {/* form start */}
                <div className="col-md-8 mt-2 text-start">
                  <h5>Thank you so much for taking the time! </h5>
                  <p>Please provide the below details!</p>
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                    <p className="mb-1">First Name:</p>
                    <input
                      {...register("firstName")}
                      placeholder="First Name"
                    />
                    <br />
                    <p className="mb-1">Last Name:</p>
                    <input {...register("lastName")} placeholder="Last Name" />
                    <br />
                    <p className="mb-1">Address</p>
                    <input
                      {...register("address")}
                      placeholder="Enter your full Postal Address"
                    />
                    <br />
                    <p className="mb-1">Country</p>
                    <input
                      {...register("countryName")}
                      onChange={handleFilter}
                      placeholder=""
                    />
                    <br />
                    <p className="mb-1">Email ID:</p>
                    <div className="d-flex align-items-center">
                      <input
                        {...register("email")}
                        placeholder="example@sample.com"
                        className="mb-0"
                      />
                      <p className="text-danger mb-0 ms-2">{errorEmail}</p>
                    </div>

                    <br />
                    <p className="mb-1">Phone Number:</p>
                    <div className="d-flex flex-wrap">
                      <input
                        {...register("code")}
                        placeholder="+91"
                        className="mb-0"
                      />
                      <input
                        {...register("phone")}
                        className="ms-2  mb-0"
                        placeholder="123456789"
                      />
                    </div>
                    <br />
                    <p className="text-danger m-0">{errorPhone}</p>

                    <button type="submit" className="submit mt-2 border-0 p-2">
                      Submit Feedback
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackModal;
