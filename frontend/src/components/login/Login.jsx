import React, { useState, useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import login from "./login.jpg";
import AxiosInstance from "../../utils/axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (window.location.pathname !== "/login") return;
    (async () => {
      try {
        // https://knit-erp.onrender.com/
        const resp = await AxiosInstance.get("api/v1/me");
        console.log(resp);
        navigate(`/dashboard/${resp.data.user.role}`);
      } catch (err) {}
    })();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await AxiosInstance.post("api/v1/login", { email, password })
        .then((res) => {
          console.log(res.data.user);
          navigate(`/dashboard/${res.data.user.role}`);
          toast(`${res.data.message}`);
        })
        .catch((e) => {
          toast.error("Wrong Credentials!");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section class="h-screen p-5">
      <div class="h-full">
        <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img src={login} class="w-full" alt="Sample image" />
          </div>
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 shadow-2xl rounded-xl">
            <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
                Sign In
              </p>
            </div>
            <form className="p-5" method="POST" onSubmit={submitHandler}>
              {/* <!-- Email input --> */}
              <div class="relative mb-6" data-te-input-wrapper-init>
                <label
                  for="email"
                  // class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Email address
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  class="peer block min-h-[auto] w-full rounded border-2 border-blue-200 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear  dark:text-neutral-200 dark:placeholder:text-neutral-200 "
                  id="email"
                  placeholder="Enter a valid mail"
                />
              </div>

              {/* <!-- Password input --> */}

              <div class="relative mb-6" data-te-input-wrapper-init>
                <label
                  for="password"
                  // class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  class="peer block min-h-[auto] w-full rounded border-2 border-blue-200 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear  dark:text-neutral-200 dark:placeholder:text-neutral-200 "
                  id="password"
                  placeholder="Enter valid password"
                />
              </div>

              <div class="text-center lg:text-left">
                <button
                  type="submit"
                  class="inline-block rounded bg-blue-300 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
