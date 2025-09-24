let profs = [
    {
        id : 187,
        nom : "Ruchaud",
        prenom : "William",
        bureau : "210"
    },
    {
        id : 24,
        nom : "Oulad Moussa",
        prenom : "Mustapha",
        bureau : "213"
    },
    {
        id : 23,
        nom : "Chervy",
        prenom : "Benjamin",
        bureau : "218"
    },
    {
        id : 22,
        nom : "Hilaire",
        prenom : "Guillaume",
        bureau : "404"
    }
    
];


let maxId = 187;

function getAll(){
    return profs;
}

function getById (id) {
    let res = profs.filter((p) => {
        return p.id == id
    });
    if(res.length == 1 ){
         return res[0];
    }
    return null;
}


function add (nom, prenom, bureau ){
    maxId++;
    profs.push({
        id : maxId,
        nom : nom,
        prenom : prenom,
        bureau : bureau
    });
    return true;
}

function deleteById (id) {
    let l = profs.length;
    profs = profs.filter((p) => {
        return p.id != id;
    });
    return l != profs.length;
}


function update (id, nom, prenom, bureau, passwordProf ){
    let prof = getById(id);
    if( ! prof ) return false;
    prof.nom = nom;
    prof.prenom = prenom;
    prof.bureau = bureau;
    prof. passwordProf = passwordProf;
    return true;
}

module.exports = {
    getAll : getAll,
    getById : getById,
    add : add,
    deleteById : deleteById,
    update : update
}