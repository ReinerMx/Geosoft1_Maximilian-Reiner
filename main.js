function distance1 (par1,par2){

    let lon1 = par1[0];
    let lat1 = par1[1];
    let lon2 = par2[0];
    let lat2 = par2[1];

    const R = 6371e3; // metres
    const A = lat1 * Math.PI/180; // φ, λ in radians
    const B = lat2 * Math.PI/180;
    const C = (lat2-lat1) * Math.PI/180;
    const D = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(C/2) * Math.sin(C/2) +
            Math.cos(A) * Math.cos(B) *
            Math.sin(D/2) * Math.sin(D/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = R * c; // in metres
    return d;
}

    let end = [];
cities.forEach(item => { 
    end.push(distance1(point,item));
})

    end.sort();

    end.forEach(item => { 
       document.getElementById("1").innerHTML += item;
    })