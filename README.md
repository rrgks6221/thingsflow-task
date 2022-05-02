# thingsflow dev task

### 구현 기능

- 풀리피의 오늘의 운세 인사말과 타로카드 리스트 조회
- 타로카드 정보 상세조회
- 타로카드 이미지 조회

<br>

### 언어 및 프레임워크

> 언어: Node.js 16.14.2 ver, npm 8.5.0 ver
> 프레임워크: Express.js 4.18.0 ver
> 테스트 프레임워크 Jest 28.0.2 ver

### 환경변수

> 환경변수는 노출되면 안되는 내용이 있기에 올리지 않고 메일을 통해 회신

<br>

### 데이터베이스

> 데이터베이스는 AWS RDS MySQL 8.28 버전을 사용

<br>

### ERD

![image](https://user-images.githubusercontent.com/46591459/166177048-2c0e7f82-2ce9-4377-8de9-f37851c52f4c.png)

<br>

### 서버 실행 방법

> 1. git clone https://github.com/rrgks6221/thingsflow-task
> 2. thingsflow-task/app 경로에 메일로 회신한 .env
> 3. thingsflow-task/app 경로에서 npm i
> 4. thingsflow-task/app 경로에서 npm start (개발 단계에선 npm run dev 명령으로 하는것이 일반적이나 개발의 편의성을 위해 npm start로 처리함)

<br>

### API 명세

> 각 기능에 대한 명세서는 thingsflow-task/apis의 md 파일로 정리

<br>

### git flow

> feature => master
> 기능 브랜치를 만든 뒤 해당 브랜치에서 작업한 뒤 기능에 대한 구현이 끝나면 master 브랜치로 pull request를 보내 merge

<br>

### git commit

> Add: 특정 기능을 하는 코드를 구현 하였을 때
> Modify: 이미 구현된 기능을 수정하는데, 기능의 향상이나 수정이 이루어졌을 때
> Close: 일반적인 개발 이슈를 완료 했을 때
> Refactor: 리펙토링을 했을 때(기능 향상이 아닌 코드 리펙토링)
> Delete: 필요없는 코드를 삭제 했을 때
