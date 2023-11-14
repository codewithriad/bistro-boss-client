import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        res.user;
        console.log(res.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Sign Up</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-700">This name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-700">This email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                })}
                placeholder="Password"
                className="input input-bordered"
              />

              {errors.password?.type === "required" && (
                <span className="text-red-700">This password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-700">
                  Password should be 6 character
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-700">
                  Password should be less than or equal 20 character
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-700">
                  Password should be 6 min character, 1 uppercase, 1 lowercase,
                  less or equal 20 character and 1 special character
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center mb-2">
            Already a user? <Link to="/login">Please Login!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
