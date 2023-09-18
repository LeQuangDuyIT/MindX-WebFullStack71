import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

const usersData = [
  {
    id: '1',
    email: 'alice@gmail.com',
    password: 'alice@123',
    fullname: 'Alice H'
  },
  {
    id: '2',
    email: 'bob@gmail.com',
    password: 'bob@123',
    fullname: 'Bobby'
  },
  {
    id: '3',
    email: 'charlie@gmail.com',
    password: 'charlie@123',
    fullname: 'Charlie Put'
  }
];

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: 'Nhập thiếu thông tin' });
  }

  const existingUser = usersData.find(u => u.email === email && u.password === password);
  if (!existingUser) {
    return res.status(401).json({ message: 'Tài khoản không chính xác' });
  }

  const payload = {
    id: existingUser.id,
    email: existingUser.email,
    password: existingUser.password
  };
  const SECRET_KEY = process.env.SECRET_KEY;
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_TIME });

  res.json({
    message: 'Đăng nhập thành công',
    accessToken: token
  });
});

export default router;
