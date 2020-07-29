import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Pages/menu/Home';
import paginaCadastro from './components/Pages/cadastro/video'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import paginaCadastroCategoria from './components/Pages/cadastro/categoria';

const paginaErro = function () {
  return (<div>Erro 404</div>)
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={paginaCadastro} />
      <Route path="/cadastro/categoria" component={paginaCadastroCategoria} />
      <Route component={paginaErro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
