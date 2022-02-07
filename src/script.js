m_data=[];
function press()
{
    display(getData());
}
function getData(){
    let pid=document.getElementById("pid").value;
    let pname=document.getElementById("pname").value;
    let pprice=document.getElementById("pprice").value;
    data={"id":pid,"name":pname,"price":pprice};
    console.log(data);
    m_data.push();
    return data;
}
function display(data){
    let table=document.getElementById("out_table");
    tr=document.createElement("tr");
    newItem=`<td class="text_right">${data["id"]}</td>
    <td>${data["name"]}</td>
    <td>USD ${data["price"]}</td>`
    tr.innerHTML=newItem;
    table.appendChild(tr);
}