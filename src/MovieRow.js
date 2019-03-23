import React from 'react';

class MovieRow extends React.Component {
    viewMovie() {
        console.log('view movie');
        const url = 'https://www.themoviedb.org/movie/' + this.props.movie.id;
        window.location.href = url;
    }
    render() {
        return <div>
                    <table key={this.props.movie.id}> 
                        <tbody>
                            <tr>
                                <td>
                                    <img className="cover-img" width="100" src={this.props.movie.cover} alt="cover"/>
                                </td>
                                <td>
                                   <h3>{this.props.movie.title}</h3>
                                    <h5>{this.props.movie.release_date}</h5>
                                    <p>{this.props.movie.overview}</p>
                                    <button onClick={this.viewMovie.bind(this)} value="view">view</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
               </div>
    }
}

export default MovieRow;