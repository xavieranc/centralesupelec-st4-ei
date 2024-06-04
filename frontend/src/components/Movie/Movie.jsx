import axios from 'axios';
import './Movie.css';

export default function Movie({ movie: { title, date, image_path } }) {
  return (
      <div>
        <li>Titre : {title}</li>
        <li>Date de sortie : {date}</li>
        <li>
          <img src={`https://image.tmdb.org/t/p/w500/${image_path}`}/>
        </li>
      </div>
  ) ;
  }
