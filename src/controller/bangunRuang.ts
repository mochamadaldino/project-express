import { Request, Response } from "express"

// tu let digunakan untuk mendeklarasikan untuk sebuah variable atau object atau array atau function, data yang diolah disebut parameter
const volumeTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number =Number(request.body.r)
        const t: number =Number(request.body.t)
        const volume = (phi * r * r) * t
        return response.status(200).json({
            status: true,
            r,t,
            volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
    }
    const lpTabung = (request: Request, response: Response) => {
        try {
            const phi = Math.PI
            const r: number =Number(request.body.r)
            const t: number =Number(request.body.t)
            const lp = 2 * phi * r * (r+t)
            return response.status(200).json({
                status: true,
                r,t,
                lp
            })
        } catch (error) {
            return response.status(500)
            .json({
                status: false,
                message: error
            })
        }
        }
        const volumeKubus = (request: Request, response: Response) => {
            try {
              
                const s: number =Number(request.body.s)
                const volume = s * s * s
                return response.status(200).json({
                    status: true,
                   s,
                    volume
                })
            } catch (error) {
                return response.status(500)
                .json({
                    status: false,
                    message: error
                })
            }
            }
            const lpKubus = (request: Request, response: Response) => {
                try {
                  
                    const s: number =Number(request.body.s)
                    const lp = s * s * s
                    return response.status(200).json({
                        status: true,
                       s,
                        lp
                    })
                } catch (error) {
                    return response.status(500)
                    .json({
                        status: false,
                        message: error
                    })
                }
                }
                const volumeBalok = (request: Request, response: Response) => {
                    try {
                      
                        const p: number =Number(request.body.p)
                        const l: number =Number(request.body.l)
                        const t: number =Number(request.body.t)
                        const volume = p * l * t
                        return response.status(200).json({
                            status: true,
                           p,l,t,
                            volume
                        })
                    } catch (error) {
                        return response.status(500)
                        .json({
                            status: false,
                            message: error
                        })
                    }
                    }
                    const lpBalok = (request: Request, response: Response) => {
                        try {
                          
                            const p: number =Number(request.body.p)
                            const l: number =Number(request.body.l)
                            const t: number =Number(request.body.t)
                            const lp = 2 * ((p*l)+(p*t)+(l*t))
                            return response.status(200).json({
                                status: true,
                               p,l,t,
                                lp
                            })
                        } catch (error) {
                            return response.status(500)
                            .json({
                                status: false,
                                message: error
                            })
                        }
                        }
                        const volumeBola = (request: Request, response: Response) => {
                            try {
                                const phi = Math.PI
                                const r: number =Number(request.body.r)
                                const volume = (4/3) *phi*r*r*r
                                return response.status(200).json({
                                    status: true,
                                    r,
                                    volume
                                })
                            } catch (error) {
                                return response.status(500)
                                .json({
                                    status: false,
                                    message: error
                                })
                            }
                            }
                        
                        const lpBola = (request: Request, response: Response) => {
                            try {
                                const phi = Math.PI
                                const r: number =Number(request.body.r)
                                const lp = 4 * phi * r * r
                                return response.status(200).json({
                                    status: true,
                                    r,
                                    lp
                                })
                            } catch (error) {
                                return response.status(500)
                                .json({
                                    status: false,
                                    message: error
                                })
                            }
                        }
                        export{volumeTabung,lpTabung,volumeKubus,lpKubus,volumeBalok,lpBalok,volumeBola,lpBola}
                        