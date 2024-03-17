import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useForm } from "react-hook-form";
import { useSignUpMutation } from "@/store/features/auth/authApi";
import useToast from "@/hooks/useTostMessage";
import Spinner from "@/components/global/Spinner";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [signUp, { data, isError, error, isLoading }] = useSignUpMutation();

  const { showToast } = useToast();

  const onSubmit = (data) => {
    signUp(data);
  };
  if (isError) {
    showToast(error.data, "error");
  } else if (data) {
    showToast(data.message, "success");
  }

  console.log("error data", error?.data);
  console.log("error d", error);

  return (
    <section className="bg-gray-50 py-32 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img className="mr-2" src={logo} alt="logo" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign Up to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label htmlFor="email" className="custom-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  className="custom-input"
                  placeholder="enter name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="custom-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  className="custom-input"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="custom-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password")}
                  placeholder="••••••••"
                  className="custom-input"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="custom-input"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="custom-label">
                      Remember me
                    </label>
                  </div>
                </div>
                <a className="custom-label">Forgot password?</a>
              </div>
              {isLoading ? (
                <Spinner />
              ) : (
                <button
                  type="submit"
                  className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign Up
                </button>
              )}

              <p className="text-sm font-light text-gray-500 ">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="font-medium text-purple-500 hover:underline "
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
