const conn = require("../app/connection");
const util = require("util");

const query = util.promisify(conn.query).bind(conn);
const Hotel = require("./classes/hotel");

async function getHotelById(id = 0) {
  const result = await query(
    `select h.id_hotel, h.name, h.stars, h.address, h.url_image, c.name as city, d.name as department, h.medium_price from hotel h inner join city c on (h.id_city = c.id_city) inner join department d on (c.id_department = d.id_department) where h.id_hotel = ${id}`
  );
  const data = result.map(
    (value) =>
      new Hotel(
        value.id_hotel,
        value.name,
        value.address,
        value.url_image,
        value.stars,
        new Intl.NumberFormat().format(value.medium_price),
        value.city,
        value.department
      )
  );
  return data[0];
}

async function getHotelsByQuery(params = "") {
  const result = await query(
    `select h.id_hotel, h.name, h.stars, h.address, h.url_image, c.name as city, d.name as department, h.medium_price from hotel h inner join city c on (h.id_city = c.id_city) inner join department d on (c.id_department = d.id_department)
    where lower(h.name) like '%${params.toLowerCase()}%' or lower(c.name) like '%${params.toLowerCase()}%'`
  );
  const data = result.map(
    (value) =>
      new Hotel(
        value.id_hotel,
        value.name,
        value.address,
        value.url_image,
        value.stars,
        new Intl.NumberFormat().format(value.medium_price),
        value.city,
        value.department
      )
  );
  return data || [];
}

module.exports = {
  getHotelById,
  getHotelsByQuery,
};
