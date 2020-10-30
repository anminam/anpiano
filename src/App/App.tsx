import React from "react";
import MainPage from "Pages/MainPage";
import Header from "Containers/Header";
import SideMenu from "Containers/SideMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <SideMenu />
      <MainPage />
    </div>
  );
}

export default App;
