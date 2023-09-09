import { v4 as uuidv4 } from 'uuid';

const getDataAll = data => {
  return (_, res) => {
    res.json({ data: data });
  };
};

const getDataById = data => {
  return (req, res) => {
    const { id } = req.params;
    const result = data.find(item => item.id === id);

    if (!result) {
      return res.status(404).json({ message: 'Không tìm thấy' });
    }

    res.json({ data: result });
  };
};

const postData = data => {
  return (req, res) => {
    const { name, gender, classCode } = req.body;

    const shouldPost = name && gender && classCode;

    if (!shouldPost) {
      return res.status(401).json('Dữ liệu không hợp lệ');
    }

    const newItem = {
      id: uuidv4(),
      name,
      gender,
      classCode
    };

    data.push(newItem);

    res.json({ data: students });
  };
};

const putDataById = data => {
  return (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    const index = data.findIndex(item => item.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Không tìm thấy học sinh' });
    }

    data[index] = { ...data[index], ...newData };
    res.json({ data: students });
  };
};

const deleteDataById = data => {
  return (req, res) => {
    const { id } = req.params;

    const index = data.findIndex(item => item.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Không tìm thấy' });
    }

    data.splice(index, 1);
    res.json({ data: students });
  };
};

export { getDataAll, getDataById, postData, putDataById, deleteDataById };
