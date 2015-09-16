var graph = require ('../src/group.js')

graph.add(67309,'Lucas Barcelos');
graph.add(69313,'Danilo Rechi');
graph.add(66696,'Michel Canesin');
graph.add(66596,'Rafael Pizani');
graph.add(68366,'André Sousa');
graph.add(70464,'Rafael Cheruti');
graph.group([{id:67309, weight:15},{id:69313, weight:10},{id:66696, weight:7},{id:66596, weight:30},{id:68366, weight:21},{id:70464, weight:5}]);

graph.add(1, "Pessoa A");
graph.add(2, "Pessoa B");
graph.add(3, "Pessoa C");
graph.add(4, "Pessoa D");
graph.add(5, "Pessoa E");
graph.group([{id:1,weight:10},{id:2,weight:10},{id:3,weight:10},{id:4,weight:10},{id:5,weight:10}]);

graph.add(6, "Pessoa F");
graph.add(7, "Pessoa G");
graph.add(8, "Pessoa H");
graph.add(9, "Pessoa I");
graph.add(10, "Pessoa J");
graph.group([{id:6,weight:10},{id:7,weight:10},{id:8,weight:10},{id:9,weight:10},{id:10,weight:10}]);

graph.match({id:69313,weight:15},{id:6,weight:15});
graph.match({id:70464,weight:2},{id:1,weight:2});
graph.match({id:66596,weight:10},{id:1,weight:10});

graph.reach(69313)(5);
