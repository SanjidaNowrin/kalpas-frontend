import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
const FeedBackModal = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (!validator.isEmail(data.email)) {
      setError("Please enter a valid e-mail");
    }
    if (!validator.isAlphanumeric(data.phone)) {
      setError("Please enter a valid number");
    }
    console.log(data);
  };
  const [country, setCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [error, setError] = useState("");
  // console.log(searchCountry);
  // all country fetch
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
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
    <div className="mt-5 card border-0 readerCard">
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
      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-md-4">
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
                </div>
                <div className="col-md-8">
                  <h6>Thank you so much for taking the time! </h6>
                  <p>Please provie the below details!</p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <p>First Name:</p>
                    <input
                      {...register("firstName")}
                      placeholder="First Name"
                    />
                    <br />
                    <p>Last Name:</p>
                    <input {...register("lastName")} placeholder="Last Name" />
                    <br />
                    <p>Address</p>
                    <input
                      {...register("address")}
                      placeholder="Enter your full Postal Address"
                    />
                    <br />
                    <p>Country</p>
                    <input
                      {...register("countryName")}
                      onChange={handleFilter}
                      placeholder=""
                    />
                    <br />
                    <p>Email ID:</p>
                    <input
                      {...register("email")}
                      placeholder="example@sample.com"
                    />
                    {error}
                    <br />
                    <p>Phone Number:</p>
                    <input {...register("code")} placeholder="+91" />
                    <input {...register("phone")} placeholder="123456789t" />
                    <br />
                    <input type="submit" />
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
