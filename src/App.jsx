import './App.css'
import FormSingUp from './components/FormSingUp'
import { Container, Typography } from '@mui/material'

function App() {
  const handleSubmit = (valores) => {
    console.log(valores)
  }
  return (
    <Container maxWidth='sm'>
      <Typography
        variant='h3'
        align='center'>
        Formulario Registro
      </Typography>
      <FormSingUp handleSubmit={handleSubmit} />
    </Container>
  )
}

export default App
