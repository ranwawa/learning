/*
* 路由传参的2种方式
* param
* querystring
* 组件属性有component,render和children.这三者肯定有区别,那具体区别在哪儿呢
* */
import React from 'react';
import { Link, BrowserRouter, Route, useParams, useLocation} from 'react-router-dom';

function Home(props) {
  console.log('params of useParams: ', useParams());
  console.log('params of props: ', props.match.params);
  console.log('querystring of useLocation: ', new URLSearchParams(useLocation().search).get('id'));
  console.log('querystring of props', (new URLSearchParams(props.location.search)).get('id'));
  return (
    <div>
      组件内部
    </div>
  );
}
export default class ParamsDemo extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/home/123/rww">home param</Link>
        ---
        <Link to="/home?id=234&name=rww">home querystring</Link>
        <br />
        <Route exact path="/home/:id/:name?" component={Home} />
        <Route exact path="/home" render={ (props) => <Home {...props}/> }/>
      </BrowserRouter>
    );
  }
}
