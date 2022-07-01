const passport = require("passport")
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;


const GOOGLE_CLIENT_ID = '546874340887-rhrn1n2egorpjqtei0eiuj4fq3nt6j0c.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    
      return done(null, profile);
    
  }
));


passport.serializeUser(function(user,done) {
    done(null,user)
})


passport.deserializeUser(function(user,done) {
    done(null,user)
})
