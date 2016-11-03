module.exports = function(app){
  app.post('/api/usages', function(req, res){
    // Store the supplied usage data
    app.redis.incr('id', function(err, id){
      app.redis.hmset(id, req.body, function(err, reply){
        if(err){
          res.status(err.status || 500).json({'error':err});
        }
        else {
          app.redis.get('id', function(err, id){
            if(app.get('env') === 'development'){
              console.log('Stored usage count: ' + id);
            }
            res.status(201).json({'id':id});
          });
        }
      });
    });
  });
}
