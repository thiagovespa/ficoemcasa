'use strict'

const BaseValidator = require('./BaseValidator')

class CategoryType extends BaseValidator {
  get rules () {
    const categoryTypeDescription = this.ctx.params.description

    return {
      // description: 'required|unique:categoryType,description'
      description: `required|unique:category_types,description,${categoryTypeDescription}`
    }
  }

  get messages() {
    return {
      'description.required': "Campo de descrição é obrigatório",
      'description.unique': "Campo de descrição deve ser único"
    }
  }
}

module.exports = CategoryType
