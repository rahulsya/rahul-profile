import { Header, Hero, Projects, Blogs, TechStack } from "./components";
function App() {
  return (
    <div className="bg-terang-secondary dark:bg-gelap-secondary min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Blogs />
      <TechStack />
    </div>
  );
}

export default App;
