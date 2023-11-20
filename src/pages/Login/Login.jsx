import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { googlePopUp } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const [disable, setDisable] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    form.reset();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User loggedIn successfully.",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  const googleSignIn = () => {
    googlePopUp().then().catch();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Login</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="Type the captcha above"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs mt-2"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disable}
                className="btn btn-primary"
                type="submit"
                value="Login Now"
              />
            </div>
          </form>
          <p className="text-center mb-2">
            New here? <Link to="/signUp">Please Sign Up!</Link>
          </p>
          <button className="btn" onClick={googleSignIn}>
            <b>Google</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
