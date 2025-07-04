# Guia de Treinos
Guia de Treino Interativo
Um painel de treino dinâmico e interativo construído com HTML, CSS e JavaScript puro, projetado para ser totalmente personalizável pelo usuário. Permite que o usuário acompanhe, edite e avalie seus treinos de forma inteligente e persistente no navegador.

🚀 Acesso ao Projeto
Você pode acessar a versão ao vivo do projeto através do GitHub Pages:
https://matheuscampos-it.github.io/guia-de-treinos/

✨ Funcionalidades
O projeto conta com um conjunto robusto de funcionalidades para uma experiência completa de acompanhamento de treinos:

Plano de Treino Editável:
Adicione e remova dias de treino em cada fase (A, B, C), com um limite de 7 dias por fase.
Edite o nome de cada dia de treino.
Adicione, edite e remova exercícios individualmente de cada treino.

Sistema de "Smart Score":
Ao finalizar um treino, o usuário recebe uma nota de 0 a 10.
A nota é calculada com base em uma fórmula exigente que considera:
O percentual de exercícios concluídos (nota base).
A dificuldade geral do treino (que funciona como um multiplicador).
O tempo de cardio realizado (com penalidades severas por não fazer, uma faixa neutra e bônus por esforço extra).
A nota máxima de 10.0 só é alcançável sob condições estritas, tornando-a um verdadeiro desafio.

Dashboard de Estatísticas:
Um painel inicial que exibe dados mensais, como dias treinados, média de nota e minutos totais de cardio.
Mostra também o treino mais frequente para análise de rotina.

Histórico em Calendário:
Uma visualização em formato de calendário que marca os dias em que houve treino.
Ao passar o mouse sobre um dia marcado, um "tooltip" exibe os detalhes e a nota do treino daquele dia.

Persistência de Dados:
Todo o plano de treino customizado e o histórico de treinos concluídos são salvos localmente no navegador usando localStorage. Assim, o usuário nunca perde seus dados ao fechar ou reabrir a página.

Interface Moderna e Responsiva:
Construído com TailwindCSS para um design limpo, moderno e que se adapta a diferentes tamanhos de tela.

Tema escuro ("dark mode") com detalhes em roxo e animações sutis para uma experiência de usuário agradável.

🛠️ Tecnologias Utilizadas
Este projeto foi construído do zero utilizando tecnologias web fundamentais, sem o uso de frameworks de JavaScript.

HTML5
CSS3 (com TailwindCSS)
JavaScript (Vanilla JS)
