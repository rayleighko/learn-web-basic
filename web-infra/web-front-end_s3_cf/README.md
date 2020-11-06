# 웹 인프라 구축

- AWS CLI
- AWS S3(static web page use http)
- AWS Cloud Front(for https)

## 사전 준비물

- 콘솔 혹은 CLI로 생성된 s3 버킷
- 콘솔 혹은 CLI로 생성된 cloudfront

## build front-end project

사전에 개발했던 웹 프로젝트를 webpack과 같은 번들러를 사용해 빌드하고, 그 결과물을 현재 디렉터리에 옮겨온다.

```bash
// learn-web-basic/web-front-end/result
$ yarn
$ yarn build
$ mv dist ../../web-infra/web-front-end_s3_cf/
```

## deploy to s3(with static hosting)

현재 프로젝트에서 스크립트를 사용해 쉽게 배포하기 위한 환경을 구성한다(sh, go 등을 사용할 수 있지만 간단한 예제이기 때문에 package.json을 사용해 스크립트 제공)

```bash
$ yarn init -y
```

이후 package.json을 다음과 같이 수정한다.

```json
{
  "name": "web-front-end_s3_cf",
  "version": "1.0.0",
  "scripts": {
      "deploy": "aws s3 sync ./dist s3://*** --profile=learningaws",
    }
  "main": "index.js",
  "license": "MIT"
}
```

사전에 만들어둔 S3 버킷의 이름을 *** 위치에 넣어 deploy를 실행한다.

```bash
$ yarn deploy
```

* deploy는 생성된 s3 버킷 중 '***'이라는 이름의 버킷에 빌드된 디렉터리(./dist)를 전달한다.
* 버킷 생성 시 버킷 이름은 세계에서 유일(중복 x)해야 한다.

## connect with cloudfront(for https)

이후 package.json을 다음과 같이 수정한다.

```json
{
  "name": "web-front-end_s3_cf",
  "version": "1.0.0",
  "scripts": {
      "deploy": "aws s3 sync ./dist s3://*** --profile=learningaws",
      "invalidate": "aws cloudfront create-invalidation --profile=learningaws --distribution-id *** --paths / /index.html /error.html /service-worker.js /manifest.json /favicon.ico"
  }
  "main": "index.js",
  "license": "MIT"
}
```

* invalidate는 '***'이라는 distribution id에 해당하는cloudfront를 찾아 기존 캐시를 지우는 작업(최신화)을 진행한다.

사전에 만들어둔 Cloudfront의 distribution-id를 *** 위치에 넣어 invalidate를 실행한다.

```bash
$ yarn invalidates
```
