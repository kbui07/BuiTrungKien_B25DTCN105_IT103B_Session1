let bookName = prompt("Nhap ten sach");
let bookIndex = Number(prompt("Nhap so thu tu cua sach"));
let normalizedBookName = bookName.trim().toUpperCase();
let bookCode = "LIB- " + normalizedBookName + " - " + bookIndex;
console.log("Ten sach goc: " + bookName);
console.log("Ma sach sau chuan hoa: " + bookCode);