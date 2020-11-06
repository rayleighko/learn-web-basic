# 2. Web Back end with AWS EC2

- AWS CLI
- [AWS EC2](https://aws.amazon.com/ko/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc)

## 사전 준비물

- 콘솔 혹은 CLI로 생성된 EC2
- 생성된 EC2에서 발급받은 pem key

## scripts

현재 프로젝트에서 스크립트를 사용해 쉽게 배포하기 위한 환경을 구성한다(sh, go 등을 사용할 수 있지만 간단한 예제이기 때문에 package.json을 사용해 스크립트 제공)

```bash
$ yarn init -y
```

```json

{
  "name": "web-back-end_ec2",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```
## create security group

다음과 같이 scripts에 보안 그룹을 생성해준다.  

```json
"scripts":{ 
    "create_sec_group": "aws ec2 --profile=learningaws create-security-group --group-name Learning-AWS-Security-Group --description "CodeDeploy Example for Learn to AWS"
}
```

다음과 같이 scripts에 보안 그룹에 허용할 포트를 등록해준다.  

- 22: ssh 관련  
- 80: http 관련  
- 3000: express 관련(향후 nginx 등으로 80 포트로 리디렉션 시킬 수 있음. 생략 가능)  

```json
"scripts": {
    "authorize_sec_group:22":"aws ec2 --profile=learningaws authorize-security-group-ingress --group-name Learning-AWS-Security-Group --to-port 22 --ip-protocol tcp --cidr-ip 0.0.0.0/0 --from-port 22",
    "authorize_sec_group:80":"aws ec2 --profile=learningaws authorize-security-group-ingress --group-name Learning-AWS-Security-Group --to-port 80 --ip-protocol tcp --cidr-ip 0.0.0.0/0 --from-port 80",
    "authorize_sec_group:3000":"aws ec2 --profile=learningaws authorize-security-group-ingress --group-name Learning-AWS-Security-Group --to-port 3000 --ip-protocol tcp --cidr-ip 0.0.0.0/0 --from-port 3000"
}
```

## pem key를 활용해 EC2 실행하기(설명만 하고 넘어가기)

"scripts" :{
    "run-instance": "aws ec2 run-instances --image-id !!!! --key-name @@@@@ --count ##### --instance-type $$$$$$ --iam-instance-profile Name=&&&& --security-groups Learning-AWS-Security-Group"
}

[참고할 자료](https://docs.aws.amazon.com/ko_kr/codedeploy/latest/userguide/instances-ec2-create.html)

## 웹 브라우저를 활용해 EC2 실행하기

-- 같이 진행

수동으로 git을 설치하고, 받아와서 실행 -> http만을 이용해 API에 접근하기