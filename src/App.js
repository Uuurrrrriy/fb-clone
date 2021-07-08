import React from "react";
import './App.css';
import {Header} from "./componets/Header/Header";
import {Sidebar} from "./componets/Sidebar/Sidebar";
import {Feed} from "./componets/Feed/Feed";
import {Widgets} from "./componets/Widgets/Widgets";
import Login from "./componets/Login/Login";
import {useStateValue} from "./StateProvider/StateProvider";

function App() {
    const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
        {
            !user ? (
                <Login />
            ) : (
                <>
                    <Header />
                    <div className="app__body">
                        <Sidebar />
                        <Feed />
                        <Widgets />
                    </div>
                </>
            )
        }

    </div>
  );
}

export default App;
