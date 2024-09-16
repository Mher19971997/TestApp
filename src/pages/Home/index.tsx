import { CSVDownloadBtn } from "./components/ CSVDownloadBtn";
import { MenuComponent } from "./components/Menu/Menu";
import data from "../../DATA.json";
import Table from "../../components/Table";

const Home = () => {
  return (
    <>
      <MenuComponent />
      <CSVDownloadBtn datas={data} downloadLoading={false} />
      <Table />
    </>
  );
};

export default Home;
