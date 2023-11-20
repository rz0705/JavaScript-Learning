document.addEventListener("DOMContentLoaded", function () {
    const addProductButton = document.getElementById("btn");

    addProductButton.addEventListener("mouseover", function () {
        const name = document.getElementById("name").value;
        const brand = document.getElementById("brand").value;
        const price = parseFloat(document.getElementById("price").value); // Parse to float
        const category = document.getElementById("category").value;
        const itemWeight = parseFloat(document.getElementById("item-weight").value); // Parse to float
        const description = document.getElementById("description").value;

        // Validation checks
        const isValid = name && brand && price > 0 && category !== "Select category" && itemWeight > 0 && description;

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

    addProductButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission for now

        const name = document.getElementById("name").value;
        const brand = document.getElementById("brand").value;
        const price = parseFloat(document.getElementById("price").value); // Parse to float
        const category = document.getElementById("category").value;
        const itemWeight = parseFloat(document.getElementById("item-weight").value); // Parse to float
        const description = document.getElementById("description").value;

        // Validation checks
        const isValid = name && brand && price > 0 && category !== "Select category" && itemWeight > 0 && description;

        if (isValid) {
            // Your logic for adding the product goes here
            // For demonstration, I'm using SweetAlert to show a success message
            Swal.fire({
                icon: 'success',
                title: 'Product Added!',
                text: 'The product has been successfully added.',
                customClass: {
                    popup: 'small-sweetalert'
                }
            });
        } else {
            // Show an error message using SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill in all required fields correctly.',
                customClass: {
                    popup: 'small-sweetalert'
                }
            });
        }
    });
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