function injected_main(){
	let active = document.querySelectorAll('.kb-dashboard-performer__status_type_inactive');
	setInterval(onReload, 500000);
	
	function onReload(){
		let activeSumm = active.length;
		document.location.reload(true);
		if(active.length > activeSumm){
			var audio = new Audio(); // Создаём новый элемент Audio
			audio.src = 'new_task.mp3'; // Указываем путь к звуку "клика"
			audio.autoplay = true; // Автоматически запускаем
		}		
	}
}