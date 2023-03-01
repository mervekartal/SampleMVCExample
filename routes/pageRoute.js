const express = require('express')
const pageController = require('../controllers/pageController')

const router = express.Router()

router.route('/').get(pageController.getIndexPage)
router.route('/folder1').get(pageController.getFolder1Page)
router.route('/folder2').get(pageController.getFolder2Page)

module.exports = router