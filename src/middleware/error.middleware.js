const errorMiddleware = (err, req, res, next) => {
    console.error(`💥 Error: ${err.message}`);
    return res.error(err.status || 500, err.message || "Internal Server Error");
};

module.exports = errorMiddleware;
