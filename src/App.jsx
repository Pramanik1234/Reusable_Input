import Input from "./Input";
import { useFormik } from "formik";
import { expanseSchema } from "./sceame";
import TextArea from "./TextArea";



function App() {

  const initialValues = {
    name: "",
    age:"",
    address:"",
    message:""
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: expanseSchema,
      onSubmit:(values, action) => {
        console.log(values);
        action.resetForm();
        alert("Your Form successfully Submited ")
      },
    });

  return(
    <div className='w-screen flex items-center justify-center p-4'>
      <form onSubmit={handleSubmit}  
      className='p-4 rounded-md shadow-[0px_0px_2px_2px_rgba(0,0,0,0.5)] w-full md:w-[600px] bg-gray-800 flex flex-col gap-4'>
         <Input
          name="name"
          type="text"
          placeholder="Enter your name"
          handleBlur={handleBlur}
          handleChange= {handleChange}
          errors = {errors.name}
          values={values.name}
          touched={touched.name}
         />
         <Input
          name="age"
          type="number"
          placeholder="Enter your age"
          handleBlur={handleBlur}
          handleChange= {handleChange}
          errors = {errors.age}
          values={values.age}
          touched={touched.age}
         />
         <Input
          name="address"
          type="text"
          placeholder="Enter your address"
          handleBlur={handleBlur}
          handleChange= {handleChange}
          errors = {errors.address}
          values={values.address}
          touched={touched.address}
         />
         <TextArea
          name="message"
          type="text"
          placeholder="Enter your message"
          handleBlur={handleBlur}
          handleChange={handleChange}
          errors={errors.message}
          values={values.message}
          touched={touched.message}
         />
        <button 
        type="submit" 
        className=' bg-gradient-to-r from-blue-500 to-blue-600 px-4 rounded-md py-1 mt-8  w-full font-mono text-lg'
        >SUBMIT
        </button>
      </form>
    </div>

  )
}

export default App;