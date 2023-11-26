import MainPage from "./pages/MainPage/MainPage";
import style from "./global.module.scss";
import Playbar from "./Components/Playbar/Playbar";
const App = () => {
  return (
    <div className={style.wrapper}>
      <MainPage />
      <Playbar></Playbar>
    </div>
  );
};

export default App;
