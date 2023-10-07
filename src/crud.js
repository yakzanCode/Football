import { connectDB } from './config.js';

export async function getTrophies(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('Trofies');
        
        const result = await collection.find({}).toArray();
        res.json(result);
    } catch (error) {
        console.error('Failed to connect or retrieve trophies', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function getTrophyByName(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('Trofies');
        
        const {name} = req.params;
        const result = await collection.find({name:name}).toArray();
        res.json(result);
    } catch (error) {
        console.error('Failed to connect or retrieve trophies', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function getPlayersByTrophies(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('PLAYERS');
        const result = await collection.find({ "trophies": { $exists: true } }).toArray();
        res.json(result);
    } catch (error) {
        console.error('Failed to connect or retrieve players', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}



export async function getLeagues(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('LEAGUES');
        
        const result = await collection.find({}).toArray();
        res.json(result);
    } catch (error) {
        console.error('Failed to connect or retrieve leagues', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function getClubs(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('CLUBS');
        
        const result = await collection.find({}).toArray();
        res.json(result);
    } catch (error) {
        console.error('Failed to connect or retrieve clubs', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function findClubByName(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('CLUBS');
        const { clubName } = req.params;
        const result = await collection.find({ ClubName: clubName }).toArray();
        res.json(result);
    } catch (error) {
        console.error('Failed to connect or retrieve club', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function findClubsByLeague(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('CLUBS');

        const { leagueName } = req.params;
        const result = await collection.find({ League: leagueName }).toArray();

        res.json(result);
    } catch (error) {
        console.error('Failed to connect or retrieve clubs by league', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function addClub(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('CLUBS');

        const clubToAdd = req.body;
        const result = await collection.insertOne(clubToAdd);

        console.log(clubToAdd);
        res.json({ message: 'Club added successfully', id: result.insertedId });
    } catch (error) {
        console.error('Failed to connect or add club', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function updateClub(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('CLUBS');

        const { clubName } = req.params;
        const updateFields = req.body;

        const result = await collection.updateMany({ ClubName: clubName }, { $set: updateFields });
        
        res.json({ message: 'Club updated successfully', result: result });

    } catch (error) {
        console.error('Failed to connect or update club', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function removeClub(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('CLUBS');

        const { clubName } = req.params;
        const result = await collection.deleteMany({ ClubName: clubName });
        
        res.json({ message: 'Club removed successfully', result: result });
    } catch (error) {
        console.error('Failed to connect or remove club', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function getPlayers(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('PLAYERS');
        const result = await collection.find({}).toArray();
        res.json(result);
    } catch (error) {
        console.error('Failed to connect or retrieve players', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function findPlayerByName(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('PLAYERS');
        const { name } = req.params;
        const result = await collection.find({ PlayerName: name }).toArray();
        res.json(result);
    } catch (error) {
        console.error('Failed to connect or retrieve player', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function findPlayersByClub(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('PLAYERS');
        const { club } = req.params;
        const result = await collection.find({ Club: club }).toArray();

        res.json(result);
    } catch (error) {
        console.error('Failed to connect or retrieve players by club', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function addPlayer(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('PLAYERS');

        const playerToAdd = req.body;
        const result = await collection.insertOne(playerToAdd);

        console.log(playerToAdd);
        res.json({ message: 'Player added successfully', id: result.insertedId });
    } catch (error) {
        console.error('Failed to connect or add player', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function addPlayers(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('PLAYERS');

        const playersToAdd = req.body;
        const result = await collection.insertMany(playersToAdd);

        res.json({ message: 'Player added successfully', result });
    } catch (error) {
        console.error('Failed to connect or add players', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function updatePlayer(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('PLAYERS');

        const { name } = req.params;
        const updateFields = req.body;

        const result = await collection.updateMany({ PlayerName: name }, { $set: updateFields });

        if (result.modifiedCount === 1) {
            res.json({ message: 'Player updated successfully' });
        } else if (result.modifiedCount === 0) {
            res.json({ message: 'No players found' });
        } else {
            res.json({ message: 'Players updated successfully', modifiedCount: result.modifiedCount });
        }

    } catch (error) {
        console.error('Failed to connect or update player', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

export async function removePlayer(req, res) {
    let mongoClient;
    try {
        mongoClient = await connectDB();
        const db = mongoClient.db('Football');
        const collection = db.collection('PLAYERS');

        const { name } = req.params;
        const result = await collection.deleteMany({ PlayerName: name });
        
        if (result.deletedCount === 1) {
            res.json({ message: 'Player removed successfully' });
        } else if (result.deletedCount === 0) {
            res.json({ message: 'No players found' });
        } else {
            res.json({ message: 'Players removed successfully', deletedCount: result.deletedCount });
        }

    } catch (error) {
        console.error('Failed to connect or remove player', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

