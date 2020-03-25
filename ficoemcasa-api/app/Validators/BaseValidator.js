'use strict'

class BaseValidator {

    async fails (errorMessages) {
        return this.ctx.response
          .status(400).json({ error: errorMessages.shift().message })
    }

}

module.exports = BaseValidator