import React, { Component } from 'react';
import { connect } from 'react-redux';
import poster1 from '../Images/poster1.jpg';
import poster2 from '../Images/poster2.jpg';
import poster3 from '../Images/poster3.jpg';
import poster4 from '../Images/poster4.jpg';
import back_button from '../Images/Back.png';
import search_icon from '../Images/search.png';



class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="navbar-container flex justify-between fixed bg-navbar w-full">
                  <div className="title-container flex">
                      <img className="w-5 h-5" src={back_button}/>
                      <h4 className="text-white"> Romantic Comedy</h4>
                      </div>
                   <div className="search-container">
                   <img className="w-5 h-5" src={search_icon}/>
                       </div>   
                </div>    
                <div className="flex flex-wrap content-center mx-1 " >

                    <div class="w-1/3  md:w-1/8 text-center  px-1">
                    <div className="image-container">
                        <img src={poster1} />
                        </div>

                    </div>

                    <div class="w-1/3 md:w-1/8 text-center px-1">
                    <div className="image-container">
                        <img src={poster2} />
                        </div>

                    </div>

                    <div class="w-1/3  md:w-1/8 text-center  px-1">
                    <div className="image-container">
                        <img src={poster3} />
                        </div>

                    </div>

                    <div class="w-1/3 md:w-1/8 text-center  px-1">
                    <div className="image-container">
                        <img src={poster4} />
                        </div>

                    </div>

                    <div class="w-1/3  md:w-1/8 text-center px-1">
                    <div className="image-container">
                        <img src={poster1} />
                        </div>

                    </div>

                    <div class="w-1/3   md:w-1/8 text-center px-1">
                    <div className="image-container">
                        <img src={poster2} />
                        </div>

                    </div>

                    <div class="w-1/3   md:w-1/8 text-center px-1">
                    <div className="image-container">
                        <img src={poster2} />
                        </div>


                    </div>

                    <div class="w-1/3  md:w-1/8 text-center px-1">
                    <div className="image-container">
                        <img src={poster2} />
                        </div>

                    </div>

                    <div class="w-1/3   md:w-1/8 text-center px-1">
                    <div className="image-container">
                        <img src={poster2} />
                        </div>


                    </div>

                    <div class="w-1/3  md:w-1/8 text-center px-1">
                    <div className="image-container">
                        <img src={poster2} />
                        </div>


                    </div>

                    <div class="w-1/3   md:w-1/8 text-center px-1">
                    <div className="image-container">
                        <img src={poster2} />
                        </div>


                    </div>

                    <div class="w-1/3  md:w-1/8 text-center px-1">
                    <div className="image-container">
                        <img src={poster2} />

                        </div>

                    </div>

                    <div class="w-1/3   md:w-1/8 text-center px-1">
                    <div className="image-container">
                        <img src={poster2} />
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (store) => {

}

export default connect(mapStateToProps)(Home);