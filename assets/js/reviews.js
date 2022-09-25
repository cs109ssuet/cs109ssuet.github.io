const fiverReviews = document.querySelector(".fiverr__reviews");
const fiverReviewsContainer = document.querySelector(".fiverr__container");

class Reviews {
  embedReview() {
    for (let i = 1; i <= 20; i++) {
      const html = `
        <div class="" fiverr__reviews--item>
          <img src="./assets/images/reviews/${i}.PNG" alt="review-${i}" />
        </div>
        `;
      //   fiverReviews.insertAdjacentHTML("afterbegin", html);
    }
  }
}

const obj = new Reviews();

obj.embedReview();

// for (let j = 0; j <= i; j++) {
//     if (i === 4) break;
//     const html = `
//         <div class="fiverr__reviews">
//             <div class="" fiverr__reviews--item>
//             <img src="./assets/images/reviews/${i}.PNG" alt="review-${i}" />
//             </div>
//         </div>
//         `;
//     fiverReviewsContainer.insertAdjacentHTML("afterbegin", html);
//   }
