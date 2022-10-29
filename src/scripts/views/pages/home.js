import TheRestoDbSource from '../../data/restodb-source';
import {
  createRestoItemTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
          <div class="content">
            <div class="latest">
            <h1>Rekomendasi Restaurant</h1>
            </div>
            <hr>
            <div id="restos" class="restos">
            </div>
          </div>
        `;
  },

  async afterRender() {
    const hero = document.querySelector('.hero');
    hero.style.display = '';
    const restos = await TheRestoDbSource.nowPlayingRestos();
    const restoContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
    const allSkeleton = document.querySelectorAll('.skeleton');
    setTimeout(() => {
      allSkeleton.forEach((item) => {
        item.classList.remove('skeleton');
      });
    }, 2000);
  },
};

export default Home;
