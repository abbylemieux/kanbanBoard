import { Router, Request, Response } from 'express';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const authRoutes = Router();

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const isPasswordValid = user && (await bcrypt.compare(password, user.password));
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    // Optional: Use cookie instead of JSON response
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Only set secure flag in production
      maxAge: 3600 * 1000, // 1 hour in milliseconds
    });
    
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }

  return; // Add a return statement at the end of the function
};

// Attach the login route to authRoutes
authRoutes.post('/login', login);

export default authRoutes;
