import { CSVDownloadBtn } from "./components/ CSVDownloadBtn";
import { MenuComponent } from "./components/Menu/Menu";
import data from "../../DATA.json";
import Table from "../../components/Table";
import UserProfile from "./components/PersonalAccount";
import styles from './Home.module.css'
import { Flex } from "antd";

const Home = () => {
  return (
    <>
      <Flex>
        <div>
          <MenuComponent />
          <CSVDownloadBtn datas={data} downloadLoading={false} />
        </div>
        <UserProfile/>
      </Flex>
      <Table />
    </>
  );
};

export default Home;
