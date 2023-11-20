document.addEventListener("DOMContentLoaded", function () {
    const addProductButton = document.getElementById("btn");

    addProductButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission for now

        const nameField = document.getElementById("name");
        const brandField = document.getElementById("brand");
        const priceField = document.getElementById("price");
        const categoryField = document.getElementById("category");
        const itemWeightField = document.getElementById("item-weight");
        const descriptionField = document.getElementById("description");

        const name = nameField.value;
        const brand = brandField.value;
        const price = parseFloat(priceField.value);
        const category = categoryField.value;
        const itemWeight = parseFloat(itemWeightField.value);
        const description = descriptionField.value;

        // Validation checks
        const isNameValid = name.trim() !== '';
        const isBrandValid = brand.trim() !== '';
        const isPriceValid = !isNaN(price) && price > 0;
        const isCategoryValid = category !== "Select category";
        const isItemWeightValid = !isNaN(itemWeight) && itemWeight > 0;
        const isDescriptionValid = description.trim() !== '';

        const isValid = isNameValid && isBrandValid && isPriceValid && isCategoryValid && isItemWeightValid && isDescriptionValid;

        if (isValid) {
            // field.style.borderColor = 'green';
            Swal.fire({
                icon: 'success',
                title: 'Product Added!',
                text: 'The product has been successfully added.',
                customClass: {
                    popup: 'small-sweetalert'
                }
            });

            // Reset border colors after successful submission
            resetBorderColor([nameField, brandField, priceField, categoryField, itemWeightField, descriptionField]);
        } else {

            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill in all required fields correctly.',
                customClass: {
                    popup: 'small-sweetalert'
                }
            });

            // Set red border color for blank fields
            setBorderColorIfEmpty(nameField, isNameValid);
            setBorderColorIfEmpty(brandField, isBrandValid);
            setBorderColorIfEmpty(priceField, isPriceValid);
            setBorderColorIfEmpty(categoryField, isCategoryValid);
            setBorderColorIfEmpty(itemWeightField, isItemWeightValid);
            setBorderColorIfEmpty(descriptionField, isDescriptionValid);
        }
    });


    addProductButton.addEventListener("mouseover", function () {
        const name = document.getElementById("name").value;
        const brand = document.getElementById("brand").value;
        const price = document.getElementById("price").value;
        const category = document.getElementById("category").value;
        const itemWeight = document.getElementById("item-weight").value;

        const isValid = name && brand && price && category && itemWeight;

        if (isValid) {
            addProductButton.style.backgroundColor = "green";
            addProductButton.classList.remove("shake");
            addProductButton.classList.add("zoom");
        } else {
            addProductButton.style.backgroundColor = "red";
            addProductButton.classList.remove("zoom");
            addProductButton.classList.add("shake");
        }
    });

    addProductButton.addEventListener("mouseout", function () {
        // Reset the button color and remove the shake and zoom classes when the mouse is not over it
        addProductButton.style.backgroundColor = "";
        addProductButton.classList.remove("shake", "zoom");
    });

    function setBorderColorIfEmpty(field, isValid) {
        // Set the border color of the specified field if it is empty and not valid
        if (!isValid) {
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = 'green';
        }
    }

    function resetBorderColor(fields) {
        // Reset the border color of all specified fields
        setBorderColor(fields, true);
    }
});




// const c = "Hello";

// // const hide = (element) => {
// //     element.hidden = true;
// // }

// function consolemsg(element) {
//     element.hidden = true;
//     {
//         let a = 2;
//         var b = 10;
//         // b = 10; // can't reassign like this

//         // c = "Hello World"; // Value of const variable is static.
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     // console.log(a); // let can't be access out side of function
//     console.log(b);
// };