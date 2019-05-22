import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import { ActionTypes } from '../redux/actionTypes';
import back_button from '../Images/Back.png';
import search_icon from '../Images/search.png';
import Apis from '../API/Apis';



class Home extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.fetchMovies(1);
    }

    fetchMovies = (pageNo) => {
        const movies = Apis.fetchMovies(pageNo);
        const totalPage = Math.ceil(movies['total-content-items'] / 20);
        this.props.dispatch({ type: ActionTypes.movies.setPageNo, data: pageNo });
        this.props.dispatch({ type: ActionTypes.movies.setTotalPage, data: totalPage });
        this.props.dispatch({ type: ActionTypes.movies.addToList, data: movies['content-items']['content'] });
    }

    handleScroll = (e) => {
        const { pageNo, totalPage } = this.props;
        //console.log(e.target.scrollTop + e.target.offsetHeight, e.target.scrollHeight);
        if (e.target.scrollTop + e.target.offsetHeight > e.target.scrollHeight - 50) {
            console.log("scrolled to end", pageNo, totalPage)
            if (pageNo < totalPage) {
                this.fetchMovies(pageNo + 1);
            }
        }
    }

    render() {
        const { movies } = this.props;
        console.log(this.props.movies.length, this.props.movies)
        return (
            <div className="container overflow-hidden">
                <div className="navbar-container flex justify-between  bg-navbar w-full ">
                    <div className="title-container flex">
                        <img className="w-5 h-5" src={back_button} />
                        <h4 className="genre-heading text-white"> Romantic Comedy</h4>
                    </div>
                    <div className="search-container">
                        <img className="w-5 h-5" src={search_icon} />
                    </div>
                </div>
                <div className="flex flex-wrap content-center mx-1 overflow-auto" style={{ 'height': 'calc(100vh - 25px)' }} onScroll={this.handleScroll}>
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
        movies: store.movies.movies,
        pageNo: store.movies.pageNo,
        totalPage: store.movies.totalPage
    }
}
export default connect(mapStateToProps)(Home);