async function ApiPayment(token, card_token) {
    const options = {
      method: 'POST',
      headers: {
        'Authorization': token,
        'accept': 'application/json', 
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        amount: 1,
        currency: 'MXN',
        description: 'Ejemplo de compra',
        customer: {
          email: 'correo@ejemplo.com', 
          phone: '5555555555'
        },
        payment_method: {
          token: card_token
        },
      })
    };
  
    try {
      const response = await fetch('https://api.payclip.com/payments', options);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
}