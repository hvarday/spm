module.exports = function(list){

    var code = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Redirect</title><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><h2>You do not have sufficient permissions, you\'ll be redirected.</h2></body><script>window.location.pathname="/login";</script></html>'

    return function(req, res, next){

        if(req.user){
            if(list=='all')
                return next();
            if(list.lastIndexOf(req.user.userType)==-1)
                res.status(401).send(code);
            else
                next();
        }
        else
            res.status(401).send(code);

    }

}
