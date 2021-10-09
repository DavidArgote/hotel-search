module.exports = class Room {
  constructor(id, description, urlImage, price, idHotel) {
    this.id = id;
    this.description = description;
    this.urlImage = urlImage;
    this.price = price;
    this.idHotel = idHotel;
  }
};
