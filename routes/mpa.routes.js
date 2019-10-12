const path = require('path'),
  router = require('express').Router(),
  __cwd = process.cwd();

router.get('*', (req, res) => {
  let pattern = new RegExp(/^.*\w+[.](html|htm)$/);
  if (pattern.test(req.url)) {
    res.sendFile(path.join(__cwd, req.url));
  } else {
    res.sendFile(path.join(__cwd, req.url, 'index.html'));
  }
})

module.exports = router;