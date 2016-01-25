/**
 * Created by machaoxing on 16/1/23.
 */
app.factory('Order', function($resource) {
  return $resource('http://localhost:3000/stuffs/users/:id'); // Note the full endpoint address
});
