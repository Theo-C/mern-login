export const sendToken = (res, user, statusCode, message) => {

    const userData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        
    }
    res.status(statusCode).json({success:true, message, user})
}