//We first assign our access keys and input element to constants
const input = document.getElementById("search");
const accessKey = `hV32rTvyumuVXBlHIJ4SchuzraqM1pjx8oWjab8bIF8`;

//Add an event listener to the input element
input.addEventListener("keyup", (e) => {
  removeOldImages();
  //we source the user input into a constant and console it
  const searchString = e.target.value;
  console.log(searchString);

  //Next we make a get request to the API endpoint
  const url = `https://api.unsplash.com/search/photos?page=1&query=${searchString}&orientation=squarish&client_id=${accessKey}`;
  axios
    .get(url)
    .then((res) => {
      generateTags(res.data.results);
    })
    .catch((err) => console.log(err));
});

const generateTags = (data) => {
  const images = data;
  images.forEach((image) => {
    //create link tag
    const aTag = document.createElement("a");
    aTag.href = image.links.html;
    aTag.target = "_blank";
    aTag.id = "linkRes"; //This would be used for our styling in css

    //create image tag
    const imgTag = document.createElement("img");
    imgTag.src = image.urls.regular;
    imgTag.alt = image.alt_description;
    imgTag.id = "imageRes"; //This would be used for our styling in css

    aTag.appendChild(imgTag);
    //We append the image results to the main section of our page
    document.getElementById("main").appendChild(aTag);
  });
};

//function to remove tags upon new search
const removeOldImages = () => {
  const images = document.querySelectorAll("a");
  images.forEach((image) => {
    image.remove();
  });
};
