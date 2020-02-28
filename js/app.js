let listStudents = [
    "Nguyen Thien Nhan",
    "De Tham",
    "Pham Dinh Ho"
];
function makeTable() {
    html = "";
    for (let i = 0; i < listStudents.length; i++) {
        html += "<tr><td id='index'>" + (i + 1) + "</td><td>" + listStudents[i] +
            "</td><td><button style='margin-right: 3px' onclick=deleteStudent(" + i  + ")" + ">Delete</button>" +
            "<button style='margin-right: 3px' onclick=editStudent(" + i  + ")" + ">Edit</button>" +
            "<button onclick=addStudent(" + i  + ")" + ">Add new</button></td></tr>";
    }
}
makeTable();
function addStudent(x) {
    let newStudent = prompt("New Student's name:")
    if(newStudent != "" && newStudent != null) {
        listStudents.splice(x+1, 0, newStudent);
        makeTable();
        document.getElementById("mainBody").innerHTML = html;
    }
}

function editStudent(x) {
    let tem = prompt("Edit name ");
    if(tem != null && tem != "") {
        listStudents[x] = tem;
        makeTable();
        document.getElementById("mainBody").innerHTML = html;
    }
}


function deleteStudent(x) {
    listStudents.splice(x, 1);
    makeTable();
    document.getElementById("mainBody").innerHTML = html;

}
document.getElementById("mainBody").innerHTML = html;

