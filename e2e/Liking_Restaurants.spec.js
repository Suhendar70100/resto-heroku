const assert = require('assert');

Feature('Favorite Resto');

// Perintah berjalan sebelum tiap metode tes dijalankan
Before(({
  I,
}) => {
  // root URL : http:localhost:9000
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({
  I,
}) => {
  I.waitForElement('#restos', 30);
  I.seeElement('#restos');
  I.see('tidak ada resto', '.not-found');
});

Scenario('liking one restaurant', async ({
  I,
}) => {
  I.see('tidak ada resto', '.not-found');

  // URL: /
  I.amOnPage('/');
  I.waitForElement('.resto-item a', 50);
  I.seeElement('.resto-item a');
  const firstRestoCard = locate('.resto__title').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  // URL: /resto/:id
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedCardTitle = await I.grabTextFrom('.resto__title');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle); // membandingkan
});

Scenario('unliking one restaurant', async ({
  I,
}) => {
  I.amOnPage('/');
  I.seeElement('.resto-item a');
  I.click(locate('.resto__title').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // menuju page favorite
  I.amOnPage('/#/favorite');
  I.waitForElement('.resto-item a', 100);
  I.seeElement('.resto-item a');
  const firstLikedRestaurant = locate('.resto__title').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  // menuju page detail untuk melakukan unlike
  I.wait(5);
  I.waitForElement('.resto', 100);
  I.seeElement('.resto');
  const likedRestaurantTitle = await I.grabTextFrom('.resto__title');
  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

  I.seeElement('[aria-label="unlike this resto"]');
  I.click('[aria-label="unlike this resto"]');

  // menuju page favorit untuk memastikan berhasil melakukan unlike
  I.amOnPage('/#/favorite');
  I.see('tidak ada resto', '.not-found');
});
