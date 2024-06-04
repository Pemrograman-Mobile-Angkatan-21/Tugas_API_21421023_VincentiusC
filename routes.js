const router = require("express").Router();

router.use(`/pengarang`, require("./routes/pengarang_routes"));

// memanggil routes buku

router.use(`/buku`, require("./routes/buku_routes"));

module.exports = router;