//Array of JSON with firstName and lastName
const names = ['Jack', 'Bob', 'Anna Cook', 'Tim'];
const arr = names.map(function(element) {
    return makeNameJson(element);
});

// Function to create JSON objects with firstName and lastName
function makeNameJson(name) {
    let  index = name.indexOf(' ');
    let json = {};

    if (index < 0) {
        json.firstName = name;
        json.lastName = '';
    } else {
        json.firstName = name.substring(0, index);
        json.lastName = name.substring(index + 1);
    }

    return json;
}

console.log(arr);
