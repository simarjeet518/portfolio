import { v4 as uuidv4 } from 'uuid';
import BudgetTrackerImg from '../images/BudgetTracker.png';
import jungle from '../images/Jungle.png';
import schedular from '../images/schedular.png';
import netflix from '../images/netflix.png';
import lightEats from '../images/LightEats.png';
import tweeter from '../images/tweeter.png';

const projects = [
  {
    id: uuidv4(),
    link :`https://github.com/simarjeet518/budget-tracker`,
    name: 'Budget Tracker',
    techStack:`ReactJS | Axios | PostgreSQL |Node |Express`,
    desc:
      `Budget Tracker App is a full-stack application that allows users to plan their monthly budget, add and track expenses with voice command.`,
    img: BudgetTrackerImg,
  },
  {
    id: uuidv4(),
    link:`https://book-schedule.netlify.app/`,
    name: 'Schedular',
    techStack:`ReactJS | Axios | PostgreSQL |Node | Express | Stroybook | Jest | Cypress | Heroku`,
    desc:
      'React application that allows users to book and cancel interviews in real-time using a simple API.',
    img: schedular,
  },
  {
    id: uuidv4(),
    link:`https://github.com/simarjeet518/lightEats`,
    name: 'Light Eats',
    techStack:`JavaScript | Express | jQuery | PostgreSQL | EJS | Twilio API`,
    desc:
      'A full-stack food-ordering pick-up application with notifications features on the app and through SMS.',
    img: lightEats,
  },
  
  {
    id: uuidv4(),
    name: "Jungle",
    link:`https://github.com/simarjeet518/jungle`,
    techStack:`Ruby | Ruby On Rails | Stripe Payment`,
    desc:
      'A mini e-commerce application built with Rails 4.2 that allows visitors to browse products, add them to their cart and checkout.',
    img: jungle,
  },
  {
    id: uuidv4(),
    link:`https://github.com/simarjeet518/tweeeter`,
    name: 'Tweeter',
    techStack:`Ajax | JavaScript | HTML5 | CSS3 | JQuery`,
    desc:
      'Twitter clone that allows users to add tweets under 140 words',
    img: tweeter,
  },
  {
    id: uuidv4(),
    link:`https://github.com/simarjeet518/Netflix-clone`,
    name: 'Netflix Clone',
    techStack:`ReactJS | Axios | CSS3 | TMDB API`,
    desc:
      `Netflix Clone built in ReactJs to practice with modern web developement`,
    img: netflix,
  },
];

export default projects;
