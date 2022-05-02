## 목적

> static 파일 조회

## 구현기능

- [ ] 타로카드의 이미지 조회

<br>

### 💡 API 명세서

> 1. 타로카드의 이미지 조회
>    클라이언트에게 이미지가 캐싱 되있는 경우 캐시 데이터 사용

- Request

**URL : /public/images/tarot-card/:imageFileName** ex)`/public/images/tarot-card/chariot-6016921__340.jpg`<br>
**Method : GET** <br>

<br>
<br>

- Response

**Status**

> **성공 :** 200(OK), 304(Not Modified)
> **실패 :** 실패는 가정하지 않음

**Content-type :** application/json; charset=utf-8

- 성공

```js
{
  타로카드의 이미지
}
```

- 예시

![image](https://user-images.githubusercontent.com/46591459/166176658-3d14592f-7b8c-411b-bfdd-e61fdf32b37a.png)

<br>
<br>
