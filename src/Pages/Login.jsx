import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import Schema from "../Schema/Schema";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: Schema,
      onSubmit: (values) => {
        const payload = users.find(
          (e) => e.email === values.email && e.password === values.password
        );
        if (payload) {
          dispatch({ type: "LOGIN", payload: payload });
          localStorage.setItem("user", JSON.stringify(payload));
          navigate("/");
        } else {
          toast.error("Wrong Credentials", {
            position: "top-right",
            autoClose: 2000,
          });
        }
      },
    });

  return (
    <div className="login">
      <form
        action="form"
        onSubmit={handleSubmit}
        className="context loginContainer"
      >
        <div className="email-login">
          <label>Email</label>
          <input
            type="text"
            placeholder="ENTER Email...."
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? <span>{errors.email}</span> : null}
        </div>
        <div className="pass-login">
          <label>Password</label>
          <input
            type="password"
            placeholder="ENTER PASSWORD...."
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <span>{errors.password}</span>
          ) : null}
        </div>

        <button type="submit" className="loginButton">
          LOG IN
        </button>
        <Link to="/register">
          <span className="registerLink">Register Frist</span>{" "}
        </Link>
      </form>

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

export default Login;
