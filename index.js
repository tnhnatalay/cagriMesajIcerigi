function Kopyala(a) {
    var metin = document.getElementById(a);
    metin.select();
    document.execCommand("copy");
}
