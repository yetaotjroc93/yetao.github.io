function generatePaperHTML(photo, title, authors, description, link) {
    return `
      <div style="display: flex; align-items: flex-start;">
        <div style="flex: 1;">
          <img src="${photo}" alt="Paper Photo" style="width: 100px;">
        </div>
        <div style="flex: 3;">
          <p><strong><a href="${link}">${title}</a></strong></p>
          <p><strong>${authors}</strong></p>
          <p>${description}</p>
        </div>
      </div>
    `;
  }