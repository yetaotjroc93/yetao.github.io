function generatePaperHTML(photo, title, authors, description, link) {
  const baseURL = "https://raw.githubusercontent.com/yetaotjroc93/yetao.github.io/refs/heads/master/images/";
  const fullPhotoURL = baseURL + photo;
    return `
      <div style="display: flex; align-items: flex-start;">
        <div style="flex: 1;">
          <img src="${fullPhotoURL}" alt="Paper Photo" >
        </div>
        <div style="flex: 2;">
          <p><strong><a href="${link}">${title}</a></strong></p>
          <p>${emphasizeAuthor(authors)}</p>
          <p>${description}</p>
        </div>
      </div>
    `;
  }

  function emphasizeAuthor(authors) {
    const namesToEmphasize = ["Wu, Yu", "Yu Wu"];
    let emphasizedAuthors = authors;
    namesToEmphasize.forEach(name => {
      const regex = new RegExp(name, 'g');
      emphasizedAuthors = emphasizedAuthors.replace(regex, `<strong>${name}</strong>`);
    });
    return emphasizedAuthors;
  }