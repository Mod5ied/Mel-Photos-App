//define constants for our accessKeys and url

const Vueapp = new Vue({
  el: "#vueapp",
  data: {},
  methods: {
    fetchImages: function () {
      let searchString = this.$refs.input.value;
      console.log(searchString);
      
      const accessKeys = `hV32rTvyumuVXBlHIJ4SchuzraqM1pjx8oWjab8bIF8`;
      const url = `https://api.unsplash.com/search/photos?page=1&query=${searchString}&orientation=squarish&client_id=${accessKey}`;
      axios
        .get(url)
        .then((res) => {
          generateTags(res.data.results);
        })
        .catch((err) => console.log(err));
    },
    generateTags: function (data) {
      const images = data;
      images.forEach((image) => {
        //create link tags to open images in new tab upon click
        const aTag = document.createElement("a");
        aTag.href = image.links.html;
        aTag.target = "_blank";
        //create the image tag for each image
        const imgTag = document.createElement("img");
        imgTag.src = image.urls.regular;
        imgTag.alt = image.alt_description;
        //append image tag unto the link tags
        aTag.appendChild(imgTag);
        document.body.appendChild(aTag);
      });
    },
  },
});
