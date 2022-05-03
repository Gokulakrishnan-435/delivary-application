import React, { useState } from 'react'
import './component.css'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
// import { Link } from 'react-router-dom';
const Login = () => {
     let [state, setstate] = useState({
       email: "",
       password: "",
       loading: false,
     });
     let { email, password, loading } = state;
     let handleChange = e => {
       let { name, value } = e.target;
       setstate({ ...state, [name]: value });
     };

     let handleSubmit = async e => {
       e.preventDefault();
       try {
         setstate({ loading: true });
         let userdata = await firebase
           .auth()
           .signInWithEmailAndPassword(email, password);
         // console.log(userdata);
         if (userdata.user.emailVerified === true) {
           toast.success(`sucessfully ${email} has been logged in`);
        //    history.push("./");
         } else {
        //    history.push("./login");
           toast.error(
             `email has not yet verified go ${email} verify then login`
           );
         }
       } catch (error) {
         toast.error(error.message);
       }
       setstate({ loading: false });
     };
    return (
      <div className="container my-4">
        <div className="col-md-4 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="btnBlock">
              <button className="btn1 ">
                <i
                  className="fab fa-facebook "
                  style={{ fontSize: "20px", paddingRight: "20px" }}
                ></i>
                Sign in Facbook
              </button>
            </div>
            <div className="btnBlock">
              <button className="btn2">
                <i
                  class="fab fa-google"
                  style={{ fontSize: "20px", paddingRight: "20px" }}
                ></i>
                Sign in Google
              </button>
            </div>
            <div className="btnBlock">
              <button className="btn3">
                <i
                  class="fad fa-mobile-android"
                  style={{ fontFamily: "30px", paddingRight: "20px" }}
                ></i>
                Sign in Phone number
              </button>
            </div>
            <p className="orBlock">
              <strong>or</strong>
            </p>

            <div className="mb-3 form-group">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email address or username"
                required
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="create a password"
                required
                value={password}
                onChange={handleChange}
              />
            </div>
            <div>
              <Link to="Signup">Forget password ?</Link>
            </div>

            <button type="submit" className="btn btn-success">
              {loading === true ? "Loding" : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
}

export default Login
