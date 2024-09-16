import Table from "../components/Table";
import { CSVDownloadBtn } from "../pages/Home/components/ CSVDownloadBtn";
import { MenuComponent } from "../pages/Home/components/Menu/Menu";
import SupportComponent from "../pages/Home/components/SupportComponent/SupportComponent";
import data from './../DATA.json'
const Home = () => {
    return (
        <>
            <MenuComponent />
            <CSVDownloadBtn datas={data} downloadLoading={false} />
            <Table />
            <SupportComponent />
        </>
    )
}


export default Home;