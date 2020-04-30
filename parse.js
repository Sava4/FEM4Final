var axios = require("axios");
var needle = require("needle");
var cheerio = require("cheerio");
var async = require("async");

console.log("start");

// let categories = "pendants";
// let categories = "bracelets";
// let categories = "earrings";
// let categories = "necklaces";
// let categories = "rings";

// !!! не забыть папку для фото проверить и поменять категорию и закомментить лишние ссылки

var urls = [

  //pendants
  // 'https://zarina.ua/ua/catalog/podvesy',
  // 'https://zarina.ua/ua/catalog/podvesy?p=2',
  // 'https://zarina.ua/ua/catalog/podvesy?p=3',

// //bracelets
  // "https://zarina.ua/ru/catalog/braslety",
  // "https://zarina.ua/ru/catalog/braslety?p=2",
  // "https://zarina.ua/ru/catalog/braslety?p=3",


  //earrings
  // "https://zarina.ua/ru/catalog/sergi",
  // "https://zarina.ua/ru/catalog/sergi?p=2",
  // "https://zarina.ua/ru/catalog/sergi?p=3",

  //necklaces
  // "https://zarina.ua/ru/catalog/kolie",
  // "https://zarina.ua/ru/catalog/kolie?p=2",
  // "https://zarina.ua/ru/catalog/kolie?p=3"

  //rings
  // "https://zarina.ua/ua/catalog/kolca",
  // "https://zarina.ua/ua/catalog/kolca?p=2",
  // "https://zarina.ua/ua/catalog/kolca?p=3",
];
function qqq(url) {
  needle.get(
    url,
    function(err, res) {
      if (err) throw err;
      var $ = cheerio.load(res.body);

      let link = $(".image a");
      let links = [];
      link.each(function(i, val) {
        var linkItem = $(val).attr("href");
        links.push(linkItem);
      });
      console.log("TCL: links", links);
      //links доступен только тут и вызываем загрузку каждого продукта
      var i = 0;
      while (links.length > i) {
        let url2 = links[i];
        qqqqq(url2);
        i++;
      }
    },
    100
  );
}

for (let i = 0; urls.length > i; i++) {
  // выведет 0, затем 1, затем 2
  let url = urls[i];
  qqq(url);

  console.log("TCL: url", url);
}

function qqqqq(url2) {
  needle.get(
    url2,
    function(err, res) {
      if (err) throw err;

      var $ = cheerio.load(res.body);

      let th = $(".label");
      let td = $(".label").next();
      let imgMain = $(".main-thumbnail");
      let img = $(".fade-image");
      let price111 = $(".price")
        .text()
        .replace(/...../i, "")
        .replace(/.ГРН.*/i, "")
        .replace(/\s/i, "");
      let price222 = Number(price111);

      if (price222 !== NaN) {
        let price333 = price222;

        let thh = [];
        let tdd = [];
        let imgg2 = [];
        let imgg = [];

        th.each(function(i, val) {
          var thItem = $(val)
            .text()
            .replace("Price From:", "currentPrice")
            .replace("Вид застібки", "fixer")
            .replace("Цвет металла", "metal_color")
            .replace("Цвет металла", "metal_color")
            .replace("Цвет ", "metal_color")
            .replace("Проба", "sample")
            .replace("Метал", "metal")
            .replace("metalл", "metal")
            .replace("Колекція", "collection")
            .replace("Коллекция", "collection")
            .replace("Вставки", "gemstone")
            .replace("Код виробу", "item_code")
            .replace("Код изделия", "item_code")
            .replace("Розмір", "size")
            .replace("Вага", "weight")
            .replace("Вес", "weight");
          thh.push(thItem);
        });

        td.each(function(i, val) {
          var tdItem = $(val)
            .text()
            .replace("Золото", "gold")
            .replace("Cрібло", "silver")
            .replace("Жовтий", "yellow")
            .replace("Білий", "white")
            .replace("ZARINA Classic", "ZARINA Classic")
            .replace("Меланка", "Melanka")
            .replace("Зірка", "Star")
            .replace("Капли Дождя", "Rain Drops")
            .replace("Краплі Дощу", "Rain Drops")
            .replace(/Iconic.*/, "Iconic")
            .replace(/NATKINA.*/, "NATKINA")
            .replace(/In motion.*/, "In motion")
            .replace(/Safari.*/, "Safari")
            .replace("ZARINA Classic", "ZARINA Classic")
            .replace("Меланка", "Melanka")
            .replace("Зірка", "Star")
            .replace("Мужская", "Men")
            .replace("Детская", "Baby")
            .replace("Дитяча", "Baby")
            .replace("Фрески", "Freski")
            .replace("ВідданаByZARINA", "ViddanaByZARINA")
            .replace("Три Цвета Любви", "Love Colors")
            .replace("Крижані Чари", "Frozen Magic")
            .replace("Крижані чари", "Frozen Magic")
            .replace("Душа Природи", "Nature`s Soul")
            .replace("Драгоценная шкатулка", "Precious box")
            .replace("Дорогоцінна Скарбничка", "Precious box")
            .replace("Дорогоцiнна скарбничка", "Precious box")
            .replace("Бальная Книга", "Precious box")
            .replace("Звезда", "Star")
            .replace("Ледяные чары", "Frozen Magic")
            .replace("Три цвета любви", "Love colors")
            .replace("Три Кольори Кохання", "Love colors")
            .replace("Три кольори кохання", "Love colors")   
            .replace("Сердце Океана", "Ocean heart") 
            .replace("Богема", "Bohemian")
            .replace("Гранат", "Granat")
            .replace("Розмір", "size")
            .replace("Вага", "weight")
            .replace("Золото", "gold")
            .replace("Срібло", "silver")
            .replace("Серебро", "silver")
            .replace("Желтый", "yellow")
            .replace("Белый", "white")
            .replace("Білий", "white")
            .replace("Розмір", "size")
            .replace("Вага", "weight")
            .replace("Вес", "weight")
            .replace("Дiамант", "Diamond")
            .replace("Бриллиант", "Diamond")
            .replace("Рубін", "Rubin")
            .replace("Рубин", "Rubin")
            .replace("Топаз", "Topaz")
            .replace("Фiанiт", "Fianit")
            .replace("Фианит", "Fianit")
            .replace("Сапфір", "Sapphire")
            .replace("Сапфир", "Sapphire")
            .replace("Изумруд", "Emerald")
            .replace("Смарагд", "Emerald")
            .replace("Без вставок", "Pure metal")
            .replace("Хризоліт", "Hrizolit")
            .replace("Хризолит", "Hrizolit")
            .replace("Цитрин", "Citrin")
            .replace("Кварц Димчатий", "Quarz")           
            .replace("Кварц димчатий", "Quarz") 
            .replace("Кварц дымчатый", "Quarz")
            .replace("Кварц Димчатий", "Quarz")
            .replace("Quarz Димчатий", "Quarz") 
            .replace("Кварц Зелений", "Quarz")
            .replace("Кварц Рожевий", "Quarz")
            .replace("Кварц рожевий", "Quarz")           
            .replace("Quarz Рожевий", "Quarz")
            .replace("Кварц", "Quarz")
            .replace("Лейкосапфір", "Leicosapphire")
            .replace("Лейкосапфир", "Leicosapphire")
            .replace("Цаворит", "Cavorit")
            .replace("Эмаль", "Emal")
            .replace("Емаль", "Emal")
            .replace("Халцедон", "Halcedon")
            .replace("Турмалин", "Turmalin")           
            .replace("Цирконій SWAROVSKI", "SWAROVSKI")
            .replace("Кристалл Сваровски", "SWAROVSKI")            
            .replace("Оникс", "Onix")
            .replace("Агат", "Agat")
            .replace("Силикон", "Silicon")
            .replace("Перли", "Pearls")
            .replace("Перламутр", "Pearls")
            .replace("Жемчуг", "Pearls")
            .replace("Аметист", "Ametist")
            .replace("Рожевий", "rose")
            .replace("Розовый", "rose")
            .replace("Димчатий", "")

          tdd.push(tdItem);
        });
        //ставим правильную картинку на главную
        imgMain.each(function(i, val) {
          let image2 = $(val).attr("href");
          let image1 = image2.substr(image2.lastIndexOf("/"));
          let image = `/img/products/${categories}${image1}`;
          imgg[0] = image;
          imgg2[0] = image2;
        });
        //все картинки гавная теперь дублируется
        img.each(function(i, val) {
          let image2 = $(val)
            .attr("src")
            .replace("thumbnail/128x128/", "image/");
          let image1 = image2.substr(image2.lastIndexOf("/"));
          let image = `/img/products/${categories}${image1}`;
          imgg.push(image);
          imgg2.push(image2);
        });
        //удаляем дубликат главной картинки
        imgg = Array.from(new Set(imgg));
        imgg2 = Array.from(new Set(imgg2));

        tdd.pop();
        tdd.push(price333);
        tdd.push(categories);
        thh.push("categories");

        //была функция не доходили переменные из-за асинхронности
        let result = {};
        for (var i = 0; i < thh.length; i++) {
          result[thh[i]] = tdd[i];
        }

        if (result.gemstone == "Diamond") {
          result.gemstone_color = "white";
        } else if (result.gemstone == "Sapphire") {
          result.gemstone_color = "green";
        } else if (result.gemstone == "Fianit") {
          result.gemstone_color = "blue";
        } else if (result.gemstone == "Rubin") {
          result.gemstone_color = "red";
        } else {
          result.gemstone_color = "white";
        }
        if (!result.hasOwnProperty("weight")) {
          result.weight = "1.8";
        }
        if (!result.hasOwnProperty("metal_color")) {
          result.metal_color = "white";
        }
        result.product_url = url2;
        result.imageUrls = imgg;
        result.imageUrls2 = imgg2;
        result.previousPrice = result.currentPrice;
        result.name = `${result.gemstone} ${result.metal} ${categories.slice(
          0,
          -1
        )}`;
        // console.log("result", result)

        ///поле цены в некоторых товарах пеескакивает в поле пробу sample, не добавляем их
        if (
          result.currentPrice > 0 &&
          result.sample !== undefined &&
          result.sample !== null &&
          result.sample.length === 3
        ) {
          //взять массив ссылок на картинки из result.imageUrls
          // обрезать конец в название и сохранить в папку
          // добавить адрес папки  и записать в result.imageUrls_2
          var http = require("https"),
            fs = require("fs");

          var i = 0;
          while (result.imageUrls2.length > i) {
            let url3 = result.imageUrls2[i];
            // let ur14 = url3.replace(/iamge.*/i, "");
            request(url3);
            i++;
          }
          function request(url3) {
            http.get(url3, function(res) {
              var imagedata = "";
              res.setEncoding("binary");

              res.on("data", function(chunk) {
                imagedata += chunk;
              });

              res.on("end", function() {
                // let ur14 = url3.replace(/\w\.(.*)/i, "");
                let ur14 = url3.substr(url3.lastIndexOf("/"));
                console.log("TCL: request ->  ur14", ur14);

                fs.writeFile(
                  `./client/public/img/products/${categories}/${ur14}`,
                  imagedata,
                  "binary",
                  function(err) {
                    if (err) throw err;
                    console.log("File saved.");
                  }
                );
              });
            });
          }

          //   console.log("TCL: qqqqq -> result", result);

          addProduct(result);
        } //в поле проба попадала иногда цена причину не нашел, это костыль
      }
    },
    100
  );
}

//убрать пробелы заменить названия на англ через регулярные
//добавить функцию парсер урлов товаров со страницы товаров
//запушить их в массив который вверху и запустить  эту
//название: из камень метал цвет категория

function addProduct(result) {
  const newProduct = {
    ...result,
    brand: "Zarina",
    quantity: 100
    //   productUrl: "/necklaces",
    //   name: "Diamond white gold Necklace",
    //   currentPrice: 37700,
    //   previousPrice: 48800,
    //   categories: "necklaces",
    //   imageUrls: [
    //     "img/products/necklaces/1-199_912_.jpg"
    //     // "img/products/bracelets/1-199_122_1.jpg",
    //     // "img/products/earrings/0990.jpg",
    //     // "img/products/earrings/0992.jpg",
    //   ],
    //   collection: "Melanka",
    //   metal: "gold",
    //   gemstone: "diamond",
    //   weight: "2.76",
    //   sample: "585",
    //   gemstone_color: "white",
    //   metal_color: "white",
  };
  //   console.log("TCL: addProduct ->  newProduct", newProduct);
  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      let token = response.data.token;

      axios
        .post("http://localhost:5000/products", newProduct, {
          headers: { Authorization: `${token}` }
        })
        .then(newProduct => {
          console.log(newProduct);
        })
        .catch(err => {
          console.log("TCL: addProduct -> err", err);
        });
    })
    .catch(err => {
      console.log("TCL: addProduct -> err", err);
    });
}
