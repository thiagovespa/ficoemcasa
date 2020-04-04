'use strict'

const PaymentType = use('App/Models/PaymentType')

class PaymentTypeController {

    async index ({ request, response }) {
        return await PaymentType.all();
    }
}

module.exports = PaymentTypeController
