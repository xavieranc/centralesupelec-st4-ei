import typeorm from 'typeorm' ;

const Movie = new typeorm.EntitySchema({
	name: 'Movie',
	columns: {
	  name: {
		primary: true,
		type: String,
		generated: true,
	  },
	  release_date: { type: String }
	},
  });
  
  export default Movie ;