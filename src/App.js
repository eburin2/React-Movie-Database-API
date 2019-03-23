import React, { Component } from 'react';
import $ from 'jquery';
import MovieRow from './MovieRow';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log('yo');
  
  // const movies = [
  //   {id: 0, cover: 'https://images-na.ssl-images-amazon.com/images/I/514K35AM3KL._SY445_.jpg', title: 'Repoman', year: 1984},
  //   {id: 1, cover: 'https://m.media-amazon.com/images/M/MV5BMjI1MDk4NjE0OV5BMl5BanBnXkFtZTcwMjExODM5NA@@._V1_UY1200_CR84,0,630,1200_AL_.jpg', title: 'Tough Guys Don\'t Dance', year: 1987}
  // ];

  
  // let movieRows = [];
  // movies.forEach((movie) => {
  //   console.log(movie.id);
  //   const movieRow = <MovieRow movie={movie} />
  //   movieRows.push(<div key={movie.id}> {movieRow}</div>)
  // })
  // this.state = {rows: movieRows}
  this.performSearch();
}

performSearch(searchTerm) {
  console.log("perform search using moviedb");
  const urlString = 
  $.ajax({
    url: urlString,
    success: (searchResults) => {
      console.log("fetched data successfully");
      console.log(searchResults);
      const results = searchResults.results;
      // console.log(results[0]);

      let movieRows = [];

      results.forEach((movie) => {
        movie.cover = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
        console.log(movie.title);
        const movieRow = <MovieRow key={movie.id} movie={movie}/>
        movieRows.push(movieRow);
      })
      this.setState({rows: movieRows});
    },
    error: (xhr, status, err) => {
      console.error("failed to fetch data")
    }
  })
}

searchHandler(event) {
  console.log(event.target.value);
  const searchTerm = event.target.value;
  const boundObject = this;
  boundObject.performSearch(searchTerm);
}
  render() {
    return (
      <div>
        
        <table className="header">
          <tbody>
            <tr>
              <td>
                <img width="75" src="green-image.png" alt="movie database logo"/>
              </td>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input onChange={this.searchHandler.bind(this)} placeholder="enter search term" type="text" />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
