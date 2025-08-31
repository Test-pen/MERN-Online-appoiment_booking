// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../context/DoctorContext";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Admin") {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password });
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
          toast.success("Admin logged in successfully!");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/doctor/login`, { email, password });
        if (data.success) {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
          toast.success("Doctor logged in successfully!");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  const handleLogout = () => {
    if (state === "Admin") {
      localStorage.removeItem("aToken");
      setAToken("");
      toast.success("Admin logged out successfully!");
    } else {
      localStorage.removeItem("dToken");
      setDToken("");
      toast.success("Doctor logged out successfully!");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold w-full text-center">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">Login</button>
        <button
          type="button"
          onClick={handleLogout}
          className="bg-red-500 text-white w-full py-2 rounded-md text-base mt-2"
        >
          Logout
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span onClick={() => setState("Doctor")} className="text-primary cursor-pointer underline">
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span onClick={() => setState("Admin")} className="text-primary cursor-pointer underline">
              Click Here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
