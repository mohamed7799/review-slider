"use strict"

//variable

let data = [{
    img: "/imgs/1.jpg",
    name: "Example 1",
    job: "Front End Developer",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quidem commodi consectetur perferendis alias natus quibusdam dolor beatae quasi illo nihil deleniti exercitationem voluptas itaque fugit est, quas a cum."
}, {
    img: "/imgs/2.jpg",
    name: "Example 2",
    job: "Back End Developer",
    review: "Erat nam at lectus urna duis. At elementum eu facilisis sed odio morbi quis. Suscipit adipiscing bibendum est ultricies. Dictum at tempor commodo ullamcorper a. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Donec et odio pellentesque diam volutpat commodo sed. At volutpat diam ut venenatis tellus. Pellentesque dignissim enim sit amet venenatis urna cursus. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. In egestas erat imperdiet sed."
}, {
    img: "/imgs/3.jpg",
    name: "Example 3",
    job: "manager",
    review: "Faucibus interdum posuere lorem ipsum dolor sit. Congue eu consequat ac felis donec et odio pellentesque diam. Cursus risus at ultrices mi. Ut pharetra sit amet aliquam id diam. Tempus quam pellentesque nec nam. Eget mi proin sed libero enim sed faucibus. Fringilla urna porttitor rhoncus dolor purus. Adipiscing commodo elit at imperdiet dui accumsan sit amet."
}]


let index = 0;
let add = document.getElementById("add-js");
let sub = document.getElementById("sub-js");
let cont = document.getElementById("cont");
let sup = document.getElementById("review-card__sup");


//functions
let get_random_int = (max) => { return Math.floor(Math.random() * max); };



let display = (index) => {
    cont.innerHTML = `<div id="review-card__photo"></div>
                <p id="review-card__name">${data[index].name}</p>
                <p id="review-card__job">${data[index].job}</p>
                <p id="review-card__review">${data[index].review}</p>`;
    document.getElementById("review-card__photo").style.backgroundImage = `url(${data[index].img})`;
};

//event linteners
add.addEventListener("click", () => {
    index++;
    if (index >= data.length) {

        index = 0;
    }
    display(index);
})


sub.addEventListener("click", () => {
    index--;
    if (index <= 0) {
        index = data.length - 1;
    }
    display(index);
})


sup.addEventListener("click", () => {
    console.log("clicked")
    let newIndex = 0;
    while (newIndex === index) {
        newIndex = get_random_int(data.length);
    }
    index = newIndex;
    display(index);
})


display(index);

