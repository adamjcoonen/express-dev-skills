let express = require('express');
let router = express.Router();
let skillsCtrl = require('../controllers/skills');
const skill = require('../models/skill');



// get skills 
router.get('/', skillsCtrl.index);

// GET /skills/new
router.get('/new', skillsCtrl.new);


// Get skills/<id of some kind>
router.get('/:id', skillsCtrl.show);

// post /skills
router.post('/', skillsCtrl .create)

// adding the delete route
router.delete('/:id', skillsCtrl.delete)

router.get('/:id/edit', skillsCtrl.edit)

// get the skills.new
router.put('/:id', skillsCtrl.update)

module.exports = router;
