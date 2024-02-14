class AppError {
    message;
    statuscode;

    constructor(message, statuscode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;