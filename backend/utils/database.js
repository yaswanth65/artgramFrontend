// MongoDB utility functions using Mongoose models
// These functions provide a consistent interface for database operations

export const fetchAll = async (Model, query = {}, options = {}) => {
  try {
    const results = await Model.find(query, null, options);
    return results;
  } catch (error) {
    console.error('Database fetchAll error:', error);
    throw error;
  }
};

export const fetchOne = async (Model, query = {}, options = {}) => {
  try {
    const result = await Model.findOne(query, null, options);
    return result;
  } catch (error) {
    console.error('Database fetchOne error:', error);
    throw error;
  }
};

export const fetchById = async (Model, id, options = {}) => {
  try {
    const result = await Model.findById(id, null, options);
    return result;
  } catch (error) {
    console.error('Database fetchById error:', error);
    throw error;
  }
};

export const executeQuery = async (Model, operation, data = {}) => {
  try {
    let result;
    switch (operation) {
      case 'create':
        result = await Model.create(data);
        break;
      case 'update':
        result = await Model.findByIdAndUpdate(data.id, data.update, { new: true, runValidators: true });
        break;
      case 'delete':
        result = await Model.findByIdAndUpdate(data.id, { is_deleted: true, updated_at: new Date() }, { new: true });
        break;
      case 'hardDelete':
        result = await Model.findByIdAndDelete(data.id);
        break;
      default:
        throw new Error(`Unknown operation: ${operation}`);
    }
    return result;
  } catch (error) {
    console.error('Database executeQuery error:', error);
    throw error;
  }
};

export const countDocuments = async (Model, query = {}) => {
  try {
    const count = await Model.countDocuments(query);
    return count;
  } catch (error) {
    console.error('Database countDocuments error:', error);
    throw error;
  }
};

export const aggregate = async (Model, pipeline) => {
  try {
    const results = await Model.aggregate(pipeline);
    return results;
  } catch (error) {
    console.error('Database aggregate error:', error);
    throw error;
  }
};
