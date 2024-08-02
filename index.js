// định nghĩa về hàm
// Khách hàng yêu cầu thực hiện cung cấp giá món hoàn thánh là 50k và số tiền giảm giá là 10% yêu cầu chức năng tính toán số tiền. Mỗi lần thực hiện yêu cầu tính, nếu không đưa giá trị giảm giá thì tự hiểu là đang giảm 10%
// lệnh trả về return, tham số đối số, default paramete
function tinhSoTienMonAn(tienMonAn, tienGiamGia = 10) {
  //   let tienMonAn = 50000;
  //   let tienGiamGia = 10;
  // nếu như tham số tienGiamGia mang giá trị undefined thì sẽ gán 1 giá trị 10% vào
  //   if (tienGiamGia === undefined) {
  //     tienGiamGia = 10;
  //   }
  // khi một hàm có sử dụng lệnh return thì kết quả sẽ được trả về và có thể tạo biến để lưu trữ, nếu không sử dụng return thì kết quả nhận được sẽ là undefined
  let ketQua = tienMonAn * (1 - tienGiamGia / 100);
  console.log(ketQua);
}
tinhSoTienMonAn(200000);

//thực hiên tính toán giúp cho bên trường đại học về điểm số của các sinh viên có 3 môn toán văn anh vần tính toán sau khi tính toán sẽ thực hiện xử lý kiểm tra xem sinh viên xếp loại gì : trên 8 là học sinh giỏi, 6< dtb <8 sinh viên khá, dtb<6 sinh viên trung bình. nhà trường yêu cầu về phần xử lý của tính điểm trung bình và xếp loại sẽ được tách ra thành 2 function riêng để nhà trường có thể mang đi sử dụng ở các nơi khác
function diemTrungBinh(diemToan, diemVan, diemAnh) {
  return (diemToan + diemVan + diemAnh) / 3;
}
function xepLoaiSinhVien(tbc) {
  let loai = "";
  if (tbc >= 8) {
    loai = "giỏi";
  } else if (6 <= tbc && tbc < 8) {
    loai = "khá";
  } else if (tbc < 6) {
    loai = "Trung Bình";
  }
  return loai;
}
document.getElementById("xepLoai").onclick = function () {
  let diemToan = document.getElementById("diemToan").value * 1;
  let diemVan = document.getElementById("diemVan").value * 1;
  let diemAnh = document.getElementById("diemAnh").value * 1;
  let tbc = diemTrungBinh(diemToan, diemVan, diemAnh);
  document.getElementById("loaiSinhVien").innerHTML += `
    <p>Điểm trung bình : ${tbc.toFixed(2)}</p>
    <p>Xếp loại : ${xepLoaiSinhVien(tbc)}</p>
    `;
};
