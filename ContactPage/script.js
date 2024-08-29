document.getElementById('inquiry').addEventListener('submit',function(event){
  event.preventDefault();

  let name = document.getElementById('nama').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let type = document.getElementById('type').value;
  let terms = document.getElementById('terms').checked;
  let check=[];

  if(isAlphabet(name)===-1 || !name || name.length===1){
    document.getElementById('err').style.display = 'block';
    document.getElementById('nama').style.border = 'solid';
    document.getElementById('nama').style.borderColor = 'red';
    check[0] = -1;
  }
  else{
    document.getElementById('err').style.display = 'none';
    document.getElementById('nama').style.border = 'solid';
    document.getElementById('nama').style.borderColor = 'black';
    check[0]=1;
  }

  if(email.indexOf('@')===-1 || email.indexOf('.')===-1){
    document.getElementById('errEmail').style.display = 'block';
    check[1] = -1;
    document.getElementById('email').style.border = 'solid';
    document.getElementById('email').style.borderColor = 'red';
    check=-1;
  }
  else{
    document.getElementById('errEmail').style.display = 'none';
    check[1]=1;
    document.getElementById('email').style.border = 'solid';
    document.getElementById('email').style.borderColor = 'black';
  }

  if(isNaN(parseInt(phone)) || phone.length<9 || phone.length>12 || detectAlpha(phone)===-1){
    document.getElementById('errphone').style.display = 'block';
    check[2] = -1;
    document.getElementById('phone').style.border = 'solid';
    document.getElementById('phone').style.borderColor = 'red';
  }
  else{
    document.getElementById('errphone').style.display = 'none';
    check[2]=1;
    document.getElementById('phone').style.border = 'solid';
    document.getElementById('phone').style.borderColor = 'black';
  }

  if(!type){
    document.getElementById('errtype').style.display = 'block';
    check[3] = -1;
    document.getElementById('type').style.border = 'solid';
    document.getElementById('type').style.borderColor = 'red';
  }
  else{
    document.getElementById('errtype').style.display = 'none';
    check[3]=1;
    document.getElementById('type').style.border = 'solid';
    document.getElementById('type').style.borderColor = 'black';
  }

  if(!terms){
    document.getElementById('errterm').style.display = 'block';
    document.getElementById('terms').style.border = 'solid';
    document.getElementById('terms').style.borderColor = 'red';
    check[4] = -1;
  }
  else{
    check[4]=1;
    document.getElementById('errterm').style.display = 'none';
    document.getElementById('terms').style.border = 'solid';
    document.getElementById('terms').style.borderColor = 'black';
  }
  let total=0;
  for(let i=0 ;i<check.length;i++){
    if(check[i] === -1){
      total=0;
      return;
    }
    else total++;
  }

  if(total===5)window.location.href = '../ContactPage/thank.html';

});

function isAlphabet(name){
  for( let i =0;i<name.length;i++){
    let chars = name.charCodeAt(i);
    if(!((chars >= 65 && chars <= 90) || (chars >= 97 && chars <= 122))){
      return -1;
    }
  }
  return 1;
};

function detectAlpha(phone){
  for(let i =0;i<phone.length;i++){
    let digits = phone.charCodeAt(i);
    if(((digits >= 65 && digits <= 90) || (digits >= 97 && digits <= 122))){
      return -1;
    }
  }
  return 1;
}

document.addEventListener('DOMContentLoaded', function() {
  const dropdownBtn = document.querySelector('.drpbtn');
  const dropdownMenu = document.querySelector('.dropdown');

  dropdownBtn.addEventListener('click', function(event) {
      event.preventDefault();
      dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
  });

  document.addEventListener('click', function(event) {
      if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.style.display = 'none';
      }
  });
});




