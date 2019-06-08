import React, {Component} from 'react';
import axios from 'axios';
import './Heroes.module.scss';
import Pagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.css';
import {Route, Switch} from "react-router-dom";
import Hero from "../hero/Hero";
import {updateTitle} from "../../redux/actions";
import connect from "react-redux/es/connect/connect";

class Heroes extends Component {
  state = {
    pageSize: 10,
    totalCount: 115,
    currentPage: 1,
    heroes: []
  }
  
  componentDidMount() {
    this.getHeroes();
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps:', newProps);
    this.getHeroes();
  }
  
  getHeroes = async () => {
    let response = await axios.get(`http://eastflag.co.kr:8080/api/paged_heroes?start_index=${this.state.pageSize * (this.state.currentPage - 1)}&page_size=${this.state.pageSize}`);
    console.log(response);
    this.setState({
      heroes: response.data.data,
      totalCount: response.data.total
    });
  }
  
  render() {
    return (
      <>
        <Switch>
          <Route path="/heroes/hero/:hero_id" component={Hero}></Route>
        </Switch>
        
        <div className="card-columns">
          {this.state.heroes.map(hero => (
            <div className="card" key={hero.hero_id} onClick={(e) => this.handleClick(e, hero.hero_id)} style={{cursor: 'pointer'}}>
              <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                   style={{width: '100%'}} alt={hero.name}></img>
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
                <p className="card-text">email: {hero.email}</p>
                <p className="card-text">sex: {hero.sex}</p>
              </div>
            </div>
          ))}
        </div>
      
        <Pagination total={this.state.totalCount} current={this.state.currentPage} pageSize={this.state.pageSize}
                    onChange={this.onChange} className="d-flex justify-content-center" />
      </>
    )
  }
  
  onChange = (page) => {
    this.setState({currentPage: page}, () => {
      this.getHeroes();
    });
  }
  
  handleClick = (event, hero_id) => {
    console.log(event, hero_id);
    event.preventDefault();
    this.props.history.push(`/heroes/hero/${hero_id}`);
  }
}

let mapStateToProps = (state) => {
  return {
    refresh_count: state.heroReducer.refresh_count
  }
}

export default connect(mapStateToProps, null)(Heroes);
