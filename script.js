const url = "https://api.pexels.com/v1/search?query=cars";

fetch(url, {
  method: "GET",
  headers: { Authorization: "BF4IenypUlrzOG1X3y1RKz4wuy6FsHUWpM6n5NUQYuDBsv1STNxJyRMJ" },
  "Content-Type": "application/json",
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nel reperimento dei dati richiesti");
    }
  })
  .then((images) => {
    console.log(images, "images");
    const loadBtn = document.getElementById("load-btn");
    const card = document.getElementById("card");
    const image = document.querySelectorAll("img");
    const photos = images.photos;
    photos.forEach((photo, i) => {
      console.log(image[i]);
      console.log(image.src);
    });
  })
  .catch((err) => console.log(err));
// const createCards = () => {
//   image.innerHTML = `<img src="${image.photos[i].url}" class="bd-placeholder-img card-img-top" />
//       <div class="card-body">
//         <h5 class="card-title">Lorem Ipsum</h5>
//         <p class="card-text">
//           This is a wider card with supporting text below as a natural lead-in to additional content. This
//           content is a little bit longer.
//         </p>
//         <div class="d-flex justify-content-between align-items-center">
//           <div class="btn-group">
//             <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//             <button type="button" class="btn btn-sm btn-outline-secondary">Hide</button>
//           </div>
//           <small class="text-muted">9 mins</small>
//         </div>
//       </div>`;
// };
