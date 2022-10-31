# Hello

## This is a Calculator

![Simulator Screen Shot - iPhone 13 - 2022-02-24 at 02 25 17](https://user-images.githubusercontent.com/43630417/155477881-5bd39925-55c3-4e22-9966-9ebc0976a863.png)
![Simulator Screen Shot - iPhone 13 - 2022-02-24 at 02 28 36](https://user-images.githubusercontent.com/43630417/155478260-05e30110-3144-4e99-8690-048bc8a00c8f.png)

### Features
- Dark mode
- Beautiful UI
- Minimalistic

### Tools
- React Native Expo
- Typescript

# THÔNG TIN NHÓM 

-Lương Phạm Bảo-19521242

-Phạm Ngọc Dương-19521412

-Nguyễn Gia Thống-19520993

-----


# Hướng dẫn cài đặt

## Tải code về máy

- Dùng git clone

  - B1: Tạo một thư mục (vd : CS526)
  - B2: Mở terminal và cd đến thư mục vừa tạo
  - B3: chạy lệnh sau:
    > git clone https://github.com/19521242bao/CS526/
  - B4: cd vào thư mục BT_Calculator

    <!-- ![](image_readme\1.png) -->

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
### Want to clone this project?
At the root folder run:
```
expo start
```
