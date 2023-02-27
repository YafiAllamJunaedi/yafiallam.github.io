// 91 - 100 = A
// 81 - 90 = B
// 71 - 80 = C
// 61 - 70 = D
// 0 - 60 = F

let nilai = prompt ("Masukkan nilai : ", 0);
let hasil = "";

switch(true){
    case nilai >= 91 && nilai <=100:
        hasil = "A"
        break;
    case nilai >= 81 && nilai <=90:
        hasil = "B"
        break;
    case nilai >= 71 && nilai <=80:
        hasil = "C"
        break;
    case nilai >= 61 && nilai <=70:
        hasil = "D"
        break;
    case nilai >= 0 && nilai <=60:
        hasil = "F"
        break;
    default:
        document.write("Tidak ada");
}
document.write(hasil);


