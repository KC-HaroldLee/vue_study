<template>
<div>
  <table>
    <thead>
      <tr>
        <td>순번</td>
        <td>제품명</td>
        <td>가격</td>
        <td>카테고리</td>
        <td>배송료</td>
      </tr>
    </thead>
    <tbody>
      <tr :key='i' v-for='(product, i) in productList'>
        <td>{{i}}</td>
        <td>{{product.name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.category}}</td>
        <td>{{product.deli_price}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
export default {
  data () {
    return {
      productList: [
        { name: '키보드', price: '1원', category: 'PC', deli_price: '2원' },
        { name: '면도기', price: '10원', category: '미용', deli_price: '20원' },
        { name: '접시', price: '100원', category: '주방', deli_price: '200원' },
        { name: '포켓몬빵', price: '1000원', category: '기호품', deli_price: '2000원' }
        // 문법 계속 바뀌냐...?
        // { 'name':'면도기', 'price':'10원','category':'미용','deli_price':'20원' },
        // { 'name':'접시', 'price':'100원','category':'식사','deli_price':'200원' },
        // { 'name':'포켓몬빵', 'price':'30000원','category':'기호품','deli_price':'1200000원' }
      ]
    }
  }
}
</script>
