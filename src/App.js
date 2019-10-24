import React, { Suspense, lazy } from "react";

import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "./configs/mockApi";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

//分析页
const Analysis = lazy(() => import("./components/Analysis"));

const Routes = props => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <HashRouter>
        <Route exact path="/analysis">
          <Analysis />
        </Route>
      </HashRouter>
    </Suspense>
  );
};

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Routes />
    </ConfigProvider>
  );
}

export default App;
