const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "Novermber",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("sorry data tidak ditemukan", []));
    }
  }, 1000);
};

let hasil = (kosong, month) => {
  if (kosong == null) {
    console.log(month.map(i => i)) 
  } else {
    console.log(kosong.message);
  }
};
getMonth(hasil);
