import { MongoClient } from 'mongodb';

async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const userEmail = req.body.email;
      if (!userEmail || !userEmail.includes('@')) {
        res.status(422).json({ message: 'Invalid data input' });
        return;
      }
      const client = await MongoClient.connect('mongodb+srv://Sergii:iWx67oerhX6vfj4h@cluster0.7u7ll.mongodb.net/events?retryWrites=true&w=majority')
      const db = client.db();
      await db.collection('emails').insertOne({ email: userEmail });
      client.close();

      res.status(201).json({ message: 'Current email was set!' });
    }
  } catch (error) {
    console.log(error, 'error')
  }
};

export default handler;
