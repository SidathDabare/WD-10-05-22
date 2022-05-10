let row = document.querySelector("#row");

let searchName = (textInput) => {
  textInput = document.querySelector("#textInput").value;
  console.log(textInput);
  loadImages(textInput);
  loadNextPage(textInput);
  showAlert(textInput.length);
  document.querySelector("#textInput").value = "";
};
// console.log(container);
let loadImages = (textInput = "music") => {
  fetch(`https://api.pexels.com/v1/search?query=${textInput}`, {
    headers: {
      Authorization: "563492ad6f9170000100000154ea660276e04e3aba035cb936d2b7d5",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      return response;
    })
    .then((music) => {
      for (let i = 0; i < music.photos.length; i++) {
        const image = music.photos[i].src.original;
        const title = music.photos[i].alt;
        const id = music.photos[i].id;
        showAlert(music.photos.length);
        console.log(title);
        console.log(id);
        row.innerHTML += `<div class="col-6 col-sm-6 col-md-4 col-lg-4">
              <div class="card mb-4 shadow-sm">
              <img src=${image} class="card-img-top">             
                <div class="card-body">
                  <p class="card-text">
                    ${title}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary viewButton"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary hideBtn"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted font-weight-bold">${id}</small>
                  </div>
                </div>
              </div>
            </div>`;
        hideCard();
        imageView();
      }
      //return music;
    })
    .catch((err) => console.error(err));
};

let loadNextPage = (textInput = "music") => {
  fetch(
    `https://api.pexels.com/v1/search/?page=2&per_page=15&query=${textInput}`,
    {
      headers: {
        Authorization:
          "563492ad6f9170000100000154ea660276e04e3aba035cb936d2b7d5",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      return response;
    })
    .then((music) => {
      for (let i = 0; i < music.photos.length; i++) {
        const image = music.photos[i].src.original;
        const title = music.photos[i].alt;
        const id = music.photos[i].id;
        showAlert(music.photos.length);
        console.log(title);
        console.log(id);
        row.innerHTML += `<div class="col-6 col-sm-6 col-md-4 col-lg-4">
              <div class="card mb-4 shadow-sm">
              <img src=${image} class="card-img-top">             
                <div class="card-body">
                  <p class="card-text">
                    ${title}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        data-whatever="@mdo" 
                       
                        class="btn btn-sm btn-outline-secondary viewButton"
                      >
                        View
                      </button>
                      <button
                        type="button"              
                        class="btn btn-sm btn-outline-secondary hideButton"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted font-weight-bold">${id}</small>
                  </div>
                </div>
              </div>
            </div>`;
        hideCard();
        imageView();
      }
      //return music;
    })
    .catch((err) => console.error(err));
};

let hideCard = () => {
  let hideBtn = document.querySelectorAll("button.hideButton");
  //console.log(hideBtn);
  for (let i = 0; i < hideBtn.length; i++) {
    const button = hideBtn[i];
    button.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.parentElement.parentElement.remove();
    });
  }
};

let showAlert = (length) => {
  let alert = document.querySelector(".alert");
  alert.classList.remove("d-none");
  alert.innerHTML = `<p class="font-weight-bold">${length} Images Loading .....</p>`;
  setTimeout(() => {
    let alert = document.querySelector(".alert");
    alert.classList.add("d-none");
  }, 5000);
};
let displayDiv = document.querySelector(".displayImage");
let imageView = () => {
  let viewButtons = document.querySelectorAll("button.viewButton");
  for (let i = 0; i < viewButtons.length; i++) {
    let viewBtn = viewButtons[i];

    $("#exampleModal").on("show.bs.modal", function (event) {
      var button = $(event.relatedTarget); // Button that triggered the modal
      var recipient = button.data("whatever"); // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this);
      // modal.find(".modal-title").text("New message to " + recipient);
      modal.find(".modal-body input").val(recipient);
    });
  }
};
