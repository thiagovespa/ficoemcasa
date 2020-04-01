'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoryTypeSchema extends Schema {
  up () {
    this.create('category_types', (table) => {
      table.increments()
      table.string('description', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('category_types')
  }
}

module.exports = CategoryTypeSchema
