# Hello

## This is a Calculator

![302191124_457697656432415_8887550066228891048_n](https://user-images.githubusercontent.com/54329318/198949135-db579fd8-30d2-4278-aab8-44d85b2444eb.png)

![312258082_653076366326316_4231111014023765938_n](https://user-images.githubusercontent.com/54329318/198949159-914cf967-9307-44cc-8d90-42e3722a479f.png)


### Tools
- React Native Expo
- Typescript

# THÔNG TIN NHÓM N04

Lương Phạm Bảo - 19521242

Phạm Ngọc Dương - 19521412

Nguyễn Gia Thống - 19520993

-----


# Hướng dẫn cài đặt

## Tải code về máy

- Dùng git clone

  - B1: Tạo một thư mục (vd : CS526)
  - B2: Mở terminal và cd đến thư mục vừa tạo
  - B3: chạy lệnh sau:
    > git clone https://github.com/pnd280/super-duper-simple-calculator.git


## Chạy expo với docker

- B1: Bật terminal
- B2: Chạy lệnh sau:

  - `node` là tên image
  - `calculator` là tên container
  - `(dd*)` là đường dẫn thư mục chứa project của bạn

```powershell
docker run -u node -it --rm --name calculator -p 19000-19010:19000-19010 -v (dd\*):/current -w /current node:16-slim bash
```

- B3: cd vào thư mục Calculator
- B4: Chạy lệnh:

```powershell
npm install
```

- B5: Chạy lệnh:

```powershell
npm start
```
### Want to run this project?
At the root folder run:
```
expo start
```
- B6: Tải app expo go trên điện thoại
- B7: Mở app expo go trên điện thoại
- B8: Tại mục Enter URL manually nhập:

  - Với ip là ip địa chỉ ip của máy tính
    > exp://ip:19000

- B9: Connect và sử dụng ứng dụng
