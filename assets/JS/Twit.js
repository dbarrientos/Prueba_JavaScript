function Chat(msg){
	this.mensaje = msg;
	
}

Chat.chats =[];

Chat.enviar = function(e){
	/*
	obtener titulo descripcion 
	agregar valores a arreglo
	*/
	e.preventDefault();
	
	var msg = document.getElementById('msg').value;
	var chat = new Chat(msg);
	Chat.chats.push(chat);
	Twit.cancelar(e);
	Twit.mostrar();
}

Twit.cancelar = function(e){
	e.preventDefault(); // previene comportamiento por defecto del formulario
	
	var msg = document.getElementById('msg');
	
	msg.value ='';


