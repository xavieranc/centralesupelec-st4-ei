import express from 'express' ;

const router = express.Router();

router.get('/', function (req, res) {
    res.json({ message : []})
})

router.post('/new', function (req, res) {
    console.log(req.body)
})

export default router