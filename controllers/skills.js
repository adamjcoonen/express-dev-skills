let Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    edit,
    update,
    delete: deleteSkill
}




function update(req, res) {
    // use the Skill model to update the skill object 
    // Skill.update(req.params.id, req.body);
    Skill.update(req.params.id, req.body)
    req.body.level = "good";
    res.redirect('/skills')
}

function edit(req, res) {
    res.render('skills/edit', {
      skill: Skill.getOne(req.params.id)
    });
  }

//
function deleteSkill(req, res){
    //use the model to delete the to do
      Skill.deleteOne(req.params.id)
    //redirect because we changed data
    res.redirect('/skills');
}   

function create(req, res) {
    //the model is responcible for CRUDing data
    req.body.level = "good";
    Skill.create(req.body);
    res.redirect('/skills')

}

// new skill. the user adds a new skill to the list
function newSkill(req, res){
    res.render('skills/new');
}



function index(req,res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    });
}

// use wants to see the particular skill
function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        // like to see the level of skill for the skill listed
        skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) +1
    });
}