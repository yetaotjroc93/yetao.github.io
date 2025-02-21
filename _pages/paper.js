function generatePaperHTML(photo, title, authors, description, link) {
  const baseURL = "https://raw.githubusercontent.com/YuWuOfRutgers/YuWuOfRutgers.github.io/refs/heads/master/images/";
  const fullPhotoURL = baseURL + photo;
    return `
      <div style="display: flex; align-items: flex-start;">
        <div style="flex: 1;">
          <img src="${fullPhotoURL}" alt="Paper Photo" style="width: 300px;">
        </div>
        <div style="flex: 3;">
          <p><strong><a href="${link}">${title}</a></strong></p>
          <p><strong>${authors}</strong></p>
          <p>${description}</p>
        </div>
      </div>
    `;
  }