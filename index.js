//   Authorization: "Bearer [YOUR API KEY]";
// }

// fetch(
//   "https://api.pexels.com/v1/search?query=books",

//   {
//     headers: {
//       Authorization: "563492ad6f9170000100000154ea660276e04e3aba035cb936d2b7d5",
//     },
//   },
//   { mode: "no-cors" }
// )
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//     return response;
//   })
//   .then((page) => {
//     for (let i = 0; i < page.photos.length; i++) {
//       const element = page.photos[1];
//       console.log(element);
//     }
//   });

let container = document.querySelector("#container");
// console.log(container);
let searchTitle = () => {
  fetch(
    "https://api.pexels.com/v1/search?query=music",
    {
      headers: {
        Authorization:
          "563492ad6f9170000100000154ea660276e04e3aba035cb936d2b7d5",
      },
    },
    { mode: "no-cors" }
  )
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      return response;
    })
    .then((music) => {
      for (let i = 0; i < music.photos.length; i++) {
        const image = music.photos[i].url;
        const title = music.photos[i].alt;
        const id = music.photos[i].id;
        console.log(title);
        console.log(id);
        container.innerHTML += `<div class="card col-6 col-md-4 col-lg-3 flex-grow-1  mx-2 my-1 bg-transparent text-white p-0">
                                  <img src="https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg" class="card-img-top flex-grow-1" alt="...">
                                  <div class="card-body h-auto">
                                    <p class="card-title text-dark">${title}</p>
                                    <p class="card-text"></p>
                                    <p class="card-text font-weight-bold"></p>
                                  </div>
                                </div>`;
      }
    })
    .catch((err) => console.error(err));
};

let nextPage = () => {
  console.log("click");
};
