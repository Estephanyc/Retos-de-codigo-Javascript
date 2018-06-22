 var customerData = {
    Joe: {
      visits: 1,
    },
    Carol: {
      visits: 2,
    },
    Howard: {
      visits: 3,
    },
    Carrie: {
      visits: 4,
    },
  };

  function greetCustomer(firstName) {
    console.log(customerData.firstName)
    let greeting = '';
    if (customerData.firstName != undefined)
    {
     
      if (customerData.firstName.visits == 1)
       {
         alert("joe");
         greeting = 'Welcome back,' + firstName + ' Wa re glad you liked us the first time!'
       }
      if (customerData.firstName.visits > 1) {
        greeting = 'Welcome back,' + firstName +' So glad to see you again!';
      }
    }
    else{
      console.log(customerData.firstName)
      greeting = 'Welcome! Is this your first time?';
    }
    return greeting;
  }

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'