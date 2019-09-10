const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
import {Inject} from 'typedi';

import { UserService } from "../service/UserService";

@Inject()
const userService: UserService;

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
      // Match user
      try {
        let user = userService.getUser(username);
        if (!user) {
          return done(null, false, { message: 'That username is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (!isMatch) {
            return done(null, false, { message: 'Password incorrect' });
          }
          return done(null, user);
        });
      } catch(err) {
        return done(null, false, { message: 'That email is not registered. '+err });
      };
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.username);
  });

  passport.deserializeUser(function(id, done) {
    try {
      let user = userService.getUser(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
};