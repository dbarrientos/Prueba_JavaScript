function Chat(msg, idmsg){
	this.mensaje = msg;
	this.idmsg = idmsg;
	
}

Chat.chats =[];

Chat.enviar = function(e){
	/*
	obtener titulo descripcion 
	agregar valores a arreglo
	*/
	e.preventDefault();
	
	var msg = document.getElementById('msg').value;
	if (msg != null) {
		var idmsg = null;
		for (var i = 0; i <= Chat.chats.length; i++) {
			var idmsg = i;
			var chat = new Chat(msg, idmsg);
			Chat.chats.push(chat);
			Chat.cancelar(e);
			Chat.mostrar();
		}else{
			console.log('error')
		}
		
	};
}

Chat.cancelar = function(e){
	e.preventDefault(); // previene comportamiento por defecto del formulario
	
	var msg = document.getElementById('msg');
	
	msg.value ='';
}

Chat.mostrar = function(){
	var mensajes = '';
	Chat.chats.map(function(elemento, indice){
		mensajes = mensajes + '<option>'
					+ elemento.mensaje + '</option>';	 
	});
	console.log(mensajes);

	document.getElementById('mensajes').innerHTML = mensajes;

	/*
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
	*/

}

Chat.guardar = function(){
	var chats = Chat.chats;
	var chatsEncode = JSON.stringify(chats);
	localStorage.setItem('chats', chatEncode);
}

Chat.obtenerChats = function(){
	var chatsEncoded = localStorage.getItem('chats');
	//console.log(twitsEncoded);  Validacion en caso que twitEncoded sea null
	if (chatsEncoded != null) {
		var chats = JSON.parse(chatsEncoded);
		Chat.chats = chats;
	}else{
		var chats = JSON.parse(chatsEncoded);
		Chat.chats = [];
	}


}

Chat.obtenerChats();
Chat.mostrar();


/*<article>
	<h2>Título</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</article>*/


