//Access keys ==>
const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //removeOldImages();
  const searchTerm = input.value;
  axios.get(
      'https://api.unsplash.com/search/photos/?query=${searchTerm}&orientation=squarish&client_id=qYv3cjnECpaACl6AVCaZVaDZMODyA42Kbp7TsYQ4Vbk'
    )
    .then(res => res.json)
    .then(data => console.log(data))
});
/*
//function to remove tags upon new search
const removeOldImages = () => {
  const images = document.querySelectorAll("a");
  images.forEach((image) => {
    image.remove();
  });
};


const generateTags = (data) => {
  const images = data;
  images.forEach((image) => {
    //create link tag
    const aTag = document.createElement("a");
    aTag.href = image.links.html;
    aTag.target = "_blank";

    //create image tag
    const imgTag = documentcreateElement("img");
    imgTag.src = image.urls.regular;
    imgTag.alt = image.alt_description;

    //appending
    aTag.appendChild(imgTag);
    document.body.appendChild(aTag);
  });
};
*/