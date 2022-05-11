import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/ccramnar/ccramnar.github.io', 
  user: {
   name: 'Cyanne Ramnarine', 
   email: 'ccramnar@uwaterloo.ca'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);