<!-- Header -->

# Django, React를 활용하여 게시글 CRUD기능 구현, AWS에 배포해보기

<!-- Body -->

## 프로젝트 목적

- 프론트엔드와 백엔드를 나누어 프로젝트 만들기
- REST API 기준을 지켜 자원을 명시하기
- 게시글 CRUD 구현
- AWS에 배포해보기
  - EC2에 Django 서버 설정
  - RDS를 활용하여 MySQL 설정
  - S3에 Django static, media 저장
  - CloudFront, S3를 이용하여 리액트 배포
  - 프론트와 백 연결하기(구현중)

---

## 개발환경

> O/S

- Mac M1

> 에디터

- Visual Studio Code

> Front-End

- node 16.13.0
- react 16.8.0
- antd 4.16.13
- bootstrap 5.1.3

> Back-End

- Python 3.9.7
- Django 3.2.9
- djangorestframework 3.13.1
- mysql 8.0.27
