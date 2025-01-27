import './App.css'
import Header from './components/Header/Header'
import Container from './components/Common/Container/Container'
import Hero from './components/Hero/Hero'
import { UsernameProvider } from "./context/UsernameContext";
import { Routes, Route } from "react-router-dom";
import ListOfStories from "./components/Hero/ListOfStories/ListOfStories";

function App() {
  

  return (
    <UsernameProvider>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Hero />}>
              {" "}
              <Route
                path="posts"
                element={<div>Posts content will be here</div>}
              />
              <Route path="stories" element={<ListOfStories />} />
              <Route
                path="highlights"
                element={<div>Highlights content will be here</div>}
              />
              <Route
                path="reels"
                element={<div>Reels content will be here</div>}
              />
            </Route>
          </Routes>
        </Container>
      </main>
    </UsernameProvider>
  );
}

export default App
