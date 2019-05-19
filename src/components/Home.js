import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';

import back_button from '../Images/Back.png';
import search_icon from '../Images/search.png';



class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {movies} = this.props;
        return (
            <div className="container">
                <div className="navbar-container flex justify-between  bg-navbar w-full ">
                  <div className="title-container flex">
                      <img className="w-5 h-5" src={back_button}/>
                      <h4 className="genre-heading text-white"> Romantic Comedy</h4>
                      </div>
                   <div className="search-container">
                   <img className="w-5 h-5" src={search_icon}/>
                       </div>   
                </div>    
                <div className="flex flex-wrap content-center mx-1 " >
                    {movies.length > 0 && movies.map((movie) => 
                         <Movie movie={movie} />
                    )}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        movies: store.movies.movies
    }
}
export default connect(mapStateToProps)(Home);