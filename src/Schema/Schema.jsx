import * as Yup from "yup";

const Schema = Yup.object({
  email: Yup.string().email().required("Please enter correct email"),
  password: Yup.string().min(6).required("Please enter correct password"),
});

export default Schema;

const newLocal = "password";
export const registrationSchema = Yup.object({
  firstName: Yup.string().min(2).required("Please enter First Name"),
  lastName: Yup.string().min(2).required("Please enter Last Name"),
  email: Yup.string().email().required("Please enter correct email"),
  phone: Yup.number().min(10).required("Enter Valid Number "),
  password: Yup.string().min(6).required("Please enter correct password"),
  cpassword: Yup.string()
    .required()
    .oneOf([Yup.ref(newLocal), null], "Password Must Match"),
});
