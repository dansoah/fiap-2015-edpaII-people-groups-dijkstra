let students = [];

module.exports = {

    add : (id,nome) => students.push({
        'id':id,//object
        'nome':nome,
        'knows':[]//vetices
    }),

    group : (group_list) => group_list.forEach(function(member){
        group_list
            .filter( (colleague)=> colleague != member )
            .forEach( (colleague) => {module.exports.match(member,colleague)} );
    }),

    match : (s1,s2) => {

        let match_12_id = null;
        let match_12_cost = null;
        let match_21_id = null;
        let match_21_cost = null;

        if( Number.isInteger(s1) && Number.isInteger(s2) ){
            match_12_id = s1;
            match_12_cost = 0;
            match_21_id = s2;
            match_21_cost = 0;
        }else if(typeof s1.id !== 'undefined' && typeof s2.id !== 'undefined'){
            match_12_id = s2.id;
            match_12_cost = s2.cost;
            match_21_id = s1.id;
            match_21_cost = s1.cost;
        }else{
            return false;
        }

        let p1 = module.exports.getStudent(match_12_id);
        let p2 = module.exports.getStudent(match_21_id);

        if(p1.length == 0)
            return false;

        if(p2.length == 0)
            return false;

        if(p1.knows.filter( (colleague) =>
                                colleague.id === match_21_id
                            ).length == 0 )
            p1.knows.push({id:match_21_id, cost:match_21_cost});

        if(p2.knows.filter( (colleague) =>
                                colleague.id === match_12_id
                            ).length == 0 )
            p2.knows.push({id:match_12_id, cost:match_12_cost});

    },

    getStudent : (_id) => students.filter( (student) => _id == student.id)[0],

    explain : ()=>students.forEach((student)=>{

        console.log("Student #"+student.id+" knows:");
        student
            .knows
            .forEach(
                (colleague) =>
                    console.log(" -"+colleague.id+" ("+colleague.cost+")")
                );

        console.log("\r\n");
    }),

    reach : (student) => (from) => {

        let source_student = module.exports.getStudent(student);

        let Q = [];
        let dist = students.map( (s) => {
            return {
                id: s.id,
                dist: Infinity
            }
        });

        let prev = students.map( (s) => {
            return {
                id: s.id,
                prev: undefined
            }
        });

        //Creating unvisited nodes
        students.forEach( (colleague) => {
            Q.push(colleague);
        });

        dist.filter( (s) => s.id === from )[0].dist = 0;

        while(Q.length > 0){

            let u = Q.sort( (a,b) => {
                let a_dist = dist.filter( (s) => s.id === a.id )[0];
                let b_dist = dist.filter( (s) => s.id === b.id )[0];

                return Math.sign(a_dist.dist - b_dist.dist);
            })[0];
            Q.splice(Q.indexOf(u),1);

            u.knows.forEach( (colleague) => {
                let u_dist = dist.filter( (s) => s.id === u.id )[0];
                let c_dist = dist.filter( (s) => s.id === colleague.id )[0];
                let c_prev = prev.filter( (s) => s.id === colleague.id )[0];

                let aux = u_dist.dist + colleague.cost;

                if( aux < c_dist.dist ){
                    c_dist.dist = aux;
                    c_prev.prev = u.id;
                }

            })
        }

        let S = [];
        let u = prev.filter( (s) => s.id === student )[0];
        
        let has_prev = true;
        while(typeof u != 'undefined'){
            S.push(u);
            u = prev.filter( (s) => s.id === u.prev )[0];
        }

        return S.map( (student) => module.exports.getStudent(student.id) );

    }

}
