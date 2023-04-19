import { Button, TextField, Switch, FormGroup, FormControlLabel } from '@mui/material'

function FormSingUp() {
  return (
    <form action=''>
      <TextField
        id='name'
        label='Nombre'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='lastName'
        label='Apellido'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='email'
        label='Email'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch />}
          label='Promociones'
        />
        <FormControlLabel
          control={<Switch />}
          label='Novedades'
        />
      </FormGroup>
      <Button variant='contained'>Registrarse</Button>
    </form>
  )
}

export default FormSingUp
