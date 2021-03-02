var hotelController = require('../controllers/hotel_controller'); 

/**
 * @swagger
 * /hotels:
 *   get:
 *     summary: Retrieve the list of all hotels
 *     description: Retrieve a list of hotels. Including their rooms
 *     responses:
 *       200:
 *         description: A list of hotels.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The hotel's name.
 *                         example: Hotel Four
 *                       managerId:
 *                         type: string
 *                         description: The name of the manager who runs the hotel.
 *                         example: Alexander
 */
router.route('')
  .get(hotelController.index)
  .post(hotelController.addHotel)




/* Post Add hotel */
// router.route('/addHotel')
//   .post(hotelController.addHotel); 

/* POST add hotel room */
router.route('/:hotelid')
//.get(hotelController.getHotel)
.put(hotelController.addRoomToHotel)

router.route('/AllHotelsWithRooms/:userId')
.get(hotelController.getHotelsWithRooms);