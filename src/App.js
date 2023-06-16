import { Route , Routes} from 'react-router-dom';
import {SignIn} from "./components/login/SignIn";
import {SignUp} from "./components/login/SignUp";
import {Header} from "./components/header/Header";

function App() {
    return (
        <div className="App container bg-black">
            <Header></Header>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Routes>
                        <Route exact path="/" element={<SignIn/>}/>
                        <Route path="/sign-in" element={<SignIn/>}/>
                        <Route path="/sign-up" element={<SignUp/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
