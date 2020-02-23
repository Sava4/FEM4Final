import axios from "axios";

export function addPage() {
  const newPage = {
    customId: "payments-shipping",
    title: "Payments & Shipping",
    images: ["/img/pages/aboutus/001.png", "/img/pages/aboutus/002.png"],
    htmlContent: `
       
    ationem hic! Ipsum quibusdam sunt inventore doloribus modi earum quidem nulla, reiciendis quaerat sapiente molestias deserunt.
        Voluptate excepturi magni reprehenderit aperiam corrupti beatae ad cum accusamus quae, quam consequatur facere maiores ducimus! Accusantium in, sapiente voluptates ducimus odio quidem modi, eum accusamus et a praesentium minus.
        Voluptatibus facilis amet, similique, natus nulla ipsam magni beatae pariatur odio corrupti voluptas id consequuntur nisi iure. Inventore vitae, accusamus labore eos optio commodi non repudiandae at quod voluptatem beatae.
        Accusantium ipsum temporibus ipsa numquam magnam, voluptates iste vero vitae explicabo eveniet soluta velit repudiandae veritatis eius dolorem exercitationem dolorum! Modi sequi ullam voluptatibus doloribus minima sapiente laudantium ea eveniet!
        Excepturi iste molestiae exercitationem molestias voluptas enim fugiat tenetur rem nesciunt? Aperiam quibusdam veritatis voluptatum in officiis nesciunt suscipit, provident similique voluptates voluptatibus, blanditiis rerum explicabo? Corporis minima nihil aut!
        doloribus error veniam alias et perferendis molestias neque quibusdam minus illum ex magni facere!
        `
  };

  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      /*Do something with newProduct*/
      let token = response.data.token;

      axios
        .post("http://localhost:5000/pages", newPage, {
          headers: { Authorization: `${token}` }
        })
        .then(newPage => {
          /*Do something with newProduct*/
          console.log(newPage);
        })
        .catch(err => {
          /*Do something with error, e.g. show error to user*/
        });
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
}
