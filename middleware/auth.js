module.exports.auth = (req, res, next) => {
  const admin = req.session.isAdmin

  if (!admin) {
    return res.redirect('/auth/login')
  }

  next()
}