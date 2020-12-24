document.addEventListener('DOMContentLoaded',()=>{
  // 第一步先移除購物車
  document.querySelectorAll('.remove-btn').forEach(btn =>{
    // 監聽事件當執行時
    btn.addEventListener('click',setRemoveItemBtn)
  })
  // 第三的監聽事件 foreach= 對於html<class以下所有都執行
  document.querySelectorAll('.cart .quantity').forEach(input =>{
    // change= 當input的值有所改變 將執行
    input.addEventListener('change',setQuantity)
  })


})

// 移除欄位
function setRemoveItemBtn(e){
  const row = e.currentTarget.parentElement.parentElement
  row.remove()
}
// 第二步 更新購物車總價
function updateCart(){
  // catitems 對應htmlcalss   <tr class="cart-item">
  const carItems = document.querySelectorAll('.cart .cart-item')
  // 初始值為總價0
  let total = 0
  carItems.forEach(item =>{
    // 定義選取數量
    const quantity = item.querySelector('.quantity').value
    // 定義選取價錢 並移除錢符號
    const price = item.querySelector('.price').innerText.replace('$','')
    item.querySelector('.subtotal').innerText = `$${quantity*price}`
    // 數量＊價錢
    total +=(quantity*price)
  })
  // 定義選取總價錢
  document.querySelector('.total-price').innerText=`$${total}`
}
// 第三計算數量
function setQuantity(e){
  // input<e value值
  // target 等於觸發事件
  const input = e.target

  let quantity = input.value
  if(quantity <= 0){
    // 數量不能小於1
    quantity = 1;
  }
  // e參數值＝數量
  e.target.value = quantity
}