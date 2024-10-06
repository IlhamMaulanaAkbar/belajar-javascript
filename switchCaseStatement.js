let area = "";


switch (area) {
    case "Kawasan 1":
        not = "Kawasan Bebas Rokok";
        break;
    case "Kawasan 2":
        not = "Kawasan Dilarang Merokok";
        break;
    case "Kawasan 3":
        not = "Kawasan Pengunjung";
        break;
    case "Kawasan 4":
        not = "Kawasan Karyawan";
        break;            
    default:
        not = "Kawasan Bebas"    
}

console.log(not);