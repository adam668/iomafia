import express from 'express';
import http from 'http';
import path from 'path'

import {Color} from './funcs';

import {
    Request,
    Response
} from 'express-serve-static-core';

// Constants
const cli = express(),
    srv = http.createServer(cli),
    port = parseInt(process.env.PORT || '8888') || 8888,
    dev: boolean = port === 8888
    


// Engines and middleware
cli.use(require('compression')());
//@ts-ignore
cli.use('/static', express.static(path.join(__dirname, '..', 'static')));

// Routes

cli.get('/menu.mp3', (_, res) =>
    res.redirect('/static/sounds/menu.mp3')
);

cli.get(
    '/',
    (_,res: Response) => {
      
    res.status(200);
    res.redirect('http://localhost:8080')
  });

 cli.get(
     '/getplayer/:player',
     (req: Request, res: Response) => {
         console.log(req.params.player);
         res.send({
             msg: 'why did you think that would work?'
            });
     }
 )

  srv.listen(port, () => {
   console.log(Color('fgGreen', 'server is listening :)'))
    if (dev) {
        console.log(
            `Serving mafia.io on PORT ${Color(
                'fgBlue',
                port.toString()
            )}, view on ${Color('fgGreen', `http://localhost:${port}`)}`
        );
    }
}); 