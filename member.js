function skillsMember() {
    // Path: member.js
    function getSkills() {
        return $http.get('/api/skills');
    }
    // Path: member.js
    function getSkill(id) {
        return $http.get('/api/skills/' + id);
    }
    // Path: member.js
    function insertSkill(skill) {
        return $http.post('/api/skills', skill);
    }
    // Path: member.js
    function updateSkill(id, skill) {
        return $http.put('/api/skills/' + id, skill);
    }
    // Path: member.js
    function deleteSkill(id) {
        return $http.delete('/api/skills/' + id);
    }
    return {
        getSkills: getSkills,
        getSkill: getSkill,
        insertSkill: insertSkill,
        updateSkill: updateSkill,
        deleteSkill: deleteSkill
    }
}