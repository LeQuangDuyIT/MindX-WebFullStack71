import express from 'express';
import { v4 as uuidv4 } from 'uuid';

// Mock data
const mockupComments = [
  {
    id: '0001',
    user: 'Rosa Summers',
    content:
      'freedom clean vote ever printed bag badly blind arm cup fastened even area chose grow percent sell smallest contrast concerned shoe engineer giant hospital'
  },
  {
    id: '0002',
    user: 'Phillip Robbins',
    content:
      'volume my jack blew dark habit calm slide single fort almost won minerals sweet rice stairs baseball mouse clothes buried cowboy home substance aside'
  },
  {
    id: '0003',
    user: 'Olive Fernandez',
    content:
      'street lamp series be leather cold therefore picture slight introduced party position slide it forget carefully again into nest steep chain some forty swimming'
  },
  {
    id: '0004',
    user: 'Jayden Myers',
    content:
      'speed above great success law globe cheese rear kids lunch apart wheel anyone those piece hunter right excitement north excellent leave community never worse'
  },
  {
    id: '0005',
    user: 'Mae Anderson',
    content:
      'sugar climb catch black metal wool exactly he fierce that fog broad flat become hit chest factor mainly hurry begun cry drawn raise satisfiedAmet laborum est do amet enim. Est id ullamco ut incididunt qui. Quis Lorem deserunt incididunt pariatur dolore voluptate. Lorem aliquip aliquip in cupidatat ea nostrud ex labore exercitation in. Dolor ex nulla qui reprehenderit reprehenderit reprehenderit enim commodo mollit aliqua Lorem velit commodo. Nisi reprehenderit minim velit irure labore cillum reprehenderit sunt. Id et exercitation aliquip do eiusmod qui aliqua.'
  }
];
// End Mock data

const app = express();
app.use(express.json());

const PORT = 3002;

app.get('/', (req, res) => {
  res.send('Hello, this is my server');
});

app.get('/comments', (req, res) => {
  res.json({ data: mockupComments });
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const index = mockupComments.findIndex(cmt => cmt.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Không tìm thấy' });
  }
  res.json({ data: mockupComments[index] });
});

app.post('/comments', (req, res) => {
  const { user, content } = req.body;
  const shouldPost = user && content;

  if (!shouldPost) {
    return res.status(404).json({ message: 'Dữ liệu không hợp lệ' });
  }

  const newComment = {
    id: uuidv4(),
    user,
    content
  };

  mockupComments.push(newComment);
  res.json({ data: mockupComments });
});

app.put('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  const index = mockupComments.findIndex(cmt => cmt.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Không tìm thấy' });
  }

  mockupComments[index] = { ...mockupComments[index], ...newData };
  res.json({ data: mockupComments });
});

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;

  const index = mockupComments.findIndex(cmt => cmt.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Không tìm thấy' });
  }

  mockupComments.splice(index, 1);
  res.json({ data: mockupComments });
});

app.listen(PORT, () => {
  console.log(`Welcome to PORT: ${PORT}`);
});
