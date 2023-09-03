// fluffy/upload.js

exports.handler = async function (event) {
    try {
        // Parse the form data from the event
        const formData = new FormData(event.body);

        // Extract form fields
        const picture = formData.get('picture');
        const buttonNumber = formData.get('button-number');
        const email = formData.get('email');

        // Process the form data as needed (e.g., save image, store data in a database)

        // Return a JSON response indicating success
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data received successfully' }),
        };
    } catch (error) {
        // Handle any errors that may occur during processing
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};


