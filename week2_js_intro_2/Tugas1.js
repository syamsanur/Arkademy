const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("bukan hari kerja"));
      }
    }, 1000);
  });
};

cekHariKerja('rabu')

    .then((cek) => {
        console.log(cek)
    })
    .catch((err) => {
        console.log(err.message)
    });

// const cekHariKerja2 = async (day) => {
//   try {
//     const i = await cekHariKerja(day);
//     console.log(i);
//   }catch (err) {
//     console.log(err.message);
//   }
// };

// cekHariKerja2("senin");
