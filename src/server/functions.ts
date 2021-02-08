import mongoose from 'mongoose'


    export let init = () => {
        mongoose.connect("mongodb+srv://adam:Adam2007@cluster0.huh7s.mongodb.net/littlefantasy?retryWrites=true&w=majority", {
         useNewUrlParser: true,
         useFindAndModify: false,
         useUnifiedTopology: false,
         autoIndex: false,
         reconnectTries: Number.MAX_VALUE,
         reconnectInterval: 500,
         poolSize: 5,
         connectTimeoutMS: 10000,
         family: 4
    })
    mongoose.Promise = global.Promise
    mongoose.connection.on("connected", async () =>  {
        console.log("I'm connected to the mongodb database!")
       
    })
    mongoose.connection.on("err", err => {
        console.error(`Mongoose connection error: \n${err.stack}`)
    })
    mongoose.connection.on("disconnected", () => {
        console.warn("Mongoose connection error")
    })
    }

  
export const colors = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
    fgBlack: "\x1b[30m",
    fgRed: "\x1b[31m",
    fgGreen: "\x1b[32m",
    fgYellow: "\x1b[33m",
    fgBlue: "\x1b[34m",
    fgMagenta: "\x1b[35m",
    fgCyan: "\x1b[36m",
    fgWhite: "\x1b[37m",
    fgCrimson: "\x1b[38m",
    bgBlack: "\x1b[40m",
    bgRed: "\x1b[41m",
    bgGreen: "\x1b[42m",
    bgYellow: "\x1b[43m",
    bgBlue: "\x1b[44m",
    bgMagenta: "\x1b[45m",
    bgCyan: "\x1b[46m",
    bgWhite: "\x1b[47m",
    bgCrimson: "\x1b[48m"
};

export const Color = (color: keyof typeof colors, txt?: string) => colors[color] + txt + colors.fgWhite;