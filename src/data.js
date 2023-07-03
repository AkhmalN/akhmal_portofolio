import imgProjects1 from './assets/projects-1.png'
import imgProjects2 from './assets/projects-2.png'
import imgProjects3 from './assets/projects-3.png'

export const SKILLS = [
   'HTML', 'CSS', 'Javascript', 'GITHUB', 'React.Js', 'MySQL Basic', 'Microsoft Office', 'Canva'
]


export const PROJECTS = [
   {
      id : 1,
      name : 'Movie App',
      description : 'movie app is a project that I built myself to hone skills in my portfolio using the API from omdAPI I use React.js for front end design',
      image : imgProjects1,
      public_link : 'https://akhmaln.github.io/my-movie/',
      github_link : 'https://github.com/AkhmalN/my-movie'
   },
   {
      id : 2,
      name : 'Enigma Shop',
      description : 'I also built the Enigma Shop website to hone my skills in building websites using React.js. the data that I use is data from the fakestore API.',
      image : imgProjects2,
      public_link : '',
      github_link : ''
   },
   {
      id : 3,
      name : 'Pokedex',
      description : 'pokedex is an application that I made to display several pokemon by applying an attractive display based on existing data in the pokeAPI',
      image : imgProjects3,
      public_link : '',
      github_link : ''
   }
]