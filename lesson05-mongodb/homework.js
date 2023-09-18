// Viết các query trong mongoDB để có thể lấy các nhà hàng thoả mãn các điều kiện sau:

// 1. Truy vấn tất cả những nhà hàng
'db.restaurants.find()';

// 2. Truy vấn tất cả các nhà hàng có zipcode là 11209
"db.restaurants.find({'address.zipcode':'11209' })";

// 3. Truy vấn tất cả những nhà hàng chuyên về ẩm thực Mỹ
'db.restaurants.find({cuisine:"American"})';

// 4. Truy vấn tất cả các nhà hàng nằm ở quận Brooklyn
'db.restaurants.find({borough: "Brooklyn"})';

// 5. Truy vấn tất cả các nhà hàng nằm ở quận Manhattan
'db.restaurants.find({borough: "Manhattan"})';

// 6. Truy vấn tất cả nhà hàng về gà ở quận Manhattan
'db.restaurants.find({borough: "Manhattan"})';

// 7. Truy vấn tất cả nhà hàng nằm ở trên phố Wall Street
'db.restaurants.find({"address.street": "Wall Street"})';

// 8. Truy vấn tất cả những nhà hàng có trên 3 đánh giá
'db.restaurants.find({ "grades.2": { $exists: true } })';

// 9. Truy vấn tất cả những nhà hàng có đánh giá với số điểm loại B
'db.restaurants.find({ "grades.grade": "B" })';

// 10. Truy vấn tất cả những nhà hàng có đánh giá với số điểm trên 10
'db.restaurants.find({ "grades.score": { $gt: 10 } })';
