var graph = require ('../src/group.js')

graph.add(1,'Student A');
graph.add(2,'Student B');
graph.add(3,'Student C');
graph.add(4,'Student D');
graph.add(5,'Student E');
graph.add(6,'Student F');
graph.group([{id:1, cost:15},{id:2, cost:10},{id:3, cost:7},{id:4, cost:30},{id:5, cost:21},{id:6, cost:5}]);

graph.add(7,'Student G');
graph.add(8,'Student H');
graph.add(9,'Student I');
graph.add(10,'Student J');
graph.add(11,'Student K');
graph.add(12,'Student L');
graph.group([{id:7,cost:10},{id:8,cost:90},{id:9,cost:80},{id:10,cost:15},{id:11,cost:30},{id:12,cost:30}]);

graph.add(13,'Student M');
graph.add(14,'Student N');
graph.add(15,'Student O');
graph.add(16,'Student P');
graph.add(17,'Student Q');
graph.add(17,'Student R');
graph.group([{id:12,cost:10},{id:13,cost:10},{id:14,cost:10},{id:15,cost:10},{id:16,cost:10},{id:17,cost:21}]);

graph.match({id:1,cost:1},{id:7,cost:1});
graph.match({id:3,cost:2},{id:12,cost:2});
graph.match({id:12,cost:7},{id:13,cost:7});

console.log(graph.reach(17)(1));
