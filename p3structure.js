const questions = [
  {
      id: 1,
      parent: null,
      text: 'Inside/outside?',
      answers: [
          { id: 'inside', text: 'Inside', followUpQuestion: 2 }
          { id: 'outside', text: 'Outside', followUpQuestion: 3 }
      ]
  },
  {
      id: 2,
      parent: 1,
      text: 'Alone/Together?',
      answers: [
          { id: 'alone', text: 'Alone', followUpQuestion: 4 }
          { id: 'together', text: 'Together' }
      ]
  },
  { id: 3 },
  { id: 4 },
  { id: 5 },
]
/*
Start the questionnaire (start the while loop)
Find the question with no parent
*/
const firstQuestion = questions.filter((question) => question.parent === null)
while (question) {
  <Question question={firstQuestion} />
  // User chooses inside, that points to question 2
  const question = questions.filter((question) => question.id === 2)
}
<Question>
  Local state: {
      currentQuestion: { id: 4 },
      path: 'inside/alone',
  }
// User answers questions, the path is something like '1/inside/alone'
// Query the database for hobbies/activities where path = '1/inside/alone'
// If user suggests an activity, create it and set its path to '1/inside/alone'
const ActivityModel = {
  name: 'Hiking',
  status: 'pending',
  approvedBy: null
  timestamp: 'somedate'
}



questionnaire: {
  indoor: {
      alone: {
          fitness: {
              Strength: {

              }
              Conditioning: {
              }
          },
          learning: {
            history:
              time periods: {
                
              }
            art:
              time periods: {

              }
            music:
              genres: {
                
              },
            space:
            cooking: {
              recipes: [],
            }
            technology:
          }
          leisure: {
            //what interests you most?
            technology:
            reading:
            gaming:
            Tv shows:
            movies:
            

          }
      },
      together: {
          fitness: {
            strength: {},
            Conditioning: {}
          },
          learning: [],
          leisure: []
      }
  }
  outdoor: {
      alone: {
          fitness: 
              Strength: {

              }
              Conditioning: {
              }
          learning: [],
          leisure: []
      },
      together: {
          fitness:
              Strength: {

              }
              Conditioning: {
              }
          learning: [],
          leisure: []
      }
  }
}


activities: [
    {
        name: 'Hiking',
        paths: ['outdoor/alone/fitness', 'outdoor/alone/leisure']
    }
]
pendingActivities: [
    {
        name: 'Bird watching',
        path: 'outdoor/alone/learning'
    }
]
ActivityModel = {
    name,
    paths,
}