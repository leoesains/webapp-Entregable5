'use strict';
    
    var fecha = new Date();
    document.getElementById("orderDate").value = fecha.toJSON().slice(0,10);

    document.querySelector("#btn_volver_alta_compra").addEventListener("click", volver);
    document.querySelector("#btn_enviar_alta_compra").addEventListener("click", generarCompraIrADetalle);
    
    function volver(){
        location.href="compra.html";
    }

    function generarCompraIrADetalle(){
        
        location.href="form_alta_detalle_compra.html";
    }

    function cargarClientes(){
        var clientes = new Array();
        var i 
        for (i = 0; i <= 10; i++) { 
            clientes[i] = "id_"+i;
        }
        const $select = document.querySelector("#select_cliente");
        for (i = 0; i <= 10; i++) {
            const option = document.createElement('option');
            option.value = clientes[i];
            option.text = clientes[i];
            $select.appendChild(option);
        }
    }
    
  
    cargarClientes();

    //********************************************** */