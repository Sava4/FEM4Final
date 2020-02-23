import axios from "axios";

export function addLinks() {
  const newLinks = {
    title: "Documentation",
    links: [
      {
        description: "Find Your Store",
        url: "/documents/find-your-store"
      },
      {
        description: "Brand History",
        url: "/documents/brand-history"
      },
      {
        description: "News",
        url: "/documents/news"
      },
      {
        description: "Supply Chain Acts",
        url: "/documents/supply-chain-acts"
      },
      {
        description: "NWebsite Policies",
        url: "/documents/website-policies"
      },
      {
        description: "Payments & Shipping",
        url: "/documents/payments-shipping"
      },
      {
        description: "Returns & Replacements",
        url: "/documents/returns-replacements"
      },
      {
        description: "Loyalty Program",
        url: "/documents/loyalty-program"
      },
      {
        description: "Product Care",
        url: "/documents/product-care"
      },
      {
        description: "Gift Cards",
        url: "/documents/gift-cards"
      }
    ]
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
        .post("http://localhost:5000/links", newLinks, {
          headers: { Authorization: `${token}` }
        })
        .then(newLinks => {
          /*Do something with newLinks*/
          console.log(newLinks);
        })
        .catch(err => {
          /*Do something with error, e.g. show error to user*/
        });
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
}

export function updateLinks() {
  const updatedLinks = {
    title: "Static Pages",
    links: [
      {
        description: "Find Your Store",
        url: "find-your-store"
      },
      {
        description: "Brand History",
        url: "brand-history"
      },
      {
        description: "News",
        url: "news"
      },
      {
        description: "Supply Chain Acts",
        url: "supply-chain-acts"
      },
      {
        description: "NWebsite Policies",
        url: "website-policies"
      },
      {
        description: "Payments & Shipping",
        url: "payments-shipping"
      },
      {
        description: "Returns & Replacements",
        url: "returns-replacements"
      },
      {
        description: "Loyalty Program",
        url: "loyalty-program"
      },
      {
        description: "Product Care",
        url: "product-care"
      },
      {
        description: "Gift Cards",
        url: "gift-cards"
      }
    ]
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
        .put(
          "http://localhost:5000/links/5e4bcd0133960714f8cb572c",
          updatedLinks,
          { headers: { Authorization: `${token}` } }
        )
        .then(updatedLinks => {
          /*Do something with newLinks*/
          console.log(updatedLinks);
        })
        .catch(err => {
          /*Do something with error, e.g. show error to user*/
        });
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
}
