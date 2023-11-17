
export default function RequestUtility(){
    const { REACT_APP_UTILITY_API_KEY } = process.env;

    fetch('https://utilityapi.com/api/v2/forms', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${REACT_APP_UTILITY_API_KEY}`
        },
    })
        .then(response => response.json())
        .then(data => {
            // Handle the data from the response
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Error:', error);
        });
}