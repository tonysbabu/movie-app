import React, {Component} from 'react';
import { connect } from 'react-redux';
import placeHolder from '../Images/placeholder_for_missing_posters.png'

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false,
            imageVisivle: false,
        }
        this.imageRef = null;
    }

    callback = (entries, observer) => {
        console.log("entries ",entries);
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
              let elem = entry.target;
        
              if (entry.intersectionRatio >= 0.5) {
                  this.setState({imageLoaded: true,});
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

        // this.observer.observe(document.querySelector(`#image-${this.props.movie.id}`));
        this.observer.observe(this.imageRef);

      
    }


    handleLoadImage = () =>  {
        this.setState({imageVisible: true})
    }

    render() {
        const { name } = this.props.movie;
        const { imageLoaded, imageVisible } = this.state;
        const posterImage = this.props.movie['poster-image'];
        return (
            <div className="md:w-1/7 sm:w-1/3 text-center  px-1 " >
                 <div className={`image-container`} ref={(el) => this.imageRef = el}>
                   {imageLoaded?<img  className={`${imageVisible?'img-loaded':''}`} src={posterImage!='posterthatismissing.jpg'?require(`../Images/${this.props.movie['poster-image']}`):placeHolder} onLoad={this.handleLoadImage}/>:
                   <img src={placeHolder} />}
                </div>
                <div className="text-white"><h4>{name}</h4></div>
            </div>
        );
    }
}
export default connect((store) => {
    return {
    }
}) (Movie);