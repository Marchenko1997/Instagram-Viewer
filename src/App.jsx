import './App.css'
import Header from './components/Header/Header'
import Container from './components/Common/Container/Container'
import Hero from './components/Hero/Hero'
import { UsernameProvider } from "./context/UsernameContext";

function App() {
  

  return (
    <UsernameProvider >
      <Header />
      <main>
        <Container>
          <Hero />
        </Container>
      </main>
    </UsernameProvider>
  )
}

export default App
