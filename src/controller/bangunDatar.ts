import { Request, Response } from "express";

// const aatu let digunakan untuk mendeklarasikan untuk sebuah variable atau object atau array atau function, data yang diolah disebut parameter
const luasLingkaran = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number =Number(request.body.r)
        const luas = phi * r * r
        return response.status(200).json({
            status: true,
            r,
            luas
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
    }
    const kelilingLingkaran= (request: Request, response: Response) => {
        try {
            const phi = Math.PI
            const r: number =Number(request.body.r)
            const keliling = 2 * phi * r
            return response.status(200).json({
                status: true,
                r,
                keliling
            })
        } catch (error) {
            return response.status(500)
            .json({
                status: false,
                message: error
            })
        }
    

    // try catch digunakan untuk mendeteksi error secara logic
    // trs sebagai code yang dibuat
    // catch digunakan untuk 
}

const luasPersegi = (request: Request, response: Response) => {
    try {
        
        const s: number =Number(request.body.s)
        const luas = s * 4
        return response.status(200).json({
            status: true,
            s,
            luas
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
    }
    const kelilingPersegi = (request: Request, response: Response) => {
        try {
            
            const s: number =Number(request.body.sisi)
            const keliling = s + s
            return response.status(200).json({
                status: true,
                s,
                keliling
            })
        } catch (error) {
            return response.status(500)
            .json({
                status: false,
                message: error
            })
        }
        }
        const luasPersegiPanjang = (request: Request, response: Response) => {
            try {
                
                const p: number =Number(request.body.p)
                const l: number =Number(request.body.l)
                const luas = p * l
                return response.status(200).json({
                    status: true,
                    p,l,
                    luas
                })
            } catch (error) {
                return response.status(500)
                .json({
                    status: false,
                    message: error
                })
            }
            }
            const kelilingPersegiPanjang = (request: Request, response: Response) => {
                try {
                    
                    const p: number =Number(request.body.p)
                    const l: number =Number(request.body.l)
                    const luas = (p + l) * 2
                    return response.status(200).json({
                        status: true,
                        p,l,
                        luas
                    })
                } catch (error) {
                    return response.status(500)
                    .json({
                        status: false,
                        message: error
                    })
                }
                }
                const luasSegitiga = (request: Request, response: Response) => {
                    try {
                        
                        const a: number =Number(request.body.a)
                        const t: number =Number(request.body.t)
                        const luas = (a * t) / 2
                        return response.status(200).json({
                            status: true,
                            a,t,
                            luas
                        })
                    } catch (error) {
                        return response.status(500)
                        .json({
                            status: false,
                            message: error
                        })
                    }
                    }
export {luasLingkaran, kelilingLingkaran, luasPersegi, kelilingPersegi, luasPersegiPanjang, kelilingPersegiPanjang, luasSegitiga}