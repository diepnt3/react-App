import React, { Component } from 'react';
import ServiceCommunication from '../utils/ServiceCommunication';
import MovieItem from './MovieItem.component';
import {Galleria} from 'primereact/galleria';
import {Paginator} from 'primereact/paginator';

const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
class MoviesListing extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: [],
            topMovies: [],
            firstPage: 1,
            rows: 10,
            currentPage: 1,
            totalRecords: 0,
        }

        this.rowsPerPageOptions = [10,20,30];

    }

    componentWillMount() {
        this.getAllFilms();
    }
	
    getAllFilms = async() => {
        const response = await ServiceCommunication.getMovies();
		/*api return html??? -> gia lap data response*/
        const { rows } = this.state;
        if(response.status === 200) {
            response.data = [
                {
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
                },
                {
                    "cast": [
                        "Brie Larson",
                        "Samuel L. Jackson",
                        "Ben Mendelsohn",
                        "Djimon Hounsou",
                        "Lee Pace",
                        "Lashana Lynch",
                        "Gemma Chan",
                        "Mckenna Grace",
                        "Clark Gregg",
                        "Jude Law",
                        "Annette Bening",
                        "Samuel L Jackson",
                        "Samuel L. Jackson : Nick Fury",
                        "Rune Temte",
                        "Algenis Perez Soto"
                    ],
                    "directors": [
                        "Anna Boden",
                        "Ryan Fleck",
                        "Anna Boden & Ryan Fleck"
                    ],
                    "availability": [
                        "BuyToOwn",
                        "Blu-Ray",
                        "WatchNow"
                    ],
                    "genres": [
                        "Feature",
                        "Action"
                    ],
                    "id": 161280,
                    "image": null,
                    "onesheet": "https://d3b9wy469r90hc.cloudfront.net/images/film/7825657-320x488.jpg",
                    "rating": "12",
                    "release_date": "2019-03-08T00:00:00Z",
                    "release_year": 2019,
                    "runtime": 118,
                    "slug": "captain-marvel",
                    "studio": "WALT DISNEY INT'L",
                    "synopsis": "Set in the 1990s, Marvel Studios' CAPTAIN MARVEL is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe's most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.",
                    "thumbnail": "https://d3b9wy469r90hc.cloudfront.net/images/film/7825657-320x488.jpg",
                    "title": "Captain Marvel",
                    "type": "FILM",
                    "youtube_urls": [
                        "http://www.youtube.com/embed/_YDsbKxAXi8",
                        "http://www.youtube.com/embed/xpNisnvFmOk",
                        "http://www.youtube.com/embed/CFkFOBfSMoU",
                        "http://www.youtube.com/embed/LqdrBYqBd38",
                        "http://www.youtube.com/embed/89lquPpnBhk"
                    ],
                    "bbfc_insight_info": "moderate fantasy violence, implied strong language",
                    "bbfc_insight_link": "http://www.bbfc.co.uk/AZF367850",
                    "product_releases": [
                        {
                            "date": "2019-03-08T00:00:00Z",
                            "format": "THEATRICAL_RELEASE"
                        },
                        {
                            "date": "2019-03-08T00:00:00Z",
                            "format": "THEATRICAL_RELEASE_IMAX_3D"
                        },
                        {
                            "date": "2019-03-08T00:00:00Z",
                            "format": "THEATRICAL_RELEASE_3D"
                        },
                        {
                            "date": "2019-03-08T00:00:00Z",
                            "format": "CINEMA"
                        },
                        {
                            "date": "2019-07-15T00:00:00Z",
                            "format": "BLU_RAY"
                        },
                        {
                            "date": "2019-07-15T00:00:00Z",
                            "format": "DVD"
                        },
                        {
                            "date": "2019-07-08T00:00:00Z",
                            "format": "DOWNLOAD"
                        },
                        {
                            "date": "2019-07-22T00:00:00Z",
                            "format": "ONLINE"
                        }
                    ],
                    "cinematic_release_date": "2019-03-08",
                    "physical_release_date": "2019-07-15",
                    "digital_release_date": "2019-07-22"
                },
                {
                    "cast": [
                        "Ryan Hansen",
                        "Maggie Q",
                        "Michael Pe?a",
                        "Michael Rooker",
                        "Austin Stowell",
                        "Lucy Hale",
                        "Portia Doubleday",
                        "Jimmy O. Yang",
                        "Michael Pena",
                        "Kim Coates",
                        "Charlotte McKinney"
                    ],
                    "directors": [
                        "Jeff Wadlow"
                    ],
                    "availability": null,
                    "genres": [
                        "Feature",
                        "Horror"
                    ],
                    "id": 168230,
                    "image": null,
                    "onesheet": "https://d3b9wy469r90hc.cloudfront.net/images/film/7882994-320x488.jpg",
                    "rating": "15",
                    "release_date": "2020-02-14T00:00:00Z",
                    "release_year": 2020,
                    "runtime": 109,
                    "slug": "fantasy-island",
                    "studio": "Sony Pictures",
                    "synopsis": "In Blumhouse's new spin on Fantasy Island, the enigmatic Mr. Roarke makes the secret dreams of his lucky guests come true at a luxurious but remote tropical resort. But when the fantasies turn into nightmares, the guests have to solve the island's mystery in order to escape with their lives.",
                    "thumbnail": "https://d3b9wy469r90hc.cloudfront.net/images/film/7882994-320x488.jpg",
                    "title": "Fantasy Island",
                    "type": "FILM",
                    "youtube_urls": [
                        "http://www.youtube.com/embed/FDJDujWJhzw"
                    ],
                    "bbfc_insight_info": "strong threat, disturbing images",
                    "bbfc_insight_link": "http://www.bbfc.co.uk/AZF380843",
                    "product_releases": [
                        {
                            "date": "2020-03-06T00:00:00Z",
                            "format": "THEATRICAL_RELEASE"
                        },
                        {
                            "date": "2020-03-06T00:00:00Z",
                            "format": "CINEMA"
                        },
                        {
                            "date": "2099-12-31T00:00:00Z",
                            "format": "DVD"
                        },
                        {
                            "date": "2099-12-31T00:00:00Z",
                            "format": "BLU_RAY"
                        },
                        {
                            "date": "2020-07-06T00:00:00Z",
                            "format": "DOWNLOAD"
                        }
                    ],
                    "cinematic_release_date": "2020-03-06",
                    "physical_release_date": "2099-12-31",
                    "digital_release_date": "2020-07-06"
                },
                {
                    "cast": [
                        "Kristin Scott Thomas",
                        "Sharon Horgan",
                        "Greg Wise",
                        "Jason Flemyng with Emma Lowndes",
                        "Gaby French",
                        "Lara Rossi",
                        "Amy James-Kelly",
                        "India Ria Amarteifio",
                        "Emma Lowndes",
                        "Jason Flemyng",
                        "Laura Checkley",
                        "Roxy Faridany"
                    ],
                    "directors": [
                        "Peter Cattaneo"
                    ],
                    "availability": [
                        "PlayingInTheatres"
                    ],
                    "genres": [
                        "Drama",
                        "Feature"
                    ],
                    "id": 167440,
                    "image": "https://d3b9wy469r90hc.cloudfront.net/images/film/7850537-1366x768.jpg",
                    "onesheet": "https://d3b9wy469r90hc.cloudfront.net/images/film/7872102-320x488.jpg",
                    "rating": "12A",
                    "release_date": "2020-03-06T00:00:00Z",
                    "release_year": 2020,
                    "runtime": 108,
                    "slug": "military-wives",
                    "studio": "Lionsgate",
                    "synopsis": "The inspirational story of friendship, love, and support on the home front. A group of women come together as their partners serve in Afghanistan. Together they form the very first military wives choir, helping each other through some of life's most difficult moments and also becoming a media sensation and global movement in the process. Peter Cattaneo (The Full Monty) directs Oscar Nominee and BAFTA Winner Kristin Scott Thomas (Darkest Hour) and BAFTA Nominee Sharon Horgan (Catastrophe) in this feel good crowd-pleaser.",
                    "thumbnail": "https://d3b9wy469r90hc.cloudfront.net/images/film/7872102-320x488.jpg",
                    "title": "Military Wives",
                    "type": "FILM",
                    "youtube_urls": [
                        "http://www.youtube.com/embed/ts0X-U7uLdw",
                        "http://www.youtube.com/embed/7FR5TJwXft8",
                        "http://www.youtube.com/embed/bnPeXhSNo1I",
                        "http://www.youtube.com/embed/l-5vBao9XOQ",
                        "http://www.youtube.com/embed/AlMvfYkTQ0E"
                    ],
                    "bbfc_insight_info": "infrequent strong language, moderate sex references",
                    "bbfc_insight_link": "http://www.bbfc.co.uk/AZF381104",
                    "product_releases": [
                        {
                            "date": "2020-03-06T00:00:00Z",
                            "format": "THEATRICAL_RELEASE"
                        },
                        {
                            "date": "2020-03-10T00:00:00Z",
                            "format": "CINEMA"
                        },
                        {
                            "date": "2020-03-08T00:00:00Z",
                            "format": "CINEMA"
                        },
                        {
                            "date": "2020-03-07T00:00:00Z",
                            "format": "CINEMA"
                        },
                        {
                            "date": "2020-03-11T00:00:00Z",
                            "format": "CINEMA"
                        },
                        {
                            "date": "2020-07-06T00:00:00Z",
                            "format": "DVD"
                        },
                        {
                            "date": "2020-07-06T00:00:00Z",
                            "format": "BLU_RAY"
                        }
                    ],
                    "cinematic_release_date": "2020-03-11",
                    "physical_release_date": "2020-07-06",
                    "digital_release_date": null
                },
                {
                    "cast": null,
                    "directors": null,
                    "availability": null,
                    "genres": [
                        "Television",
                        "Sci Fi"
                    ],
                    "id": 94812,
                    "image": null,
                    "onesheet": "https://d3b9wy469r90hc.cloudfront.net/images/tv/685551-320x488.jpg",
                    "rating": null,
                    "release_date": "2020-01-01",
                    "release_year": 2020,
                    "runtime": 0,
                    "slug": "star-trek---short-treks",
                    "studio": null,
                    "synopsis": null,
                    "thumbnail": "https://d3b9wy469r90hc.cloudfront.net/images/tv/685551-320x488.jpg",
                    "title": "Star Trek - Short Treks",
                    "type": "SERIES",
                    "youtube_urls": null,
                    "bbfc_insight_info": null,
                    "bbfc_insight_link": null,
                    "product_releases": [
                        {
                            "date": "2020-07-17T00:21:29.164650443Z",
                            "format": "DVD"
                        },
                        {
                            "date": "2020-07-17T00:21:29.164654287Z",
                            "format": "BLU_RAY"
                        }
                    ],
                    "cinematic_release_date": null,
                    "physical_release_date": "2020-07-17",
                    "digital_release_date": null
                },
                {
                    "cast": [
                        "Christian Bale",
                        "Willem Dafoe",
                        "Jared Leto",
                        "Josh Lucas",
                        "Samantha Mathis",
                        "Matt Ross",
                        "Bill Sage",
                        "Chloe Sevigny",
                        "Cara Seymour",
                        "Justin Theroux",
                        "Guinevere Turner",
                        "Reese Witherspoon",
                        "Stephen Bogaert",
                        "Monika Meier",
                        "Reg E. Cathey",
                        "Blair Williams",
                        "Marie Dame",
                        "Kelley Harron",
                        "Patricia Gage",
                        "Mila Kunis",
                        "William Shatner",
                        "Geraint Wyn Davies",
                        "Robin Dunne",
                        "Lindy Booth",
                        "Charles Officer",
                        "Michael Kremko",
                        "Jenna Perry"
                    ],
                    "directors": [
                        "Mary Harron",
                        "Morgan J Freeman"
                    ],
                    "availability": [
                        "BuyToOwn"
                    ],
                    "genres": [
                        "Drama",
                        "Horror",
                        "General Movie/Drama",
                        "Comedy",
                        "Historical/Period Drama",
                        "Literary Adaptation",
                        "Police/Crime Drama",
                        "Thriller",
                        "Feature",
                        "General Movie"
                    ],
                    "id": 5813,
                    "image": "https://d3b9wy469r90hc.cloudfront.net/images/film/7826569-1366x768.jpg",
                    "onesheet": "https://d3b9wy469r90hc.cloudfront.net/images/film/7771788-320x488.jpg",
                    "rating": "18",
                    "release_date": "2000-10-16T00:00:00Z",
                    "release_year": 2000,
                    "runtime": 97,
                    "slug": "american-psycho",
                    "studio": "Lionsgate UK",
                    "synopsis": "Bret Easton Ellis' disturbing novel is brought to the screen by Mary Harron. In 1987, twentysomething Wall Street broker Patrick Bateman (Christian Bale) seems to have it all: he is handsome, successful and engaged to the beautiful Evelyn (Reese Witherspoon). However, Patrick is also engaged in an affair with Courtney Rawlinson (Samantha Mathis) - his colleague's fiancée - and at night indulges in a confused orgy of drugs, pornography, prostitution and murder fantasies. When Patrick is outshone by a rival at a board meeting, he takes out his frustration by knifing a man sleeping rough in the street. This sparks off a descent into violence and madness, with Patrick embarking on a bloody and random killing spree.",
                    "thumbnail": "https://d3b9wy469r90hc.cloudfront.net/images/film/7771788-320x488.jpg",
                    "title": "American Psycho",
                    "type": "FILM",
                    "youtube_urls": null,
                    "bbfc_insight_info": null,
                    "bbfc_insight_link": "http://www.bbfc.co.uk/AZF161404",
                    "product_releases": [
                        {
                            "date": "2010-02-01T22:26:00Z",
                            "format": "CINEMA"
                        },
                        {
                            "date": "2013-03-01T00:00:00Z",
                            "format": "TV"
                        },
                        {
                            "date": "2013-02-22T00:00:00Z",
                            "format": "ONLINE"
                        },
                        {
                            "date": "2000-10-16T00:00:00Z",
                            "format": "BLU_RAY"
                        },
                        {
                            "date": "2015-07-06T00:00:00Z",
                            "format": "DVD"
                        }
                    ],
                    "cinematic_release_date": "2010-02-01",
                    "physical_release_date": "2015-07-06",
                    "digital_release_date": "2013-02-22"
                },
                {
                    "cast": [
                        "Idina Menzel",
                        "Kristen Bell",
                        "Jonathan Groff",
                        "Josh Gad",
                        "Jason Ritter"
                    ],
                    "directors": [
                        "Chris Buck",
                        "Jennifer Lee"
                    ],
                    "availability": [
                        "PlayingInTheatres",
                        "BuyToOwn",
                        "Blu-Ray",
                        "Dvd",
                        "WatchNow"
                    ],
                    "genres": [
                        "Children",
                        "Animated Feature",
                        "Feature"
                    ],
                    "id": 165065,
                    "image": "https://d3b9wy469r90hc.cloudfront.net/images/film/7839446-1366x768.jpg",
                    "onesheet": "https://d3b9wy469r90hc.cloudfront.net/images/film/7848927-320x488.jpg",
                    "rating": "U",
                    "release_date": "2019-11-22T00:00:00Z",
                    "release_year": 2019,
                    "runtime": 98,
                    "slug": "frozen-2",
                    "studio": "WALT DISNEY INT'L",
                    "synopsis": "From the Academy Award-winning team—directors Jennifer Lee and Chris Buck, and producer Peter Del Vecho—and featuring the voices of Idina Menzel, Kristen Bell, Jonathan Groff and Josh Gad, and the music of Oscar-winning songwriters Kristen Anderson-Lopez and Robert Lopez, Walt Disney Animation Studios' 'Frozen 2' opens in UK cinemas this November.",
                    "thumbnail": "https://d3b9wy469r90hc.cloudfront.net/images/film/7848927-320x488.jpg",
                    "title": "Frozen 2",
                    "type": "FILM",
                    "youtube_urls": [
                        "http://www.youtube.com/embed/UzFdWGRrvaI",
                        "http://www.youtube.com/embed/H9X_v0VGixs",
                        "http://www.youtube.com/embed/WRhOIms2EJk",
                        "http://www.youtube.com/embed/ns5VJfcvwYw",
                        "http://www.youtube.com/embed/IxzRtcA8u2k"
                    ],
                    "bbfc_insight_info": "mild threat, very mild violence, rude humour",
                    "bbfc_insight_link": "http://www.bbfc.co.uk/AZF372001",
                    "product_releases": [
                        {
                            "date": "2020-02-07T00:00:00Z",
                            "format": "THEATRICAL_RELEASE"
                        },
                        {
                            "date": "2019-11-22T00:00:00Z",
                            "format": "THEATRICAL_RELEASE_3D"
                        },
                        {
                            "date": "2019-11-22T00:00:00Z",
                            "format": "CINEMA"
                        },
                        {
                            "date": "2020-03-30T00:00:00Z",
                            "format": "DVD"
                        },
                        {
                            "date": "2020-03-30T00:00:00Z",
                            "format": "BLU_RAY"
                        },
                        {
                            "date": "2020-04-27T00:00:00Z",
                            "format": "DOWNLOAD"
                        },
                        {
                            "date": "2020-04-27T00:00:00Z",
                            "format": "ONLINE"
                        }
                    ],
                    "cinematic_release_date": "2020-02-07",
                    "physical_release_date": "2020-03-30",
                    "digital_release_date": "2020-04-27"
                },
                {
                    "cast": [
                        "Dean-Charles Chapman",
                        "George MacKay",
                        "Colin Firth",
                        "Benedict Cumberbatch",
                        "Mark Strong",
                        "Andrew Scott",
                        "Adrian Scarborough",
                        "Richard Madden",
                        "Richard McCabe",
                        "John Hollingworth",
                        "William Marshall",
                        "Anthony Abery",
                        "Edwin Abery",
                        "Jason Fenwick"
                    ],
                    "directors": [
                        "Sam Mendes"
                    ],
                    "availability": [
                        "PlayingInTheatres",
                        "BuyToOwn"
                    ],
                    "genres": [
                        "Drama",
                        "Feature",
                        "War"
                    ],
                    "id": 165307,
                    "image": "https://d3b9wy469r90hc.cloudfront.net/images/film/7844651-1366x768.jpg",
                    "onesheet": "https://d3b9wy469r90hc.cloudfront.net/images/film/7867248-320x488.jpg",
                    "rating": "15",
                    "release_date": "2020-01-10T00:00:00Z",
                    "release_year": 2020,
                    "runtime": 50,
                    "slug": "1917",
                    "studio": "EONE FILMS",
                    "synopsis": "At the height of the First World War, two young British soldiers, Schofield (Captain Fantastic's George MacKay) and Blake (Game of Thrones' Dean-Charles Chapman) are given a seemingly impossible mission. In a race against time, they must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers— Blake's own brother among them.",
                    "thumbnail": "https://d3b9wy469r90hc.cloudfront.net/images/film/7867248-320x488.jpg",
                    "title": "1917",
                    "type": "FILM",
                    "youtube_urls": [
                        "http://www.youtube.com/embed/S66oIexCtI4",
                        "http://www.youtube.com/embed/ScJ0kvK7tsw",
                        "http://www.youtube.com/embed/xQZggZnkOio",
                        "http://www.youtube.com/embed/ys_BZXi02yQ",
                        "http://www.youtube.com/embed/hb7cUAr8SV4"
                    ],
                    "bbfc_insight_info": "strong injury detail, language",
                    "bbfc_insight_link": "http://www.bbfc.co.uk/AZF377166",
                    "product_releases": [
                        {
                            "date": "2020-01-10T00:00:00Z",
                            "format": "THEATRICAL_RELEASE"
                        },
                        {
                            "date": "2020-01-30T00:00:00Z",
                            "format": "CINEMA"
                        },
                        {
                            "date": "2020-01-27T00:00:00Z",
                            "format": "CINEMA"
                        },
                        {
                            "date": "2020-05-18T00:00:00Z",
                            "format": "BLU_RAY"
                        },
                        {
                            "date": "2020-05-18T00:00:00Z",
                            "format": "DVD"
                        },
                        {
                            "date": "2020-05-11T00:00:00Z",
                            "format": "DOWNLOAD"
                        },
                        {
                            "date": "2020-05-25T00:00:00Z",
                            "format": "ONLINE"
                        }
                    ],
                    "cinematic_release_date": "2020-01-30",
                    "physical_release_date": "2020-05-18",
                    "digital_release_date": "2020-05-25"
                },
                {
                    "cast": [
                        "Margot Robbie",
                        "Jurnee Smollett",
                        "Mary Elizabeth Winstead",
                        "Rosie Perez",
                        "Karen Fukuhara",
                        "Gugu Mbatha-Raw",
                        "Ella Jay Basco",
                        "Chris Messina",
                        "Ewan McGregor",
                        "Ali Wong",
                        "Charlene Amoia",
                        "Bojana Novakovic"
                    ],
                    "directors": [
                        "Cathy Yan"
                    ],
                    "availability": [
                        "PlayingInTheatres",
                        "BuyToOwn"
                    ],
                    "genres": [
                        "Feature",
                        "Action"
                    ],
                    "id": 166635,
                    "image": "https://d3b9wy469r90hc.cloudfront.net/images/film/7847560-1366x768.jpg",
                    "onesheet": "https://d3b9wy469r90hc.cloudfront.net/images/film/7870406-320x488.jpg",
                    "rating": "15",
                    "release_date": "2020-02-07T00:00:00Z",
                    "release_year": 2020,
                    "runtime": 104,
                    "slug": "birds-of-prey",
                    "studio": "WARNER BROS INT'L",
                    "synopsis": "You ever hear the one about the cop, the songbird, the psycho and the mafia princess? 'Birds of Prey (And the Fantabulous Emancipation of One Harley Quinn)' is a twisted tale told by Harley herself, as only Harley can tell it. When Gotham's most nefariously narcissistic villain, Roman Sionis, and his zealous right-hand, Zsasz, put a target on a young girl named Cass, the city is turned upside down looking for her. Harley, Huntress, Black Canary and Renee Montoya's paths collide, and the unlikely foursome have no choice but to team up to take Roman down.",
                    "thumbnail": "https://d3b9wy469r90hc.cloudfront.net/images/film/7870406-320x488.jpg",
                    "title": "Birds Of Prey",
                    "type": "FILM",
                    "youtube_urls": [
                        "http://www.youtube.com/embed/s1l914WkO6Y",
                        "http://www.youtube.com/embed/2W-Yrdwgj8E",
                        "http://www.youtube.com/embed/09nzGYOSBdY",
                        "http://www.youtube.com/embed/jl1ge00qF6I",
                        "http://www.youtube.com/embed/encyhoUinyE"
                    ],
                    "bbfc_insight_info": "strong violence, injury detail, language, sexual threat",
                    "bbfc_insight_link": "http://www.bbfc.co.uk/AZF378196",
                    "product_releases": [
                        {
                            "date": "2020-02-07T00:00:00Z",
                            "format": "THEATRICAL_RELEASE"
                        },
                        {
                            "date": "2020-02-19T00:00:00Z",
                            "format": "CINEMA"
                        },
                        {
                            "date": "2020-04-27T00:00:00Z",
                            "format": "DOWNLOAD"
                        },
                        {
                            "date": "2020-05-18T00:00:00Z",
                            "format": "ONLINE"
                        },
                        {
                            "date": "2020-06-15T00:00:00Z",
                            "format": "DVD"
                        },
                        {
                            "date": "2020-06-15T00:00:00Z",
                            "format": "BLU_RAY"
                        }
                    ],
                    "cinematic_release_date": "2020-02-19",
                    "physical_release_date": "2020-06-15",
                    "digital_release_date": "2020-05-18"
                },
                {
                    "cast": null,
                    "directors": null,
                    "availability": [
                        "BuyToOwn",
                        "WatchNow",
                        "Dvd"
                    ],
                    "genres": [
                        "Television",
                        "Comedy",
                        "Drama"
                    ],
                    "id": 9480,
                    "image": null,
                    "onesheet": "https://d3b9wy469r90hc.cloudfront.net/images/tv/691553-320x488.jpg",
                    "rating": null,
                    "release_date": "2018-01-01",
                    "release_year": 2018,
                    "runtime": 0,
                    "slug": "lucifer",
                    "studio": null,
                    "synopsis": null,
                    "thumbnail": "https://d3b9wy469r90hc.cloudfront.net/images/tv/691553-320x488.jpg",
                    "title": "Lucifer",
                    "type": "SERIES",
                    "youtube_urls": null,
                    "bbfc_insight_info": null,
                    "bbfc_insight_link": null,
                    "product_releases": [
                        {
                            "date": "2020-07-17T00:14:12.80582854Z",
                            "format": "DOWNLOAD"
                        },
                        {
                            "date": "2020-07-17T00:14:12.805831849Z",
                            "format": "ONLINE"
                        },
                        {
                            "date": "2020-07-17T00:14:12.80583431Z",
                            "format": "DVD"
                        }
                    ],
                    "cinematic_release_date": null,
                    "physical_release_date": "2020-07-17",
                    "digital_release_date": "2020-07-17"
                },
                {
                    "cast": [
                        "Elisabeth Moss",
                        "Harriet Dyer",
                        "Aldis Hodge",
                        "Storm Reid",
                        "Oliver Jackson-Cohen",
                        "Michael Dorman",
                        "Amali Golden",
                        "Zara Michales",
                        "Benedict Hardie",
                        "Nash Edgerton"
                    ],
                    "directors": [
                        "Leigh Whannell"
                    ],
                    "availability": [
                        "PlayingInTheatres",
                        "BuyToOwn"
                    ],
                    "genres": [
                        "Feature",
                        "Horror",
                        "Thriller"
                    ],
                    "id": 167078,
                    "image": "https://d3b9wy469r90hc.cloudfront.net/images/film/7848917-1366x768.jpg",
                    "onesheet": "https://d3b9wy469r90hc.cloudfront.net/images/film/7880003-320x488.jpg",
                    "rating": "15",
                    "release_date": "2020-02-28T00:00:00Z",
                    "release_year": 2020,
                    "runtime": 119,
                    "slug": "the-invisible-man",
                    "studio": "UNIVERSAL INT'L",
                    "synopsis": "Trapped in a violent, controlling relationship with a wealthy and brilliant scientist, Cecilia Kass (Moss) escapes in the dead of night and disappears into hiding, aided by her sister (Harriet Dyer, NBC's The InBetween), their childhood friend (Aldis Hodge, Straight Outta Compton) and his teenage daughter (Storm Reid, HBO's Euphoria). But when Cecilia's abusive ex (Oliver Jackson-Cohen, Netflix's The Haunting of Hill House) commits suicide and leaves her a generous portion of his vast fortune, Cecilia suspects his death was a hoax. As a series of eerie coincidences turns lethal, threatening the lives of those she loves, Cecilia's sanity begins to unravel as she desperately tries to prove that she is being hunted by someone nobody can see.",
                    "thumbnail": "https://d3b9wy469r90hc.cloudfront.net/images/film/7880003-320x488.jpg",
                    "title": "The Invisible Man",
                    "type": "FILM",
                    "youtube_urls": [
                        "http://www.youtube.com/embed/z0rT9nQY53I",
                        "http://www.youtube.com/embed/XKvF4nah8L4",
                        "http://www.youtube.com/embed/SkW8fQcNTf8",
                        "http://www.youtube.com/embed/4iZfNGZvsEU",
                        "http://www.youtube.com/embed/Jni9QT21hWI"
                    ],
                    "bbfc_insight_info": "strong bloody violence, threat, language, domestic abuse",
                    "bbfc_insight_link": "http://www.bbfc.co.uk/AZF380265",
                    "product_releases": [
                        {
                            "date": "2020-02-28T00:00:00Z",
                            "format": "THEATRICAL_RELEASE"
                        },
                        {
                            "date": "2020-03-01T00:00:00Z",
                            "format": "CINEMA"
                        },
                        {
                            "date": "2020-06-29T00:00:00Z",
                            "format": "BLU_RAY"
                        },
                        {
                            "date": "2020-06-29T00:00:00Z",
                            "format": "DVD"
                        },
                        {
                            "date": "2020-04-27T00:00:00Z",
                            "format": "ONLINE"
                        },
                        {
                            "date": "2020-06-22T00:00:00Z",
                            "format": "DOWNLOAD"
                        }
                    ],
                    "cinematic_release_date": "2020-03-01",
                    "physical_release_date": "2020-06-29",
                    "digital_release_date": "2020-06-22"
                },
                {
                    "cast": [
                        "Jim Carrey",
                        "Tika Sumpter",
                        "James Marsden",
                        "Neal McDonough",
                        "Debs Howard",
                        "Leanne Lapp",
                        "Michael Hogan",
                        "Natasha Rothwell",
                        "Lee Majdoub",
                        "Adam Pally"
                    ],
                    "directors": [
                        "Jeff Fowler"
                    ],
                    "availability": [
                        "PlayingInTheatres",
                        "BuyToOwn",
                        "WatchNow"
                    ],
                    "genres": [
                        "Feature",
                        "Adventure"
                    ],
                    "id": 166440,
                    "image": "https://d3b9wy469r90hc.cloudfront.net/images/film/7847798-1366x768.jpg",
                    "onesheet": "https://d3b9wy469r90hc.cloudfront.net/images/film/7870040-320x488.jpg",
                    "rating": "PG",
                    "release_date": "2020-02-14T00:00:00Z",
                    "release_year": 2019,
                    "runtime": 94,
                    "slug": "sonic-the-hedgehog",
                    "studio": "PARAMOUNT INT'L",
                    "synopsis": "SONIC THE HEDGEHOG is a live-action adventure comedy based on the global blockbuster video game franchise from Sega that centres on the infamously brash bright blue hedgehog. The film follows the misadventures of Sonic as he navigates the complexities of life on Earth with his newfound – human – best friend Tom Wachowski (James Marsden). Sonic and Tom join forces to try and stop the villainous Dr. Robotnik (Jim Carrey) from capturing Sonic and using his immense powers for world domination. The film also stars Tika Sumpter and Ben Schwartz as the voice of Sonic.",
                    "thumbnail": "https://d3b9wy469r90hc.cloudfront.net/images/film/7870040-320x488.jpg",
                    "title": "Sonic The Hedgehog",
                    "type": "FILM",
                    "youtube_urls": [
                        "http://www.youtube.com/embed/DWYnZspGUAg",
                        "http://www.youtube.com/embed/HndtTDvr-iE",
                        "http://www.youtube.com/embed/uGVNgVXVimk",
                        "http://www.youtube.com/embed/1ci3uFEz1Xs",
                        "http://www.youtube.com/embed/bSx-6n7hXAA"
                    ],
                    "bbfc_insight_info": "mild violence, threat, rude humour",
                    "bbfc_insight_link": "http://www.bbfc.co.uk/AZF374506",
                    "product_releases": [
                        {
                            "date": "2020-02-14T00:00:00Z",
                            "format": "THEATRICAL_RELEASE"
                        },
                        {
                            "date": "2020-02-19T00:00:00Z",
                            "format": "CINEMA"
                        },
                        {
                            "date": "2020-06-08T00:00:00Z",
                            "format": "BLU_RAY"
                        },
                        {
                            "date": "2020-06-08T00:00:00Z",
                            "format": "DVD"
                        },
                        {
                            "date": "2020-04-27T00:00:00Z",
                            "format": "DOWNLOAD"
                        },
                        {
                            "date": "2020-05-04T00:00:00Z",
                            "format": "ONLINE"
                        }
                    ],
                    "cinematic_release_date": "2020-02-19",
                    "physical_release_date": "2020-06-08",
                    "digital_release_date": "2020-05-04"
                }
            ];
            let topMovies = response.data.filter((movie) => {
                return movie.rating > 12 && movie.image;
            });
            const totalRecords = Math.ceil(response.data/rows);
            if(response.data >= 5) {
                topMovies = response.data.slice(0,5);
            }
            this.setState({
                movies: response.data,
                topMovies, 
                totalRecords
            })
        }
    }

    onPageChange = (event) => {
        console.log(event);
    }

    itemTemplate = (item) => {
        return (
            <div className="p-grid p-nogutter p-justify-center" style={{ width: '100%', position: "relative" }}>
                <img src={`${item.image}`} alt={item.alt} style={{ width: '100%' }} />
                <h3 className="top-movie__title">{item.title}</h3>
            </div>
        );
    }
    
    previewTemplate = (item) => {
        return <img src={`${item.image}`} alt={item.alt} style={{ width: '100%', display: 'none' }} />
    }

    render() {
        const { movies, firstPage, rows, totalRecords } = this.state;
        const moviesItem = movies.map((movie, index) => {
            return (
                <div className="p-col-6 p-md-3 p-lg-3">
                    <MovieItem 
                    key={index}
                    movie={movie}
                    ></MovieItem>
                </div>
            )
        })
        return (
            <div className="movies-listing container">
                <div className="p-grid">
                <Galleria value={this.state.topMovies} previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} 
                    numVisible={5} circular={true} autoPlay={true} transitionInterval={3000} className="top-movie"></Galleria>
                    { movies.length <= 0 
                        ? <h2>Can't find any movies</h2>
                        : moviesItem
                    }
                </div>
                <Paginator className="movie-paginator" pageLinkSize={5} first={firstPage} rows={rows} totalRecords={totalRecords} rowsPerPageOptions={this.rowsPerPageOptions} onPageChange={this.onPageChange}></Paginator>
            </div>
        )
    }
}

export default MoviesListing;