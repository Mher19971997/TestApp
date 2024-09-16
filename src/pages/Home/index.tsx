import { CSVDownloadBtn } from "./components/ CSVDownloadBtn";
import { MenuComponent } from "./components/Menu/Menu";
import data from '../../DATA.json'
import Table from "../../components/Table";
import SupportComponent from "./components/SupportComponent/SupportComponent";
const Home = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 100 }}>
                <MenuComponent />
                <Table />
            </div>
            <CSVDownloadBtn datas={data} downloadLoading={false} />
        </>
    )
}


export default Home;