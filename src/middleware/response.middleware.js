const responseMiddleware = (req, res, next) => {
    res.success = (status, message, data) => {
        return res.status(status).json({
            success: true,
            message,
            data
        })
    }
    res.error = (status, message, data) => {
        res.status(status).json({
            success: false,
            message,
            ...(data !== undefined && {data})
        })
    }
    next()
}

module.exports = responseMiddleware;