'use strict'

const BaseValidator = require('./BaseValidator')

class User extends BaseValidator {
  get rules () {
    const userId = this.ctx.params.id
      if(userId){
        return {
          email: `email|unique:users,email,id,${userId}`,         
          type: 'in:consumidor,comerciante',
          cpf: `unique:users,cpf,id,${userId}`
        }
    }

    return {
      email: 'required|email|unique:users,email',
      password: 'required',
      address: 'required',
      username: 'required',
      type: 'required|in:consumidor,comerciante',
      phone: 'required',
      cpf: 'required|unique:users,cpf'
    }
  }

  get messages () {
    return {
      'email.required': 'Campo e-mail é obrigatório',
      'email.email': 'Formato de e-mail inválido',
      'email.unique': 'Endereço de e-mail já existe',
      'password.required': 'Campo senha é obrigatório',
      'address.required': 'Campo endereço é obrigatório',
      'username.required': 'Campo nome de usuário é obrigatório',
      'type.required': 'Campo tipo é obrigatório',
      'type.in': 'Campo tipo inválido',
      'phone.required': 'Campo telefone é obrigatório',
      'cpf.required': 'Campo CPF é obrigatório',
      'cpf.unique': 'CPF já existe'
    }
  }
}

module.exports = User
