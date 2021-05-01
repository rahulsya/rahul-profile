const BASEURL = process.env.REACT_APP_MEDIUM_URL;
export async function getBlogs() {
  const response = await fetch(BASEURL);
  return await response.json();
}
