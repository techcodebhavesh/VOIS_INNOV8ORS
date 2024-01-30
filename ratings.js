/*const fs = require('fs');


function send_data(parameter)
{
fs.readFile('cleaned_data.json', 'utf-8', (error, data) => {
    if (error) {
        console.error('Error reading JSON file:', error);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        console.log('Title rating', jsonData.title.rating);
        return jsonData.parameter.rating;
        // You can access and use the data here
    } catch (jsonError) {
        console.error('Error parsing JSON:', jsonError);
    }
});
}

const dt = send_data("title");
*/

const fs = require('fs');

function send_data(parameter, callback) {
    fs.readFile('cleaned_data.json', 'utf-8', (error, data) => {
        if (error) {
            console.error('Error reading JSON file:', error);
            callback(error, null);
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            console.log(parameter + " rating:", jsonData[parameter].rating);
            callback(null, jsonData[parameter].rating);
        } catch (jsonError) {
            console.error('Error parsing JSON:', jsonError);
            callback(jsonError, null);
        }
    });
}

// Example usage with a callback
send_data("image", (error, rating) => {
    if (!error) {
        console.log('Rating:', rating);
    } else {
        console.error('Error:', error);
    }
});



