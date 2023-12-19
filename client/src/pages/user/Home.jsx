import Layout from "../../components/Layout";
import Card from "../../components/Card";

const Home = () => {
  return (
    <Layout>
      <div className="w-full h-full py-8 flex flex-col items-center">
        <Card />
      </div>
      <h1 className="text-center">A melhor para quem merece o melhor</h1>
    </Layout>
  );
};

export default Home;
