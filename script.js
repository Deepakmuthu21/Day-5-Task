var Resume = {
  "name": "Deepakmuthu",
  "dob": "20/03/2004",
 "gender": "male",
  "email": "deepakmuthu21@gmail.com",
 "skills": ["javascript", "python"],
  "knownlanguage": ["Tamil", "English"],
  "yearofpassing": 2024,
  "phonenumber": 9566752004,
};

console.log(Resume);
console.log("Using For loop TO Print Array in side the Json Object");
console.log("------------------------------------------------------");

console.log(Resume.name);
console.log(Resume.dob);
console.log(Resume.gender);
console.log(Resume.email);
console.log(Resume.phonenumber);

for (var i = 0; i < Resume.skills.length; i++) {
  console.log(Resume.skills[i]);
}
for (var i = 0; i < Resume.knownlanguage.length; i++) {
  console.log(Resume.knownlanguage[i]);
}
console.log("Using For in loop TO Print Json Object");
console.log("--------------------------------------");

for (var key in Resume) {
  console.log(`${key} : ${Resume[key]}`);
}
console.log("Using For of loop TO Print  the Json Object");
console.log("---------------------------------------------");

let Result = Object.entries(Resume);
for (var keys in Result) {
  console.log(`${Result[keys]}`);
}

console.log("Using For Each loop TO Print  the Json Object");
console.log("---------------------------------------------");

Object.keys(Resume).forEach((a) => {
  console.log(`${a} : ${Resume[a]}`);
});
