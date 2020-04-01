'use strict'

const CategoryType = use('App/Models/CategoryType')

class CategoryTypeController {
    async index ({ params, request, response }) {
        return await CategoryType.create(request.post())
    }

    async show ({ params, response }) {
        const categoryType = await CategoryType.find(params.id)
        // return await CategoryType.findOrFail(params.id)
        return response.json(categoryType)
    }

    async showAll ({ params, response }) {
        return await CategoryType.all()
    }

    async delete ({ params, response }) {
        const categoryType = await CategoryType.find(params.id)

        return categoryType.delete()
    }
}


module.exports = CategoryTypeController
