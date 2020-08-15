const express = require('express');

const buddyController = require('../controllers/buddyController');

const router = express.Router();

// Serves upcoming election data based on address sent via request body
router.post('/', buddyController.getUpcomingElectionData, (req, res) => {
  const results = {
    electionName,
    electionDay,
    normalizedAddress,
    officeContests,
    referendaContests,
  } = res.locals;
  res.status(200).json(results);
});

module.exports = router;
