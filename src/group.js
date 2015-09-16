var students = [];

module.exports = {

    add : (id,nome) => students.push({
        'id':id,
        'nome':nome,
        'knows':[]
    }),

    group : (group_list) => group_list.forEach(function(member){
        group_list
            .filter( (colleague)=> colleague != member)
            .forEach((colleague) => {module.exports.match(member,colleague)});
    }),

    match : (s1,s2) => {

        if( Number.isInteger(s1) && Number.isInteger(s2) ){
            var match_12_id = s1;
            var match_12_weight = 0;
            var match_21_id = s2;
            var match_21_weight = 0;
        }else if(typeof s1.id !== 'undefined' && typeof s2.id !== 'undefined'){
            var match_12_id = s2.id;
            var match_12_weight = s2.weight;
            var match_21_id = s1.id;
            var match_21_weight = s1.weight;
        }else{
            return false;
        }

        var p1 = module.exports.getStudent(match_12_id);
        var p2 = module.exports.getStudent(match_21_id);

        if(p1.length == 0)
            return false;

        if(p2.length == 0)
            return false;

        if(p1.knows.filter( (colleague) => colleague.id === match_21_id ).length == 0 )
            p1.knows.push({id:match_21_id, weight:match_21_weight});

        if(p2.knows.filter( (colleague) => colleague.id === match_12_id ).length == 0 )
            p2.knows.push({id:match_12_id, weight:match_12_weight});

    },

    getStudent : (_id) => students.filter( (student) => _id == student.id)[0],

    explain : ()=>students.forEach((student)=>{

        console.log("Student #"+student.id+" knows:");
        student.knows.forEach((colleague) => console.log(" -"+colleague.id+" ("+colleague.weight+")"));
        console.log("\r\n");
    }),

    reach : (student) => (from) => {

        var source_student = module.exports.getStudent(student);
        var distance = [];
        var previous = [];

        distance[from] = 0;

        source_student.knows.forEach( (colleague) => {
            
        });

    }

}
