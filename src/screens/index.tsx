import { CSVDownloadBtn } from "../components/ CSVDownloadBtn";
import { MenuComponent } from "../components/Menu/Menu";
import Table from "../components/Table";
import data from './../DATA.json'
const Home = () => {
    return (
        <>
            <MenuComponent />
            <CSVDownloadBtn datas={data} downloadLoading={false} />
            <Table />
        </>
    )
}


export default Home;