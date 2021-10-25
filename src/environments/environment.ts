// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {  production: false,
  // firebase: {
  //   projectId: 'testsocial-590c2',
  //   appId: '1:932114147901:web:0f31774e5206d631189854',
  //   databaseURL: 'https://testsocial-590c2-default-rtdb.firebaseio.com',
  //   storageBucket: 'testsocial-590c2.appspot.com',
  //   apiKey: 'AIzaSyB-TD2uT3Sy-R6nkCThyaMr0a4d3du-iJE',
  //   authDomain: 'testsocial-590c2.firebaseapp.com',
  //   messagingSenderId: '932114147901',
  //   measurementId: 'G-E7M9F03K4K',
  // },

   firebase : {
    apiKey: "AIzaSyB-TD2uT3Sy-R6nkCThyaMr0a4d3du-iJE",
    authDomain: "testsocial-590c2.firebaseapp.com",
    projectId: "testsocial-590c2",
    storageBucket: "testsocial-590c2.appspot.com",
    messagingSenderId: "932114147901",  
    appId: "1:932114147901:web:0f31774e5206d631189854",
    measurementId: "G-E7M9F03K4K"
  }
};
