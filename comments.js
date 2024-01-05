const http = require('http');

const skills = [
    {
        'id': 1,
        'name': 'JavaScript',
        'description': 'JavaScript is a scripting language.'
    },
    {
        'id': 2,
        'name': 'HTML',
        'description': 'HTML is a markup language.'
    },
    {
        'id': 3,
        'name': 'CSS',
        'description': 'CSS is a style sheet language.'
    }
];

function getSkills(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(skills));
}

function getSkill(req, res) {
    const id = req.url.split('/')[2];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(skills[id - 1]));
}

function insertSkill(req, res) {
    let skill = '';
    req.on('data', (data) => {
        skill += data;
    });
    req.on('end', () => {
        skill = JSON.parse(skill);
        skills.push(skill);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(skills));
    });
}

function updateSkill(req, res) {
    const id = req.url.split('/')[2];
    let skill = '';
    req.on('data', (data) => {
        skill += data;
    });
    req.on('end', () => {
        skill = JSON.parse(skill);
        skills[id - 1] = skill;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(skills));
    });
}

function deleteSkill(req, res) {
    const id = req.url.split('/')[2];
    skills.splice(id - 1, 1);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(skills));
}

// Path: comments.js
// Create web server
const server = http.createServer((req, res) => {
    // Handle incoming requests here
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
