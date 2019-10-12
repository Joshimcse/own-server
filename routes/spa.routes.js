const router = require('express').Router();

const __cwd = process.cwd();

router.get('*', (req, res) => {
  res.sendFile(__cwd + '/index.html');
})

module.exports = router;