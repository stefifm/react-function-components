import { Button } from '@mui/material'
function FormSingUp() {
  return (
    <form action=''>
      <label>Nombre</label>
      <input type='text' />
      <label>Apellido</label>
      <input type='text' />
      <label>Email</label>
      <input type='email' />
      <label>Promociones</label>
      <input type='checkbox' />
      <label>Novedades</label>
      <input type='checkbox' />
      <Button variant='contained'>Registrarse</Button>
    </form>
  )
}

export default FormSingUp
