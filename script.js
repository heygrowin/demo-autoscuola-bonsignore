// Demo: nav toggle + front-end-only form notice. No data is sent.
(function(){
  var t=document.querySelector('.navtoggle'),n=document.getElementById('nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});}
  try{var c=new URLSearchParams(location.search).get('c');
    if(c){var q=c.toLowerCase(),sel=document.querySelector('select[data-prefill]');
      if(sel){for(var i=0;i<sel.options.length;i++){if(sel.options[i].value.toLowerCase().indexOf(q)>-1||sel.options[i].text.toLowerCase().indexOf(q)>-1){sel.selectedIndex=i;break;}}}}
  }catch(e){}
  document.querySelectorAll('form[data-demo]').forEach(function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var m=f.querySelector('.demo-msg');
      if(m){m.classList.add('show');m.setAttribute('role','status');m.scrollIntoView({behavior:'smooth',block:'center'});}
    });
  });
})();
