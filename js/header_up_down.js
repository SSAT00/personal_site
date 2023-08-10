close = document.querySelector('.close_menu');
header = document.querySelector('.header');
btn_to_show_header = document.querySelector('.btn_to_show_header');
close.addEventListener('click', ()=>{
	header.classList.remove('go_down');
	header.classList.add('go_up');
	btn_to_show_header.classList.remove('go_up');
	btn_to_show_header.classList.add('go_down');
})
btn_to_show_header.addEventListener('click', ()=>{
	header.classList.remove('go_up');
	header.classList.add('go_down');
	btn_to_show_header.classList.add('go_up');
	btn_to_show_header.classList.remove('go_down');
})