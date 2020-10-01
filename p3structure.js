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