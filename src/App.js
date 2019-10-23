import React from "react";
import Analysis from "./components/Analysis";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "./configs/mockApi";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Analysis />
    </ConfigProvider>
  );
}

export default App;
