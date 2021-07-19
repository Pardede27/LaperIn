const DetailInitiator = {
  initMenu(menus) {
    let menuList = '';

    menus.forEach((menu) => {
      menuList += `<p>${menu.name}</p>`;
    });

    return menuList;
  },

  initCategories(categories) {
    let categoryList = '<p>';
    const arrayLength = categories.length;

    categories.forEach((category, index) => {
      if (index === arrayLength - 1) {
        categoryList += `${category.name} `;
      } else {
        categoryList += `${category.name}, `;
      }
    });
    categoryList += '</p>';

    return categoryList;
  },

  initReview(reviews) {
    let reviewList = '';

    reviews.forEach((review) => {
      reviewList += `
      <div class="review">
          <h3>${review.name}</h3>
          <p class="review-date">${review.date}</p>
          <p class="review-description">&emsp;${review.review}</p>
      </div>
      `;
    });

    return reviewList;
  },
};

export default DetailInitiator;
