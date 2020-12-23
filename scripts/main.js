document.addEventListener('DOMContentLoaded',() => {
    
    const removeItemBtns = document.querySelectorAll('.remove-btn')
    removeItemBtns.forEach(btn => { 
        // 監聽點擊事件
        btn.addEventListener('click', setRemoveItemBtn)
          
        })
        const inputs = document.querySelectorAll('.cart .quantity')
             inputs.forEach(input => {
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
    
    console.log(productName,price);
  }

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

  }

// 移除購物車
function setRemoveItemBtn(e) {
  const row = e.currentTarget.parentElement.parentElement
  row.remove()

  updateCart()
}

// 算購物車總價
function updateCart(){
    const cartitems = document.querySelectorAll('.cart .cart-item')

    // 讓一開始的總值為0
    let total = 0

    cartitems.forEach(item =>{
      const quantity =  item.querySelector('.quantity').value
      const price =  item.querySelector('.price').innerText.replace('$', '')
        total += (quantity * price)
    })

    document.querySelector('.total-price').innerText = `$${total}`
    // console.log(total);
}