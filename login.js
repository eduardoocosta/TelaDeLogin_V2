alert("Loading...");

     function senhaesquecida(){
        var senha=prompt("Digite uma nova senha:");("Confirme a nova senha");
        var senha=prompt("Confirme a nova senha");
     }

     function validarFormulario() {
      var email = document.getElementById("inputEmail3").value;
      var senha = document.getElementById("inputPassword3").value;
   
      if (email.trim() === "" || senha.trim() === "") {
          alert("É obrigatório preencher todos os campos.");
          return false;
      }
   
      return true;
   }
