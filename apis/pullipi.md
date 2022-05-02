## 목적

> 풀리피 스킬의 오늘의 운세 API 구현

## 구현기능

- [ ] 인사말과 타로카드 리스트 조회
- [ ] 타로카드 상세조회

<br>

### 💡 API 명세서

> 1. 오늘의 운세 인사말과 타로카드 리스트 조회
>    타로카드 리스트는 저장된 타로카드 중 5개를 랜덤하게 추출

- Request

**URL : /api/pullipi/:skillId** ex)`/api/pullipi/1`<br>
**Method : GET** <br>
**Headers :** "Content-type" : "application/json; charset=utf-8"

**skillMap**

```json
  1: 오늘의 운세
```

<br>
<br>

- Response

**Status**

> **성공 :** 200(OK)
> **실패 :** 404(Not Found), 500(Internal Server Error)

**Content-type :** application/json; charset=utf-8

- 성공

```js
{
  success: Boolean, //성공 여부
  msg: String, //메시지
  status: Number, //응답에 대한 상태코드
  greetings: String, //인사말
  tarotCards: Array[Number] //타로카드 리스트
}
```

- 예시

```js
{
  "success": true,
  "clientMsg": "타로카드 조회",
  "status": 200,
  "greetings": "오늘은 아무개의 운세가 어떨지",
  "tarotCards": [7, 4 ,13 ,15 ,3]
}
```

<br>
<br>

- 실패

```js
{
  success: Boolean,
  msg: String,
  status: Number
}
```

- 예시

```js (존재하지 않는 스킬 번호로 요청 할 경우)
  "success": false,
  "msg": '해당 스킬은 존재하지 않습니다.',
  "status": 404
```

```js (예상하지 못한 오류로 서버에러가 난 경우)
  "success": false,
  "msg": '서버 에러입니다. 서버 개발자에게 문의해주세요.',
  "status": 500
```

<br>
<br>

> 2. 타로카드 상세조회

- Request

**URL : /api/pullipi/:skillId/:tarotCardId** ex)`/api/pullipi/1/1`<br>
**Method : GET** <br>
**Headers :** "Content-type" : "application/json; charset=utf-8"

**skillMap**

```json
  1: 오늘의 운세
```

<br>
<br>

- Response

**Status**

> **성공 :** 200(OK)
> **실패 :** 404(Not Found), 500(Internal Server Error)

**Content-type :** application/json; charset=utf-8

- 성공

```js
{
  success: Boolean, //성공 여부
  msg: String, //메시지
  status: Number, //응답에 대한 상태코드
  tarotCard: {
    name: String, //타로카드의 이름
    description: String, //타로카드의 해설
    imageUrl: String //타로카드의 이미지 조회 경로(해당 url로 요청을 보내면 됨)
  }
}
```

- 예시

```js
{
  "success": true,
  "clientMsg": "타로카드 상세정보 조회",
  "status": 200,
  "tarotCard": {
    "name": "THE CHARIOT",
    "description": "THE CHARIOT 해석",
    "imageUrl": "http://localhost:3000/public/images/tarot-card/chariot-6016921__340.jpg"
  }
}
```

<br>
<br>

- 실패

```js
{
  success: Boolean,
  msg: String,
  status: Number
}
```

- 예시

```js (존재하지 않는 스킬 번호로 요청 할 경우)
  "success": false,
  "msg": '해당 스킬은 존재하지 않습니다.',
  "status": 404
```

```js (존재하지 않는 타로카드 번호로 요청 할 경우)
  "success": false,
  "msg": '해당 타로카드는 존재하지 않습니다.',
  "status": 404
```

```js (예상하지 못한 오류로 서버에러가 난 경우)
  "success": false,
  "msg": '서버 에러입니다. 서버 개발자에게 문의해주세요.',
  "status": 500
```

<br>
<br>
