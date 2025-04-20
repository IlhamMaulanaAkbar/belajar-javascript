class State {
    constructor(nama, kekuatan) {
        this.nama = nama;
        this.kekuatan = kekuatan;
    }
}

function bisaMenyerang(state) {
    return {
        serang: (target) => {
            console.log(`${state.nama} Menyerang ${target} dengan kekuatan ${state.kekuatan}`);
        }
    }
}

function bisaMenyembuhkan(state) {
    return {
        sembuhkan: () => {
            console.log(`${state.nama} menyembuhkan diri sendiri!`)
        }
    }
}

function bisaTerbang(state) {
    return {
        terbang: () => {
            console.log(`${state.nama} terbang tinggi ke langit!`)
        }
    }
}

function buatKsatria(nama, kekuatan) {
    const state = new State(nama, kekuatan);
    return Object.assign(state, bisaMenyerang(state));
}

function buatPenyihir(nama, kekuatan) {
    const state = new State(nama, kekuatan);
    return Object.assign(state, bisaMenyerang(state), bisaMenyembuhkan(state));
}

function buatNaga(nama, kekuatan) {
    const state = new State(nama, kekuatan);
    return Object.assign(state, bisaMenyerang(state), bisaTerbang(state));
}

const ksatria = buatKsatria('Arthur', 50);
ksatria.serang('Goblin');
// Output: Arthur menyerang Goblin dengan kekuatan 50

const penyihir = buatPenyihir('Gandalf', 30);
penyihir.serang('Orc');
// Output: Gandalf menyerang Orc dengan kekuatan 30
penyihir.sembuhkan();
// Output: Gandalf menyembuhkan dirinya sendiri

const naga = buatNaga('Naga Merah', 100);
naga.terbang();
// Output: Naga Merah terbang tinggi ke langit!
