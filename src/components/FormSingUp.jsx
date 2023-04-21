import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, TextField, FormGroup, FormControlLabel, Switch } from '@mui/material'

function FormSingUp() {
  const enviarForm = (data) => {
    console.log(data)
  }

  const { handleChange, handleSubmit, values, setFieldValue, errors } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      promocion: false,
      novedad: false,
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('El campo nombre es obligatorio')
        .min(3, 'El nombre debe tener al menos 3 caracteres'),
      lastName: Yup.string()
        .required('El campo apellido es obligatorio')
        .min(3, 'El apellido debe tener al menos 3 caracteres'),
      email: Yup.string().required('El campo email es obligatorio').email('El email no es válido'),
    }),

    onSubmit: enviarForm,
  })

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id='firstName'
        label='Nombre'
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={handleChange}
        name='firstName'
        value={values.firstName}
        error={!!errors.firstName}
        helperText={errors.firstName}
      />
      <TextField
        id='lastName'
        label='Apellido'
        variant='outlined'
        fullWidth
        margin='normal'
        name='lastName'
        onChange={handleChange}
        value={values.lastName}
        error={!!errors.lastName}
        helperText={errors.lastName}
      />
      <TextField
        id='email'
        label='Email'
        variant='outlined'
        type='email'
        fullWidth
        margin='normal'
        name='email'
        onChange={handleChange}
        value={values.email}
        error={!!errors.email}
        helperText={errors.email}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              onChange={(e) => {
                setFieldValue('promocion', e.target.checked)
              }}
              checked={values.promocion}
            />
          }
          label='Promociones'
        />
        <FormControlLabel
          control={
            <Switch
              onChange={(e) => {
                setFieldValue('novedad', e.target.checked)
              }}
              checked={values.novedad}
            />
          }
          label='Novedades'
        />
      </FormGroup>
      <Button
        type='submit'
        variant='contained'>
        Registrarse
      </Button>
    </form>
  )
}

export default FormSingUp
