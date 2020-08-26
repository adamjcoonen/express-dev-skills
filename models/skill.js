const skills = [
    {id: 125223, skill: 'HTML', level: 'Good'},
    {id: 127904, skill: 'Express', level: 'Great'},
    {id: 139608, skill: 'Javascript', level: 'Average'},
    {id: 335621, skill: 'Cage Fighting', level: 'expert'}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  

  //This will control the update

  function update(id, skill){
    const skId = skills.findIndex(skill => skill.id === parseInt(id))
    skill.id = parseInt(id);
    skills.splice(skId, 1, skill)
  }

  //add the delete function 
  function deleteOne(skillId){
    const skId = skills.findIndex(skill => skill.id === parseInt(skillId))
    skills.splice(skId, 1);
  }



  function create(skill) {
    skill.id = Date.now() % 10000000;
    skills.push(skill);
  }

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }

  function getAll() {
    return skills;
  }