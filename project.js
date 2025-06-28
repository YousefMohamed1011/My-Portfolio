let grid = document.getElementById("grid");

fetch("/json.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((project) => {
      grid.innerHTML += `
        <div class="section-project wow ${project.animation}">
          <div class="img">
            <img src="${project.img}" alt="${project.title}" />
          </div>
          <h2>${project.title}</h2>
          <div class="btn">
            <a href="${project.url}" target="_blank">
              <button>View Project</button>
            </a>
          </div>
        </div>
      `;
    });

    new WOW().init();
  });
