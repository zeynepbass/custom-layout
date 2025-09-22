import axios from "axios";
import Layout from "../../app/components/Layout";
import Posts from "../../app/components/Posts";

const getPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

const DashboardsPage = async () => {
  const data = await getPosts();

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <Posts data={data} />
      </div>
    </Layout>
  );
};

export default DashboardsPage;
