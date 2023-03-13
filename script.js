const form = document.getElementById('order-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const item = document.getElementById('item').value;
  const quantity = document.getElementById('quantity').value;

  // Validate form data
  if (!name || !email || !phone || !address || !item || !quantity) {
    alert('Please fill in all fields.');
    return;
  }

  // Send order to server
  const order = { name, email, phone, address, item, quantity };
  console.log(order); // Replace with actual server request
  alert('Order placed successfully!');
  form.reset();
});



  
    
   
 