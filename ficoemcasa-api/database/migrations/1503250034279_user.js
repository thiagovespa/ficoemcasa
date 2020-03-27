'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('address', 255).notNullable()
      table.enu('type', ['consumidor', 'comerciante']).defaultTo('consumidor')
      table.boolean('active').notNullable().default(false);
      table.string('phone', 15).notNullable();
      table.text('bio').nullable();
      table.string('cpf', 30).notNullable().unique();
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
