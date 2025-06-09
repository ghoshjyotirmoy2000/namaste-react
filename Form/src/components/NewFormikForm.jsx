import React, { useState } from 'react';
import { useFormik , Formik , Form , Field , ErrorMessage} from 'formik';
import * as Yup from 'yup'


// const NewFormikForm = () => {

//   const initialValues = {
//     name : "",
//     email : "",
//     contact : ""
//   };

//   const onSubmit = (values) => {
//     console.log("Form values",values)
//   };

//   const validationSchema = Yup.object({
//     name : Yup.string().required("This is a required field"),
//     email :  Yup.string().email("Format is not correct").required("This is a required field"),
//     contact :  Yup.string().required("This is a required field"),
//   });

//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validationSchema
//   })

//   console.log("Formik Form errors",formik.errors)
//   console.log("Formik Form vales",formik.values)
//   console.log("Formik Form visited",formik.touched)

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
//       <h2 className="text-xl font-bold mb-4">Formik Form</h2>
//       <form onSubmit={formik.handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1 font-medium">Name</label>
//           <input
//             type="text"
//             name="name"
//             className="w-full border p-2 rounded"
//             value={formik.values.name}
//             onBlur={formik.handleBlur}
//             onChange={formik.handleChange}
//           />
//           { formik.errors.name && formik.touched.name ? <div className='text-red-500'>{formik.errors.name}</div> : null}
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             className="w-full border p-2 rounded"
//             value={formik.values.email}
//             onBlur={formik.handleBlur}
//             onChange={formik.handleChange}
//           />
//           { formik.errors.email && formik.touched.email ? <div className='text-red-500'>{formik.errors.email}</div> : null}
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Contact</label>
//           <input
//             type="tel"
//             name="contact"
//             className="w-full border p-2 rounded"
//             value={formik.values.contact}
//             onBlur={formik.handleBlur}
//             onChange={formik.handleChange}
//           />
//           { formik.errors.contact && formik.touched.contact ? <div className='text-red-500'>{formik.errors.contact}</div> : null}
//         </div>

//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewFormikForm;



const NewFormikForm = () => {

  const initialValues = {
    name: "",
    email: "",
    contact: "",
  };

  const onSubmit = (values) => {
    console.log("Form values", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("This is a required field"),
    email: Yup.string()
      .email("Format is not correct")
      .required("This is a required field"),
    contact: Yup.string().required("This is a required field"),
  });


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema} 
      onSubmit={onSubmit}
    >
      
        <Form
          className="max-w-md mx-auto mt-10 p-4 border rounded shadow space-y-4" 
        >
          <h2 className="text-xl font-bold mb-4">Formik Form</h2>

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <Field
              type="text"
              name="name"
              className="w-full border p-2 rounded"
              />
            <ErrorMessage name = "name" component="div" className='text-red-500'/>
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage name = "email" component="div" className='text-red-500'/>
          </div>

          <div>
            <label className="block mb-1 font-medium">Contact</label>
            <Field
              type="tel"
              name="contact"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage name = "contact" component="div" className='text-red-500'/>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </Form>
     
    </Formik>
  );
};

export default NewFormikForm;


