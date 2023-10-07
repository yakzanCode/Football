import express from 'express';
import {
    getPlayers,
    findPlayerByName,
    getPlayersByTrophies,
    findPlayersByClub,
    addPlayer,
    addPlayers,
    updatePlayer,
    removePlayer,
    getTrophies,
    getTrophyByName,
    getLeagues,
    getClubs,
    findClubByName,
    findClubsByLeague,
    addClub,
    updateClub,
    removeClub
} from './crud.js';

const router = express.Router();

router.get('/players', getPlayers);
router.get('/players/:name', findPlayerByName);
router.get('/players/club/:club', findPlayersByClub);
router.get('/players-trophies', getPlayersByTrophies);
router.post('/players', addPlayer);
router.post('/players/bulk', addPlayers);
router.put('/players/:name', updatePlayer);
router.delete('/players/:name', removePlayer);

router.get('/trophies', getTrophies);
router.get('/trophy', getTrophyByName);
router.get('/leagues', getLeagues);
router.get('/clubs', getClubs);
router.get('/clubs/:clubName', findClubByName);
router.get('/clubs/league/:leagueName', findClubsByLeague);
router.post('/clubs', addClub);
router.put('/clubs/:clubName', updateClub);
router.delete('/clubs/:clubName', removeClub);

export default router;
