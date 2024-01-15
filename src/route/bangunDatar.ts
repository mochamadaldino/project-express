import exp from "constants"
import express from "express"
import { kelilingLingkaran, kelilingPersegi, kelilingPersegiPanjang, luasLingkaran, luasPersegi, luasPersegiPanjang, luasSegitiga } from "../controller/bangunDatar"
import { lpBalok, lpBola, lpKubus, lpTabung, volumeBalok, volumeBola, volumeKubus, volumeTabung } from "../controller/bangunRuang"
import { validateBalok } from "../middleware/validateBalok"
import { validateKubus } from "../middleware/validateKubus"
import { validatePP } from "../middleware/validatePP"
import { validateS3 } from "../middleware/validateS3"
import { validateBundar } from "../middleware/validateBundar"
import { validateTabung } from "../middleware/validateTabung"
const app = express()
// allow read a body
app.use(express.json())
// use sebagai menerapkan sebuah fungsi pada object express, fungsi tsb akan otomatis dijalankan
app.post(`/lingkaran/luas`, validateBundar, luasLingkaran)
app.post(`/lingkaran/keliling`,validateBundar,  kelilingLingkaran)
app.post(`/persegi/luas`, validateKubus, luasPersegi)
app.post(`/persegi/keliling`, validateKubus, kelilingPersegi)
app.post(`/PersegiPanjang/luas`, validatePP, luasPersegiPanjang)
app.post(`/PersegiPanjang/keliling`, validatePP, kelilingPersegiPanjang)
app.post(`/Segitiga/luas`, validateS3, luasSegitiga)
app.post(`/tabung/volume`, validateTabung, volumeTabung)
app.post(`/tabung/lp`, validateTabung, lpTabung)
app.post(`/kubus/volume`, validateKubus, volumeKubus)
app.post(`/kubus/lp`, validateKubus, lpKubus)
app.post(`/balok/volume`, validateBalok, volumeBalok)
app.post(`/balok/lp`, validateBalok, lpBalok)
app.post(`/bola/volume`, validateBundar,  volumeBola)
app.post(`/bola/lp`, validateBundar,  lpBola)

export default app