document.getElementById('y').textContent = new Date().getFullYear();
var res = document.getElementById('res');
document.getElementById('run').addEventListener('click', function(){
  res.classList.remove('run');
  void res.offsetWidth;
  res.classList.add('run');
});
