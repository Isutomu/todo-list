export { createListStorage };


// Main function
function createListStorage() {
    const pageData = getFullLocalStorage();
    const listName = generateValidName(pageData);
    const listId = generateValidId(pageData);
    localStorage.setItem(listId, `"name":"${listName}","tasks":{}`);

    return [listId, listName];
};
// ---

// Complementary functions
function generateValidName(pageData) {
    let count = 0;
    let listName;
    while(true) {
        listName = `Untitled(${count})`;
        if(checkIfNameAvailable(listName, pageData)) {
            return listName;
        }
        count++;
    };
};

function generateValidId(pageData) {
    let listId = 0;
    while(true) {
        if(pageData[String(listId)] === undefined) {
            return String(listId);
        }
        listId++;
    };
};
// ---

// Utility functions
function getFullLocalStorage() {
    const localObject = {...localStorage};
    const pageData = {};
    Object.keys(localObject).forEach((key) => {
        pageData[key] = JSON.parse(localObject[key]);
    });
    return pageData;
}

function checkIfNameAvailable(listName, pageData) {
    return (
        Object.keys(pageData).find(
            (key) => pageData[key].name === listName) === undefined
    );
};
// ---