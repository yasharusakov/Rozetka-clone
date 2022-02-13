import Header from '../Header';
import SideBar from '../SideBar';
import Content from '../Content';

import '../../styles/style.scss';
import './App.scss';

function App() {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <div className="wrapper__container">
                    <main>
                        <SideBar/>
                        <Content/>
                    </main>
                </div>
            </div>
        </>
    )
}

export default App;