function uploadMedia(){

    const imageForm = document.getElementById("imageForm");
    const imageInput = document.getElementById("imageInput");

    imageForm.addEventListener("submit", async event => {
      event.preventDefault();
      const img = document.createElement("img");
      document.body.appendChild(img);
    })
}

export default uploadMedia