function carregarComentarios() {
    const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
    const lista = document.getElementById('comentarios-lista');
    lista.innerHTML = '';

    comentarios.forEach(comentario => {
        const div = document.createElement('div');
        div.textContent = comentario;
        lista.appendChild(div);
    });
}

function adicionarComentario() {
    const comentarioTexto = document.getElementById('comentario-texto').value;
    if (comentarioTexto.trim() === "") {
        alert("Por favor, escreva um comentário!");
        return;
    }

    const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
    comentarios.push(comentarioTexto);
    localStorage.setItem('comentarios', JSON.stringify(comentarios));

    carregarComentarios();
    document.getElementById('comentario-texto').value = ""; // Limpar campo de texto
}

// Carregar comentários ao abrir a página
window.onload = carregarComentarios;
