const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_URL: (size) => `https://restaurant-api.dicoding.dev/images/${size}/`,
  DATABASE_NAME: 'resto-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
};

export default CONFIG;
