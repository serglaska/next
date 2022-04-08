import { MongoClient } from 'mongodb';
//////////////////////////////////////

const connectToDataBase = async () => {
  const client = await MongoClient.connect('mongodb+srv://Sergii:iWx67oerhX6vfj4h@cluster0.7u7ll.mongodb.net/events?retryWrites=true&w=majority')
  return client;
};

const insertData = async (client, userDataComment) => {
  const db = client.db();
  const result = await db.collection('comments').insertOne(userDataComment);
  userDataComment.id = result.insertedId;
};

async function handler(req, res) {
  const eventId = req.query;
  let client;

  try {
    client = await connectToDataBase();
  } catch (error) {
    res.status(500).json('Some problems with connecting to mongoDB');
    return;
  };

  if (req.method === 'POST') {
    const { email, text, name } = req.body;

    if (!email.includes('@') || !email || !text || !name) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const userDataComment = {
      text,
      name,
      email,
      eventId: eventId.eventId
    };

    try {
      await insertData(client, userDataComment);
    } catch (error) {
      res.status(500).json('Some issues with data');
      client.close();
    };

    res.status(201).json({
      message: 'Data saved to MongoDB', comment: userDataComment
    });
  }

  if (req.method === 'GET') {
    const db = client.db();
    const documents = await db.collection('comments').find().sort({ _id: -1 }).toArray();

    res.status(200).json({ comments: documents });
  }

  client.close();
};

export default handler;
