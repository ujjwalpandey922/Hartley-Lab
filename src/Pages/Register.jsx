import "./register.css";
import { Link,  useNavigate } from "react-router-dom";
import { userInputs } from "./UserInput";
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
     
    </div>
  );
};
export default Register;
