import { useState } from 'react'
import { Button, TextField, Switch, FormGroup, FormControlLabel } from '@mui/material'

function FormSingUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <form action=''>
      <TextField
        id='name'
        label='Nombre'
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={(e) => {
          setFirstName(e.target.value)
        }}
        value={firstName}
      />
      <TextField
        id='lastName'
        label='Apellido'
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <TextField
        id='email'
        label='Email'
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
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
