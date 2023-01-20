import "./register.css";
// import useAuthContext from "../../hooks/useAuthContext";
import axios from "axios";
import { Link,  useNavigate } from "react-router-dom";
import { useState } from "react";
import { userInputs } from "./UserInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { registrationSchema } from "../Schema/Schema";
import { useDispatch, useSelector } from "react-redux";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
      },
      validationSchema: registrationSchema,
      onSubmit: (values) => {
        dispatch({
          type: "REGISTER",
          payload: {
            id: new Date().getTime(),
            ...values,
          },
        });
        navigate("/login");
      },
    });
  console.log(users);
  // const [credentials, setCredentials] = useState({
  //   userName: "",
  //   password: "",
  //   email: "",
  //   phone: "",
  //   country: "",
  //   city: "",
  // });
  //   const { user, loading, error, dispatch } = useAuthContext();

  // const navTo = useNavigate();

  // const handleChange = (e) => {
  //   setCredentials((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  // };
  // const handleregister = async (e) => {
  //   e.preventDefault();
  //   let count = 0;
  //   for (let key in credentials) {
  //     if (credentials[key] === "" || credentials[key] === "") {
  //       count = count + 1;
  //     }
  //   }

  //   try {
  //     if (count === 0) {
  //       const res = await axios.post("/api/auth/register", credentials, {
  //         withCredentials: true,
  //       });
  //       const message = res.data;
  //       navTo("/login", { state: { message } });
  //     } else {
  //       toast.error("Enter all Fields First", {
  //         position: "top-right",
  //         autoClose: 2000,
  //       });
  //     }
  //   } catch (err) {
  //     toast.error(err.response.data.message);
  //     console.log(err);
  //   }
  // };

  return (
    <div className="register">
      <form className="rcontext registerContainer" onSubmit={handleSubmit}>
        <div className="all_input_container">
          {userInputs.map((input, i) => (
            <div className="indi_input" key={input.name}>
              <label>{input.label}</label>
              <input
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                value={values[i]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors[`${input.name}`] && touched[`${input.name}`] ? (
                <span style={{ color: "red " }}>
                  {errors[`${input.name}`]}{" "}
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <button type="submit" className="loginButtonr">
          Register{" "}
        </button>
        <Link to="/login">
          <span className="registerLink">Log In</span>{" "}
        </Link>
      </form>

      {/* /*needed for the circles *\ */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Register;
