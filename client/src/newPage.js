import axios from "axios";

export function addPage() {
  const newPage = {
    customId: "news",
    title: "News",
    images: ["/img/pages/aboutus/001.png", "/img/pages/aboutus/002.png"],
    htmlContent: `
        Voluptatibus facilis amet, similique, natus nulla ipsam magni beatae pariatur odio corrupti voluptas id consequuntur nisi iure. Inventore vitae, accusamus labore eos optio commodi non repudiandae at quod voluptatem beatae.
        Accusantium ipsum temporibus ipsa numquam magnam, voluptates iste vero vitae explicabo eveniet soluta velit repudiandae veritatis eius dolorem exercitationem dolorum! Modi sequi ullam voluptatibus doloribus minima sapiente laudantium ea eveniet!
        Excepturi iste molestiae exercitationem molestias voluptas enim fugiat tenetur rem nesciunt? Aperiam quibusdam veritatis voluptatum in officiis nesciunt suscipit, provident similique voluptates voluptatibus, blanditiis rerum explicabo? Corporis minima nihil aut!
        doloribus error veniam alias et perferendis molestias neque quibusdam minus illum ex magni facere!
        que, placeat. Ipsa excepturi ut voluptate, ex sequi vero, nisi sed consequatur perferendis sunt delectus tempore provident nesciunt sit amet deleniti exercitationem quos a doloremque quam totam. Tempora.
        Vero sit veniam laboriosam qui, perspiciatis veritatis ipsam quasi nam quae perferendis saepe quis voluptates hic error doloribus temporibus aspernatur, non facilis inventore alias unde. Numquam eos eaque sapiente recusandae!
        Asperiores, dignissimos numquam unde fugit reprehenderit totam soluta cupiditate alias voluptatem! At eum laudantium sed cumque hic dolor provident mollitia architecto natus ab quas quasi, nostrum sapiente nesciunt odit corrupti.
        Ipsa quam quibusdam dolores doloribus nisi aut expedita adipisci, eos dignissimos velit est debitis in enim ea quaerat excepturi veniam a nemo tempore. Voluptates reiciendis recusandae quasi ea perferendis officia!
        Et distinctio omnis eligendi perspiciatis corrupti ipsam soluta rerum illo debitis? Dolorem voluptatibus iusto, sunt doloribus error veniam alias et perferendis molestias neque quibusdam minus illum ex magni facere beatae!
        Perspiciatis vitae tempora voluptas aperiam magnam! Assumenda non sunt numquam. Vel quis aliquam aliquid, inventore commodi architecto explicabo animi laboriosam veniam possimus cumque. Sunt hic quia nulla explicabo quam id!
        Corrupti ducimus temporibus fuga magni dolores exercitationem mollitia aperiam corporis, animi libero, ab minima tenetur cupiditate earum suscipit quae eius aspernatur nesciunt nisi expedita quaerat itaque! Deserunt recusandae velit provident.
        Maiores repudiandae veritatis blanditiis quidem fugiat. Architecto nam assumenda odit debitis quaerat neque velit exercitationem hic! Ipsum quibusdam sunt inventore doloribus modi earum quidem nulla, reiciendis quaerat sapiente molestias deserunt.
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
