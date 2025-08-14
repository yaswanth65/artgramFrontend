import { decodeAccessToken } from '../utils/jwtHandler.js';

export const getCurrentUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ detail: 'Could not validate credentials' });
    }

    const token = authHeader.substring(7);
    const payload = decodeAccessToken(token);
    
    if (!payload || !payload.user_id || !payload.role) {
      return res.status(401).json({ detail: 'Invalid token payload' });
    }

    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ detail: error.message || 'Invalid or expired token' });
  }
};

export const roleRequired = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ detail: 'Authentication required' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        detail: 'You do not have permission to perform this action' 
      });
    }

    next();
  };
};
