import React, { useEffect, useState } from 'react';
import UpcomingElections from '../components/UpcomingElections';

const dummyElectionsData = {
  electionName: "Florida State Primary Election",
  electionDay: "2020-08-18",
  pollingLocations: [
    {
      "address": {
        "locationName": "BROADWAY UNITED METHODIST CHURCH",
        "line1": "406 E AMELIA ST",
        "city": "ORLANDO",
        "state": "FL",
        "zip": "32803-5396"
      },
      "notes": "FROM ORANGE AVE AND AMELIA ST, GO EAST ON AMELIA TO POLL ON RIGHT AT CORNER OF AMELIA AND BROADWAY AVE.",
      "pollingHours": "7am - 7pm",
      "sources": [
        {
          "name": "Voting Information Project",
          "official": true
        }
      ]
    }
  ],
  earlyVoteSites: '',
  normalizedAddress: {
    "line1": "201 South Orange Avenue",
    "city": "Orlando",
    "state": "FL",
    "zip": "32801"
  },
  officeContests: [
    {
      "type": "General",
      "office": "US House District 10",
      "level": [
        "country"
      ],
      "roles": [
        "legislatorLowerBody"
      ],
      "district": {
        "name": "Florida's 10th congressional district",
        "scope": "congressional",
        "id": "ocd-division/country:us/state:fl/cd:10"
      },
      "sources": [
        {
          "name": "Ballot Information Project",
          "official": false
        }
      ],
      "candidates": [
        {
          "name": "Michael McKenna",
          "party": "Democratic",
          "candidateUrl": "http://www.mckennaforcongress.com/",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/michaelmckenna2014"
            },
            {
              "type": "Twitter",
              "id": "https://twitter.com/Mike_McKenna1"
            },
            {
              "type": "YouTube",
              "id": "https://www.youtube.com/channel/UCc2s5xUddY-ZV9ZAxBpMJxQ"
            }
          ]
        },
        {
          "name": "Daniel Webster",
          "party": "Republican",
          "candidateUrl": "http://www.electwebster.com/",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/ElectWebster"
            },
            {
              "type": "Twitter",
              "id": "https://twitter.com/WebsterCongress"
            }
          ]
        }
      ]
    },
    {
      "type": "General",
      "office": "Governor & Lt. Governor",
      "level": [
        "administrativeArea1"
      ],
      "roles": [
        "headOfGovernment"
      ],
      "district": {
        "name": "Florida",
        "scope": "statewide",
        "id": "ocd-division/country:us/state:fl"
      },
      "sources": [
        {
          "name": "Ballot Information Project",
          "official": false
        }
      ],
      "candidates": [
        {
          "name": "Glenn Burkett & Jose Augusto Matos",
          "party": "No Party Affiliation"
        },
        {
          "name": "Charlie Crist & Annette Taddeo",
          "party": "Democratic",
          "candidateUrl": "http://www.charliecrist.com/",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/charliecrist"
            },
            {
              "type": "Twitter",
              "id": "https://twitter.com/CharlieCrist"
            },
            {
              "type": "YouTube",
              "id": "https://www.youtube.com/user/CharlieCristFL"
            }
          ]
        },
        {
          "name": "Farid Khavari & Lateresa A. Jones",
          "party": "No Party Affiliation",
          "candidateUrl": "http://khavariforgovernor.com/",
          "email": "info@khavariforgovernor.com",
          "channels": [
            {
              "type": "Twitter",
              "id": "https://twitter.com/Farid_Khavari"
            }
          ]
        },
        {
          "name": "Rick Scott & Carlos Lopez-Cantera",
          "party": "Republican",
          "candidateUrl": "http://rickscottforflorida.com/",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/scottforflorida"
            },
            {
              "type": "Twitter",
              "id": "https://twitter.com/ScottforFlorida"
            },
            {
              "type": "YouTube",
              "id": "https://www.youtube.com/channel/UCzy4pJ54bfk4t5e9Tdw05JA"
            }
          ]
        },
        {
          "name": "Adrian Wyllie & Greg Roe",
          "party": "Libertarian",
          "candidateUrl": "http://wyllieforgovernor.com/",
          "phone": "844-499-5543",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/dontlikecristorscottchoosewyllieforgovernor"
            },
            {
              "type": "Twitter",
              "id": "https://twitter.com/WyllieForGov"
            },
            {
              "type": "YouTube",
              "id": "https://www.youtube.com/user/WyllieForGovernor"
            }
          ]
        }
      ]
    },
    {
      "type": "General",
      "office": "Commissioner of Agriculture",
      "level": [
        "administrativeArea1"
      ],
      "roles": [
        "governmentOfficer"
      ],
      "district": {
        "name": "Florida",
        "scope": "statewide",
        "id": "ocd-division/country:us/state:fl"
      },
      "sources": [
        {
          "name": "Ballot Information Project",
          "official": false
        }
      ],
      "candidates": [
        {
          "name": "Thaddeus Thad Hamilton",
          "party": "Democratic",
          "candidateUrl": "http://www.voteforthad2014.com/",
          "phone": "954-459-5490",
          "email": "thadcampaign@bellsouth.net",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/voteforthad"
            }
          ]
        },
        {
          "name": "Adam Putnam",
          "party": "Republican",
          "candidateUrl": "http://www.adamputnam.com/",
          "phone": "863-537-7000",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/adamputnam"
            },
            {
              "type": "Twitter",
              "id": "https://twitter.com/adamputnam"
            },
            {
              "type": "YouTube",
              "id": "https://www.youtube.com/user/PutnamForFlorida"
            }
          ]
        }
      ]
    },
    {
      "type": "General",
      "office": "Chief Financial Officer",
      "level": [
        "administrativeArea1"
      ],
      "roles": [
        "governmentOfficer"
      ],
      "district": {
        "name": "Florida",
        "scope": "statewide",
        "id": "ocd-division/country:us/state:fl"
      },
      "sources": [
        {
          "name": "Ballot Information Project",
          "official": false
        }
      ],
      "candidates": [
        {
          "name": "Jeff Atwater",
          "party": "Republican",
          "candidateUrl": "http://www.jeffatwater.com/",
          "phone": "561.405.9788",
          "email": "jeff@jeffatwater.com",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/JeffAtwater"
            },
            {
              "type": "Twitter",
              "id": "https://twitter.com/JeffAtwater"
            },
            {
              "type": "YouTube",
              "id": "https://www.youtube.com/user/JeffAtwater"
            }
          ]
        },
        {
          "name": "William \"Will\" Rankin",
          "party": "Democratic",
          "candidateUrl": "http://rankinforcfo.com/",
          "phone": "(954) 333-8968",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/RankinForCFO"
            }
          ]
        }
      ]
    },
    {
      "type": "General",
      "office": "Attorney General",
      "level": [
        "administrativeArea1"
      ],
      "roles": [
        "governmentOfficer"
      ],
      "district": {
        "name": "Florida",
        "scope": "statewide",
        "id": "ocd-division/country:us/state:fl"
      },
      "sources": [
        {
          "name": "Ballot Information Project",
          "official": false
        }
      ],
      "candidates": [
        {
          "name": "Pam Bondi",
          "party": "Republican",
          "candidateUrl": "http://www.pambondi.com/",
          "phone": "850-241-1870",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/pambondi"
            },
            {
              "type": "Twitter",
              "id": "https://twitter.com/PamBondi"
            },
            {
              "type": "YouTube",
              "id": "https://www.youtube.com/channel/UC0LWVaqIxm9SsoZGVAO9MMA"
            }
          ]
        },
        {
          "name": "George Sheldon",
          "party": "Democratic",
          "candidateUrl": "http://georgesheldon2014.com/#",
          "phone": "850-577-3500",
          "email": "info@georgesheldon2014.com",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/GeorgeSheldon2014"
            },
            {
              "type": "Twitter",
              "id": "https://twitter.com/Sheldon_FL"
            },
            {
              "type": "YouTube",
              "id": "https://www.youtube.com/channel/UCEgFjtg0UcvJ57bjUi59gfw"
            }
          ]
        },
        {
          "name": "Bill Wohlsifer",
          "party": "Libertarian",
          "candidateUrl": "https://wohlsifer4ag.com/",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/william.wohlsifer"
            },
            {
              "type": "Twitter",
              "id": "https://twitter.com/wohlsifer"
            },
            {
              "type": "YouTube",
              "id": "https://www.youtube.com/channel/UCnupSuC7rt2QaMG4hI7T02Q"
            }
          ]
        }
      ]
    },
    {
      "type": "General",
      "office": "Clerk of the Courts",
      "level": [
        "administrativeArea2"
      ],
      "roles": [
        "governmentOfficer"
      ],
      "district": {
        "name": "Orange County",
        "scope": "countywide",
        "id": "ocd-division/country:us/state:fl/county:orange"
      },
      "sources": [
        {
          "name": "Ballot Information Project",
          "official": false
        }
      ],
      "candidates": [
        {
          "name": "Eduardo \"Eddie\" Fernandez",
          "party": "Republican",
          "candidateUrl": "http://www.elect-eddie.com/",
          "email": "eddie@elect-eddie.com",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/electeddiefernandez"
            },
            {
              "type": "Twitter",
              "id": "https://twitter.com/EddieForClerk"
            }
          ]
        },
        {
          "name": "Tiffany Moore Russell",
          "party": "Democratic",
          "candidateUrl": "http://www.tiffanyforclerk.com/",
          "email": "tiffany@tiffanyforclerk.com",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/Tiffanyforclerk"
            },
            {
              "type": "Twitter",
              "id": "https://twitter.com/tmoorelaw1"
            }
          ]
        }
      ]
    },
    {
      "type": "General",
      "office": "County Judge, Group 10",
      "level": [
        "administrativeArea2"
      ],
      "roles": [
        "judge"
      ],
      "district": {
        "name": "Orange County",
        "scope": "countywide",
        "id": "ocd-division/country:us/state:fl/county:orange"
      },
      "sources": [
        {
          "name": "Ballot Information Project",
          "official": false
        }
      ],
      "candidates": [
        {
          "name": "Ken Barlow",
          "party": "Nonpartisan",
          "candidateUrl": "http://www.kenbarlowforjudge.com/"
        },
        {
          "name": "Tina Caraballo",
          "party": "Nonpartisan",
          "candidateUrl": "http://caraballoforjudge.com/",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/TinaCaraballoForJudge"
            }
          ]
        }
      ]
    },
    {
      "type": "General",
      "office": "School Board Chair",
      "level": [
        "administrativeArea2"
      ],
      "roles": [
        "schoolBoard"
      ],
      "district": {
        "name": "Orange County",
        "scope": "countywide",
        "id": "ocd-division/country:us/state:fl/county:orange"
      },
      "sources": [
        {
          "name": "Ballot Information Project",
          "official": false
        }
      ],
      "candidates": [
        {
          "name": "Bill Sublette",
          "party": "Nonpartisan",
          "candidateUrl": "http://www.sublette4chair.com/",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/195701279347"
            },
            {
              "type": "Twitter",
              "id": "https://twitter.com/sublette_4chair"
            }
          ]
        }
      ]
    },
    {
      "type": "General",
      "office": "Soil and Water Conservation District, Group 4",
      "level": [
        "administrativeArea2"
      ],
      "roles": [
        "specialPurposeOfficer"
      ],
      "district": {
        "name": "Orange County",
        "scope": "countywide",
        "id": "ocd-division/country:us/state:fl/county:orange"
      },
      "sources": [
        {
          "name": "Ballot Information Project",
          "official": false
        }
      ],
      "candidates": [
        {
          "name": "Brian Fenn",
          "party": "Nonpartisan"
        },
        {
          "name": "Eric M. Rollings",
          "party": "Nonpartisan",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/electeric2014"
            }
          ]
        }
      ]
    },
    {
      "type": "General",
      "office": "Soil and Water Conservation District, Group 2",
      "level": [
        "administrativeArea2"
      ],
      "roles": [
        "specialPurposeOfficer"
      ],
      "district": {
        "name": "Orange County",
        "scope": "countywide",
        "id": "ocd-division/country:us/state:fl/county:orange"
      },
      "sources": [
        {
          "name": "Ballot Information Project",
          "official": false
        }
      ],
      "candidates": [
        {
          "name": "Tim Adams",
          "party": "Nonpartisan"
        },
        {
          "name": "Steven L. Beumer",
          "party": "Nonpartisan"
        },
        {
          "name": "Timothy D. Blevins",
          "party": "Nonpartisan"
        },
        {
          "name": "Daisy Morales",
          "party": "Nonpartisan",
          "channels": [
            {
              "type": "Facebook",
              "id": "https://www.facebook.com/1507077616180472"
            }
          ]
        }
      ]
    }
  ],
  referendaContests: [
    {
      "title": "NO. 1 CONSTITUTIONAL AMENDMENT ARTICLE X, SECTION 28",
      "subtitle": "WATER AND LAND CONSERVATION - DEDICATES FUNDS TO ACQUIRE AND RESTORE FLORIDA CONSERVATION AND RECREATION LANDS",
      "infoUrl": "http://election.dos.state.fl.us/initiatives/initdetail.asp?account=59894&seqnum=1",
      "district": {
        "name": "Florida",
        "scope": "statewide",
        "id": "ocd-division/country:us/state:fl"
      },
    },
    {
      "title": "NO. 2 CONSTITUTIONAL AMENDMENT ARTICLE X, SECTION 29",
      "subtitle": "USE OF MARIJUANA FOR CERTAIN MEDICAL CONDITIONS",
      "infoUrl": "http://election.dos.state.fl.us/initiatives/initdetail.asp?account=50438&seqnum=2",
      "district": {
        "name": "Florida",
        "scope": "statewide",
        "id": "ocd-division/country:us/state:fl"
      },
    },
    {
      "title": "NO. 3 CONSTITUTIONAL AMENDMENT ARTICLE V, SECTIONS 10, 11",
      "subtitle": "PROSPECTIVE APPOINTMENT OF CERTAIN JUDICIAL VACANCIES",
      "infoUrl": "http://election.dos.state.fl.us/initiatives/initdetail.asp?account=10&seqnum=91",
      "district": {
        "name": "Florida",
        "scope": "statewide",
        "id": "ocd-division/country:us/state:fl"
      },
    },
  ],  
}

const Results = ({ address }) => {
  // declare state variables
  const [electionData, setElectionData] = useState(dummyElectionsData);
  const [senatorsData, setSenatorsData] = useState({});
  const [representativesData, setRepresentativesData] = useState({});

/** 
  // construct requestOptions for fetch requests
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(address),
  };


  // fetch upcoming election data by making a POST request with address in body 
  useEffect(() => {
    fetch('/api', requestOptions)
      .then(response => response.json())
      .then(parsedResponse => setElectionData(parsedResponse));
  });

  // fetch senators data by making a POST request with address in body
  useEffect(() => {
    fetch('/senators', requestOptions)
      .then(response => response.json())
      .then(parsedResponse => setSenatorsData(parsedResponse));
  });

  // fetch representatives data by making a POST request with address in body
  useEffect(() => {
    fetch('/representatives', requestionOptions)
      .then(response => response.json())
      .then(parsedResponse => setRepresentativesData(parsedResponse));
  });

*/

  return (
    <React.Fragment>
       {/* <Senators senatorsData={ senatorsData } />
       <Representatives representativesData={ representativesData } /> */}
      <UpcomingElections electionData={ electionData } />
    </React.Fragment>

  );
};

export default Results;