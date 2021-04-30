import { useEffect, useState } from "react";
import contentful from "./api/contentful";
import { Header, Hero, Projects, Blogs, TechStack } from "./components";
function App() {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  useEffect(() => {
    setStatus("process");
    contentful
      .getEntries({
        content_type: "project",
        order: "-sys.createdAt",
      })
      .then((res) => {
        setStatus("success");
        const format = res.items.map((item) => {
          let id = item.sys.id;
          const image = item.fields.image.fields.file.url;
          const description = item.fields.description.content.map(
            (data, index) => data.content[index].value
          );
          return { ...item.fields, image, description, id };
        });
        setData(format);
        console.log(process.env.REACT_APP_CONTENTFUL_API_KEY);
      })
      .catch((err) => {
        console.log(`error ${err.message}`);
      });
  }, []);
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
