import {Route, Routes} from 'react-router-dom';
import {SignIn} from "./components/login/SignIn";
import {SignUp} from "./components/login/SignUp";
import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";
import {Authenticator} from "./components/login/Authenticator";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div className={'bg-warning'}>
            <Header></Header>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/authenticator" element={<Authenticator/>}/>
                    <Route path="/sign-in" element={<SignIn></SignIn>}/>
                    <Route path="/sign-up" element={<SignUp></SignUp>}/>
                </Routes>
            </main>
            <Footer></Footer>

        </div>
    );
}

export default App;
