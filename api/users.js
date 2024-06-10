const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const dataPath = path.join(__dirname, '..', 'db.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  if (req.method === 'GET') {
    res.status(200).json(data.users);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};