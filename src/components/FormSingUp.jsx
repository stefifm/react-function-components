import { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, TextField, Switch, FormGroup, FormControlLabel } from '@mui/material'

function FormSingUp({ handleSubmit }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [promocion, setPromocion] = useState(false)
  const [novedad, setNovedad] = useState(false)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit({
          firstName,
          lastName,
          email,
          promocion,
          novedad,
        })
      }}>
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
          control={
            <Switch
              checked={promocion}
              onChange={(e) => setPromocion(e.target.checked)}
            />
          }
          label='Promociones'
        />
        <FormControlLabel
          control={
            <Switch
              checked={novedad}
              onChange={(e) => setNovedad(e.target.checked)}
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

FormSingUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default FormSingUp
