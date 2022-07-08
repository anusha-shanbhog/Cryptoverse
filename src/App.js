import { Space,Typography,Layout } from 'antd';
import React from 'react';
import {Routes,Route, Link} from 'react-router-dom';


import {Navbar,Homepage, News, Cryptocurrencies, Exchanges, CryptoDetails} from './components';
import './App.css';

const app = () => {
  return (
    <div className="app">
            <div className="navbar">
<Navbar/>

</div>
<div className="main">
<Layout>
    
    <div className="routes">
    <Routes>
        <br/>
        <br/><br/>
        <Route path="/" exact={true} element={<Homepage />} />
        <Route path="/exchanges" exact={true} element={<Exchanges />} />
        <Route path="/cryptocurrencies" exact={true} element={<Cryptocurrencies />} />
        <Route path="/crypto/:coinId" exact={true} element={<CryptoDetails />} />
        <Route path="/news" exact={true} element={<News />} />
      </Routes>
                    
    </div>
</Layout>


<div className="footer" >
    
<Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
    Cryptoverse<br/>
All rights reserved
</Typography.Title>
<Space>
    <Link to="/">Home</Link>
    <Link to="/exchanges">Exchanges</Link>
    <Link to="/news">News</Link>
</Space>
</div>
</div>
    </div>
  );
}

export default app