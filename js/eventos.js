 function mostrarComputadores(){
console.log("desde jquery");
	$.ajax({    
	    url : 'http://localhost:8080/api/Computer/all',
	    type : 'GET',
	    dataType : 'json',
		success:function(computadores){
		let datoscomputadores ="";
		for (i=0; i<computadores.length; i++){
			datoscomputadores = "<tr>";
			datoscomputadores += "<td>"+computadores[i].id+"</td>";
			datoscomputadores += "<td>"+computadores[i].name+"</td>";
			datoscomputadores += "<td>"+computadores[i].brand+"</td>";
			datoscomputadores += "<td>"+computadores[i].year+"</td>";
			datoscomputadores += "<td>"+computadores[i].description+"</td>";
			datoscomputadores += "<td><a href = '#' onclick = 'editar("+computadores[i].id+");' data-bs-toggle='modal' data-bs-target='#modalEditar' class = 'btn btn-warning'>Editar</a></td>";
			datoscomputadores += "<td><a href = '#' onclick = 'eliminar("+computadores[i].id+");' class = 'btn btn-warning'>Eliminar</a></td>";
			datoscomputadores += "</tr>";

			$("#listaComputadores").append(datoscomputadores);
		}

		
	}

	});

}





