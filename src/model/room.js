const conn = require("../app/connection");
const util = require("util");

const query = util.promisify(conn.query).bind(conn);
const Room = require("./classes/room");

async function getRoomsById(idHotel = 0) {
  const result = await query(`select * from room where id_hotel = ${idHotel}`);
  const data = result.map(
    (value) =>
      new Room(
        value.id_room,
        value.description,
        value.url_image,
        new Intl.NumberFormat().format(value.price),
        value.id_hotel
      )
  );
  return data;
}

module.exports = {
  getRoomsById,
};
