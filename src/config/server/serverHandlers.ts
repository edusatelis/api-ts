import Server from './server'

let port = process.env.PORT || '3000';

Server.app.listen(port, function(){
    console.log(`Server is running in port ${port}`);
});