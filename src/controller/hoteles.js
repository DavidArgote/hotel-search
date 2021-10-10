const express = require("express");
const router = express.Router();

const { getHotelsByQuery, getHotelById } = require("../model/hotel");
const { getRoomsById } = require("../model/room");

router.get("/", async (req, res) => {
  const params = req.query.query;
  const hotels = await getHotelsByQuery(params);
  const isEmpty = hotels.length > 0 ? true : false;
  res.render("hoteles", { hotels, isEmpty, params });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const hotel = await getHotelById(id);
  const rooms = await getRoomsById(id);
  const roomsEmpty = rooms.length > 0 ? true : false;
  res.render("hotel-detail", { hotel, rooms, roomsEmpty });
});

module.exports = router;
