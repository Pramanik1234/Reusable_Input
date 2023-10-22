import * as yup from "yup";

export const expanseSchema = yup.object().shape({
  name: yup.string().max(140).required("Please enter Name"),
  age: yup
    .number()
    .positive()
    .integer()
    .required("Please enter your age"),
  address:yup.string().min(4).required("Please enter your name"),
  message:yup.string().min(5).required("Please enter message")
});
