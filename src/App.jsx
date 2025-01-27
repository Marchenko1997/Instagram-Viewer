import './App.css'
import Header from './components/Header/Header'
import Container from './components/Common/Container/Container'
import Hero from './components/Hero/Hero'
import { UsernameProvider } from "./context/UsernameContext";
import { Routes, Route } from "react-router-dom";
import ListOfStories from "./components/Hero/ListOfStories/ListOfStories";
import PostsList from './components/Hero/PostsList/PostsList';
import HighLights from './components/Hero/HighLights/HighLights';

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
                element={<PostsList />}
              />
              <Route path="stories" element={<ListOfStories />} />
              <Route
                path="highlights"
                element={<HighLights />}
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
