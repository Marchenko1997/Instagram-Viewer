import "./App.css";
import Header from "./components/Header/Header";
import Container from "./components/Common/Container/Container";
import Hero from "./components/Hero/Hero";
import { UsernameProvider } from "./context/UsernameContext";
import { Routes, Route } from "react-router-dom";
import ListOfStories from "./components/Hero/ListOfStories/ListOfStories";
import PostsList from "./components/Hero/PostsList/PostsList";
import HighLights from "./components/Hero/HighLights/HighLights";
import ReelsList from "./components/Hero/ReelsList/ReelsList";
import DownLoadPage from "./components/DownLoadPage/DownLoadPage";
import MainValues from "./components/MainValues/MainValues";

function App() {
  return (
    <UsernameProvider>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Hero />}>
              <Route index element={<PostsList />} />
              <Route path="posts" element={<PostsList />} />
              <Route path="stories" element={<ListOfStories />} />
              <Route path="highlights" element={<HighLights />} />
              <Route path="reels" element={<ReelsList />} />
            </Route>
            <Route path="/download" element={<DownLoadPage />} />
          </Routes>
          <MainValues  />
        </Container>
      </main>
    </UsernameProvider>
  );
}

export default App;
