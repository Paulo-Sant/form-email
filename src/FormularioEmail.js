import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormularioEmail = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Endereço de e-mail inválido')
        .required('O campo e-mail é obrigatório'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioEmail;
