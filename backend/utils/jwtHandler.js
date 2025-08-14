import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'bhanuartgram200216vmk';
const JWT_ALGORITHM = process.env.JWT_ALGORITHM || 'HS256';
const JWT_EXPIRY_MINUTES = parseInt(process.env.JWT_EXPIRY_MINUTES) || 600;

export const createAccessToken = (data) => {
  try {
    const toEncode = { ...data };
    const expire = new Date();
    expire.setMinutes(expire.getMinutes() + JWT_EXPIRY_MINUTES);
    toEncode.exp = Math.floor(expire.getTime() / 1000);
    
    const token = jwt.sign(toEncode, JWT_SECRET, { algorithm: JWT_ALGORITHM });
    return token;
  } catch (error) {
    console.error('JWT creation error:', error);
    throw error;
  }
};

export const decodeAccessToken = (token) => {
  try {
    const payload = jwt.verify(token, JWT_SECRET, { algorithms: [JWT_ALGORITHM] });
    return payload;
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      const error = new Error('Token has expired');
      error.status = 401;
      throw error;
    }
    if (error.name === 'JsonWebTokenError') {
      const error = new Error('Invalid token');
      error.status = 401;
      throw error;
    }
    throw error;
  }
};
