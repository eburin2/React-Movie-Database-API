import React from 'react';

class MovieRow extends React.Component {
    render() {
        return <div>
                    <table key={this.props.movie.id}> 
                        <tbody>
                            <tr>
                                <td>
                                    <img className="cover-img" width="100" src={this.props.movie.cover} alt="cover"/>
                                </td>
                                <td>
                                    {this.props.movie.title}
                                    <p>{this.props.movie.overview}</p>
                                    <p>{this.props.movie.year}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
               </div>
    }
}

export default MovieRow;