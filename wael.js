let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let category=document.getElementById('category');
let submit=document.getElementById('submit');
let count=document.getElementById('count');

let mood = 'create';
let tmp;

/*get total*/
function getTotal()
{
    if(price.value !=''){
        let result = (+price.value + +taxes.value+ +ads.value)- +discount.value;
total.innerHTML=result;
total.style.background='#040';
}else{
    total.innerHTML='';
    total.style.background='#a00d02';
}
}
let dataPro; 

if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product);
} else {
    dataPro = [];
}

console.log("dataPro after initialization:", dataPro); 

submit.onclick = function() {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    };
    dataPro.push(newPro);
    localStorage.setItem('product', JSON.stringify(dataPro));
    console.log(dataPro);
    dataPro.push(newPro);

    
    clearData()
    showData()
};

//clear inputs

function clearData(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    category.value='';
    count.value='';
}


//read


let datapro = [];
     
if(localStorage.product != null){
    datapro = JSON.parse(localStorage.product)
 }
 else{
     let datapro = [];
 }  
let table = document.getElementById('tbody');
if(datapro.length>0){
     for(i=0 ; i<datapro.length;i++)
    table.innerHTML += `
    <tr>
    <td> ${i} </td>
    <td> ${datapro[i].title}</td>
    <td> ${datapro[i].price} </td>
    <td> ${datapro[i].taxes} </td>
    <td> ${datapro[i].ads} </td>
    <td> ${datapro[i].discount} </td>
    <td> ${datapro[i].total} </td>
    <td> ${datapro[i].category} </td>
    <td><button onclick="updateDate(${i})" id="update">update</button></td>
    <td><button onclick="deleteDate(${i})" id="delete">delete</button></td>
    </tr>
    `;
    
}


showData()


//delete
function deleteDate(i)
{
    dataPro.splice(i,1);
    localStorage.product =JSON.stringify(dataPro);
    showData()
}

function deleteAllButton()
{
    for(let i=0;i<dataPro.length;i++)
    {
        deleteItem(i)
    }
    document.getElementById('deleteAllButton')
    localStorage.clear()
}
showData()
function updateProductCount() {
    const productTable = document.getElementById("productTable").getElementsByTagName("tbody")[0];
    const rowCount = productTable.getElementsByTagName("tr").length;
    document.getElementById("productCount").textContent = rowCount;
}


//update
function updateDate(i){
    title.value =dataPro[i].title;
    ads.value =dataPro[i].ads;
    taxes.value =dataPro[i].taxes;
    discount.value =dataPro[i].discount;
    price.value =dataPro[i].price;
    getTotal
    count.style.display='none';
    category.value =dataPro[i].category;
    submit.innerHTML = 'Update';
    mood = 'update'
    tmp = i;
}

//search
let searchMood ='title';
function getSearchMood(id) {
    let search = document.getElementById('search');
    if(id =='searchTitle'){
        searchMood = 'title';
        search.placeholder = 'Search By Title';
    }else{
        searchMood = 'category';
        search.placeholder = 'Search By Category';
    }
    search.focus()
    console.log(searchMood)
}

function searchData(value)
{
    if(searchMood=='title'){
        for(let i =0; i<dataPro.length;i++){
          if(dataPro[i].title.include (value))  {
            console.log(i)
          }
        }
    }
}



