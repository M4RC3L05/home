const renderCategory = (category) => `
  <div class="col">
    <h1 style="margin-bottom: 12px; overflow: hidden; text-overflow: ellipsis;">
      <i class="${category.icon}" style="margin-right: 2px"></i> ${category.name}
    </h1>

    ${category.apps.map((app) => renderApp(app)).join("")}
  </div>
`;

const renderApp = (app) => {
  const props = Object.entries(app.link.attributes).map(([key, value]) => `${key}="${value}"`).join(" ");

  return `
    <a href="${app.link.href}" ${props} style="color: inherit; text-decoration: inherit;">
      <div style="display: flex; overflow-x: hidden; cursor: pointer; background-color: var(--card-color); border-radius: 8px; margin-bottom: 12px; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; border: 1px solid var(--card-border-color)">
        <div style="display: flex; flex-direction: row; width: 100%; align-items: center; padding: 12px; overflow: hidden;">
          <img src="${app.image}" style="margin-right: 12px" width="48" height="48">
          <div style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden">
            <h3 style="margin: 0; margin-bottom: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">${app.name}</h3>
            <p style="margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">${app.description}</p>
          </div>
        </div>
      </div>
    </a>
  `;
}

const config = await fetch("./data/config.json").then((response) => response.json());
const app = document.querySelector("#app");

app.innerHTML = `
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
    ${config.categories.map(category => renderCategory(category)).join("")}
  </div>
`;
