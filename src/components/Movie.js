import React, {Component} from 'react';
import { connect } from 'react-redux';
import placeHolder from '../Images/placeholder_for_missing_posters.png'

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false
        }
        this.imageRef = null;
    }

    callback = (entries, observer) => {
        console.log("entries ",entries);
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
              let elem = entry.target;
        
              if (entry.intersectionRatio >= 0.75) {
                  this.setState({imageLoaded: true});
                //   elem.src = this.props.movie.image;
              }
              observer.unobserve(elem)
            }
          });
    }

    componentDidMount() {
        let options = {
            root: null,
            threshold: 0.8
        }
        this.observer = new IntersectionObserver(this.callback, options);

        this.observer.observe(document.querySelector(`#image-${this.props.movie.id}`));

      
    }

    render() {
        const {id, name, image} = this.props.movie;
        const { imageLoaded } = this.state;
       return (
            <div className="w-1/3  md:w-1/8 text-center  px-1">
                    <div className="image-container">
                        <img id={`image-${id}`} ref={(el) => this.imageRef = el} src={imageLoaded?image:placeHolder} />
                    </div>

            </div>
        );
    }
}
export default connect((store) => {
    return {
       movies: store.movies.movies
    }
}) (Movie);