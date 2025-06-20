document.getElementById("year").innerHTML =
"&copy; " +
new Date().getFullYear() +
" All right Received By Sabona Marara";
fetch("data.json")
.then((response) => response.json())
.then((data) => {
  let items = data;
  function generateItemsHtml(items) {
    return items
      .map(
        (item) => `  
                <div class="item-container">  
                    <img class="item-image" src="${item.imagePath}" alt="${item.title}">  
                    <h2> Abba Qabeenya:${item.title}</h2>  
                    <h3> Bakk Argama:${item.place}</h3>  
                    <p>${item.description}</p>  
                    <p>Gatii: Birr ${item.price}</p> 
                    <p>Lakk: ${item.phone} </p>
                </div>  
            `
      )
      .join("");
  }
  function renderItems(items) {
    document.getElementById("content-container").innerHTML =
      generateItemsHtml(items);
  }
  renderItems(items);
  document
    .getElementById("place-search")
    .addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const filteredItems = data.filter((item) =>
        item.place.toLowerCase().includes(searchTerm)
      );
      renderItems(filteredItems);
    });
})
.catch((error) => console.error("Error loading data:", error));

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
  document.addEventListener('copy', function (e) {
  e.preventDefault();
});

document.addEventListener('cut', function (e) {
  e.preventDefault();
});

document.addEventListener('paste', function (e) {
  e.preventDefault();
});