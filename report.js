const newman = require('newman');
 
newman.run({
  
    collection:'https://api.postman.com/collections/27409332-ebe5c75d-11c5-49e5-af6c-ba51102cd329?access_key=PMAT-01H30BFTJGHYXCTSS035EK3FTA',
   
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});