<p id="carasingkat"></p>
<script>
// Silahkan anda atur tanggal anda
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
// Hitungan Mundur Waktu Dilakukan Setiap Satu Detik
var x = setInterval(function() {
  // Mendapatkan Tanggal dan waktu Pada Hari ini
  var now = new Date().getTime();
  //Jarak Waktu Antara Hitungan Mundur
  var distance = countDownDate - now;
  // Perhitungan waktu hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Tampilkan hasilnya di elemen id = "carasingkat"
  document.getElementById("carasingkat").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // Jika hitungan mundur selesai,
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Carasingkat").innerHTML = "EXPIRED";
  }
}, 1000);
</script>
