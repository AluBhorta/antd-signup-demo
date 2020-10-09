import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Header from "./components/Header";

import { Layout } from "antd";

const { Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Content>
          <AppRouter />
        </Content>
      </Layout>
    </>
  );
}

export default App;
