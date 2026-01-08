// when we get a response from api it appeares in the form of string => so to parse or access data from json we do ...
let jsonRes = 
'{"fact":"A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance.","length":86}';

let valid_res = JSON.parse(jsonRes);
console.log(valid_res);

let obj = {"fact":"There are up to 60 million feral cats in the United States alone.","length":65}
into_json = JSON.stringify(obj);
console.log(into_json);

