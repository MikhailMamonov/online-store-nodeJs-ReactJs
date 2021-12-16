import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from ".";
import { useState } from "react";
import { useEffect } from "react";
import { check } from "./http/UserAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      check()
        .then((res) => {
          user.setUser(res.data);
          user.setIsAuth(true);
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  if (loading) {
    return <Spinner animation={"grow"}></Spinner>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
});

export default App;
