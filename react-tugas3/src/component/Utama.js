import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Beranda from './Beranda'
import Gallery from './Gallery'
// import Hari from './Hari'
import Agenda from './Agenda'
import ListKeranjang from './ListKeranjang';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/Gallery" component={Gallery} />
        {/* <Route path="/Hari" component={Hari} /> */}
        <Route path="/Agenda" component={Agenda} />
        <Route path="/Keranjang" component={ListKeranjang} />
        
    </Switch>
)
export default Utama;