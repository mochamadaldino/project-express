/**memqnggil library express */
import express, { Request, Response } from "express"
import { validateCube } from "./validateCube"
import routeBangunDatar from "./route/bangunDatar"
// wadah inisiasi express
const app = express()
// mendefinisikan PORT berjalannya server
// port adalah code untuk mendefinisikan sesuatu
const PORT = 8000
// allow to read JSON as request
app.use(express.json())

// proses pertama handle request
app.get(`/serena`, (request:Request, response:Response) =>{
    // proses handle request dengan url/address: http://localhost/:8000/serena, dengan method get
    // memberi response
    return response.status(200).json({
        message: `Hello Serena`
    })
    
}) 

// read a query request
app.get(`/moklet`, (request:Request, response:Response) => {
    // asumsikan data yang dikirim data yang dikirim adalah nama dan umur
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.umur?.toString()

    let message: string = `my name is ${nama} and im ${umur} yo`
    return response.status(200).json(message)
})

// read data request from parameter
app.get(`/telkom/:nama/:gender`,(request:Request, response:Response) => {
    let nama: string = request.params.nama
    let gender: string = request.params.gender
    let message: string = `my name is ${nama} and im ${gender}`
    return response.status(200).json(message)
}) 
// buatlah sebuah request ntuk mengonversi suhu c ke fahrenheitt, kelvin dan reamur
// menggunakan req parameter exp: http://localhost:800/celcius/80
// (80 adalah nilai c)
// response data  {reamur: ?, fahrenheit: ?, kelvin: ?}
app.get(`/suhu/:suhuCelcius`,(request:Request, response:Response) => {
    let suhuCelcius: any = request.params.suhuCelcius
    let suhuReamur: number = (suhuCelcius + 273)
    let suhuFahrenheit: number = (suhuCelcius*9/5)
    let suhuKelvin: number = (suhuCelcius + 27)/ 1.25
    let message = `reamur: ${suhuReamur},fahrenheit: ${suhuFahrenheit},kelvin: ${suhuKelvin}`
    return response.status(200).json(message)
}) 

// create request for count volume of 
app.post(`/balok`, validateCube ,(request:Request, response:Response) => {
//    read panjang, lebar, tinggi
let panjang: number = Number(request.body.panjang)
let lebar: number = Number(request.body.lebar)
let tinggi: number = Number(request.body.tinggi)

let volume: number = panjang * lebar * tinggi
return response.status(200).json({
    panjang,lebar,tinggi,volume
})
})

// read a request from body
app.post(`/moklet`, (request:Request, response:Response) => {
// asumsikan data yang dikirim adalah panjang dan lebar
let panjang: number = request.body.panjang
let lebar: number = request.body.lebar

let luasPersegiPanjang: number = panjang * lebar
let message =`Luas persegi panjang adalah ${luasPersegiPanjang}`
return response.status(200).json(message)
})

// register rout of Bangundatar 
app.use(routeBangunDatar)

// running server
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
    
})