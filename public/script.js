// const trashcan = document.querySelectorAll('a.delete');

// trashcan.forEach((element, index, array) => {
//     trashcan.item(index).addEventListener('click', (e) => {
    
//         const url = `/cart/${trashcan.item(index).dataset.doc}`;

//         fetch(url, {
//             method: 'DELETE'
//         })
//             .then((response) => response.json())    // response is the object from the server
//             .then((data) => window.location.href = '/food') // data is the object we can use parsed by the upper then()
//             .catch((err) => console.log(err));
//         });
// });