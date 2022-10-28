import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import {
  createRestoItemTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="restos" class="restos">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const hero = document.querySelector('.hero');
    hero.style.display = 'none';
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restoContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
    const allSkeleton = document.querySelectorAll(".skeleton");
    setTimeout(() => {
      allSkeleton.forEach(item => {
        item.classList.remove('skeleton')
      })
    }, 2000);
    if (restos.length > 0) {
      restoContainer.value = restos;
    } else {
      document.querySelector('#restos').innerHTML = ` <div id="not-found" class="not-found">
        <p>tidak ada resto</p>
      </div>`;
    }
  },
};

export default Favorite;


// const postContainer = document.querySelector('post-list');
//     const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
//     if (restaurants.length > 0) {
//       postContainer.value = restaurants;
//     } else {
//       document.querySelector('#posts').innerHTML = '<empty-favorite></empty-favorite>';
//     }
//     createPageLoaderTemplate.remove();