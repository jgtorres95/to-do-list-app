// Function that adds a new item to the list of items:
function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    } 

// Function that crosses out an item from the list of items:
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', crossOut);

    // Adding a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    // Function that will add .delete class from css:
    function deleteListItem() {
        li.addClass('delete');
    }

    // Reorder items
    $('#list').sortable();

}