### REST_API TASK


## http://mdp-restapi-task.herokuapp.com

Kullandığım Teknoloji ve araçlar: 
- NodeJS
- ExpressJS
- MongoDB(Database için)
- Joi (validation işlemleri için)

## Tablolar : 

- User
- Order 
- Product


Örnek Response : 

```json

{
    "name": "Abdullah",
    "surname": "Oğuz",
    "orders": [
        "_id": "5fbcfe7e1a0232f08c0d2292",
        "date": "2020-11-24T12:37:08.673Z",
        "product": [
            "_id": "5fb3f82d83c232bd7a9c25c5",
            "count": 2,
        ]
    ]
    
}

```


## Routeler: 

##### GET

` "/user" : tüm kullanıcı bilgilerine ulaşılabilir`
`"/:userId" : id ye göre kullanıcı sorgulama`
 

`"/product" :   tüm ürün bilgilerine ulaşılabilir`
`"user/search/:productId" : id ye göre ürün sorgulama`  

`"/order" :   tüm ürün bilgilerine ulaşılabilir`
`"order/search/:orderId" : id ye göre sipariş sorgulama`
`order/day/:dayNumber : verilen gün sayısına ve toplam counta göre sıralama yapar.`




#### POST :

` "/user" : aşağıdaki yapı ile user tablosuna veri eklenebilir`
```json
{
"name" : "İsim",
"surname" : "soyisim",
"orders" : [],
}
``` 

` "/order" : aşağıdaki yapı ile order tablosuna veri eklenebilir`
```json

"user_id" :"user tablosundaki id"
"product"  :[
 {
     "_id": "product tablosundaki id",
     "count" : 2 (vermek istediğimiz sipariş miktarı)
 }
]


``` 

` "/product" : aşağıdaki yapı ile user tablosuna veri eklenebilir`
```json

{
"product_info": "Ürün Adı",
}

``` 

Mongo DB üzerinde ile ilgili işlemler

 - Diziler üzerinde parçalama ve işlemler yapma :  https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/
 -  Mongo DB üzerinde aggeregation işlemleri  https://docs.mongodb.com/manual/reference/operator/aggregation/match/
 -  https://docs.mongodb.com/manual/reference/operator/aggregation/match/
 -  Mongo DB subdocument : https://docs.mongodb.com/manual/tutorial/query-embedded-documents/ 
  
