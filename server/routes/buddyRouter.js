const express = require('express');

const buddyController = require('../controllers/buddyController');

const router = express.Router();

// Serves upcoming election data based on address sent via request body
router.post('/', buddyController.getUpcomingElectionData, (req, res) => {
  const results = {
    electionName,
    electionDay,
    pollingLocations,
    earlyVoteSites,
    normalizedAddress,
    officeContests,
    referendaContests,
  } = res.locals;
  res.status(200).json(results);
});

// Grabs data about current sentors
router.post('/senators',
  buddyController.getCurrentSenators,
  buddyController.getFurtherSenatorInfoOne,
  buddyController.getFurtherSenatorInfoTwo,
  (req, res) => {
    res.status(200).json({ senatorOne: res.locals.senatorOne, senatorTwo: res.locals.senatorTwo });
});

// Grabs data about current house representatives
router.post('/representatives',
  buddyController.getCurrentRepresentatives,
  (req, res) => {
    res.status(200).json(res.locals.officials)
});

module.exports = router;
