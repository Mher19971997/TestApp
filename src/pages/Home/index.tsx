import { CSVDownloadBtn } from "./components/ CSVDownloadBtn";
import { MenuComponent } from "./components/Menu/Menu";
import data from '../../DATA.json'
const Home = () => {
    return (
        <>
            <MenuComponent />
            <CSVDownloadBtn datas={data} downloadLoading={false} />
        </>
    )
}


export default Home;