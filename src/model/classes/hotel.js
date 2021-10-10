module.exports = class Hotel {
  constructor(
    id,
    name,
    address,
    urlImage,
    stars,
    mediumPrice,
    city,
    department,
    urlPage = ""
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.urlImage = urlImage;
    this.stars = stars;
    this.mediumPrice = mediumPrice;
    this.city = city;
    this.department = department;
    this.urlPage = urlPage;
  }
};
