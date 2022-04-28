## 목적

> 데이터베이스 초기화 대비 참고용

<br>

```sql
  CREATE DATABASE things_flow;

  USE things_flow;

  CREATE table characters (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,

    PRIMARY KEY (id)
  );

  INSERT INTO characters (name, description) VALUES ("풀리피", "풀리피 캐릭터 내용");

  CREATE table skills (
    id INT NOT NULL AUTO_INCREMENT,
    character_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    greetings VARCHAR(255) NOT NULL,
    price INT NOT NULL,

    PRIMARY KEY(id),
    CONSTRAINT skills_fk1 FOREIGN KEY (character_id) REFERENCES characters (id) ON UPDATE CASCADE ON DELETE CASCADE
  );

  INSERT INTO skills (character_id, name, greetings, price) VALUES (1, "오늘의 운세", "오늘은 아무개의 운세가 어떨지", 0);

  CREATE table tarot_cards (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,

    PRIMARY KEY(id)
  );

  INSERT INTO tarot_cards
  (name, description, image_url)
  VALUES
  ("THE CHARIOT", "THE CHARIOT 해석", "http://localhost:3000/static/image/tarot-card/chariot-6016921__340.jpg"),
  ("THE EMPRESS", "THE EMPRESS 해석", "http://localhost:3000/static/image/tarot-card/empress-6016923__340.jpg"),
  ("THE HIEROPHANT", "THE HIEROPHANT 해석", "http://localhost:3000/static/image/tarot-card/hierophant-6016942__340.jpg"),
  ("KING OF CUPS", "KING OF CUPS 해석", "http://localhost:3000/static/image/tarot-card/king-of-cups-6686829__340.jpg"),
  ("KNIGHT OF CUPS", "KNIGHT OF CUPS 해석", "http://localhost:3000/static/image/tarot-card/knight-of-cups-6686830__340.jpg"),
  ("PAGE OF CUPS", "PAGE OF CUPS 해석", "http://localhost:3000/static/image/tarot-card/page-of-cups-6686831__340.jpg"),
  ("WHEEL OF FORTUNE", "WHEEL OF FORTUNE 해석", "http://localhost:3000/static/image/tarot-card/tarot-6249967__340.jpg"),
  ("THE STAR", "THE STAR 해석", "http://localhost:3000/static/image/tarot-card/tarot-6249976__340.jpg"),
  ("THE SUN", "THE SUN 해석", "http://localhost:3000/static/image/tarot-card/tarot-6249979__340.jpg"),
  ("THE LOVERS", "THE LOVERS 해석", "http://localhost:3000/static/image/tarot-card/tarot-cards-6103697__340.jpg"),
  ("THE MOON", "THE MOON 해석", "http://localhost:3000/static/image/tarot-card/tarot-cards-6103698__340.jpg"),
  ("THE SUN", "THE SUN 해석", "http://localhost:3000/static/image/tarot-card/tarot-cards-6103700__340.jpg"),
  ("TEMPERANCE", "TEMPERANCE 해석", "http://localhost:3000/static/image/tarot-card/temperance-6016917__340.jpg"),
  ("THREE OF CUPS", "THREE OF CUPS 해석", "http://localhost:3000/static/image/tarot-card/three-of-cups-6686834__340.jpg"),
  ("TWO OF CUPS", "TWO OF CUPS 해석", "http://localhost:3000/static/image/tarot-card/two-of-cups-6686833__340.jpg");
```
