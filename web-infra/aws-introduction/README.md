# 1. AWS 소개
  
## Cloud Computing System  
  
클라우드라고 불리는 클라우드 컴퓨팅 시스템은 2020년 몇 해 전부터 IT업계에서 가장 큰 화두가 된 주제라고 해도 과언이 아니다. 그러니 지금이라도 늦었지만, 클라우드 컴퓨팅이란 무엇인지 학습하도록 하자.  
  
보편적으로 전통적인(Classic) 개발 환경에서는 물리적인 기계 장치를 보유하는 것은 필수적인 조건이었다. 그래서 간단한 웹 서비스를 개발한다고 해도 그것을 배포할 기계 장치가 없다면 무용지물이었다. 그래서 많은 학생들은 자신의 랩탑 혹은 데스크톱을 서버로 삼거나 filezilla와 같은 FTP 서비스를 사용해 배포했다(그래서 규모가 있는 회사들은 아직도 데이터센터라는 이름으로 자체 기계 장치를 보유하고 있다).  
  
하지만 IT업계의 특성상 복잡한 구조를 단순화하기 좋아했고, 전통적인 개발 환경에 불편을 느낀 소비자(개발자, 교수, IT 회사 등)에 의해 개인이 물리적으로 기계 장치를 보유하지 않아도 되도록 하는 움직임이 시작됐다. 단말 기계 장치와 다른 단말 기계 장치를 표현할 때 중간 장치들을 제외하고 구름 모양을 그려 표현하곤 했는데, 그것이 클라우드 컴퓨팅의 아이디어이자 현재까지도 이어져오는 클라우드 컴퓨팅의 목표라고 할 수 있다.  
  
물론 기술적인 관점으로 볼 때 클라우드 컴퓨팅이라는 이름이 세련되어 보이긴 하지만, 그 근본에는 그리드 컴퓨팅, 유틸리티 컴퓨팅, 서버 기반 컴퓨팅, 네트워크 컴퓨팅, 분산 시스템 등의 고전적인 기술이 엮여 구현된 형태라는 것을 기억하자.  
  
클라우드 컴퓨팅 시스템이 서비스되는 형태는 크게 3가지 형태로 구분할 수 있다.  

![cc-image](https://wnsgml972.github.io/assets/images/network/1/1.png)  

1. IaaS(Infrastructure as a Service): Infrastructure 영역을 클라우드 컴퓨팅 형태로 제공한다. VM과의 차이점은 VM은 기계 장치를 소비자가 직접 준비하고, 이미지를 가상 공간에 올리는 반면 IaaS는 제공사가 준비한 기계 장치 및 OS를 선택해 서비스를 제공받는다. ex) AWS EC2  
2. PaaS(Platform as a Service): 개발자가 응용 프로그램(Application)을 작성할 수 있도록 플랫폼 및 환경을 제공한다. 사용자는 OS, Server의 하드웨어 등을 고려할 필요 없이 전달받은 플랫폼에 자신의 응용 프로그램을 배포해 사용할 수 있다. ex) AWS Elastic Beanstalk, AWS Lambda  
3. SaaS(Software as a Service): 설치할 필요가 없는 형태로 클라우드를 통해 제공되는 소프트웨어를 말한다. ex) AWS S3, 네이버 클라우드, MS 오피스 365  

* 위 그림에서 가장 왼쪽에 있는 Packaged Software의 경우에는 소비자가 직접 인프라와 플랫폼, 어플리케이션 영역까지 관리하는 시스템을 의미한다(물리적인 장치를 모두 구입하고, OS등의 소프트웨어를 직접 구매해 설치해야 한다).  

위 셋을 구분할 때는 그 복잡성을 이해하기보다 다음의 그림을 이해하는 편이 쉽다.  

![cc-image-2](https://wnsgml972.github.io/assets/images/network/1/0.png)

1. IaaS는 Host를 중심으로 소비자의 선택에 따라 다양한 기계 장치를 제공해주는 역할(host)을 한다.    
2. PaaS는 하나의 플랫폼을 제공해 그 플랫폼 위에 소비자가 구축(build)한 응용 프로그램을 실행한다.  
3. SaaS는 하나의 서비스를 별도의 설치 과정없이 제공받아 소비(consume)한다. 

## IAM(Identity and Access Management)

IAM은 AWS에서 사용하는 자격 및 각 서비스에 대한 엑세스를 관리할 수 있게 해주는 도구이다. 계정 별 사용자를 생성하거나 사용자 별 권한을 부여하고, 보안을 통해 AWS를 안전하게 관리할 수 있도록 하는 역할을 한다.

## EC2(Elastic Compute Cloud)

EC2는 IaaS로, 개발자가 더 쉽게 클라우드 컴퓨팅 작업을 수행할 수 있게 도와준다. 간단한 웹 서비스 인터페이스를 통해 AWS 콘솔에서 간편하게 운영에 필요한 컴퓨팅 자원을 얻어 사용할 수 있다.

## RDS(Relational Database Service)

RDS는 IaaS로, 개발자가 관계형 데이터베이스를 간편하게 설정, 운영 및 확장할 수 있도록 도와준다. 간단한 웹 서비스 인터페이스를 통해 AWS 콘솔에서 간편하게 데이터베이스 컴퓨팅 자원을 얻어 사용할 수 있다. RDB만을 관리할 수 있기 때문에 NoSQL의 다른 DBMS는 다른 서비스를 사용해야 한다.

## S3(Simple Storage Service)

S3는 SaaS의 한 형태로, 파일 등을 저장할 수 있는 스토리지를 클라우드 형태로 제공한다. 다양한 데이터를 저장할 수 있어 데이터 레이크, 웹 사이트, 모바일 애플리케이션, 백업 및 복원 등에 사용된다.

## CloudFront

CloudFront는 AWS에서 제공하는 고속 콘텐츠 전송 네트워크(CDN) 서비스이다. 다양한 AWS 서비스들과 연동되어 최종 소비자에게 데이터, 동영상, 애플리케이션 및 API를 제공하도록 도와준다.

## AWS CLI

AWS의 서비스를 CLI(Command Line Interface)로 사용하기 위한 도구. 

# AWS CLI 실습

- [AWS CLI](https://aws.amazon.com/ko/cli/)

## Install AWS CLI v2

[AWS CLI v2 - 설치 가이드](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/install-cliv2.html)를 참고해 터미널에서 aws cli를 사용할 수 있는 환경을 구성합니다. 구성이 완료된 후에는 제대로 실행되는지 다음 명령어를 통해 확인합니다.

```bash
$ aws --version
aws-cli/2.0.56 Python/3.7.7 Windows/10 exe/AMD64
```

## Configure AWS Credentials

```bash
$ aws configure --profile=learning
AWS Access Key ID [None]: ***
AWS Secret Access Key [None]: *** 
Default region name [None]: ap-northeast-2
Default output format [None]: json
```

1. cat ~/.aws/credentials을 통해 작성된 aws credentials를 확인해보자.  

* 프로필 옵션을 설정하지 않으면, 기본(default)으로 aws 계정이 설정되어 자칫 잘못 사용할 수 있다.  