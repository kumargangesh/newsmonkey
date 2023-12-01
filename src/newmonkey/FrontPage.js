import React, { Component } from 'react'
import NewsComponent from './NewsComponent';
import "./Style.css";

class FrontPage extends Component {

  constructor(){
    super();
    this.state = {
      "Movies": []
    };
  }

  async componentDidMount(){
      // let url = "https://www.omdbapi.com/?s=avengers&apikey=5f315efc";
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // console.log(parsedData.Search);
      // this.setState({Movies:parsedData.Search});

      let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=7170c63a57604df9af3272078490ac14";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData.articles);
      this.setState({Movies : parsedData.articles});

  }

  render() {
    return (
      <div className='container'>
        <h2 style={{marginTop : "2.5%"}}>NewsMonkey - Top headlines</h2>
        <div className="line" />
        <div className="row">
          {this.state.Movies.map((element)=>{
              return(
                <div className="col-md-4">
                    <NewsComponent title={element.title} description={element.description} imageURL={element.urlToImage}/>
                  </div>
              );
          })}
        </div>
        
      </div>
    )
  }
}

export default FrontPage;