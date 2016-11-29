	window.onload=manejarclick;
	var imagf;
	imagf="<img src='";
	var medidas="'/>";
	var imgcambiar="<img src='";
	var imgsalir="<img src='./img/IP.jpg'/> ";



    
	function manejarclick(){

	var uno=document.getElementById("I1");
	uno.addEventListener("click",function() 
									{
										clicken("./img/f1.jpg");
										
								});
	uno.addEventListener("mouseover",function() {
									cambiar("./img/f1.jpg");
								});
	uno.addEventListener("mouseout",salir);

                  
              
	var dos=document.getElementById("I2");
	dos.addEventListener("click",function()
									 {
                  						clicken("./img/f2.jpg");
                  						
								});
	dos.addEventListener("mouseover",function() {
									cambiar("./img/f2.jpg");
									});
	dos.addEventListener("mouseout",salir);
               


	var tres=document.getElementById("I3");
	tres.addEventListener("click",function() 
									{
										clicken("./img/f3.jpg");
										
								});
	tres.addEventListener("mouseover",function() {
									cambiar("./img/f3.jpg");
									});
	tres.addEventListener("mouseout",salir);

               
	var cuatro=document.getElementById("I4");
	cuatro.addEventListener("click",function() 
									{
										clicken("./img/f4.jpg");
										
								});
	cuatro.addEventListener("mouseover",function() {
									cambiar("./img/f4.jpg");
									});
	cuatro.addEventListener("mouseout",salir);
								  


	var cinco=document.getElementById("I5");
	cinco.addEventListener("click",function()
									 {
									 	clicken("./img/f5.jpg");
									 	
								});
	cinco.addEventListener("mouseover",function() {
									cambiar("./img/f5.jpg");
									});
	cinco.addEventListener("mouseout",salir);
								  


	var seis=document.getElementById("I6");
	seis.addEventListener("click",function() 
									{
                   						clicken("./img/f6.jpg");
                   						
								});
	seis.addEventListener("mouseover",function() {
									cambiar("./img/f6.jpg");
									});
	seis.addEventListener("mouseout",salir);
               


	var siete=document.getElementById("I7");
	siete.addEventListener("click",function() 
									{
										clicken("./img/f7.jpg");
										
								});
	siete.addEventListener("mouseover",function() {
									cambiar("./img/f7.jpg");
									});
	siete.addEventListener("mouseout",salir);
                   
               
	var ocho=document.getElementById("I8");
	ocho.addEventListener("click",function() 
									{
                   						clicken("./img/f8.jpg");
                   						
								});
	ocho.addEventListener("mouseover",function() {
									cambiar("./img/f8.jpg");
									});
	ocho.addEventListener("mouseout",salir);
               

}

function clicken(imagen){

imagf +=imagen;

imagf +=medidas;


var m=document.getElementById("principal").innerHTML = imagf;

imgsalir=imagf;
imagf="<img src='";

}
function cambiar(imagen){

	imgcambiar +=imagen;

	imgcambiar +=medidas;

	var u=document.getElementById("principal").innerHTML = imgcambiar;
	imgcambiar="<img src='";
}

function salir(){

	var p=document.getElementById("principal").innerHTML = imgsalir;

	

}

