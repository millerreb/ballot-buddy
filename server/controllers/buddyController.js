const buddyController = {};
const fetch = require('node-fetch');

buddyController.getUpcomingElectionData = (req, res, next) => {
  let url = 'https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBYpng1gglUAOv70ZzAwrglOJctjkjFL1U&address=';
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
}

module.exports = buddyController;
