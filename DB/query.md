## 목적

> 데이터베이스 초기화 대비 참고용

<br>

```sql
  CREATE DATABASE thigns_flow;

  USE things_flow;

  CREATE table characters (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,

    PRIMARY KEY (id)
  );

  INSERT INTO characters (name, description) VALUES ("풀리피", "풀리피 캐릭터 내용");

  CREATE table skills (
    id INT(11) NOT NULL AUTO_INCREMENT,
    character_id INT(11) NOT NULL,
    name VARCHAR(255) NOT NULL,
    greetings VARCHAR(255) NOT NULL,
    price INT(11) NOT NULL,

    PRIMARY KEY(id),
    CONSTRAINT skills_fk1 FOREIGN KEY (character_id) REFERENCES characters (id) ON UPDATE CASCADE ON DELETE CASCADE
  );

  INSERT INTO characters (character_id, name, greetings, price) VALUES (1, "오늘의 운세", "오늘은 아무개의 운세가 어떨지", 0);

  CREATE table tarot_cards (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,

    PRIMARY KEY(id),
  );
```

```sql
  CREATE DATABASE bejewel;

  USE bejewel;

  CREATE TABLE brands (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,

    PRIMARY KEY (id)
  );

  INSERT INTO brands
  (name)
  VALUES
  ("브릴피스"),
  ("레끌라"),
  ("퓨어블랙 스튜디오"),
  ("핀리"),
  ("앙스모멍"),
  ("마마카사르"),
  ("애"),
  ("미드나잇모먼트"),
  ("헤이"),
  ("앵브록스");

  CREATE TABLE product_category_list (
    id INT(11) NOT NULL AUTO_INCREMENT,
    category VARCHAR(255) NOT NULL,

    PRIMARY KEY (id)
  );

  INSERT INTO product_category_list
  (name)
  VALUES
  ("반지"),
  ("목걸이"),
  ("귀걸이"),
  ("이어커프"),
  ("팔찌"),
  ("향수"),
  ("헤어"),
  ("타임피스"),
  ("팬던트"),
  ("ACC"),
  ("DIGITAL"),
  ("Men's"),
  ("For Couples"),
  ("LUXURY/GLOBAL");

  CREATE TABLE products (
    id INT(11) NOT NULL AUTO_INCREMENT,
    brand_id INT(11) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price INT(11) NOT NULL,
    shipping_fee INT(11) DEFAULT 0 NOT NULL,
    discount_rate INT(11) DEFAULT 0 NOT NULL,

    PRIMARY KEY(id),
    CONSTRAINT products_fk1 FOREIGN KEY (brand_id) REFERENCES brands (id) ON UPDATE CASCADE ON DELETE CASCADE
  );

  CREATE TABLE product_categories (
    id INT(11) NOT NULL AUTO_INCREMENT,
    product_id INT(11) NOT NULL,
    product_category_list_id INT(11) NOT NULL,

    PRIMARY KEY(id),
    CONSTRAINT product_categories_fk1 FOREIGN KEY (product_id) REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT product_categories_fk2 FOREIGN KEY (product_category_list_id) REFERENCES product_category_list (id) ON UPDATE CASCADE ON DELETE CASCADE
  );

  CREATE TABLE product_more_informations (
    id INT(11) NOT NULL AUTO_INCREMNET,
    product_id INT(11) NOT NULL,
    material VARCHAR(255),
    color VARCHAR(255),
    patten VARCHAR(255),
    shape VARCHAR(255),
    size VARCHAR(255),
    weight VARCHAR(255),

    PRIMARY KEY(id),
    CONSTRAINT product_more_informations_fk1 FOREIGN KEY (product_id) REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE
  );

  CREATE TABLE product_options (
    id INT(11) NOT NULL AUTO_INCREMENT,
    product_id INT(11) NOT NULL,
    option VARCHAR(255) NOT NULL,
    add_price INT(11) NOT NULL DEFAULT 0,

    PRIMARY KEY(id),
    CONSTRAINT product_options_fk1 FOREIGN KEY (product_id) REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE
  )

  CREATE TABLE product_images (
    id INT(11) NOT NULL AUTO_INCREMENT,
    product_id INT(11) NOT NULL,
    path VARCHAR(255) NOT NULL,

    PRIMARY KEY(id),
    CONSTRAINT product_images_fk1 FOREIGN KEY (product_id) REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE
  );
```
