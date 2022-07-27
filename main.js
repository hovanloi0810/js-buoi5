/*
Bài 1: Quản lý tuyển sinh
INPUT:
    - Điểm 3 môn, điểm ưu tiên khu vực và đối tượng
HANDLE:
    - Tạo biến lưu tổng điểm, điểm 3 môn, điểm ưu tiên khu vực và đối tượng, điểm chuẩn
    - tổng điểm =  điểm 3 môn cộng với điểm ưu tiên
    - If(tổng điểm >= điểm chuẩn && diểm 3 môn đều != 0 (dùng &&))
        -> đậu
    - else -> rớt.
OUTPUT
    - In thông tin đậu hay rớt và Tổng điểm.
*/
document.getElementById("btnResult1").onclick = function () {
    let benchMark = +document.getElementById("benchMark").value;
    let inputScore1 = +document.getElementById("inputScore1").value;
    let inputScore2 = +document.getElementById("inputScore2").value;
    let inputScore3 = +document.getElementById("inputScore3").value;
    let scoreLocal = +document.getElementById("chooseLocation").value;
    let scoreObject = +document.getElementById("chooseObject").value;
    let totalScore = inputScore1 + inputScore2 + inputScore3 + scoreLocal + scoreObject;
    let result = document.getElementById("txtResult");
    if (totalScore >= benchMark && inputScore1 > 0 && inputScore2 > 0 && inputScore3 > 0) {
        result.innerHTML = "Bạn: đậu " + " Điểm bạn là: " + totalScore;
    }
    else {
        result.innerHTML = "Bạn: rớt" + " Điểm bạn là: " + totalScore;
    }


}
// =========================================
/*
Bài 2: Tính tiền điện
INPUT:
    - Tên và số kw
HANDLE:
    - Tạo biến lưu Tên và số kw
    - Từ 0 -> 50: 500 * kw
    - Từ 50 -> 100:  500 * 50 + ((kw-50) * 650)
    - Từ 100 -> 200: 500 * 50 + 650 * 50 + ((kw-100) * 850)
    - Từ 200 -> 350: 500 * 50 + 650 * 50 + 850 * 100 + ((kw-200) * 1100)
    - Đoạn cuói: 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + ((kw-200) * 1300)
OUTPUT
    - In thông tin và số tiền điện
*/
document.getElementById("btnResult2").onclick = function () {
    let inputName = document.getElementById("inputName").value;
    let inputKw = +document.getElementById("inputKw").value;
    let priceKw = 0;
    let txtResult2 = document.getElementById("txtResult2");
    if (inputKw <= 0) {
        alert("Giá trị sai")
    } else {
        if (inputKw <= 50) {
            priceKw = 500 * inputKw;
        }
        else if (inputKw <= 100) {
            priceKw = 500 * inputKw + (inputKw - 50) * 650;
        }
        else if (inputKw <= 150) {
            priceKw = 500 * 50 + 650 * 50 + ((inputKw - 100) * 850);
        }
        else if (inputKw <= 200) {
            priceKw = 500 * 50 + 650 * 50 + 850 * 100 + ((inputKw - 200) * 1100)
        }
        else {
            priceKw = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + ((inputKw - 200) * 1300)
        }
        txtResult2.innerHTML = "Tên: " + inputName + " " + "Tiền điện: " + priceKw.toLocaleString();
    }
}
// ===================================================
/*
Bài 3: Tính thuế thu nhập cá nhân
INPUT:
    - Họ tên, Tổng thu nhập năm, só người phụ thuộc
HANDLE:
    - Tạo biến lưu Họ tên, Tổng thu nhập năm, só người phụ thuộc.
    - Tạo biến lưu Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
    - Thu nhập chịu thuế 
        - 0 -> 60tr: 
            tnct * 0.05
        - 60tr -> 120tr: 
            60tr * 0.05 + (tnct - 60tr) * 0.1
        - 120tr -> 210tr : 
            60tr * 0.05 + 60tr * 0.1 + (tnct-120tr) * 0.15
        - 210tr -> 384tr : 
            60tr * 0.05 + 60tr * 0.1 + 90tr * 0.15 + (tnct - 210tr) * 0.2
        - 384tr -> 624tr : 
            60tr * 0.05 + 60tr * 0.1 + 90tr * 0.15 + 174tr * 0.2 + (tnct - 384tr) * 0.25
        - 624tr -> 960tr : 
            60tr * 0.05 + 60tr * 0.1 + 90tr * 0.15 + 174tr * 0.2 + 240tr * 0.25 + (tnct - 624tr) * 0.3
        - Còn lại : 
            60tr * 0.05 + 60tr * 0.1 + 90tr * 0.15 + 174tr * 0.2 + 240tr * 0.25 + 336tr * 0.3 + (tnct - 960tr) * 0.35
OUTPUT
    - In thông tin và số tiền điện
*/
document.getElementById("btnResult3").onclick = function () {
    let fullName = document.getElementById("fullName").value;
    let totalSalary = +document.getElementById("totalSalary").value;
    let numberUser = +document.getElementById("numberUser").value;
    let incomeTaxes = totalSalary - 4e6 - numberUser * 16e5;
    let personalIncome = 0;
    let txtResult3 = document.getElementById("txtResult3");

    if (incomeTaxes <= 0) {
        alert("nhập giá trị sai");
    } else {
        if (incomeTaxes <= 6e7) {
            personalIncome = incomeTaxes * 0.05;
        }
        else if (incomeTaxes <= 12e7) {
            personalIncome = 6e7 * 0.05 + (incomeTaxes - 6e7) * 0.1
        }
        else if (incomeTaxes <= 21e7) {
            personalIncome = 6e7 * 0.05 + 6e7 * 0.1 + (incomeTaxes - 12e7) * 0.15
        }
        else if (incomeTaxes <= 384e6) {
            personalIncome = 6e7 * 0.05 + 6e7 * 0.1 + 9e7 * 0.15 + (incomeTaxes - 21e7) * 0.2
        }
        else if (incomeTaxes <= 624e6) {
            personalIncome = 6e7 * 0.05 + 6e7 * 0.1 + 9e7 * 0.15 + 174e6 * 0.2 + (incomeTaxes - 384e6) * 0.25
        }
        else if (incomeTaxes <= 96e7) {
            personalIncome = 6e7 * 0.05 + 6e7 * 0.1 + 9e7 * 0.15 + 174e6 * 0.2 + 24e7 * 0.25 + (incomeTaxes - 624e6) * 0.3
        }
        else {
            personalIncome = 6e7 * 0.05 + 6e7 * 0.1 + 9e7 * 0.15 + 174e6 * 0.2 + 24e7 * 0.25 + 336e6 * 0.3 + (incomeTaxes - 96e7) * 0.35
        }
        txtResult3.innerHTML = "Họ tên:" + fullName + "Tiền thuế thu nhập cá nhân: " + personalIncome.toLocaleString();
    }

}

// ===================================================
/*
Bài 4: Tính tiền cáp
INPUT:
    - Mã khách hàng, loại khách hàng, số kết nối, số kênh
cao cấp.
HANDLE:
    - Tạo biến lưu Mã khách hàng, loại khách hàng, số kết nối, số kênh cao cấp, tiền cáp
    - if (people)       
        tiền cáp = 4.5 + 20.5 + 7.5 * số kết nối;
    - else 
        số kết nối <= 10 : tiền cáp = 15 + 75 + 50*số kênh cao cấp;
        còn lại: tiền cáp = 15 + 75 + 50*số kênh cao cấp + (số kết nối-10) * 5;
OUTPUT
    - In thông tin và số tiền cáp
*/
document.getElementById("btnResult4").onclick = function () {
    let selCustomer = document.getElementById("selCustomer").value;
    let codeCustomer = document.getElementById("codeCustomer").value;
    let numberChanel = document.getElementById("numberChanel").value;
    let numberConnect = document.getElementById("numberConnect").value;
    let cableMoney = 0;
    let txtResult4 = document.getElementById("txtResult4");


    if (selCustomer == "people") {
        cableMoney = 4.5 + 20.5 + 7.5 * numberChanel;
        txtResult4.innerHTML = "Mã khách hàng: " + codeCustomer + " Tiền cáp: $" + cableMoney
    }
    else if(selCustomer == "enterprise") {
        if (numberConnect <= 10) {
            cableMoney = 15 + 75 + 50 * numberChanel;
            txtResult4.innerHTML = "Mã khách hàng: " + codeCustomer + " Tiền cáp: $" + cableMoney
        }
        else {
            cableMoney = 15 + 75 + 50 * numberChanel + (numberConnect - 10) * 5;
            txtResult4.innerHTML = "Mã khách hàng: " + codeCustomer + " Tiền cáp: $" + cableMoney
        }
    }
    else {
        alert("chọn khách hàng")
    }

}