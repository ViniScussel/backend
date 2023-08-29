//criando tabelas
CREATE TABLE usuarios(
    nome VARCHAR(12),
    email VARCHAR(100),
    idade INT
);

//adicionando dados
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Scussel", "rezendestark@gmail.com", 16
);
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Lucas", "luquinda@gmail.com", 15
);
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Thiago", "pegadordevelha@gmail.com", 29
);
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Arthur", "amebaemcoma@hotmail.com", 16
);

//listagem de dados
SELECT * FROM usuarios WHERE idade = 8;

//deletar dados
DELETE FROM usuarios WHERE idade = 29;

/atualizar a tabela

UPDATE usuarios SET idade = 17 WHERE nome = "Scussel";