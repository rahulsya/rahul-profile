import { useEffect, useState } from "react";
import contentful from "./api/contentful";
import { getBlogs } from "./api/getBlogs";
import { Header, Hero, Projects, Blogs, TechStack } from "./components";
function App() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState([]);
  const [blogs, setBlogs] = useState([]);
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
      })
      .catch((err) => {
        setErrors((errors) => [...errors, err.message]);
      });

    // fetch blog
    getBlogs()
      .then((res) => {
        setStatus("success");
        setBlogs(res.items);
      })
      .catch((e) => setErrors((e) => [...errors, e.message]));
  }, [errors]);
  return (
    <div className="bg-terang-secondary dark:bg-gelap-secondary min-h-screen">
      <Header />
      <Hero />
      <Projects projects={status === "success" ? data : []} />
      <Blogs blogs={status === "success" ? blogs : []} />
      <TechStack />
    </div>
  );
}

export default App;
