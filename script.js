// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

{
  const getStringHasMaxLength = (arr) => {
    if (arr.length === 0) {
      return 0;
    }

    const lengthArr = arr.map((ele) => ele.length);
    maxLength = Math.max(...lengthArr);
    const resultArr = arr.filter((ele) => ele.length === maxLength);
    return resultArr;
  };

  console.log(getStringHasMaxLength(["aba", "aa", "ad", "c", "vcd"]));
}

// Bài 2. Cho mảng users như sau:
users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true,
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false,
  },
  {
    name: "Phạm Văn Dũng",
    age: 20,
    isStatus: false,
  },
];

{
  // Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
  const getUserOver25 = (arr) => {
    return arr.filter((user) => user.age > 25 && user.isStatus == true);
  };

  console.log(getUserOver25(users));
}

{
  // Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
  const getUserSortingByAge = (arr) => {
    return arr.sort((user1, user2) => {
      if (user1.age > user2.age) {
        return 1;
      } else if (user1.age < user2.age) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  console.log(getUserSortingByAge(users));
}

// Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
{
  const getCountElement = (arr) => {
    const countObject = {};
    arr.forEach((ele) => (countObject[ele] = (countObject[ele] || 0) + 1));
    return countObject;
  };

  console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));
}
