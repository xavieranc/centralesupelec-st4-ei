import express from 'express' ;
import { appDataSource } from '../datasource.js' ;
import Movie from '../entities/movie.js' ;

const router = express.Router();

router.get('/', function (req, res) {
    res.json({ message : []})
})

router.post('/new', function (req, res) {
    const movie_repository = appDataSource.getRepository(Movie) ;
	const new_movie = appDataSource.create({
		name : req.body.name,
		release_date : req.body.release_date 
	}) ;

	movie_repository
		.save({new_movie})
		.then(function (saved_movie) {res.status(201).json({
			message : "Movie successfully saved .",
			id : saved_movie.id,
			name : saved_movie.name,
			release_date : saved_movie.release_date
		})})
		.catch(function (error) {console.error(error) ;
			if (error.code === '23505') {res.status(400).json({message: `Movie with name "${new_movie.name}" already exists.`}) ;} 
			else {res.status(500).json({ message: 'Error while creating the movie.' }) ;}
		}) ;
}) ;

export default router