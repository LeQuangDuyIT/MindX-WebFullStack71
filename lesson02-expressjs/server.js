import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/ket-qua-bong-da', (req, res) => {
  res.send('Việt Nam win');
});

let persons = [
  {
    id: '1',
    name: 'Duy',
    age: 20
  },
  {
    id: '2',
    name: 'Bach',
    age: 18
  }
];

app.get('/persons', (req, res) => {
  res.json(persons);
});

app.get('/persons/:id', (req, res) => {
  const { id } = req.params;
  const personData = persons.find(person => person.id === id);
  if (!personData) {
    return res.json({ message: 'Not found' });
  }
  res.json({ data: personData });
});

app.post('/persons', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(4000).json({ message: 'Không hợp lệ' });
  }

  const newPerson = {
    id: uuidv4(),
    name: name,
    age: age
  };

  persons.push(newPerson);

  res.json({ data: persons });
});

app.delete('/persons/:id', (req, res) => {
  const { id } = req.params;
  persons = persons.filter(person => person.id !== id);
  res.json({ data: persons });
});

app.put('/persons/:id', (req, res) => {
  const newData = req.body;
  const { id } = req.params;

  const index = persons.findIndex(person => person.id === id);
  if (index === -1) {
    return res.status(400).json({ message: 'Not found' });
  }

  persons[index] = { ...persons[index], ...newData };

  res.json({ data: persons });
});

app.listen(3001, () => {
  console.log('Hello');
});
