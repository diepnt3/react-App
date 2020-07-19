import React, {Component} from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import defaultActor from '../../asset/images/default-actor.jpg';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            movie: {}
        };
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    componentWillMount() {
        this.getMovie();
    }

    getMovie = () => {
        this.setState({
            movie: {
                "cast": [
                    "Robert Downey Jr",
                    "Chris Hemsworth",
                    "Mark Ruffalo",
                    "Chris Evans",
                    "Scarlett Johansson",
                    "Benedict Cumberbatch",
                    "Tom Holland",
                    "Brie Larson",
                    "Josh Brolin",
                    "Don Cheadle",
                    "Chadwick Boseman",
                    "Bradley Cooper",
                    "Paul Rudd",
                    "Jeremy Renner",
                    "Karen Gillan",
                    "Robert Downey Jr.",
                    "Zoe Saldana",
                    "Evangeline Lilly",
                    "Chris Pratt",
                    "Tom Hiddleston",
                    "Samuel L. Jackson",
                    "Vin Diesel",
                    "Dave Bautista"
                ],
                "directors": [
                    "Anthony Russo",
                    "Joe Russo",
                    "Anthony Russo & Joe Russo"
                ],
                "availability": [
                    "BuyToOwn",
                    "Blu-Ray"
                ],
                "genres": [
                    "Feature",
                    "Action"
                ],
                "id": 164967,
                "image": "https://d3b9wy469r90hc.cloudfront.net/images/film/7833373-1366x768.jpg",
                "onesheet": "https://d3b9wy469r90hc.cloudfront.net/images/film/7829980-320x488.jpg",
                "rating": "12",
                "release_date": "2019-04-25T00:00:00Z",
                "release_year": 2019,
                "runtime": 173,
                "slug": "avengers-endgame",
                "studio": "WALT DISNEY INT'L",
                "synopsis": "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
                "thumbnail": "https://d3b9wy469r90hc.cloudfront.net/images/film/7829980-320x488.jpg",
                "title": "Avengers: Endgame",
                "type": "FILM",
                "youtube_urls": [
                    "http://www.youtube.com/embed/VQlsr-CMIew",
                    "http://www.youtube.com/embed/7nN6KVAgwK4",
                    "http://www.youtube.com/embed/KYt9q4fV2O8",
                    "http://www.youtube.com/embed/DMFQ5Bf7C9E",
                    "http://www.youtube.com/embed/H5I8blMVzOo"
                ],
                "bbfc_insight_info": "moderate violence",
                "bbfc_insight_link": "http://www.bbfc.co.uk/AZF369996",
                "product_releases": [
                    {
                        "date": "2019-04-25T00:00:00Z",
                        "format": "THEATRICAL_RELEASE_IMAX_3D"
                    },
                    {
                        "date": "2019-04-25T00:00:00Z",
                        "format": "THEATRICAL_RELEASE"
                    },
                    {
                        "date": "2019-04-25T00:00:00Z",
                        "format": "THEATRICAL_RELEASE_3D"
                    },
                    {
                        "date": "2019-04-25T00:00:00Z",
                        "format": "CINEMA"
                    },
                    {
                        "date": "2019-09-02T00:00:00Z",
                        "format": "DVD"
                    },
                    {
                        "date": "2019-09-02T00:00:00Z",
                        "format": "BLU_RAY"
                    },
                    {
                        "date": "2019-08-26T00:00:00Z",
                        "format": "DOWNLOAD"
                    },
                    {
                        "date": "2019-09-09T00:00:00Z",
                        "format": "ONLINE"
                    }
                ],
                "cinematic_release_date": "2019-04-25",
                "physical_release_date": "2019-09-02",
                "digital_release_date": "2019-09-09"
            }
        })
    }

    castTemplate = (cast) => {
        return (
            <div class="cast-details">
                <div class="p-grid p-nogutter">
                    <div class="p-col-12">
                        <img src={defaultActor} alt="BMW" className="cast__image"/>
                    </div>
                    <div class="p-col-12 cast-data">
                        <div class="cast-title">{cast}</div>
                    </div>
                </div>
            </div>
        );
    }

    handlePlayBtn = (youtube_urls,event) => {
        window.location.href = youtube_urls[0];
    }

    render() { 
        const {
            movie: {
                image, 
                rating,
                release_year,
                runtime,
                title,
                cast,
                directors,
                synopsis,
                youtube_urls,
            }
        } = this.state;
        return ( 
        <div className="movie-detail container">
            <div className="p-grid">
                <div className="movie-detail__box-image p-col-12 p-md-4 p-lg-4">
                    <div className="movie__image" style={{backgroundImage: `url(${image})`}}>
                        <div className="movie__box-action">
                        <Button label="Play" icon="pi pi-play" iconPos="left" className="p-button-success" onClick={(e) => this.handlePlayBtn(youtube_urls, e)}/>
                        </div>
                    </div>
                </div>
                <div className="movie-detail__box-short-infor p-col-12 p-md-8 p-lg-8">
                    <h3>{ title }</h3>
                    <p className="item-infor">
                        <span className="item-infor__label">Directors: </span>
                        <span className="item-infor__content">N/A</span>
                    </p>
                    <p className="item-infor">
                        <span className="item-infor__label">Type: </span>
                        <span className="item-infor__content">N/A</span>
                    </p>
                    <p className="item-infor">
                        <span className="item-infor__label">Runtime: </span>
                        <span className="item-infor__content">{ runtime }</span>
                    </p>
                    <p className="item-infor">
                        <span className="item-infor__label"></span>
                        <span className="item-infor__content"></span>
                    </p>
                    <p className="item-infor">
                        <span className="item-infor__label">Release Year: </span>
                        <span className="item-infor__content">{ release_year }</span>
                    </p>
                </div>
            </div>
            <div className="movie-detail__box-actor">
                <h4 className="title">Actors</h4>
                <Carousel value={cast} numVisible={5} numScroll={5} responsiveOptions={this.responsiveOptions} itemTemplate={this.castTemplate} className="custom-carousel" circular={true} autoplayInterval={3000}></Carousel>
            </div>
            <div className="movie-detail__box-film-content">
                <h4 className="title"><i className="pi pi-tags"></i>Film content</h4>
                <p>
                    {synopsis}
                </p>
            </div>
        </div> );
    }
}
 
export default MovieDetail;