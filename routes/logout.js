var login = require('./middlewares/login');

module.exports = function(app) {
  app.get('/logout',
    login.required,
    function (req, res) {
      req.logout();
      delete req.session;
      return res.redirect('/logout/success');
    });
  app.get('/logout/success',
    function(req, res) {
      res.render('logout_success.html')
    });
}
