-- mudar rotas dos arquivos

LOAD DATA INFILE "C:/Users/des/Desktop/Project-TechMan/docs/dados/perfis.csv"
INTO TABLE perfis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/des/Desktop/Project-TechMan/docs/dados/usuarios.csv"
INTO TABLE usuarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/des/Desktop/Project-TechMan/docs/dados/equipamentos.csv"
INTO TABLE equipamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/des/Desktop/Project-TechMan/docs/dados/comentarios.csv"
INTO TABLE comentarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;