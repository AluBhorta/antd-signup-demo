import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Header from "./components/Header";
import { Layout } from "antd";
import AppState from "./AppState";

const { Content } = Layout;

function App() {
  return (
    <>
      <AppState>
        <Layout>
          <Header />
          <Content>
            <AppRouter />
          </Content>
        </Layout>
      </AppState>
    </>
  );
}

export default App;
