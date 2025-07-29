class AppError extends Error {
    constructor(message, statuscode){
        super(message);
        this.statuscode = statuscode;
        this.status = `${statuscode}` .startsWith("4") ? "fail" : "error";
        //if status code start with 4 then it  fail else error 
        this.isoperational = true;
        Error.captureStackTrace(this, this.contructor);
    }
}

module.exports = AppError;