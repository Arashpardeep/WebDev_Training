class Persons {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    display(){
        console.log(this.fname);
        console.log(this.lname);
    }
}

const p1 = new Persons('sam', 'jones');
p1.display();