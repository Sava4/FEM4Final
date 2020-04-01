let Email = props => {
    const { 
        error, handleSubmit, pristine, reset, emailValue, formValues, value, submitting } = props;
    let [email, setEmail] = useState("");//если без рефов и через emailValue то он каждый символ передает и запускат регистрацию
    let emailRef = useRef();
    const submitButton = () => {
      setEmail(emailRef.current.value);
      reset(); //чистим поле ввода  
  //    ()=> EmailValue="привет" 
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit(submitButton)}>
          <div>
            <Field
              name="emailValue"
              component={Input}
              type="email"
              placeholder="Email"         
              ref={emailRef}
              validate={[required, Length]}
              style={{
                width: "299px",
                marginTop: "2px",
                border: "none",
                borderBottom: "1px solid #262c37",
                fontSize: "14px"
              }}
            />
          </div>       
          <div>
            <EmailButton type="submit" onClick={submitButton}>
              {" "}
              Sign up   
         {emailValue}
                   
            </EmailButton>
          </div>
        </form>     
        <AddSubscriber email={email} emailValue={emailValue} />
      </div>
    );
  };
  
  
  
  
   let email = props.email;
    const newSubscriber = {
      email: `${email}`,
      letterSubject: "Test letter (final project)",
      letterHtml:
        "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title> <style> td { padding: 20px 50px; background-color: yellow; color: blueviolet; font-size: 20px; } </style> </head> <body> <table> <tr> <td>Test1</td> <td>Test2</td> <td>Test3</td> </tr> <tr> <td>Test1.1</td> <td>Test2.1</td> <td>Test3.1</td> </tr> </table> </body></html>"
    };
    // console.log(email);
    if (email !== "") {
      // ПРОВЕРКА ВВОДА
      axios
        .post("http://localhost:5000/customers/login", {
          loginOrEmail: "customer@gmail.com",
          password: "1111111"
        })
        .then(response => {
          let token = response.data.token;
          axios
            .post("http://localhost:5000/subscribers", newSubscriber, {
              headers: { Authorization: `${token}` }
            })
            .then(newSubscriber => {
              console.log("success");
              console.log(newSubscriber);
              alert(email)
            
              
            })
            .catch(err => {
              console.log("error add");
              console.log(err.response);
            });
        })
        .catch(err => {
          console.log("error auth");
          console.log(err);
        });
    }
    return (
      <>
      
        {/* <button onClick={handleShow}>OPEN</button>     
        <Modal show={show} onHide={handleClose} style={{zIndex:"20",opacity:"1",background:"blue",marginLeft:"700px",marginTop:"100px",width:'300px',height:'30px',display:"flex",justifyContent:"center"}}>
          <button style={{width:"100%"}} onClick={() => setShow(false)}>x</button> You are successfuly subscribed!
        </Modal> */}
      </>
    );
  }