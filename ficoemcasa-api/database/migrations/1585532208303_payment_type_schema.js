'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentTypeSchema extends Schema {
  up () {
    this.create('payment_types', (table) => {
      table.increments()
      table.string('description', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('payment_types')
  }
}

module.exports = PaymentTypeSchema
