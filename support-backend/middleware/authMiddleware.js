import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'



const protect = asyncHandler(async (req, res, next) => {
  let token;

  console.log('headers ',req.headers)
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
     try {
        token = req.headers.authorization.split(' ')[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log('DECODED ', decoded)

        req.user = await User.findById(decoded.id).select('-password')
        next()
    } catch (error) {
        console.log('Error ', error)
        res.status(401)
        throw new Error('Unauthorized User')
     }
  }

  if (!token) {
    res.status(401)
    throw new Error('Unauthorized User')
  }
})

export default protect;

