let listStudents = [
    "Nguyen Thien Nhan",
    "De Tham",
    "Pham Dinh Ho"
];
function makeTable() {
    html = "";
    for (let i = 0; i < listStudents.length; i++) {
        // html += "<tr><td id='index'>" + (i + 1) + "</td><td>" + listStudents[i] +
        //     "</td><td><button onclick=deleteStudent(" + i  + ")" + ">Delete</button></td></tr>";
        html += "<tr><td id='index'>" + (i + 1) + "</td><td>" + listStudents[i] +
            "</td><td><button style='margin-right: 3px' onclick=deleteStudent(" + i  + ")" + ">Delete</button>" +
            "<button style='margin-right: 3px' onclick=editStudent(" + i  + ")" + ">Edit</button>" +
            "<button onclick=addStudent(" + i  + ")" + ">Add new</button></td></tr>";
    }
}
makeTable();

function addStudent(x) {
    let newStudent = prompt("New Student's name:")
    listStudents.splice(x, 0 , newStudent);
    makeTable();
    document.getElementById("mainBody").innerHTML = html;
}

function editStudent(x) {
    listStudents[x] = prompt("New name: ");
    makeTable();
    document.getElementById("mainBody").innerHTML = html;
}


function deleteStudent(x) {
    listStudents.splice(x, 1);
    makeTable();
    document.getElementById("mainBody").innerHTML = html;

}
document.getElementById("mainBody").innerHTML = html;

