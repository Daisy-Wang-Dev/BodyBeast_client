import "./HomePage.scss";
import Header from "../../components/Header/Header";
import PerformanceStat from "../../components/PerformanceStat/PerformanceStat";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <PerformanceStat />
      </main>
    </>
  );
};

export default HomePage;
