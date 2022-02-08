var m_data = [];
function press() {
  if (getData()) display();
  else console.log("DATA error");
}
//Get data from input fields and validate
function getData() {
  let pid = document.getElementById("pid").value.toUpperCase();
  let pname = document.getElementById("pname").value;
  let pprice = document.getElementById("pprice").value;
  data = { id: pid, name: pname, price: pprice };
  console.log("Got data");
  console.log(data);
  resetInput(); //Resetting input fields
  //Checking if data is unique (by id)
  if (isUnique(data)) {
    m_data.push(data);
  } else {
    console.log("-ERROR-");
    return true;
  }
  return true;
}
//Function to check if data is unique
function isUnique(data) {
  console.log("check unique");
  if (m_data.length < 1) {
    return true;
  }
  for (let i of m_data) {
    console.log(i);
    if (i["id"] == data["id"]) {
      console.log("Duplicate data");
      console.log(data);
      console.log(i);
      return false;
    }
  }
  return true;
}
// Create table and display
function display() {
  let table = document.getElementById("out_table");
  table.innerHTML = `<tr>
  <th class="text_right">Product ID</th>
  <th>Product Name</th>
  <th>Product Price</th>
</tr>`;
  for (let i = 0; i < m_data.length; i++) {
    newItem = `<tr>
    <td class="text_right">${m_data[i]["id"]}</td>
    <td>${m_data[i]["name"]}</td>
    <td>USD ${m_data[i]["price"]}</td>
    <td><a href="#" onclick="edit(${m_data[i]["id"]})">Edit</a></td>
    <td><a href="#" onclick="del(${m_data[i]["id"]})">Delete</a></td>
    </tr>`;
    table.innerHTML += newItem;
  }
}
//Locate and fetch data from database
function edit(id) {
  console.log("Editing " + id);
  let curr;
  for (let i = 0; i < m_data.length; i++) {
    if (m_data[i]["id"] == id) {
      curr = m_data[i];
    }
  }
  document.getElementById("pid").value = curr["id"];
  document.getElementById("pid").readOnly = true; // ID should not be editable;
  document.getElementById("pname").value = curr["name"];
  document.getElementById("pprice").value = curr["price"];
  document.getElementById("update_butt").hidden = false;  // Swapping buttons
  document.getElementById("add_butt").hidden = true;      //
}
//delete Element by id 
function del(id) {
  console.log("Deleting " + id);
  temp = [];//new array
  //Adding all elements to temp except the one to be deleted
  for (let i = 0; i < m_data.length; i++) {
    if (m_data[i]["id"] != id) {
      temp.push(m_data[i]);
    }
  }
  m_data = temp; //Assigning temp to m_data 
  display();
}
//Update elements
function update(id) {
  let pid = document.getElementById("pid").value.toUpperCase();
  let pname = document.getElementById("pname").value;
  let pprice = document.getElementById("pprice").value;
  data = { id: pid, name: pname, price: pprice };
  for (let i = 0; i < m_data.length; i++) {
    if (m_data[i]["id"] == pid) {
      m_data[i]["name"] = pname;
      m_data[i]["price"] = pprice;
    }
  }
  document.getElementById("update_butt").hidden = true;
  document.getElementById("add_butt").hidden = false;
  document.getElementById("pid").readOnly = false;
  display();
  resetInput();
}

function resetInput() {
  document.getElementById("pid").value = "";
  document.getElementById("pname").value = "";
  document.getElementById("pprice").value = "";
}
