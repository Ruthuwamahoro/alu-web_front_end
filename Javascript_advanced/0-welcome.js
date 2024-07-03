function welcome(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    function displayFullName(fullName) {
        alert('welcome ' + fullName + '!');
    }
    displayFullName(fullName);
}
welcome('John', 'Doe');
