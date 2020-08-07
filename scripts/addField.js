// Finding the button
document.querySelector("#add-time")
// When clicked, run a function
.addEventListener('click', cloneField)

function cloneField() {
    // Finding an expecific field and duplicating it
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Taking the time fields
    const fields = newFieldContainer.querySelectorAll('input')

    // For each time field
    fields.forEach(function(field) {
        // clean the current field
        field.value = ""

    })

    // Inserting the duplicated field in the page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}