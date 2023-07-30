import React, { useState } from "react";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [shopLocation, setshopLocation] = useState("");
  const [Pincode, setPincode] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here with the form data
    // You can make an API call or implement your own signup process
    console.log("Signup form submitted!");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Mobile Number:", mobileNumber);
    console.log("Shop Name:", shopName);
    console.log("Shop Address:", shopAddress);
    // console.log("shop Location:", shopLocation);
    // console.log("Pincode:", Pincode);
    // Reset form fields
    setUsername("");
    setEmail("");
    setPassword("");
    setMobileNumber("");
    setShopName("");
    setShopAddress("");
    setshopLocation("");
    setPincode("");
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          font: "poppins",
          fontSize: "49px",
        }}
      >
        SIGN-UP
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "55px",
            padding: "20px",
            width: "70%",
          }}
        >
          <form onSubmit={handleSignup}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: "20px",
              }}
            >
              <div>
                <label htmlFor="username">Vendor Name:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    width: "90%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                  }}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "90%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                  }}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "90%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                  }}
                />
              </div>
              <div>
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  style={{
                    width: "90%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                  }}
                />
              </div>
              <div>
                <label htmlFor="shopName">Shop Name:</label>
                <input
                  type="text"
                  id="shopName"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  style={{
                    width: "90%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                  }}
                />
              </div>
              <div>
                <label htmlFor="shopAddress">Shop Address:</label>
                <input
                  type="text"
                  id="shopAddress"
                  value={shopAddress}
                  onChange={(e) => setShopAddress(e.target.value)}
                  style={{
                    width: "90%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                  }}
                />
              </div>
              {/* <div>
                <label htmlFor="shopLocation">Location:</label>
                <input
                  type="text"
                  id="shopLocation"
                  value={shopLocation}
                  onChange={(e) => setshopLocation(e.target.value)}
                  style={{
                    width: "90%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                  }}
                />
              </div> */}
              {/* <div>
                <label htmlFor="Pincode">Pincode:</label>
                <input
                  type="text"
                  id="Pincode"
                  value={Pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  style={{
                    width: "90%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                  }}
                />
              </div> */}
            </div>
            <button
              type="submit"
              style={{
                width: "30%",
                alignItems: "center",
                marginLeft: "345px",
                marginTop: "10px",
                padding: "15px",
                background: "#FF7855",
                color: "white",
                border: "none",
                borderRadius: "25px",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              <a href='/home'>Sign-up</a>
            </button>
            <p className="Login-link">
              have an account? <a href="/LoginPage">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
