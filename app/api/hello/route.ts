
  const axios = require('axios');

  const  CryptoJS = require('crypto-js');

  let    amount= 5000;
 let  cancelUrl ="https://duongdev.com/failure";
 let returnUrl = "https://duongdev.com/success";
 let description= "6 thang";
 let orderCode = 5;
 let key = "8a5a3e17b95f333d93c988bec06518d33223e4f52da5286779c519e977e5a7a1";
let signature =  CryptoJS.HmacSHA256("amount=5000&cancelUrl=https://duongdev.com/failure&description=6 thang&orderCode=5&returnUrl=https://duongdev.com/success","8a5a3e17b95f333d93c988bec06518d33223e4f52da5286779c519e977e5a7a1").toString(CryptoJS.enc.Hex);
 

  console.log (signature,"signature3")
  let data = JSON.stringify({
    "orderCode": orderCode,
    "amount": amount,
    "description": description,
    "buyerName": "Nguyen Van A",
    "buyerEmail": "buyer-email@gmail.com",
    "buyerPhone": "090xxxxxxx",
    "buyerAddress": "số nhà, đường, phường, tỉnh hoặc thành phố",
    "items": [
      {
        "name": "Iphone",
        "quantity": 2,
        "price": 28000000
      }
    ],
    "cancelUrl": cancelUrl,
    "returnUrl": returnUrl,
    "expiredAt": 1704137071,
    "signature": signature,
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-merchant.payos.vn/v2/payment-requests',
    headers: { 
      'x-client-id': '720e6de8-0e8b-449a-bfdc-d61f3ca7f6a4', 
      'x-api-key': '200a1ab1-a2db-4d41-b8a0-38944319bc4c', 
      'Content-Type': 'application/json', 
      'Cookie': 'connect.sid=s%3AXfquGe-KDvXC2VKxLM48vacP_bJB5iJu.X4MBBmkKSneno9Kc0mGU3ZBE4XRHhq%2FxtwZC2mTr5TA'
    },
    data : data
  };
  

  export async function GET(request: Request) {
    let response = await axios.request(config);
    return new Response(JSON.stringify(response.data))
  
 
}