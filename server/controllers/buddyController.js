const buddyController = {};
const fetch = require('node-fetch');

buddyController.getUpcomingElectionData = (req, res, next) => {
  let url = 'https://www.googleapis.com/civicinfo/v2/voterinfo?key='
  url += process.env.CIVIC_API_KEY;
  url += '&address=';
  const address = req.body.addressLine.split(' ').join('%20');
  url += address;
  url += '%20';
  url += req.body.city;
  url += '%20';
  url += req.body.state;
  url += '%20';
  url += req.body.zip;
  url += '&electionId=2000'; // Hard-coded test election

  console.log('Making a request to: ' + url);

  try {
    fetch(url)
      .then(data => data.json())
      .then(data => {
        res.locals.electionName = data.election.name;
        res.locals.electionDay = data.election.electionDay;
        res.locals.normalizedAddress = data.normalizedInput;
        res.locals.pollingLocations = data.pollingLocations;
        res.locals.earlyVoteSites = data.earlyVoteSites;
        const officeContests = [];
        const referendaContests = [];
        data.contests.forEach(cv => {
          const newContest = {};
          if (cv.type === "General") {
            newContest.office = cv.office;
            newContest.roles = cv.roles;
            newContest.district = {
              name: cv.district.name,
              scope: cv.district.scope,
            };
            newContest.candidates = cv.candidates;
            officeContests.push(newContest);
          } else if (cv.type === "Referendum") {
            newContest.title = cv.referendumTitle;
            newContest.subtitle = cv.referendumSubtitle;
            newContest.infoUrl = cv.referendumUrl;
            newContest.district = {
              name: cv.district.name,
              scope: cv.district.scope,
            };
            referendaContests.push(newContest);
          }
        });
        res.locals.officeContests = officeContests;
        res.locals.referendaContests = referendaContests;
        return next();
      })
  } catch (err) {
    return next({
      log: `An error occured in buddyController.getUpcomingElectionData: ${err}`,
      message: { err: `An error occurred` },
    })
  }
};

buddyController.getCurrentSenators = (req, res, next) => {
  let url = 'https://api.propublica.org/congress/v1/members/senate/'
  url += req.body.state;
  url += '/current.json';

  console.log('Making a request to: ' + url);

  try {
    fetch(url, {
      headers: {
        "X-API-Key": process.env.PROPUBLICA_API_KEY
      }
    })
      .then(data => data.json())
      .then(data => {
        res.locals.senatorUris = [data.results[0].api_uri, data.results[1].api_uri];
        return next();
      })
  } catch (err) {
    return next({
      log: `An error occured in buddyController.getCurrentSenators: ${err}`,
      message: { err: `An error occurred` },
    })
  }
};

buddyController.getFurtherSenatorInfoOne = (req, res, next) => {
    try {
      console.log('Making a request to: ' + res.locals.senatorUris[0]);
      fetch(res.locals.senatorUris[0], {
        headers: {
          "X-API-Key": process.env.PROPUBLICA_API_KEY
        }
      })
        .then(data => data.json())
        .then(data => {
          res.locals.senatorOne = data.results[0];
          res.locals.senatorOne.currentRole = res.locals.senatorOne.roles[0];
          delete res.locals.senatorOne.roles;
          return next();
        })
    } catch (err) {
      return next({
        log: `An error occured in buddyController.getFurtherSenatorInfoOne: ${err}`,
        message: { err: `An error occurred` },
      })
    }
  };


buddyController.getFurtherSenatorInfoTwo = (req, res, next) => {
    try {
      console.log('Making a request to: ' + res.locals.senatorUris[1]);
      fetch(res.locals.senatorUris[1], {
        headers: {
          "X-API-Key": process.env.PROPUBLICA_API_KEY
        }
      })
        .then(data => data.json())
        .then(data => {
          res.locals.senatorTwo = data.results[0];
          res.locals.senatorTwo.currentRole = res.locals.senatorTwo.roles[0];
          delete res.locals.senatorTwo.roles;
          return next();
        })
    } catch (err) {
      return next({
        log: `An error occured in buddyController.getFurtherSenatorInfoTwo: ${err}`,
        message: { err: `An error occurred` },
      })
    }
};

buddyController.getCurrentRepresentatives = (req, res, next) => {
  let url = 'https://www.googleapis.com/civicinfo/v2/representatives?key='
  url += process.env.CIVIC_API_KEY;
  url += '&address=';
  const address = req.body.addressLine.split(' ').join('%20');
  url += address;
  url += '%20';
  url += req.body.city;
  url += '%20';
  url += req.body.state;
  url += '%20';
  url += req.body.zip;

  console.log('Making a request to: ' + url);

  try {
    fetch(url)
      .then(data => data.json())
      .then(data => {
        res.locals.officials = data.officials.slice(2);
        return next();
      })
  } catch (err) {
    return next({
      log: `An error occured in buddyController.getDistrict: ${err}`,
      message: { err: `An error occurred` },
    })
  }
};

module.exports = buddyController;
