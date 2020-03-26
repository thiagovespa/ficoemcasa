'use strict'

const BaseValidator = require('./BaseValidator')

class Auth extends BaseValidator {
  get rules () {
    return {
      email: "required|email",
      password: "required"
    }
  }

  get messages () {
    return {
      'email.required': 'Campo e-mail é obrigatório',
      'email.email': 'Formato de e-mail inválido',
      'password.required': 'Campo senha é obrigatório',
    }
  }
}

module.exports = Auth
