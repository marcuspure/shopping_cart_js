document.addEventListener('DOMContentLoaded',() => {
    
    document.querySelectorAll('.remove-btn').forEach(btn =>{
 // 監聽點擊事件
        btn.addEventListener('click', setRemoveItemBtn)
    })
   
       document.querySelectorAll('.cart .quantity').forEach(input => {
          input.addEventListener('change', setQuantity)

        }) 
        
        document.querySelectorAll('.items .add-item-btn').forEach(btn => {
            btn.addEventListener('click', setAddItemBtn)
          })
        

})

function setAddItemBtn(e) {
    const product = e.currentTarget.parentElement.parentElement
    // 定義商品名稱
    const productName = product.querySelector('.product-name').innerText
    // 定義然後抓取價錢
    const price = product.querySelector('.price').innerText.replace('$','')

    // element 創造元素ＨＴＭＬ
    const row = document.createElement('tr')
    row.classList.add('cart-item')
    row.innerHTML = `
        <td>${productName}</td>
        <td><input type="number" value="1" class="quantity"></td>
        <td class="price">${price}</td>
        <td class="subtotal">${price}</td>
        <td><button class="remove-item-btn btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>       
    `
     const itemList = document.querySelector('.item-list')
     itemList.appendChild(row)

     row.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', setRemoveItemBtn)
      })
      row.querySelectorAll('.cart .quantity').forEach(input => {
        input.addEventListener('change', setQuantity)
      })
    //   row.querySelector('.remove-item-btn').addEventListener('click', setRemoveItemBtn)也能增加

    //  row.querySelector('.cart .quantity').addEventListener('change', setQuantity)也能加數量
      updateCart()
  }

//   計算數量
function setQuantity(e) {
    // target =btn
    const input = e.target
    let quantity = input.value
    // 如果數量小於等於０ 
    if (quantity <= 0){
        // 數量預設為1
        quantity = 1;
        // 要等於1
    }
    e.target.value = quantity
    
    // 定義cartItem 裡面的值裡面的複層的複層
    const cartItem = input.parentElement.parentElement
    const price = cartItem.querySelector('.price').innerText.replace('$','')
    cartItem.querySelector('.subtotal').innerText = `$${quantity * price}`

    updateCart()
  }

// 移除購物車
function setRemoveItemBtn(e) {
  const row = e.currentTarget.parentElement.parentElement
  row.remove()

  updateCart()
}

// 算購物車總價
function updateCart(){
    const cartItems = document.querySelectorAll('.cart .cart-item')

    // 讓一開始的總值為0
    let total = 0

    cartItems.forEach(item =>{
      const quantity =  item.querySelector('.quantity').value
      const price =  item.querySelector('.price').innerText.replace('$', '')
        total += (quantity * price)
    })

    document.querySelector('.total-price').innerText = `$${Math.round(total*100) / 100 }`
    // console.log(total);
}