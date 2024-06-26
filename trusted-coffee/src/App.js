import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CoffeeList from './components/CoffeeList';
import Payment from './components/Payment';
import Product from './components/Product';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/payment">Payment</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/product">Product</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Switch>
              <Route exact path="/" component={CoffeeList} />
              <Route path="/payment" component={Payment} />
              <Route path="/product" component={Product} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>TrustedCoffee ©2023</Footer>
      </Layout>
    </Router>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
