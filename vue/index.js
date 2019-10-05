const template = `
  <div>
    <h1>{{title}}</h1>
    <ul>
      名称：<input v-model="newProduct.name" type="text"/>
      库存：<input v-model="newProduct.stock" type="number" min="0"/>
      <button @click="add">添加</button>
      <li v-for="(item,index) in products">
      <span>{{item.name}}</span>
      <button @click = "item.stock -- " type="number">-</button>
      <span id="soldout" v-show = "item.stock === 0">售罄</span>
      <span id="stock">{{item.stock}}</span>
      <input type="number" min = "0" id="input" v-model="item.stock"/>
      <button @click = "item.stock ++" type="number">+</button>
      <button @click="remove(index)">删除</button>
      </li>
    </ul>

  </div>
`


const config = {
  template,
  el: '#app',
  data:{
    title: "商品和库存管理",
    products:[
        {name:"小米手机",stock:10},
        {name:"华为手机",stock:9},
        {name:"iphone",stock:11}
      ],
    newProduct:{
      name:"",
      stock:0 
    }
  },
  methods:{
    remove(index){
      this.products.splice(index,1);
    },
    add(){
      this.products.push(this.newProduct);
      this.newProduct = {
        name:"",
        stock:0
      }
    }
  }
};



//创建一个vue实例
const app = new Vue(config)