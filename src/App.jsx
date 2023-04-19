import './App.css'
import FormSingUp from './components/FormSingUp'
import { Container, Typography } from '@mui/material'

function App() {
  return (
    <Container maxWidth='sm'>
      <Typography
        variant='h3'
        align='center'>
        Formulario Registro
      </Typography>
      <FormSingUp />
    </Container>
  )
}

export default App
