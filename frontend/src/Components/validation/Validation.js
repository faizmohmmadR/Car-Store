import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup.string().required("this field is requred"),
  lastName: yup.string().required("this field is requred").max(24).min(3),
  userName: yup.string().required("this field is required").max(24).min(3),
  email: yup.string().email("it is not email format"),
  phone: yup.string("it must be string"),
  password: yup.string().min(6).max(12),
  userType: yup.string(),
});
