import React from "react";
import Layout from "./components/Layout/Layout";

import TypeWrite from "./components/TyperWrite/TypeWrite";

import "./styles/index.scss";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Layout>
        <TypeWrite text="신입 개발자 조현남입니다.<br/>사이트에 방문해 주셔서 감사합니다." />
      </Layout>
    </>
  );
}

export default App;
