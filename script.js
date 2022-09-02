// 1.cmenangkap element form_attandance dan root
let form_attandance = document.getElementById('form_attandance');
let root = document.getElementById('root');

// 2. membuat array untuk menampung data absensi
let attandance_data = [];

// menambahkan event listener submit ke element id form_attandance
form_attandance.addEventListener('submit', (event) => {
  //mencegah form dari reload page
  event.preventDefault();

  let fullname = event.target.fullname.value;
  // console.info(fullname);

  // validasi
  if (fullname == '') {
    alert('Please input your name');
    return;
  }

  //push data ke dalam array attandance_data

  attandance_data.push({
    fullname: fullname,
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
  });

  event.target.fullname.value = '';

  // panggil function render to html
  renderToHtml();
});

// membuat function untuk render data array ke div root
function renderToHtml() {
  // reset element div root
  root.innerHTML = '';

  //mapping array to html element , atau untuk menampilkan array list data
  attandance_data.forEach((element, index) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${index})">
    <span> ${index + 1}. &nbsp; ${element.fullname} <span> 
    <span> ${element.time} ${element.date}  <span>
    </div>
    `;
    // dipanggil functionnya ketika button di submit di event listener
  });
}

//delete function
function handleDelete(index) {
  //delete 1 data dari array
  attandance_data.splice(index, 1);
  //render kembali data kedalam array ke html
  renderToHtml();
}
