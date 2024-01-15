import exp from "constants"
import express from "express"
import { kelilingLingkaran, kelilingPersegi, kelilingPersegiPanjang, luasLingkaran, luasPersegi, luasPersegiPanjang, luasSegitiga } from "../controller/bangunDatar"
import { lpBalok, lpBola, lpKubus, lpTabung, volumeBalok, volumeBola, volumeKubus, volumeTabung } from "../controller/bangunRuang"
const app = express()
// allow read a body
app.use(express.json())
// use sebagai menerapkan sebuah fungsi pada object express, fungsi tsb akan otomatis dijalankan
app.post(`/lingkaran/luas`, luasLingkaran)
app.post(`/lingkaran/keliling`, kelilingLingkaran)
app.post(`/persegi/luas`, luasPersegi)
app.post(`/persegi/keliling`, kelilingPersegi)
app.post(`/PersegiPanjang/luas`, luasPersegiPanjang)
app.post(`/PersegiPanjang/keliling`, kelilingPersegiPanjang)
app.post(`/Segitiga/luas`, luasSegitiga)
app.post(`/tabung/volume`, volumeTabung)
app.post(`/tabung/lp`, lpTabung)
app.post(`/kubus/volume`, volumeKubus)
app.post(`/kubus/lp`, lpKubus)
app.post(`/balok/volume`, volumeBalok)
app.post(`/balok/lp`, lpBalok)
app.post(`/bola/volume`, volumeBola)
app.post(`/bola/lp`, lpBola)

export default app