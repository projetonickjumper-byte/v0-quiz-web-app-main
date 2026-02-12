import type { Question, Category, Difficulty } from "./types"

export const questions: Question[] = [
  // ============================================================
  // LINGUA PORTUGUESA (40 questoes - nivel dificil/medio)
  // ============================================================
  {
    id: 1,
    text: "Considere o trecho: 'Os servidores que trabalham no IFPI devem cumprir as normas estabelecidas.' A oracao subordinada presente classifica-se como:",
    options: [
      "Subordinada substantiva objetiva direta",
      "Subordinada adjetiva restritiva",
      "Subordinada adjetiva explicativa",
      "Subordinada adverbial causal",
      "Coordenada sindetica aditiva"
    ],
    correctIndex: 1,
    explanation: "A oracao 'que trabalham no IFPI' restringe o sentido de 'servidores', delimitando quais servidores devem cumprir as normas. Trata-se de subordinada adjetiva restritiva (sem virgula).",
    category: "portugues",
    difficulty: "medio"
  },
  {
    id: 2,
    text: "Assinale a alternativa em que a concordancia verbal esta CORRETA:",
    options: [
      "Fazem tres anos que trabalho aqui.",
      "Houveram muitos candidatos aprovados.",
      "Existem, no quadro de servidores, varios tecnicos administrativos.",
      "Faz dois meses que iniciaram as aulas, mas houveram reclamacoes.",
      "Haviam diversas irregularidades no processo."
    ],
    correctIndex: 2,
    explanation: "O verbo 'existir' e pessoal e concorda com o sujeito 'varios tecnicos administrativos'. 'Haver' no sentido de existir e 'fazer' indicando tempo sao impessoais (ficam no singular).",
    category: "portugues",
    difficulty: "medio"
  },
  {
    id: 3,
    text: "Em 'A educacao e a arma mais poderosa que voce pode usar para mudar o mundo' (Nelson Mandela), a figura de linguagem predominante e:",
    options: [
      "Metonimia",
      "Hiperbole",
      "Metafora",
      "Catacrese",
      "Eufemismo"
    ],
    correctIndex: 2,
    explanation: "A metafora consiste na comparacao implicita. Ao chamar a educacao de 'arma', estabelece-se relacao de semelhanca sem uso de conectivo comparativo ('como', 'tal qual').",
    category: "portugues",
    difficulty: "facil"
  },
  {
    id: 4,
    text: "Assinale a alternativa em que TODAS as palavras estao grafadas corretamente conforme o Acordo Ortografico vigente:",
    options: [
      "Previleggio, excecao, hesitar",
      "Privilegio, excecao, hesitar",
      "Privilegio, excessao, ezitar",
      "Previllegio, excessao, hesitar",
      "Privilegio, excecao, ezitar"
    ],
    correctIndex: 1,
    explanation: "A grafia correta e: privilegio (com 'i'), excecao (com 'c') e hesitar (com 'h' e 's').",
    category: "portugues",
    difficulty: "facil"
  },
  {
    id: 5,
    text: "No periodo 'Embora estudasse muito, nao conseguiu aprovacao no concurso', a oracao subordinada expressa ideia de:",
    options: ["Causa", "Consequencia", "Concessao", "Condicao", "Finalidade"],
    correctIndex: 2,
    explanation: "A conjuncao 'embora' introduz oracao subordinada adverbial concessiva, expressando fato contrario ao esperado na oracao principal.",
    category: "portugues",
    difficulty: "facil"
  },
  {
    id: 6,
    text: "Considere: 'O diretor comunicou aos servidores que haveria mudancas no calendario.' O 'que' nesta oracao e:",
    options: [
      "Pronome relativo",
      "Conjuncao integrante",
      "Conjuncao consecutiva",
      "Pronome interrogativo",
      "Particula expletiva"
    ],
    correctIndex: 1,
    explanation: "O 'que' e conjuncao integrante porque introduz oracao subordinada substantiva (objetiva direta). Pode ser substituido por 'isto': comunicou isto aos servidores.",
    category: "portugues",
    difficulty: "medio"
  },
  {
    id: 7,
    text: "A crase esta corretamente empregada em:",
    options: [
      "Entreguei o documento a ela.",
      "Fui a Brasilia resolver pendencias.",
      "O edital se refere a vaga de tecnico administrativo.",
      "Estou a par das mudancas no edital.",
      "Voltamos a casa cedo naquele dia."
    ],
    correctIndex: 2,
    explanation: "Em 'refere a vaga', ha crase porque 'referir-se' exige preposicao 'a' e 'vaga' e substantivo feminino que aceita artigo 'a'. Nao se usa crase antes de pronomes pessoais, nem em 'a par'.",
    category: "portugues",
    difficulty: "medio"
  },
  {
    id: 8,
    text: "Na frase 'Os alunos cujos pais comparecerem a reuniao receberao informacoes adicionais', o pronome 'cujos' estabelece relacao de:",
    options: ["Causa", "Consequencia", "Posse", "Lugar", "Tempo"],
    correctIndex: 2,
    explanation: "O pronome relativo 'cujo' sempre indica relacao de posse entre antecedente e consequente. Equivale a 'dos quais'.",
    category: "portugues",
    difficulty: "facil"
  },
  {
    id: 9,
    text: "Identifique a alternativa com regencia verbal INCORRETA:",
    options: [
      "Aspiramos a uma vaga no IFPI.",
      "O professor assistiu ao filme com os alunos.",
      "O cargo implica em grandes responsabilidades.",
      "Prefiro estudar a trabalhar.",
      "Obedeco ao regulamento da instituicao."
    ],
    correctIndex: 2,
    explanation: "O verbo 'implicar', no sentido de acarretar, e transitivo direto: 'O cargo implica grandes responsabilidades' (sem preposicao 'em').",
    category: "portugues",
    difficulty: "dificil"
  },
  {
    id: 10,
    text: "No texto oficial, o pronome de tratamento adequado para se dirigir a um Reitor de Instituto Federal e:",
    options: [
      "Vossa Excelencia",
      "Vossa Senhoria",
      "Vossa Magnificencia",
      "Vossa Santidade",
      "Vossa Eminencia"
    ],
    correctIndex: 2,
    explanation: "'Vossa Magnificencia' e utilizado para Reitores de universidades e institutos federais. 'Vossa Excelencia' e para autoridades do Executivo, Legislativo e Judiciario.",
    category: "portugues",
    difficulty: "dificil"
  },
  {
    id: 11,
    text: "Assinale a alternativa que apresenta exemplo de linguagem denotativa:",
    options: [
      "Ele tem um coracao de pedra.",
      "A reuniao sera realizada as 14 horas na sala 201.",
      "O tempo voa quando estamos ocupados.",
      "Ela e uma flor no jardim da vida.",
      "As palavras dele cortavam como facas."
    ],
    correctIndex: 1,
    explanation: "A linguagem denotativa e objetiva e literal. A frase sobre a reuniao apresenta informacoes diretas e factuais, enquanto as demais usam linguagem figurada (conotacao).",
    category: "portugues",
    difficulty: "facil"
  },
  {
    id: 12,
    text: "No trecho 'Nao so estudou o edital, mas tambem resolveu questoes anteriores', a relacao entre as oracoes e de:",
    options: ["Adversidade", "Adicao", "Alternancia", "Conclusao", "Explicacao"],
    correctIndex: 1,
    explanation: "A locucao 'nao so... mas tambem' e classificada como aditiva, pois soma informacoes.",
    category: "portugues",
    difficulty: "facil"
  },
  {
    id: 13,
    text: "Em relacao ao uso do 'por que', 'por que', 'porque' e 'porque', assinale a alternativa correta:",
    options: [
      "Nao sei por que ele faltou a prova.",
      "Nao sei por que ele faltou a prova.",
      "Nao sei porque ele faltou a prova.",
      "Nao sei o por que ele faltou a prova.",
      "Nao sei o por que ele faltou a prova."
    ],
    correctIndex: 0,
    explanation: "'Por que' (separado e sem acento) e usado em perguntas indiretas ou quando pode ser substituido por 'pelo qual/por qual motivo'.",
    category: "portugues",
    difficulty: "medio"
  },
  {
    id: 14,
    text: "Na frase 'Informou-se de que a prova seria adiada', a colocacao pronominal esta correta porque:",
    options: [
      "O verbo esta no gerundio",
      "Ha uma palavra atrativa antes do verbo",
      "O sujeito e indefinido",
      "A enclise e a forma padrao em oracoes afirmativas iniciadas por verbo",
      "O pronome reflexivo deve sempre vir apos o verbo"
    ],
    correctIndex: 3,
    explanation: "Em oracoes declarativas afirmativas sem palavra atrativa (pronome relativo, negacao, adverbio), a enclise e a colocacao padrao na norma culta brasileira.",
    category: "portugues",
    difficulty: "dificil"
  },
  {
    id: 15,
    text: "Assinale a alternativa em que o termo destacado funciona como aposto:",
    options: [
      "O aluno estudioso passou no concurso.",
      "Teresina, capital do Piaui, sediara o concurso.",
      "O professor dedicado recebeu homenagem.",
      "Aquele servidor trabalha no IFPI.",
      "A prova dificil eliminou muitos candidatos."
    ],
    correctIndex: 1,
    explanation: "O aposto e um termo explicativo que se refere a outro, geralmente isolado por virgulas. 'Capital do Piaui' e aposto explicativo de 'Teresina'.",
    category: "portugues",
    difficulty: "medio"
  },
  {
    id: 16,
    text: "Na oração 'Se eu fosse aprovado, mudaria de cidade', os verbos estao, respectivamente, nos seguintes tempos e modos:",
    options: [
      "Preterito imperfeito do subjuntivo e futuro do preterito do indicativo",
      "Presente do subjuntivo e futuro do presente do indicativo",
      "Preterito perfeito do indicativo e condicional",
      "Imperfeito do indicativo e futuro do subjuntivo",
      "Futuro do subjuntivo e preterito imperfeito do indicativo"
    ],
    correctIndex: 0,
    explanation: "'Fosse' esta no preterito imperfeito do subjuntivo e 'mudaria' no futuro do preterito do indicativo. E a correlacao tipica de oracoes condicionais contrarias ao fato.",
    category: "portugues",
    difficulty: "dificil"
  },
  {
    id: 17,
    text: "Identifique o periodo composto por coordenacao:",
    options: [
      "Quando chegou, a prova ja havia comecado.",
      "Estudou bastante, porem nao foi aprovado.",
      "O candidato que se preparou foi classificado.",
      "Embora estivesse cansado, continuou estudando.",
      "E necessario que todos participem da reuniao."
    ],
    correctIndex: 1,
    explanation: "'Estudou bastante, porem nao foi aprovado' e composto por coordenacao. 'Porem' e conjuncao adversativa que liga oracoes independentes sintaticamente.",
    category: "portugues",
    difficulty: "medio"
  },
  {
    id: 18,
    text: "A funcao sintatica do termo 'aos servidores' em 'O reitor concedeu ferias aos servidores' e:",
    options: [
      "Objeto direto",
      "Objeto indireto",
      "Complemento nominal",
      "Adjunto adverbial",
      "Agente da passiva"
    ],
    correctIndex: 1,
    explanation: "'Aos servidores' e objeto indireto do verbo 'concedeu' (quem concede, concede algo A alguem). 'Ferias' e o objeto direto.",
    category: "portugues",
    difficulty: "medio"
  },
  {
    id: 19,
    text: "Assinale a alternativa que apresenta CORRETA concordancia nominal:",
    options: [
      "E proibido a entrada de estranhos.",
      "Seguem anexo os documentos solicitados.",
      "As alunas estavam meio cansadas apos a prova.",
      "Haviam bastantes candidatos na sala.",
      "Os servidores estavam alerta durante a vistoria."
    ],
    correctIndex: 4,
    explanation: "'Alerta' e adverbio e permanece invariavel. 'Meio' como adverbio (= um pouco) tambem e invariavel. 'Anexo' deve concordar: 'anexos'. 'Bastantes' esta correto como adjetivo, mas 'haviam' esta errado.",
    category: "portugues",
    difficulty: "dificil"
  },
  {
    id: 20,
    text: "No fragmento 'Conquanto o edital fosse claro, muitos candidatos interpretaram as regras de forma equivocada', a conjuncao 'conquanto' pode ser substituida, sem alteracao de sentido, por:",
    options: ["Porque", "Portanto", "Embora", "Conforme", "Assim que"],
    correctIndex: 2,
    explanation: "'Conquanto' e conjuncao concessiva, equivalente a 'embora', 'ainda que', 'mesmo que'. Introduz ideia contraria ao que se espera.",
    category: "portugues",
    difficulty: "dificil"
  },

  // ============================================================
  // LEGISLACAO (40 questoes - todos os topicos do edital)
  // ============================================================
  // CF/88 - Titulo VIII, Cap III, Secao I (Educacao)
  {
    id: 21,
    text: "Segundo a Constituicao Federal de 1988 (art. 205), a educacao e direito de todos e dever:",
    options: [
      "Exclusivamente do Estado",
      "Exclusivamente da familia",
      "Do Estado e da familia",
      "Do Estado, da familia e da sociedade civil organizada",
      "Apenas da Uniao e dos Municipios"
    ],
    correctIndex: 2,
    explanation: "Art. 205 da CF/88: 'A educacao, direito de todos e dever do Estado e da familia, sera promovida e incentivada com a colaboracao da sociedade.'",
    category: "legislacao",
    difficulty: "facil"
  },
  {
    id: 22,
    text: "A Constituicao Federal estabelece que o ensino sera ministrado com base nos seguintes principios, EXCETO:",
    options: [
      "Igualdade de condicoes para o acesso e permanencia na escola",
      "Liberdade de aprender, ensinar, pesquisar e divulgar o pensamento",
      "Pluralismo de ideias e de concepcoes pedagogicas",
      "Ensino religioso obrigatorio em todas as etapas da educacao basica",
      "Gratuidade do ensino publico em estabelecimentos oficiais"
    ],
    correctIndex: 3,
    explanation: "Art. 206 da CF/88 lista os principios do ensino. O ensino religioso e de matricula facultativa (art. 210, par. 1), nao obrigatorio.",
    category: "legislacao",
    difficulty: "medio"
  },
  {
    id: 23,
    text: "Conforme o art. 208 da CF/88, o dever do Estado com a educacao sera efetivado mediante a garantia de educacao basica obrigatoria e gratuita dos:",
    options: [
      "6 aos 14 anos de idade",
      "4 aos 17 anos de idade",
      "5 aos 15 anos de idade",
      "7 aos 18 anos de idade",
      "4 aos 14 anos de idade"
    ],
    correctIndex: 1,
    explanation: "A EC 59/2009 alterou o art. 208, I da CF: educacao basica obrigatoria e gratuita dos 4 aos 17 anos, assegurada inclusive para os que nao tiveram acesso na idade propria.",
    category: "legislacao",
    difficulty: "medio"
  },
  {
    id: 24,
    text: "De acordo com o art. 207 da CF/88, as universidades gozam de autonomia didatico-cientifica, administrativa e de gestao financeira e patrimonial, e obedecerao ao principio de indissociabilidade entre:",
    options: [
      "Ensino, pesquisa e extensao",
      "Ensino, avaliacao e gestao",
      "Pesquisa, extensao e administracao",
      "Ensino, planejamento e avaliacao",
      "Gestao, pesquisa e inovacao"
    ],
    correctIndex: 0,
    explanation: "Art. 207 da CF/88: as universidades obedecerao ao principio de indissociabilidade entre ensino, pesquisa e extensao.",
    category: "legislacao",
    difficulty: "facil"
  },
  // Lei 8.112/90
  {
    id: 25,
    text: "De acordo com a Lei 8.112/90, o servidor publico estavel so perdera o cargo em virtude de:",
    options: [
      "Decisao administrativa simples do chefe imediato",
      "Sentenca judicial transitada em julgado ou processo administrativo disciplinar",
      "Avaliacao de desempenho periodica desfavoravel, sem direito a defesa",
      "Solicitacao do orgao fiscalizador, independente de processo",
      "Decisao unilateral do dirigente maximo do orgao"
    ],
    correctIndex: 1,
    explanation: "Art. 22 da Lei 8.112/90 e art. 41, par. 1 da CF/88: servidor estavel so perde o cargo por sentenca judicial transitada em julgado, PAD (assegurada ampla defesa), ou avaliacao periodica de desempenho.",
    category: "legislacao",
    difficulty: "medio"
  },
  {
    id: 26,
    text: "De acordo com a Lei 8.112/90, a posse em cargo publico devera ocorrer no prazo de:",
    options: [
      "15 dias contados da publicacao do ato de provimento",
      "30 dias contados da publicacao do ato de provimento",
      "30 dias contados da nomeacao",
      "60 dias contados da aprovacao no concurso",
      "15 dias contados da convocacao"
    ],
    correctIndex: 1,
    explanation: "Art. 13, par. 1 da Lei 8.112/90: 'A posse ocorrera no prazo de 30 dias contados da publicacao do ato de provimento.' Prazo improrrogavel.",
    category: "legislacao",
    difficulty: "facil"
  },
  {
    id: 27,
    text: "Segundo a Lei 8.112/90, sao formas de provimento de cargo publico, EXCETO:",
    options: [
      "Nomeacao",
      "Readaptacao",
      "Reversao",
      "Transferencia",
      "Reintegracao"
    ],
    correctIndex: 3,
    explanation: "A transferencia foi revogada pela Lei 9.527/97. As formas de provimento (art. 8) sao: nomeacao, promocao, readaptacao, reversao, aproveitamento, reintegracao e reconducao.",
    category: "legislacao",
    difficulty: "medio"
  },
  {
    id: 28,
    text: "De acordo com a Lei 8.112/90, a penalidade de demissao sera aplicada nos casos de, EXCETO:",
    options: [
      "Crime contra a administracao publica",
      "Abandono de cargo",
      "Inassiduidade habitual",
      "Atraso eventual de 15 minutos no horario de trabalho",
      "Improbidade administrativa"
    ],
    correctIndex: 3,
    explanation: "Art. 132 da Lei 8.112/90 lista os casos de demissao. Atraso isolado nao configura hipotese de demissao.",
    category: "legislacao",
    difficulty: "facil"
  },
  {
    id: 29,
    text: "De acordo com a Lei 8.112/90, o estagio probatorio tem duracao de:",
    options: ["12 meses", "24 meses", "36 meses", "48 meses", "6 meses"],
    correctIndex: 2,
    explanation: "O estagio probatorio e de 3 anos (36 meses), conforme entendimento consolidado do STF, coincidindo com o periodo para aquisicao da estabilidade (EC 19/98).",
    category: "legislacao",
    difficulty: "facil"
  },
  {
    id: 30,
    text: "Na Lei 8.112/90, sao consideradas licencas concedidas ao servidor, EXCETO:",
    options: [
      "Licenca por motivo de doenca em pessoa da familia",
      "Licenca para o servico militar",
      "Licenca para atividade politica",
      "Licenca para tratar de interesses particulares",
      "Licenca para abertura de empresa privada"
    ],
    correctIndex: 4,
    explanation: "Art. 81 da Lei 8.112/90 preve licencas por doenca em pessoa da familia, afastamento do conjuge, servico militar, atividade politica, capacitacao e interesses particulares. Nao ha licenca para abertura de empresa.",
    category: "legislacao",
    difficulty: "medio"
  },
  {
    id: 31,
    text: "Conforme a Lei 8.112/90, o servidor que, sem justa causa, nao retomar o exercicio no prazo legal, ao final de licenca ou afastamento, sera caracterizado por:",
    options: [
      "Inassiduidade habitual",
      "Abandono de cargo",
      "Falta injustificada",
      "Desatencao funcional",
      "Ausencia temporaria"
    ],
    correctIndex: 1,
    explanation: "Art. 138: configura abandono de cargo a ausencia intencional do servidor ao servico por mais de 30 dias consecutivos. A inassiduidade habitual e a falta ao servico por 60 dias interpolados em 12 meses.",
    category: "legislacao",
    difficulty: "dificil"
  },
  {
    id: 32,
    text: "Segundo a Lei 8.112/90, o servidor em estagio probatorio NAO podera obter licenca para:",
    options: [
      "Tratamento de saude",
      "Motivo de doenca em pessoa da familia",
      "Tratar de interesses particulares",
      "Servico militar",
      "Gestante"
    ],
    correctIndex: 2,
    explanation: "Art. 20, par. 4: ao servidor em estagio probatorio NAO sera concedida licenca para tratar de interesses particulares. As demais licencas sao permitidas.",
    category: "legislacao",
    difficulty: "dificil"
  },
  // Lei 11.892/2008 - Institutos Federais
  {
    id: 33,
    text: "A Lei 11.892/2008 estabelece que os Institutos Federais devem garantir o minimo de 50% de suas vagas para:",
    options: [
      "Cursos de graduacao e pos-graduacao",
      "Educacao profissional tecnica de nivel medio",
      "Cursos de formacao inicial e continuada",
      "Licenciaturas e programas de formacao pedagogica",
      "Cursos de extensao comunitaria"
    ],
    correctIndex: 1,
    explanation: "Art. 8 da Lei 11.892/2008: minimo de 50% das vagas para educacao profissional tecnica de nivel medio, prioritariamente na forma de cursos integrados.",
    category: "legislacao",
    difficulty: "medio"
  },
  {
    id: 34,
    text: "Conforme a Lei 11.892/2008, os Institutos Federais sao equiparados, para efeitos regulatorios, a:",
    options: [
      "Escolas tecnicas estaduais",
      "Universidades federais",
      "Centros de educacao tecnologica",
      "Fundacoes publicas de ensino",
      "Autarquias municipais"
    ],
    correctIndex: 1,
    explanation: "Art. 2, par. 1: os IFs sao equiparados as universidades federais para fins de regulacao, avaliacao e supervisao. Isso NAO significa que sao universidades.",
    category: "legislacao",
    difficulty: "medio"
  },
  {
    id: 35,
    text: "A Lei 11.892/2008 preve que os Institutos Federais devem destinar o minimo de 20% de suas vagas para:",
    options: [
      "Cursos tecnicos integrados ao ensino medio",
      "Cursos de pos-graduacao stricto sensu",
      "Cursos de licenciatura e formacao pedagogica",
      "Cursos de educacao a distancia",
      "Cursos de extensao e qualificacao profissional"
    ],
    correctIndex: 2,
    explanation: "Art. 8, par. 2: minimo de 20% das vagas para cursos de licenciatura e programas especiais de formacao pedagogica, com vistas a formacao de professores para educacao basica.",
    category: "legislacao",
    difficulty: "dificil"
  },
  {
    id: 36,
    text: "De acordo com a Lei 11.892/2008, a administracao dos Institutos Federais tera como orgao executivo:",
    options: [
      "O Conselho Superior",
      "O Colegio de Dirigentes",
      "A Reitoria como orgao executivo",
      "A Diretoria-Geral",
      "O Conselho Consultivo"
    ],
    correctIndex: 2,
    explanation: "Art. 9: cada Instituto Federal e organizado em estrutura multicampi, com reitoria como orgao executivo e propositivo. O Conselho Superior e orgao deliberativo.",
    category: "legislacao",
    difficulty: "dificil"
  },
  {
    id: 37,
    text: "Conforme a Lei 11.892/2008, o Conselho Superior dos Institutos Federais e um orgao:",
    options: [
      "Meramente consultivo",
      "Maximo e de carater deliberativo",
      "Executivo e administrativo",
      "De assessoramento tecnico",
      "Subordinado a Reitoria"
    ],
    correctIndex: 1,
    explanation: "Art. 10: o Conselho Superior e orgao maximo da instituicao, de carater consultivo e deliberativo. Ele aprova o PDI, o regimento e as normas internas.",
    category: "legislacao",
    difficulty: "medio"
  },
  // LDB - Lei 9.394/96
  {
    id: 38,
    text: "Conforme a LDB (Lei 9.394/96), a educacao basica e formada por:",
    options: [
      "Educacao infantil e ensino fundamental",
      "Ensino fundamental e ensino medio",
      "Educacao infantil, ensino fundamental e ensino medio",
      "Ensino fundamental, ensino medio e ensino superior",
      "Educacao infantil e ensino superior"
    ],
    correctIndex: 2,
    explanation: "Art. 21 da LDB: a educacao escolar compoe-se de: I - educacao basica (educacao infantil, ensino fundamental e ensino medio); II - educacao superior.",
    category: "legislacao",
    difficulty: "facil"
  },
  {
    id: 39,
    text: "Segundo a LDB, a educacao profissional e tecnologica integra-se aos diferentes niveis e modalidades de educacao e as dimensoes do trabalho, da ciencia e da:",
    options: ["Politica", "Economia", "Tecnologia", "Sociedade", "Cultura"],
    correctIndex: 2,
    explanation: "Art. 39 da LDB: '...integra-se aos diferentes niveis e modalidades de educacao e as dimensoes do trabalho, da ciencia e da tecnologia.'",
    category: "legislacao",
    difficulty: "dificil"
  },
  {
    id: 40,
    text: "De acordo com a LDB, a educacao infantil sera oferecida em creches para criancas de ate 3 anos, e em pre-escolas para criancas de:",
    options: [
      "3 a 5 anos",
      "4 a 6 anos",
      "4 a 5 anos",
      "3 a 6 anos",
      "2 a 5 anos"
    ],
    correctIndex: 2,
    explanation: "Art. 30 da LDB: a educacao infantil sera oferecida em creches (ate 3 anos) e pre-escolas (4 e 5 anos). A obrigatoriedade da matricula na pre-escola foi estabelecida pela EC 59/2009.",
    category: "legislacao",
    difficulty: "medio"
  },
  // Resolucao 253/2025 IFPI (Organizacao Didatica)
  {
    id: 41,
    text: "A Resolucao 253/2025 do CONSUP/IFPI trata da Organizacao Didatica do IFPI. De acordo com esse normativo, a frequencia minima exigida para aprovacao nos cursos presenciais e de:",
    options: ["60%", "70%", "75%", "80%", "85%"],
    correctIndex: 2,
    explanation: "Conforme a legislacao educacional e a Organizacao Didatica do IFPI, a frequencia minima exigida para aprovacao e de 75% da carga horaria total do componente curricular.",
    category: "legislacao",
    difficulty: "medio"
  },
  {
    id: 42,
    text: "Conforme as normativas do IFPI e a Resolucao 253/2025, o regime academico adotado pelo Instituto Federal do Piaui para os cursos tecnicos integrados ao ensino medio e:",
    options: [
      "Exclusivamente modular",
      "Exclusivamente por creditos",
      "Regime seriado anual ou semestral",
      "Sistema de ciclos bienais",
      "Regime trimestral"
    ],
    correctIndex: 2,
    explanation: "Os cursos tecnicos integrados do IFPI adotam regime seriado (anual ou semestral), conforme a organizacao didatica estabelecida pela Resolucao.",
    category: "legislacao",
    difficulty: "dificil"
  },
  // Resolucao CNE/CP 1/2021 - Diretrizes EPT
  {
    id: 43,
    text: "A Resolucao CNE/CP n. 1, de 5 de janeiro de 2021, que define as Diretrizes Curriculares Nacionais Gerais para a Educacao Profissional e Tecnologica, estabelece que a EPT abrange os seguintes niveis, EXCETO:",
    options: [
      "Formacao inicial e continuada (FIC)",
      "Educacao profissional tecnica de nivel medio",
      "Educacao profissional tecnologica de graduacao e pos-graduacao",
      "Educacao profissional de nivel basico exclusivo",
      "Cursos de especializacao tecnica"
    ],
    correctIndex: 3,
    explanation: "A Resolucao CNE/CP 1/2021 estabelece que a EPT abrange: formacao inicial e continuada (FIC), educacao profissional tecnica de nivel medio, e educacao profissional tecnologica de graduacao e pos-graduacao.",
    category: "legislacao",
    difficulty: "dificil"
  },
  {
    id: 44,
    text: "Segundo a Resolucao CNE/CP 1/2021, os cursos de educacao profissional tecnica de nivel medio podem ser oferecidos nas seguintes formas, EXCETO:",
    options: [
      "Integrada ao ensino medio",
      "Concomitante ao ensino medio",
      "Subsequente ao ensino medio",
      "Articulada exclusivamente com o ensino fundamental",
      "Na modalidade de educacao a distancia"
    ],
    correctIndex: 3,
    explanation: "Os cursos tecnicos de nivel medio podem ser integrados, concomitantes ou subsequentes ao ensino medio (art. 36 da LDB). Nao ha forma articulada com o ensino fundamental.",
    category: "legislacao",
    difficulty: "medio"
  },

  // ============================================================
  // INFORMATICA (60 questoes - todos os 10 topicos do edital)
  // ============================================================
  // 1. Algoritmos, Logica de Programacao e Estrutura de Dados
  {
    id: 45,
    text: "Qual estrutura de dados utiliza o principio FIFO (First In, First Out)?",
    options: ["Pilha", "Fila", "Arvore binaria", "Tabela hash", "Deque"],
    correctIndex: 1,
    explanation: "A Fila segue FIFO: o primeiro elemento inserido e o primeiro a ser removido. A Pilha segue LIFO (Last In, First Out).",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 46,
    text: "Considere o seguinte algoritmo em pseudocodigo:\n\nfuncao calcular(n)\n  se n <= 1 entao\n    retorne n\n  senao\n    retorne calcular(n-1) + calcular(n-2)\n  fimse\nfimfuncao\n\nQual o valor retornado por calcular(6)?",
    options: ["5", "6", "8", "10", "13"],
    correctIndex: 2,
    explanation: "Trata-se da sequencia de Fibonacci. calcular(0)=0, calcular(1)=1, calcular(2)=1, calcular(3)=2, calcular(4)=3, calcular(5)=5, calcular(6)=8.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 47,
    text: "Qual e a complexidade de tempo do algoritmo de busca binaria em um array ordenado de n elementos?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)", "O(1)"],
    correctIndex: 2,
    explanation: "A busca binaria tem complexidade O(log n) pois divide o espaco de busca pela metade a cada iteracao.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 48,
    text: "Em uma arvore binaria de busca (BST), qual tipo de percurso visita os nos em ordem crescente?",
    options: [
      "Pre-ordem (pre-order)",
      "Em-ordem (in-order)",
      "Pos-ordem (post-order)",
      "Em largura (BFS)",
      "Nenhum percurso garante ordem crescente"
    ],
    correctIndex: 1,
    explanation: "O percurso em-ordem visita: subarvore esquerda, no atual, subarvore direita. Em uma BST, isso produz elementos em ordem crescente.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 49,
    text: "Qual e o resultado da expressao logica: (V AND F) OR (NOT F AND V)?",
    options: ["Verdadeiro", "Falso", "Indeterminado", "Nulo", "Depende do contexto"],
    correctIndex: 0,
    explanation: "(V AND F) = F; (NOT F) = V; (V AND V) = V; F OR V = V (Verdadeiro).",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 50,
    text: "Qual algoritmo de ordenacao tem complexidade media O(n log n) e utiliza a estrategia de dividir para conquistar, escolhendo um pivo para particionar o array?",
    options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Insertion Sort", "Counting Sort"],
    correctIndex: 2,
    explanation: "O Quick Sort utiliza a estrategia dividir-para-conquistar, escolhendo um pivo e particionando o array. Tem complexidade media O(n log n), mas pior caso O(n^2).",
    category: "informatica",
    difficulty: "dificil"
  },
  {
    id: 51,
    text: "Uma tabela hash tem complexidade media de busca, insercao e remocao de:",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)", "O(n^2)"],
    correctIndex: 2,
    explanation: "Tabelas hash tem complexidade media O(1) para busca, insercao e remocao, gracas a funcao hash que mapeia chaves diretamente a posicoes. No pior caso (colisoes), pode ser O(n).",
    category: "informatica",
    difficulty: "dificil"
  },
  // 2. Sistemas Operacionais
  {
    id: 52,
    text: "Qual tecnica de virtualizacao permite executar multiplos sistemas operacionais simultaneamente em uma mesma maquina fisica?",
    options: ["Clustering", "Hypervisor", "Load Balancer", "Proxy reverso", "CDN"],
    correctIndex: 1,
    explanation: "O Hypervisor permite criar e gerenciar multiplas VMs em um unico hardware. Exemplos: VMware, VirtualBox, Hyper-V, KVM.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 53,
    text: "Em Linux, qual comando e utilizado para alterar as permissoes de acesso a um arquivo ou diretorio?",
    options: ["chown", "chmod", "chgrp", "ls -la", "passwd"],
    correctIndex: 1,
    explanation: "chmod (change mode) altera permissoes de leitura, escrita e execucao. chown altera proprietario. chgrp altera grupo.",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 54,
    text: "No contexto de sistemas operacionais, o problema em que dois ou mais processos ficam bloqueados esperando recursos que estao sendo usados uns pelos outros e chamado de:",
    options: [
      "Starvation",
      "Deadlock",
      "Race condition",
      "Buffer overflow",
      "Livelock"
    ],
    correctIndex: 1,
    explanation: "Deadlock (impasse) ocorre quando dois ou mais processos ficam bloqueados mutuamente. As 4 condicoes necessarias sao: exclusao mutua, posse e espera, nao preempcao e espera circular.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 55,
    text: "Qual algoritmo de escalonamento de processos atribui a CPU ao processo que chegou primeiro (nao preemptivo)?",
    options: ["Round Robin", "SJF", "FCFS", "Prioridade", "Lottery"],
    correctIndex: 2,
    explanation: "FCFS (First Come, First Served) atende os processos na ordem de chegada. E simples mas pode causar o efeito comboio (processos curtos esperando processos longos).",
    category: "informatica",
    difficulty: "dificil"
  },
  // 3. Programacao Orientada a Objetos
  {
    id: 56,
    text: "Em POO, o principio que permite que uma classe filha tenha metodos com a mesma assinatura da classe pai, mas com implementacao diferente, e chamado de:",
    options: ["Encapsulamento", "Heranca", "Polimorfismo", "Abstracao", "Composicao"],
    correctIndex: 2,
    explanation: "O polimorfismo permite que metodos com a mesma assinatura tenham comportamentos diferentes (sobrescrita/override).",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 57,
    text: "Em POO, uma classe que nao pode ser instanciada e serve apenas como modelo para outras classes e chamada de:",
    options: [
      "Classe concreta",
      "Classe abstrata",
      "Classe estatica",
      "Interface parcial",
      "Classe generica"
    ],
    correctIndex: 1,
    explanation: "Uma classe abstrata nao pode ser instanciada diretamente. Pode conter metodos abstratos que devem ser implementados pelas subclasses.",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 58,
    text: "Os principios SOLID da programacao orientada a objetos incluem o principio 'L' (Liskov Substitution). Este principio estabelece que:",
    options: [
      "Classes devem ter apenas uma responsabilidade",
      "Objetos de uma superclasse devem ser substituiveis por objetos de suas subclasses sem alterar o comportamento correto do programa",
      "Interfaces devem ser segregadas em interfaces menores",
      "Modulos de alto nivel nao devem depender de modulos de baixo nivel",
      "Classes devem ser abertas para extensao e fechadas para modificacao"
    ],
    correctIndex: 1,
    explanation: "O principio de Substituicao de Liskov (LSP) diz que objetos de uma superclasse devem poder ser substituidos por objetos de suas subclasses sem quebrar a aplicacao.",
    category: "informatica",
    difficulty: "dificil"
  },
  {
    id: 59,
    text: "Qual padrao de projeto (Design Pattern) garante que uma classe tenha apenas uma instancia e forneca um ponto global de acesso a ela?",
    options: ["Factory Method", "Observer", "Singleton", "Strategy", "Adapter"],
    correctIndex: 2,
    explanation: "O padrao Singleton garante uma unica instancia e fornece ponto global de acesso. Util para recursos compartilhados como conexoes de banco.",
    category: "informatica",
    difficulty: "medio"
  },
  // 4. Engenharia de Software
  {
    id: 60,
    text: "No modelo de desenvolvimento agil Scrum, o periodo fixo de tempo durante o qual uma equipe trabalha para completar um conjunto de itens do backlog e chamado de:",
    options: ["Sprint", "Release", "Milestone", "Iteracao Kanban", "Ciclo Waterfall"],
    correctIndex: 0,
    explanation: "No Scrum, a Sprint e um periodo fixo (geralmente 1-4 semanas) durante o qual a equipe desenvolve um incremento potencialmente entregavel do produto.",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 61,
    text: "Na Engenharia de Software, o modelo de ciclo de vida que organiza o desenvolvimento em fases sequenciais (requisitos, projeto, implementacao, teste, manutencao) e chamado de:",
    options: ["Espiral", "Cascata (Waterfall)", "Incremental", "RAD", "Prototipacao"],
    correctIndex: 1,
    explanation: "O modelo Cascata (Waterfall) e sequencial e linear: cada fase deve ser completada antes da proxima comecar. E o modelo classico da engenharia de software.",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 62,
    text: "Em testes de software, o teste que verifica a integracao entre modulos ou componentes do sistema, sem conhecimento da estrutura interna, e chamado de:",
    options: [
      "Teste unitario",
      "Teste de caixa branca",
      "Teste de integracao",
      "Teste de regressao",
      "Teste de estresse"
    ],
    correctIndex: 2,
    explanation: "O teste de integracao verifica a interacao entre modulos/componentes do sistema, garantindo que funcionem corretamente juntos.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 63,
    text: "No contexto de Engenharia de Software, o UML (Unified Modeling Language) e utilizado para:",
    options: [
      "Programar sistemas em linguagem de alto nivel",
      "Modelar visualmente a estrutura e comportamento de sistemas orientados a objetos",
      "Compilar codigo-fonte em codigo de maquina",
      "Gerenciar bancos de dados relacionais",
      "Configurar redes de computadores"
    ],
    correctIndex: 1,
    explanation: "UML e uma linguagem de modelagem visual utilizada para especificar, visualizar, construir e documentar artefatos de sistemas orientados a objetos. Inclui diagramas de classes, sequencia, casos de uso, etc.",
    category: "informatica",
    difficulty: "medio"
  },
  // 5. Banco de Dados
  {
    id: 64,
    text: "Em banco de dados relacional, a forma normal que exige que todos os atributos nao-chave dependam funcionalmente da chave primaria completa (nao de parte dela) e a:",
    options: ["1FN", "2FN", "3FN", "FNBC", "4FN"],
    correctIndex: 1,
    explanation: "A 2FN exige que todos os atributos nao-chave dependam totalmente da chave primaria, eliminando dependencias parciais.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 65,
    text: "Em SQL, qual comando e utilizado para remover uma tabela do banco de dados, incluindo estrutura e todos os dados?",
    options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "TRUNCATE TABLE", "DESTROY TABLE"],
    correctIndex: 2,
    explanation: "DROP TABLE remove tabela inteira (estrutura + dados). DELETE remove linhas. TRUNCATE remove dados mas mantem estrutura.",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 66,
    text: "Em SQL, qual clausula e usada para filtrar grupos de registros apos a aplicacao de funcoes de agregacao?",
    options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY", "FILTER"],
    correctIndex: 2,
    explanation: "HAVING filtra resultados apos GROUP BY e funcoes de agregacao. WHERE filtra antes do agrupamento.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 67,
    text: "Em banco de dados, uma transacao que segue as propriedades ACID garante, entre outras coisas, que ao final ela sera totalmente concluida ou totalmente desfeita. Essa propriedade e chamada de:",
    options: ["Atomicidade", "Consistencia", "Isolamento", "Durabilidade", "Integridade"],
    correctIndex: 0,
    explanation: "Atomicidade garante que a transacao e indivisivel: tudo ou nada. E o 'A' de ACID.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 68,
    text: "Qual comando SQL e utilizado para criar uma visao (view)?",
    options: ["MAKE VIEW", "CREATE VIEW", "BUILD VIEW", "DEFINE VIEW", "SET VIEW"],
    correctIndex: 1,
    explanation: "CREATE VIEW e o comando DDL para criar visoes virtuais baseadas em consultas SELECT.",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 69,
    text: "No contexto de NoSQL, o banco de dados que armazena dados como documentos JSON/BSON, ideal para estruturas flexiveis e semi-estruturadas, e:",
    options: ["Redis", "MongoDB", "Cassandra", "Neo4j", "HBase"],
    correctIndex: 1,
    explanation: "MongoDB e um banco de dados orientado a documentos (document store) que armazena dados em formato BSON (JSON binario). Redis e chave-valor, Cassandra e colunar, Neo4j e grafo.",
    category: "informatica",
    difficulty: "dificil"
  },
  // 6. Redes de Computadores
  {
    id: 70,
    text: "No modelo OSI, a camada responsavel pelo roteamento de pacotes entre redes diferentes e a camada de:",
    options: ["Enlace de dados", "Rede", "Transporte", "Sessao", "Aplicacao"],
    correctIndex: 1,
    explanation: "A camada de Rede (camada 3) e responsavel pelo enderecamento logico e roteamento. O protocolo IP opera nesta camada.",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 71,
    text: "Qual protocolo de rede opera na camada de transporte e oferece comunicacao confiavel com controle de fluxo?",
    options: ["UDP", "TCP", "HTTP", "ICMP", "ARP"],
    correctIndex: 1,
    explanation: "TCP opera na camada de transporte e garante entrega confiavel com controle de fluxo, sequenciamento e confirmacao. UDP e mais rapido mas sem garantia.",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 72,
    text: "Em redes, qual endereco IP e reservado para loopback (teste local)?",
    options: ["192.168.0.1", "10.0.0.1", "127.0.0.1", "255.255.255.255", "0.0.0.0"],
    correctIndex: 2,
    explanation: "127.0.0.1 (localhost) e reservado para loopback, permitindo que o computador se comunique consigo mesmo.",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 73,
    text: "Qual protocolo e utilizado para traduzir nomes de dominio em enderecos IP?",
    options: ["DHCP", "DNS", "FTP", "SMTP", "SNMP"],
    correctIndex: 1,
    explanation: "DNS (Domain Name System) traduz nomes de dominio em enderecos IP. DHCP atribui IPs automaticamente.",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 74,
    text: "Em redes sem fio Wi-Fi, qual protocolo de seguranca e considerado o mais seguro atualmente, substituindo WPA2?",
    options: ["WEP", "WPA", "WPA2", "WPA3", "TKIP"],
    correctIndex: 3,
    explanation: "WPA3 e o protocolo mais recente e seguro para redes Wi-Fi, com criptografia mais forte (SAE) e protecao contra ataques de forca bruta.",
    category: "informatica",
    difficulty: "dificil"
  },
  {
    id: 75,
    text: "Qual topologia de rede conecta todos os dispositivos a um unico meio de transmissao compartilhado, sendo que uma falha no meio afeta toda a rede?",
    options: ["Estrela", "Anel", "Barramento", "Malha", "Arvore"],
    correctIndex: 2,
    explanation: "Na topologia barramento, todos os dispositivos compartilham um unico cabo. Uma falha no cabo principal derruba toda a rede.",
    category: "informatica",
    difficulty: "medio"
  },
  // 7. Seguranca da Informacao
  {
    id: 76,
    text: "Em seguranca da informacao, qual principio garante que uma informacao nao foi alterada de forma nao autorizada?",
    options: ["Confidencialidade", "Integridade", "Disponibilidade", "Autenticidade", "Nao-repudio"],
    correctIndex: 1,
    explanation: "Integridade garante que a informacao nao foi alterada indevidamente. Confidencialidade protege contra acesso nao autorizado. Disponibilidade garante acesso quando necessario.",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 77,
    text: "Qual tipo de malware se disfarca de programa legitimo para enganar o usuario?",
    options: ["Worm", "Cavalo de Troia (Trojan)", "Ransomware", "Adware", "Rootkit"],
    correctIndex: 1,
    explanation: "O Cavalo de Troia se disfarca de software legitimo. Diferente do virus, nao se replica sozinho. Precisa da acao do usuario.",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 78,
    text: "Na criptografia assimetrica, para garantir a CONFIDENCIALIDADE de uma mensagem, o remetente deve cifrar a mensagem com:",
    options: [
      "Sua propria chave privada",
      "A chave publica do destinatario",
      "A chave privada do destinatario",
      "Sua propria chave publica",
      "Uma chave simetrica compartilhada"
    ],
    correctIndex: 1,
    explanation: "Para confidencialidade na criptografia assimetrica: cifra com a chave publica do destinatario (so ele decifra com sua chave privada). Para assinatura digital: cifra com a chave privada do remetente.",
    category: "informatica",
    difficulty: "dificil"
  },
  {
    id: 79,
    text: "Um ataque que consiste em sobrecarregar um servidor com um grande volume de requisicoes, tornando-o indisponivel para usuarios legitimos, e chamado de:",
    options: [
      "Phishing",
      "Man-in-the-middle",
      "DDoS (Distributed Denial of Service)",
      "SQL Injection",
      "Cross-Site Scripting (XSS)"
    ],
    correctIndex: 2,
    explanation: "DDoS (ataque de negacao de servico distribuido) sobrecarrega o servidor com requisicoes de multiplas fontes, tornando-o indisponivel. Diferente de DoS que vem de uma unica fonte.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 80,
    text: "A ISO 27001 e um padrao internacional que especifica requisitos para:",
    options: [
      "Gerenciamento de projetos",
      "Sistema de Gestao de Seguranca da Informacao (SGSI)",
      "Qualidade de software",
      "Gerenciamento de servicos de TI",
      "Governanca corporativa"
    ],
    correctIndex: 1,
    explanation: "A ISO/IEC 27001 especifica os requisitos para estabelecer, implementar, manter e melhorar continuamente um SGSI dentro do contexto da organizacao.",
    category: "informatica",
    difficulty: "dificil"
  },
  // 8. Programacao para Web
  {
    id: 81,
    text: "No protocolo HTTP, qual metodo e utilizado para enviar dados ao servidor para criacao de um novo recurso?",
    options: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    correctIndex: 1,
    explanation: "POST e usado para criar novos recursos no servidor. GET recupera dados, PUT atualiza/substitui, DELETE remove, PATCH atualiza parcialmente.",
    category: "informatica",
    difficulty: "facil"
  },
  {
    id: 82,
    text: "Em desenvolvimento web, qual tecnologia permite comunicacao bidirecional em tempo real entre cliente e servidor em uma unica conexao TCP?",
    options: ["HTTP/1.1", "REST API", "WebSocket", "SOAP", "GraphQL"],
    correctIndex: 2,
    explanation: "WebSocket permite comunicacao bidirecional full-duplex em tempo real sobre uma unica conexao TCP. Ideal para chats, jogos e dashboards em tempo real.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 83,
    text: "Em uma API REST, qual codigo de status HTTP indica que o recurso foi criado com sucesso?",
    options: ["200 OK", "201 Created", "204 No Content", "301 Moved Permanently", "400 Bad Request"],
    correctIndex: 1,
    explanation: "201 Created indica que a requisicao foi bem-sucedida e um novo recurso foi criado. 200 OK e resposta generica de sucesso.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 84,
    text: "Qual padrao arquitetural de web applications separa a aplicacao em tres componentes: Model, View e Controller?",
    options: ["SOA", "MVC", "Microservicos", "Monolitico", "Event-Driven"],
    correctIndex: 1,
    explanation: "MVC separa a aplicacao em Model (dados e logica de negocio), View (interface do usuario) e Controller (intermediario que processa requisicoes).",
    category: "informatica",
    difficulty: "facil"
  },
  // 9. Programacao para Dispositivos Moveis
  {
    id: 85,
    text: "No desenvolvimento mobile, qual framework permite criar aplicacoes nativas para iOS e Android a partir de um unico codigo-base em Dart?",
    options: ["React Native", "Flutter", "Xamarin", "Ionic", "NativeScript"],
    correctIndex: 1,
    explanation: "Flutter (Google) usa a linguagem Dart para criar apps nativos multiplataforma. React Native usa JavaScript, Xamarin usa C#, Ionic usa web technologies.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 86,
    text: "Em Android nativo, qual componente e responsavel por gerenciar o ciclo de vida de uma tela (interface do usuario)?",
    options: ["Service", "Activity", "Broadcast Receiver", "Content Provider", "Fragment"],
    correctIndex: 1,
    explanation: "Activity e o componente Android responsavel por uma unica tela com interface do usuario. Tem ciclo de vida com metodos como onCreate, onStart, onResume, onPause, onStop, onDestroy.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 87,
    text: "No desenvolvimento mobile, uma Progressive Web App (PWA) e caracterizada por:",
    options: [
      "Ser desenvolvida exclusivamente em Swift ou Kotlin",
      "Ser uma aplicacao web que funciona offline e pode ser instalada no dispositivo",
      "Requerer publicacao exclusiva nas lojas de aplicativos",
      "Funcionar apenas em navegadores desktop",
      "Precisar de acesso root para instalacao"
    ],
    correctIndex: 1,
    explanation: "PWAs sao aplicacoes web que utilizam Service Workers para funcionar offline, podem ser instaladas na tela inicial do dispositivo e oferecem experiencia similar a apps nativos.",
    category: "informatica",
    difficulty: "dificil"
  },
  // 10. Inteligencia Artificial e Ciencia de Dados
  {
    id: 88,
    text: "No contexto de Machine Learning, o tipo de aprendizado em que o modelo e treinado com dados rotulados (entrada e saida conhecidas) e chamado de:",
    options: [
      "Aprendizado nao supervisionado",
      "Aprendizado supervisionado",
      "Aprendizado por reforco",
      "Aprendizado semi-supervisionado",
      "Aprendizado auto-supervisionado"
    ],
    correctIndex: 1,
    explanation: "No aprendizado supervisionado, o modelo e treinado com pares entrada-saida (dados rotulados). Exemplos: classificacao e regressao. Nao supervisionado usa dados sem rotulos (clustering).",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 89,
    text: "Em Ciencia de Dados, qual algoritmo e comumente utilizado para problemas de classificacao binaria, aplicando uma funcao sigmoide para estimar probabilidades?",
    options: [
      "Regressao Linear",
      "Regressao Logistica",
      "K-Means",
      "Arvore de Decisao",
      "PCA"
    ],
    correctIndex: 1,
    explanation: "A Regressao Logistica aplica a funcao sigmoide para mapear saidas em probabilidades entre 0 e 1, sendo ideal para classificacao binaria (sim/nao, spam/nao-spam).",
    category: "informatica",
    difficulty: "dificil"
  },
  {
    id: 90,
    text: "No processamento de linguagem natural (NLP), os modelos de linguagem de grande escala (LLMs) como GPT sao baseados em qual arquitetura de rede neural?",
    options: [
      "Redes Neurais Convolucionais (CNN)",
      "Redes Neurais Recorrentes (RNN)",
      "Transformer",
      "Perceptron Multicamadas (MLP)",
      "Redes Generativas Adversariais (GAN)"
    ],
    correctIndex: 2,
    explanation: "LLMs como GPT, BERT e LLaMA sao baseados na arquitetura Transformer (Vaswani et al., 2017), que utiliza mecanismos de atencao (self-attention) para processar sequencias.",
    category: "informatica",
    difficulty: "dificil"
  },
  {
    id: 91,
    text: "Qual tecnica de IA e utilizada para agrupar dados similares sem rotulos previos, sendo uma forma de aprendizado nao supervisionado?",
    options: [
      "Classificacao",
      "Regressao",
      "Clustering (Agrupamento)",
      "Deteccao de anomalias",
      "Reducao de dimensionalidade"
    ],
    correctIndex: 2,
    explanation: "Clustering (agrupamento) e uma tecnica de aprendizado nao supervisionado que agrupa dados similares. Exemplos de algoritmos: K-Means, DBSCAN, Hierarchical Clustering.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 92,
    text: "Em Ciencia de Dados, o processo de preparar dados brutos para analise, incluindo limpeza, transformacao e tratamento de valores ausentes, e chamado de:",
    options: [
      "Data Mining",
      "Data Preprocessing (Pre-processamento de dados)",
      "Data Warehousing",
      "Data Governance",
      "Feature Engineering"
    ],
    correctIndex: 1,
    explanation: "Data Preprocessing (pre-processamento) inclui limpeza, normalizacao, tratamento de valores ausentes e transformacao de dados brutos em formato adequado para analise.",
    category: "informatica",
    difficulty: "medio"
  },
  {
    id: 93,
    text: "Qual metrica de avaliacao de modelos de classificacao mede a proporcao de positivos reais corretamente identificados (verdadeiros positivos / total de positivos reais)?",
    options: ["Acuracia", "Precisao", "Recall (Sensibilidade)", "F1-Score", "Especificidade"],
    correctIndex: 2,
    explanation: "Recall (ou Sensibilidade) = VP / (VP + FN). Mede quantos dos positivos reais foram corretamente identificados. Precisao = VP / (VP + FP). F1-Score e a media harmonica de Precisao e Recall.",
    category: "informatica",
    difficulty: "dificil"
  },
  // Questoes adicionais de informatica
  {
    id: 94,
    text: "Em Docker, qual comando e utilizado para criar e iniciar containers definidos em um arquivo docker-compose.yml?",
    options: [
      "docker build",
      "docker run",
      "docker-compose up",
      "docker start",
      "docker pull"
    ],
    correctIndex: 2,
    explanation: "docker-compose up cria e inicia todos os containers definidos no arquivo docker-compose.yml. E utilizado para orquestrar multiplos containers.",
    category: "informatica",
    difficulty: "dificil"
  },
  {
    id: 95,
    text: "Qual conceito de computacao em nuvem oferece ao usuario acesso a infraestrutura de hardware virtualizada (servidores, armazenamento, redes) sob demanda?",
    options: ["SaaS", "PaaS", "IaaS", "FaaS", "DaaS"],
    correctIndex: 2,
    explanation: "IaaS (Infrastructure as a Service) fornece infraestrutura virtualizada sob demanda. PaaS fornece plataforma de desenvolvimento. SaaS fornece software pronto. Exemplos IaaS: AWS EC2, Azure VMs.",
    category: "informatica",
    difficulty: "medio"
  },

  // ============================================================
  // PEDAGOGIA / ASSUNTOS EDUCACIONAIS (40 questoes)
  // ============================================================
  // 1. Docencia: ensino, aprendizagem e avaliacao
  {
    id: 96,
    text: "A avaliacao formativa, diferente da avaliacao somativa, tem como principal objetivo:",
    options: [
      "Classificar os alunos por nota final",
      "Selecionar os melhores estudantes para premiacao",
      "Acompanhar e regular o processo de aprendizagem durante seu desenvolvimento",
      "Verificar se o aluno atingiu os objetivos ao final do bimestre",
      "Determinar a aprovacao ou reprovacao"
    ],
    correctIndex: 2,
    explanation: "A avaliacao formativa ocorre durante o processo de ensino-aprendizagem, fornecendo feedback continuo para ajustar estrategias pedagogicas.",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 97,
    text: "Segundo a taxonomia de Bloom revisada, a categoria cognitiva mais complexa e:",
    options: ["Analisar", "Avaliar", "Criar", "Aplicar", "Compreender"],
    correctIndex: 2,
    explanation: "Na taxonomia de Bloom revisada (Anderson & Krathwohl, 2001), a hierarquia e: Lembrar, Compreender, Aplicar, Analisar, Avaliar, Criar. 'Criar' e o nivel mais alto.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  // 2. Politica educacional brasileira
  {
    id: 98,
    text: "O Plano Nacional de Educacao (PNE 2014-2024, Lei 13.005/2014) estabeleceu 20 metas para a educacao brasileira. Dentre elas, a Meta 20 refere-se a:",
    options: [
      "Universalizacao da educacao infantil",
      "Erradicacao do analfabetismo",
      "Ampliacao do investimento publico em educacao publica",
      "Formacao de professores",
      "Educacao em tempo integral"
    ],
    correctIndex: 2,
    explanation: "A Meta 20 do PNE trata da ampliacao do investimento publico em educacao publica de forma a atingir, no minimo, o patamar de 7% do PIB, alcancando 10% ao final do plano.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  // 3. Educacao Especial e Inclusiva
  {
    id: 99,
    text: "Na perspectiva da educacao inclusiva, a Declaracao de Salamanca (1994) estabelece que:",
    options: [
      "Alunos com deficiencia devem ser educados em escolas especiais",
      "As escolas regulares devem acolher todas as criancas, independente de suas condicoes",
      "A inclusao e opcional para cada sistema de ensino",
      "Apenas criancas com deficiencias leves podem frequentar escolas regulares",
      "A educacao especial substitutiva e a forma mais eficaz"
    ],
    correctIndex: 1,
    explanation: "A Declaracao de Salamanca proclama que escolas regulares com orientacao inclusiva sao os meios mais eficazes de combater discriminacao.",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 100,
    text: "Conforme a Lei Brasileira de Inclusao (Lei 13.146/2015), o Atendimento Educacional Especializado (AEE) tem como finalidade:",
    options: [
      "Substituir o ensino regular para alunos com deficiencia",
      "Complementar ou suplementar a formacao do estudante com deficiencia",
      "Segregar alunos com necessidades especiais em turmas exclusivas",
      "Oferecer ensino domiciliar para alunos com deficiencia",
      "Eliminar a necessidade de adaptacoes curriculares"
    ],
    correctIndex: 1,
    explanation: "O AEE complementa ou suplementa a formacao do estudante com deficiencia, nao substitui o ensino regular. Deve ser oferecido preferencialmente na rede regular de ensino.",
    category: "pedagogia",
    difficulty: "medio"
  },
  // 4. EPT: historia, fundamentos legais e conceituais
  {
    id: 101,
    text: "A Educacao Profissional e Tecnologica no Brasil tem como marco historico a criacao das Escolas de Aprendizes Artifices em 1909, durante o governo de:",
    options: [
      "Getulio Vargas",
      "Nilo Pecanha",
      "Juscelino Kubitschek",
      "Washington Luis",
      "Hermes da Fonseca"
    ],
    correctIndex: 1,
    explanation: "O Decreto 7.566, de 23 de setembro de 1909, do presidente Nilo Pecanha, criou 19 Escolas de Aprendizes Artifices, marco inicial da Rede Federal de Educacao Profissional.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  {
    id: 102,
    text: "A concepcao de educacao politecnica/omnilateral, defendida por autores como Gramsci e Saviani, propoe:",
    options: [
      "Formacao exclusivamente tecnica para o mercado de trabalho",
      "Formacao integral que articule trabalho, ciencia, tecnologia e cultura",
      "Priorizacao do ensino academico sobre o ensino pratico",
      "Separacao total entre formacao geral e formacao profissional",
      "Treinamento especifico para uma unica profissao"
    ],
    correctIndex: 1,
    explanation: "A educacao politecnica/omnilateral propoe formacao integral, articulando as dimensoes do trabalho, ciencia, tecnologia e cultura, superando a dualidade entre formacao intelectual e manual.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  // 5. Didatica, tendencias pedagogicas e metodologias ativas
  {
    id: 103,
    text: "A pedagogia de Paulo Freire, expressa em 'Pedagogia do Oprimido', critica o modelo educacional que ele denomina:",
    options: [
      "Educacao tecnicista",
      "Educacao bancaria",
      "Educacao tradicional escolanovista",
      "Educacao renovada progressivista",
      "Educacao construtivista"
    ],
    correctIndex: 1,
    explanation: "Paulo Freire criticou a 'educacao bancaria', na qual o professor 'deposita' conhecimentos no aluno passivo. Propos a educacao dialogica e libertadora.",
    category: "pedagogia",
    difficulty: "facil"
  },
  {
    id: 104,
    text: "A metodologia ativa conhecida como 'Sala de Aula Invertida' (Flipped Classroom) consiste em:",
    options: [
      "O professor leciona e os alunos fazem exercicios em casa",
      "Os alunos estudam o conteudo teorico previamente e utilizam o tempo em sala para atividades praticas e discussoes",
      "Os alunos sao divididos em grupos que competem entre si",
      "O professor utiliza apenas recursos digitais em sala",
      "Os alunos ensinam uns aos outros sem intervencao do professor"
    ],
    correctIndex: 1,
    explanation: "Na Sala de Aula Invertida, o aluno estuda o conteudo teorico antes da aula (por videos, textos) e o tempo presencial e usado para atividades praticas, projetos e esclarecimento de duvidas.",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 105,
    text: "A Aprendizagem Baseada em Problemas (ABP/PBL) tem como caracteristica principal:",
    options: [
      "O professor apresenta a solucao antes do problema",
      "Os alunos partem de um problema real para construir conhecimento de forma colaborativa",
      "Os problemas sao resolvidos exclusivamente de forma individual",
      "O foco e na memorizacao de formulas e conceitos",
      "A avaliacao e feita apenas por provas escritas"
    ],
    correctIndex: 1,
    explanation: "Na ABP/PBL, os alunos sao confrontados com problemas reais e complexos e, a partir deles, buscam solucoes de forma colaborativa, desenvolvendo pensamento critico e autonomia.",
    category: "pedagogia",
    difficulty: "medio"
  },
  // 6. Gestao e Organizacao Escolar
  {
    id: 106,
    text: "O Projeto Politico-Pedagogico (PPP) de uma instituicao de ensino deve ser construido:",
    options: [
      "Exclusivamente pela direcao da escola",
      "Pela Secretaria de Educacao e enviado as escolas",
      "Coletivamente, com participacao de toda a comunidade escolar",
      "Apenas pelos professores em reuniao pedagogica",
      "Por consultores externos especializados"
    ],
    correctIndex: 2,
    explanation: "O PPP deve ser construido coletivamente, com participacao de professores, funcionarios, alunos, pais e comunidade. Expressa a identidade e os objetivos da escola.",
    category: "pedagogia",
    difficulty: "facil"
  },
  {
    id: 107,
    text: "A gestao democratica do ensino publico, prevista na CF/88 e na LDB, pressupoe:",
    options: [
      "Decisoes centralizadas na figura do diretor",
      "Participacao dos profissionais da educacao na elaboracao do PPP e da comunidade nos conselhos",
      "Eleicao direta para todos os cargos da administracao escolar",
      "Autonomia total da escola, sem vinculo com secretarias",
      "Participacao exclusiva de professores nas decisoes"
    ],
    correctIndex: 1,
    explanation: "A LDB (art. 14) define que a gestao democratica inclui: participacao dos profissionais na elaboracao do PPP e participacao das comunidades escolar e local em conselhos escolares.",
    category: "pedagogia",
    difficulty: "medio"
  },
  // 7. Psicologia da Educacao
  {
    id: 108,
    text: "Segundo Vygotsky, a Zona de Desenvolvimento Proximal (ZDP) refere-se a distancia entre:",
    options: [
      "O nivel de maturacao biologica e a capacidade cognitiva",
      "O nivel de desenvolvimento real e o nivel de desenvolvimento potencial",
      "A capacidade de memorizacao e a de abstracao",
      "O conhecimento escolar e o empirico",
      "A inteligencia emocional e a racional"
    ],
    correctIndex: 1,
    explanation: "Para Vygotsky, a ZDP e a distancia entre o desenvolvimento real (o que a crianca faz sozinha) e o potencial (o que consegue com ajuda de alguem mais experiente).",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 109,
    text: "Na teoria de Jean Piaget, o estagio de desenvolvimento cognitivo em que a crianca desenvolve pensamento logico concreto (7-11 anos) e denominado:",
    options: [
      "Sensorio-motor",
      "Pre-operatorio",
      "Operatorio concreto",
      "Operatorio formal",
      "Pos-convencional"
    ],
    correctIndex: 2,
    explanation: "O estagio operatorio concreto (7-11 anos) e quando a crianca desenvolve pensamento logico sobre objetos concretos, compreende conservacao, classificacao e seriacao.",
    category: "pedagogia",
    difficulty: "facil"
  },
  {
    id: 110,
    text: "A teoria da aprendizagem significativa de David Ausubel enfatiza que o fator mais importante para a aprendizagem e:",
    options: [
      "A capacidade de memorizacao do aluno",
      "Aquilo que o aluno ja sabe (conhecimentos previos)",
      "A quantidade de repeticoes do conteudo",
      "O uso exclusivo de recursos tecnologicos",
      "A aplicacao de provas frequentes"
    ],
    correctIndex: 1,
    explanation: "Ausubel: 'O fator isolado mais importante que influencia a aprendizagem e aquilo que o aprendiz ja sabe.' Os conhecimentos previos sao a base para ancorar novos conteudos.",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 111,
    text: "Segundo Henri Wallon, o desenvolvimento humano ocorre de forma:",
    options: [
      "Linear e progressiva",
      "Descontinua, com avancos e retrocessos funcionais",
      "Exclusivamente biologica",
      "Determinada apenas pelo ambiente social",
      "Independente das relacoes afetivas"
    ],
    correctIndex: 1,
    explanation: "Wallon propoe desenvolvimento descontinuo, com alternancia funcional entre momentos de predominancia afetiva e cognitiva. Avancos e retrocessos sao naturais.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  // 8. Estagio Supervisionado
  {
    id: 112,
    text: "O estagio supervisionado na formacao de professores tem como principal objetivo:",
    options: [
      "Substituir o professor regente durante o periodo letivo",
      "Proporcionar ao licenciando a vivencia pratica do exercicio profissional docente, articulando teoria e pratica",
      "Avaliar exclusivamente o desempenho academico do aluno",
      "Fornecer mao de obra gratuita para as escolas",
      "Servir apenas como requisito burocratico para conclusao do curso"
    ],
    correctIndex: 1,
    explanation: "O estagio supervisionado e momento de articulacao teoria-pratica na formacao inicial, permitindo ao futuro professor vivenciar situacoes reais de ensino e construir sua identidade docente.",
    category: "pedagogia",
    difficulty: "facil"
  },
  // 9. Tecnologias no processo educativo
  {
    id: 113,
    text: "No contexto das tecnologias educacionais, o modelo TPACK (Technological Pedagogical Content Knowledge) propoe a integracao de tres tipos de conhecimento:",
    options: [
      "Tecnico, pratico e administrativo",
      "Tecnologico, pedagogico e de conteudo",
      "Teorico, procedimental e avaliativo",
      "Tecnologico, politico e cultural",
      "Cientifico, pedagogico e social"
    ],
    correctIndex: 1,
    explanation: "O TPACK integra: conhecimento tecnologico (TK), pedagogico (PK) e de conteudo (CK). O professor eficaz deve dominar a interseccao desses tres tipos de conhecimento.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  {
    id: 114,
    text: "A utilizacao de ambientes virtuais de aprendizagem (AVA) como o Moodle no processo educativo permite, EXCETO:",
    options: [
      "Disponibilizacao de materiais didaticos online",
      "Realizacao de atividades assincronas",
      "Interacao entre alunos e professores por foruns",
      "Substituicao completa da relacao professor-aluno",
      "Acompanhamento do progresso dos alunos"
    ],
    correctIndex: 3,
    explanation: "AVAs como o Moodle sao ferramentas que potencializam o processo educativo, mas nao substituem a relacao professor-aluno. Sao mediadores tecnologicos do processo de ensino-aprendizagem.",
    category: "pedagogia",
    difficulty: "medio"
  },
  // 10. Curriculo
  {
    id: 115,
    text: "De acordo com as Diretrizes Curriculares Nacionais, o curriculo do Ensino Medio deve ser organizado em:",
    options: [
      "Disciplinas isoladas sem conexao entre si",
      "Apenas projetos interdisciplinares",
      "Formacao geral basica e itinerarios formativos",
      "Exclusivamente conteudos tecnicos profissionalizantes",
      "Modulos semestrais independentes"
    ],
    correctIndex: 2,
    explanation: "O Novo Ensino Medio (Lei 13.415/2017) organiza o curriculo em formacao geral basica (BNCC) e itinerarios formativos.",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 116,
    text: "A interdisciplinaridade na educacao consiste em:",
    options: [
      "Ensinar todas as disciplinas no mesmo horario",
      "Integrar conhecimentos de diferentes disciplinas para compreensao mais ampla",
      "Eliminar as fronteiras entre disciplinas completamente",
      "Substituir disciplinas por projetos tematicos",
      "Fazer com que um unico professor lecione todas as materias"
    ],
    correctIndex: 1,
    explanation: "A interdisciplinaridade busca integrar conhecimentos de diferentes areas para compreensao mais ampla e contextualizada, sem eliminar as disciplinas.",
    category: "pedagogia",
    difficulty: "facil"
  },
  {
    id: 117,
    text: "O curriculo oculto refere-se a:",
    options: [
      "Os conteudos que o professor escolhe nao ensinar",
      "As aprendizagens que ocorrem de forma implicita, nao planejada, por meio das relacoes, normas e valores da instituicao",
      "Os conteudos secretos que apenas a direcao conhece",
      "A parte do curriculo que e ensinada apenas para alunos avancados",
      "Os conteudos que foram removidos do curriculo oficial"
    ],
    correctIndex: 1,
    explanation: "O curriculo oculto refere-se as aprendizagens implicitas que ocorrem no ambiente escolar por meio das relacoes sociais, normas, valores, rituais e praticas cotidianas.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  {
    id: 118,
    text: "O conceito de 'competencias socioemocionais' na BNCC esta relacionado a capacidade de:",
    options: [
      "Memorizar conteudos com eficiencia",
      "Gerenciar emocoes, estabelecer relacoes e tomar decisoes responsaveis",
      "Resolver operacoes matematicas complexas",
      "Utilizar ferramentas tecnologicas avancadas",
      "Reproduzir conhecimentos cientificos em avaliacoes"
    ],
    correctIndex: 1,
    explanation: "Competencias socioemocionais envolvem autoconhecimento, autogestao, consciencia social, habilidades de relacionamento e tomada de decisao responsavel.",
    category: "pedagogia",
    difficulty: "facil"
  },
  // ============================================================
  // PEDAGOGIA ADICIONAL (20 questoes para completar 40+)
  // ============================================================
  {
    id: 121,
    text: "A tendencia pedagogica liberal tecnicista, predominante no Brasil durante o regime militar, tem como principal caracteristica:",
    options: [
      "A valorizacao do dialogo entre professor e aluno",
      "A preparacao do aluno como mao de obra qualificada atraves de tecnicas e metodos de instrucao programada",
      "A construcao coletiva do conhecimento",
      "A educacao como pratica da liberdade",
      "A problematizacao da realidade social"
    ],
    correctIndex: 1,
    explanation: "A pedagogia tecnicista (decada de 1970) priorizava a formacao de mao de obra qualificada, com enfase em tecnicas de instrucao programada, eficiencia e produtividade. Baseada em Skinner (behaviorismo).",
    category: "pedagogia",
    difficulty: "dificil"
  },
  {
    id: 122,
    text: "Para Dermeval Saviani, a Pedagogia Historico-Critica propoe que a educacao:",
    options: [
      "Deve reproduzir as desigualdades sociais existentes",
      "E instrumento de transformacao social, mediando entre o saber elaborado e os interesses das camadas populares",
      "Deve focar exclusivamente em conteudos academicos sem contextualizacao",
      "E neutra e nao se relaciona com questoes politicas",
      "Deve abandonar completamente os conteudos sistematizados"
    ],
    correctIndex: 1,
    explanation: "Saviani propoe que a escola deve socializar o saber sistematizado (ciencia, filosofia, arte) de forma critica, instrumentalizando as camadas populares para compreender e transformar a sociedade.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  {
    id: 123,
    text: "No contexto da avaliacao educacional, a avaliacao diagnostica tem como principal funcao:",
    options: [
      "Atribuir notas finais aos alunos",
      "Classificar os alunos em ranking de desempenho",
      "Identificar conhecimentos previos, dificuldades e potencialidades dos alunos no inicio do processo",
      "Punir alunos com baixo desempenho",
      "Substituir a avaliacao formativa"
    ],
    correctIndex: 2,
    explanation: "A avaliacao diagnostica ocorre no inicio do processo educativo para mapear conhecimentos previos, identificar dificuldades e orientar o planejamento pedagogico do professor.",
    category: "pedagogia",
    difficulty: "facil"
  },
  {
    id: 124,
    text: "A gamificacao como metodologia ativa no processo de ensino-aprendizagem consiste em:",
    options: [
      "Substituir aulas por jogos eletronicos",
      "Utilizar elementos de jogos (pontuacao, niveis, desafios, recompensas) em contextos educacionais",
      "Permitir que alunos joguem livremente durante as aulas",
      "Desenvolver jogos de tabuleiro como unica forma de avaliacao",
      "Eliminar conteudos formais do curriculo"
    ],
    correctIndex: 1,
    explanation: "A gamificacao aplica mecanicas de jogos (pontos, niveis, rankings, missoes, feedback imediato) em contextos nao-ludicos para aumentar engajamento e motivacao na aprendizagem.",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 125,
    text: "Segundo a Politica Nacional de Educacao Especial na Perspectiva da Educacao Inclusiva (2008), o publico-alvo da educacao especial e composto por:",
    options: [
      "Apenas alunos com deficiencia fisica",
      "Alunos com deficiencia, transtornos globais do desenvolvimento e altas habilidades/superdotacao",
      "Todos os alunos com dificuldade de aprendizagem",
      "Apenas alunos com deficiencia intelectual",
      "Alunos com problemas de comportamento"
    ],
    correctIndex: 1,
    explanation: "A PNEEPEI (2008) define tres grupos: pessoas com deficiencia, com transtornos globais do desenvolvimento (incluindo TEA), e com altas habilidades/superdotacao.",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 126,
    text: "O conceito de 'curriculo integrado' na Educacao Profissional e Tecnologica propoe:",
    options: [
      "A justaposicao de disciplinas do ensino medio e disciplinas tecnicas sem articulacao",
      "A articulacao organica entre formacao geral e formacao profissional, superando a fragmentacao curricular",
      "A eliminacao das disciplinas de formacao geral",
      "A priorizacao exclusiva de conteudos tecnicos profissionalizantes",
      "A separacao total entre teoria e pratica"
    ],
    correctIndex: 1,
    explanation: "O curriculo integrado propoe a articulacao organica entre conhecimentos gerais e especificos, formacao basica e profissional, teoria e pratica, superando a dualidade estrutural historica.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  {
    id: 127,
    text: "Na perspectiva de Philippe Perrenoud, competencia e definida como:",
    options: [
      "O acumulo de informacoes memorizadas",
      "A capacidade de mobilizar diversos recursos cognitivos para enfrentar situacoes concretas",
      "O dominio exclusivo de habilidades tecnicas",
      "A capacidade de reproduzir conteudos em provas escritas",
      "O conhecimento teorico sem aplicacao pratica"
    ],
    correctIndex: 1,
    explanation: "Para Perrenoud, competencia e a faculdade de mobilizar um conjunto de recursos cognitivos (saberes, capacidades, informacoes) para enfrentar com pertinencia e eficacia uma familia de situacoes.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  {
    id: 128,
    text: "O Desenho Universal para Aprendizagem (DUA/UDL) propoe que o curriculo e os materiais didaticos devem ser projetados desde o inicio para:",
    options: [
      "Atender apenas alunos com deficiencia",
      "Ser acessiveis ao maior numero possivel de alunos, sem necessidade de adaptacoes posteriores",
      "Padronizar o ensino para todos aprenderem da mesma forma",
      "Eliminar a necessidade de professores especializados",
      "Substituir o ensino presencial pelo ensino a distancia"
    ],
    correctIndex: 1,
    explanation: "O DUA propoe multiplos meios de representacao, acao/expressao e engajamento, tornando o curriculo flexivel e acessivel desde a concepcao, reduzindo barreiras para todos os alunos.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  {
    id: 129,
    text: "Segundo a LDB, a gestao democratica do ensino publico deve observar, entre outros principios:",
    options: [
      "Centralizacao das decisoes na direcao escolar",
      "Participacao dos profissionais da educacao na elaboracao do PPP",
      "Indicacao politica de diretores sem consulta a comunidade",
      "Decisoes tomadas exclusivamente pela Secretaria de Educacao",
      "Eliminacao dos conselhos escolares"
    ],
    correctIndex: 1,
    explanation: "Art. 14 da LDB: os sistemas de ensino definirao as normas de gestao democratica, conforme: I - participacao dos profissionais na elaboracao do PPP; II - participacao das comunidades em conselhos.",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 130,
    text: "Howard Gardner, com a Teoria das Inteligencias Multiplas, propoe que a inteligencia humana:",
    options: [
      "E unitaria e mensuravel apenas pelo QI",
      "E composta por multiplas capacidades relativamente independentes, como linguistica, logico-matematica, espacial, musical, entre outras",
      "E determinada exclusivamente pela genetica",
      "Nao pode ser desenvolvida ao longo da vida",
      "E identica em todos os seres humanos"
    ],
    correctIndex: 1,
    explanation: "Gardner propoe pelo menos 8 inteligencias: linguistica, logico-matematica, espacial, musical, corporal-cinestesica, interpessoal, intrapessoal e naturalista. Cada pessoa tem perfil unico.",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 131,
    text: "A transversalidade na educacao, conforme os PCNs e a BNCC, refere-se a:",
    options: [
      "Ensinar apenas temas transversais, eliminando disciplinas",
      "Integrar tematicas sociais relevantes (etica, meio ambiente, saude, diversidade) ao curriculo de todas as disciplinas",
      "Criar disciplinas especificas para cada tema transversal",
      "Abordar temas sociais apenas em eventos extracurriculares",
      "Substituir o curriculo oficial por projetos tematicos"
    ],
    correctIndex: 1,
    explanation: "A transversalidade propoe que temas como etica, cidadania, meio ambiente, saude e diversidade perpassem todas as disciplinas, nao sendo tratados de forma isolada.",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 132,
    text: "A Lei 10.639/2003, alterada pela Lei 11.645/2008, torna obrigatorio o ensino de:",
    options: [
      "Educacao financeira em todas as etapas",
      "Historia e cultura afro-brasileira e indigena nos estabelecimentos de ensino",
      "Lingua inglesa a partir da educacao infantil",
      "Educacao ambiental como disciplina obrigatoria",
      "Filosofia e sociologia no ensino fundamental"
    ],
    correctIndex: 1,
    explanation: "A Lei 11.645/2008 inclui no curriculo oficial a obrigatoriedade da tematica 'Historia e Cultura Afro-Brasileira e Indigena', abrangendo conteudos de historia, literatura e artes.",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 133,
    text: "No processo de construcao do Projeto Politico-Pedagogico (PPP), o diagnostico da realidade escolar e importante porque:",
    options: [
      "E apenas uma formalidade burocratica",
      "Permite conhecer o contexto sociocultural, as demandas e potencialidades da comunidade escolar para fundamentar as acoes pedagogicas",
      "Serve apenas para cumprir exigencias legais",
      "E utilizado exclusivamente para captacao de recursos",
      "Substitui o planejamento de ensino do professor"
    ],
    correctIndex: 1,
    explanation: "O diagnostico e etapa fundamental do PPP, pois permite compreender a realidade da comunidade, identificar necessidades, definir prioridades e planejar acoes pedagogicas contextualizadas.",
    category: "pedagogia",
    difficulty: "facil"
  },
  {
    id: 134,
    text: "A teoria de Lev Vygotsky enfatiza que os instrumentos e signos (linguagem) sao fundamentais para o desenvolvimento cognitivo porque:",
    options: [
      "Substituem a necessidade de interacao social",
      "Mediam a relacao do sujeito com o mundo, possibilitando a internalizacao de funcoes psicologicas superiores",
      "Sao irrelevantes para o processo de aprendizagem",
      "Funcionam apenas na fase adulta do desenvolvimento",
      "Devem ser evitados no contexto escolar"
    ],
    correctIndex: 1,
    explanation: "Para Vygotsky, os instrumentos (ferramentas) e signos (linguagem) sao mediadores que permitem ao sujeito interagir com o meio social e internalizar funcoes psicologicas superiores (pensamento, memoria voluntaria, atencao dirigida).",
    category: "pedagogia",
    difficulty: "dificil"
  },
  {
    id: 135,
    text: "No ambito da educacao profissional, o conceito de 'itinerario formativo' refere-se a:",
    options: [
      "Um caminho unico e rigido que todos os alunos devem percorrer",
      "O conjunto de etapas que compoe a trajetoria formativa do estudante, permitindo saidas intermediarias com certificacao",
      "A grade horaria semanal do curso",
      "O plano de carreira dos professores",
      "A estrutura fisica dos laboratorios"
    ],
    correctIndex: 1,
    explanation: "O itinerario formativo e o percurso de formacao composto por etapas articuladas, que permite ao estudante certificacoes intermediarias e continuidade nos estudos em diferentes niveis.",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 136,
    text: "A avaliacao institucional, diferente da avaliacao da aprendizagem, tem como foco:",
    options: [
      "Apenas o desempenho individual dos alunos",
      "A analise global da instituicao, incluindo gestao, infraestrutura, corpo docente, PPP e resultados educacionais",
      "Exclusivamente os indices de evasao",
      "A avaliacao do comportamento dos alunos",
      "O ranqueamento entre instituicoes"
    ],
    correctIndex: 1,
    explanation: "A avaliacao institucional analisa a instituicao como um todo: gestao, infraestrutura, corpo docente, PPP, processos pedagogicos, resultados, visando a melhoria continua da qualidade.",
    category: "pedagogia",
    difficulty: "medio"
  },
  {
    id: 137,
    text: "O principio da indissociabilidade entre ensino, pesquisa e extensao, previsto no art. 207 da CF/88, aplica-se aos Institutos Federais porque:",
    options: [
      "Os IFs sao equiparados as universidades federais",
      "Os IFs sao escolas tecnicas sem obrigacao de pesquisa",
      "A extensao e opcional para os IFs",
      "A pesquisa nos IFs e exclusivamente teorica",
      "Os IFs so oferecem cursos de nivel medio"
    ],
    correctIndex: 0,
    explanation: "Os IFs sao equiparados as universidades para fins de regulacao (Lei 11.892/2008, art. 2, par. 1), devendo observar a indissociabilidade entre ensino, pesquisa e extensao, com foco na pesquisa aplicada.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  {
    id: 138,
    text: "O planejamento participativo na escola e fundamentado na ideia de que:",
    options: [
      "Apenas especialistas podem planejar a educacao",
      "O planejamento deve ser feito exclusivamente pela direcao",
      "Todos os sujeitos envolvidos no processo educativo devem participar das decisoes pedagogicas",
      "O planejamento e desnecessario quando o professor tem experiencia",
      "Os alunos nao devem opinar sobre questoes pedagogicas"
    ],
    correctIndex: 2,
    explanation: "O planejamento participativo envolve professores, gestores, alunos, pais e comunidade nas decisoes, promovendo corresponsabilidade e fortalecendo a gestao democratica.",
    category: "pedagogia",
    difficulty: "facil"
  },
  {
    id: 139,
    text: "A Aprendizagem Baseada em Projetos (ABProj) difere da Aprendizagem Baseada em Problemas (ABP) principalmente porque:",
    options: [
      "Na ABProj, o foco e na elaboracao de um produto final concreto, enquanto na ABP o foco e na resolucao de um problema especifico",
      "Sao exatamente a mesma metodologia com nomes diferentes",
      "A ABP envolve trabalho em grupo e a ABProj e sempre individual",
      "A ABProj nao envolve investigacao",
      "A ABP nao se aplica a educacao profissional"
    ],
    correctIndex: 0,
    explanation: "Na ABProj, os alunos desenvolvem um projeto que resulta em produto tangivel (prototipo, apresentacao, relatorio). Na ABP, o foco e no processo de investigacao e resolucao de um problema complexo.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  {
    id: 140,
    text: "A BNCC (Base Nacional Comum Curricular) define competencias gerais que devem ser desenvolvidas ao longo da educacao basica. Dentre elas, a competencia 5 refere-se a:",
    options: [
      "Conhecimento cientifico",
      "Pensamento critico e criativo",
      "Cultura digital: compreender, utilizar e criar tecnologias digitais de forma critica e significativa",
      "Empatia e cooperacao",
      "Autoconhecimento e autocuidado"
    ],
    correctIndex: 2,
    explanation: "A competencia 5 da BNCC trata da cultura digital: compreender, utilizar e criar tecnologias digitais de informacao e comunicacao de forma critica, significativa, reflexiva e etica.",
    category: "pedagogia",
    difficulty: "dificil"
  },
  // Questoes adicionais avancadas
  {
    id: 119,
    text: "No contexto de DevOps, a pratica de CI/CD (Integracao Continua / Entrega Continua) tem como objetivo principal:",
    options: [
      "Desenvolver software sem testes",
      "Automatizar o processo de build, testes e deploy para entregas frequentes e confiaveis",
      "Eliminar a necessidade de controle de versao",
      "Substituir a equipe de operacoes por desenvolvedores",
      "Realizar deploys apenas uma vez por ano"
    ],
    correctIndex: 1,
    explanation: "CI/CD automatiza integracao de codigo (build + testes automaticos) e entrega/deploy, permitindo releases frequentes, confiaveis e com menor risco.",
    category: "informatica",
    difficulty: "dificil"
  },
  {
    id: 120,
    text: "Em Git, qual comando e utilizado para criar uma nova branch e alternar para ela simultaneamente?",
    options: [
      "git branch nome-branch",
      "git checkout -b nome-branch",
      "git merge nome-branch",
      "git push origin nome-branch",
      "git clone nome-branch"
    ],
    correctIndex: 1,
    explanation: "git checkout -b cria uma nova branch e alterna para ela em um unico comando. Equivalente a: git branch nome-branch + git checkout nome-branch.",
    category: "informatica",
    difficulty: "medio"
  },
]

// ============================================================
// REVIEW TOPICS (material de revisao organizado por topicos)
// ============================================================
export interface ReviewTopic {
  id: number
  title: string
  category: Category
  keyPoints: { title: string; content: string }[]
  tips: string[]
  mnemonics: string[]
}

export const reviewTopics: ReviewTopic[] = [
  // LEGISLACAO
  {
    id: 1,
    title: "Constituicao Federal - Educacao (Art. 205-214)",
    category: "legislacao",
    keyPoints: [
      { title: "Art. 205 - Direito a Educacao", content: "A educacao e direito de TODOS e dever do ESTADO e da FAMILIA, promovida com a colaboracao da sociedade. Objetivos: pleno desenvolvimento da pessoa, preparo para cidadania e qualificacao para o trabalho." },
      { title: "Art. 206 - Principios do Ensino", content: "I - igualdade de condicoes; II - liberdade de aprender e ensinar; III - pluralismo de ideias; IV - gratuidade do ensino publico; V - valorizacao dos profissionais; VI - gestao democratica; VII - garantia de padrao de qualidade; VIII - piso salarial." },
      { title: "Art. 208 - Dever do Estado", content: "Educacao basica obrigatoria e gratuita dos 4 aos 17 anos (EC 59/2009). Atendimento especializado aos portadores de deficiencia. Creche e pre-escola ate 5 anos." },
      { title: "Art. 207 - Autonomia Universitaria", content: "Universidades gozam de autonomia didatico-cientifica, administrativa e de gestao financeira. Principio de indissociabilidade entre ENSINO, PESQUISA e EXTENSAO." },
      { title: "Art. 212 - Financiamento", content: "Uniao: no minimo 18% da receita de impostos. Estados, DF e Municipios: no minimo 25% da receita de impostos para manutencao e desenvolvimento do ensino." },
    ],
    tips: [
      "A banca adora trocar 'Estado e familia' por 'Estado, familia e sociedade' - sociedade COLABORA, nao e dever.",
      "Cuidado: ensino religioso e de matricula FACULTATIVA (art. 210, par. 1)",
      "Os 4 aos 17 anos veio com a EC 59/2009, antes era 7 aos 14.",
    ],
    mnemonics: [
      "Principios do ensino (art. 206): 'IGUAL LIVRE PLURAL GRATUITO VALORIZA DEMOCRATA QUALIDADE PISO'",
      "Financiamento: 'Uniao 18%, Estados/DF/Municipios 25%' = U18 E25",
    ],
  },
  {
    id: 2,
    title: "Lei 8.112/90 - Regime Juridico dos Servidores",
    category: "legislacao",
    keyPoints: [
      { title: "Formas de Provimento (Art. 8)", content: "Nomeacao, Promocao, Readaptacao, Reversao, Aproveitamento, Reintegracao e Reconducao. TRANSFERENCIA e ASCENSAO foram REVOGADAS pela Lei 9.527/97." },
      { title: "Posse e Exercicio", content: "Posse: 30 dias da publicacao do ato de provimento (improrrogavel). Exercicio: 15 dias da posse. Estagio probatorio: 36 meses (3 anos)." },
      { title: "Estabilidade e Perda do Cargo", content: "Estabilidade apos 3 anos de efetivo exercicio. Perda do cargo: sentenca judicial transitada em julgado, PAD ou avaliacao periodica de desempenho (lei complementar)." },
      { title: "Penalidades (Art. 127)", content: "Advertencia, Suspensao (ate 90 dias), Demissao, Cassacao de aposentadoria, Destituicao de cargo em comissao, Destituicao de funcao comissionada." },
      { title: "Licencas (Art. 81)", content: "Doenca em pessoa da familia, afastamento do conjuge, servico militar, atividade politica, capacitacao, tratar de interesses particulares (NAO no estagio probatorio)." },
    ],
    tips: [
      "Abandono de cargo: 30 dias CONSECUTIVOS sem justificativa.",
      "Inassiduidade habitual: 60 dias INTERPOLADOS em 12 meses.",
      "No estagio probatorio NAO se concede licenca para tratar de interesses particulares.",
      "Readaptacao: limitacao fisica/mental. Reconducao: retorno ao cargo anterior.",
    ],
    mnemonics: [
      "Provimento: 'N-P-R-R-A-R-R' = Nomeacao, Promocao, Readaptacao, Reversao, Aproveitamento, Reintegracao, Reconducao",
      "Prazos: 'POsse 30, Exercicio 15, Estagio 36' = P30 E15 E36",
    ],
  },
  {
    id: 3,
    title: "Lei 11.892/2008 - Institutos Federais",
    category: "legislacao",
    keyPoints: [
      { title: "Natureza Juridica (Art. 2)", content: "IFs sao autarquias federais, com autonomia administrativa, patrimonial, financeira, didatico-pedagogica e disciplinar. EQUIPARADOS as universidades federais para fins de regulacao (NAO sao universidades)." },
      { title: "Percentuais de Vagas (Art. 8)", content: "Minimo 50% para educacao profissional tecnica de nivel medio (prioritariamente integrado). Minimo 20% para licenciaturas e formacao pedagogica." },
      { title: "Estrutura (Art. 9)", content: "Organizacao multicampi. Reitoria como orgao EXECUTIVO. Conselho Superior como orgao MAXIMO, consultivo e DELIBERATIVO." },
      { title: "Objetivos (Art. 7)", content: "Ofertar EPT em todos os niveis e modalidades. Desenvolver pesquisa aplicada. Promover extensao. Estimular producao cultural e empreendedorismo." },
    ],
    tips: [
      "Pegadinha classica: IFs sao EQUIPARADOS a universidades, nao SAO universidades.",
      "50% tecnico medio + 20% licenciaturas = os outros 30% sao livres (graduacao, pos-graduacao, FIC, etc.).",
      "O Reitor e nomeado pelo Presidente da Republica, apos consulta a comunidade.",
    ],
    mnemonics: [
      "Vagas: '50% TEC MED, 20% LIC' = 50TM 20L",
      "Orgaos: 'Reitoria EXECUTA, Conselho DELIBERA'",
    ],
  },
  {
    id: 4,
    title: "LDB - Lei 9.394/96 - Diretrizes e Bases",
    category: "legislacao",
    keyPoints: [
      { title: "Composicao da Educacao (Art. 21)", content: "Educacao basica: educacao infantil + ensino fundamental + ensino medio. Educacao superior." },
      { title: "Educacao Profissional (Art. 39-42)", content: "A EPT integra-se aos diferentes niveis e as dimensoes do trabalho, ciencia e TECNOLOGIA. Cursos: FIC, tecnico de nivel medio (integrado, concomitante, subsequente), tecnologico." },
      { title: "Educacao Infantil (Art. 29-31)", content: "Creche: ate 3 anos. Pre-escola: 4 e 5 anos. Avaliacao sem objetivo de promocao. Carga horaria minima: 800h anuais, 200 dias letivos." },
      { title: "Formacao de Professores (Art. 62)", content: "Nivel superior em curso de licenciatura. Admite-se formacao minima em nivel medio (modalidade normal) para educacao infantil e anos iniciais do fundamental." },
    ],
    tips: [
      "Cuidado: educacao BASICA tem 3 etapas (infantil + fundamental + medio), nao 2.",
      "EPT se integra ao trabalho, ciencia e TECNOLOGIA (nao 'cultura' nem 'sociedade').",
    ],
    mnemonics: [
      "Educacao Basica: 'IN-FUN-MED' = Infantil, Fundamental, Medio",
      "Educacao Infantil: 'Creche ATE 3, Pre-escola 4 E 5'",
    ],
  },
  {
    id: 5,
    title: "Resolucao 253/2025 - Organizacao Didatica IFPI",
    category: "legislacao",
    keyPoints: [
      { title: "Frequencia Minima", content: "75% da carga horaria total do componente curricular para aprovacao em cursos presenciais." },
      { title: "Regime Academico", content: "Regime seriado anual ou semestral para cursos tecnicos integrados. Cursos superiores podem adotar regime de creditos." },
      { title: "Avaliacao da Aprendizagem", content: "A avaliacao deve ser processual, continua e cumulativa, com prevalencia dos aspectos qualitativos sobre os quantitativos." },
      { title: "Conselho de Classe", content: "Instancia colegiada de natureza consultiva e deliberativa em assuntos didatico-pedagogicos, composta por docentes, equipe pedagogica e representacao estudantil." },
    ],
    tips: [
      "Frequencia de 75% e regra geral da LDB, o IFPI segue esse padrao.",
      "A avaliacao e PROCESSUAL e CONTINUA, nao apenas final/somativa.",
    ],
    mnemonics: [],
  },
  {
    id: 6,
    title: "Resolucao CNE/CP 1/2021 - Diretrizes EPT",
    category: "legislacao",
    keyPoints: [
      { title: "Abrangencia da EPT", content: "FIC (formacao inicial e continuada), educacao profissional tecnica de nivel medio, e educacao profissional tecnologica de graduacao e pos-graduacao." },
      { title: "Formas de Oferta do Tecnico", content: "Integrada, concomitante ou subsequente ao ensino medio. A forma integrada articula educacao basica e profissional em um unico curriculo." },
      { title: "Principios", content: "Articulacao entre educacao e trabalho. Respeito aos valores esteticos, politicos e eticos. Indissociabilidade entre educacao e pratica social. Historicidade do conhecimento." },
    ],
    tips: [
      "NAO existe forma articulada com ensino fundamental.",
      "A forma INTEGRADA e a que une ensino medio + tecnico em um unico curso.",
    ],
    mnemonics: [
      "Formas: 'IN-CON-SUB' = Integrada, Concomitante, Subsequente",
    ],
  },
  // LINGUA PORTUGUESA
  {
    id: 7,
    title: "Interpretacao de Textos e Figuras de Linguagem",
    category: "portugues",
    keyPoints: [
      { title: "Tipos Textuais", content: "Narrativo (conta fatos), Descritivo (caracteriza), Dissertativo-argumentativo (defende tese), Injuntivo (instrui), Expositivo (informa)." },
      { title: "Figuras de Linguagem Mais Cobradas", content: "Metafora (comparacao implicita), Metonimia (parte pelo todo ou vice-versa), Hiperbole (exagero), Eufemismo (suavizacao), Ironia (contrario do que se diz), Antitese (oposicao de ideias)." },
      { title: "Coesao e Coerencia", content: "Coesao: conexao linguistica entre partes do texto (conectivos, pronomes, sinonimos). Coerencia: logica e harmonia do sentido global do texto." },
      { title: "Denotacao e Conotacao", content: "Denotacao: sentido literal/dicionario. Conotacao: sentido figurado/contextual." },
    ],
    tips: [
      "Metafora NAO usa 'como', 'tal qual'. Se tiver comparativo, e COMPARACAO/SIMILE.",
      "Metonimia: 'Li Machado de Assis' (autor pela obra).",
    ],
    mnemonics: [],
  },
  {
    id: 8,
    title: "Sintaxe: Regencia, Concordancia e Crase",
    category: "portugues",
    keyPoints: [
      { title: "Regencia Verbal", content: "Assistir (= ver): VTI (a). Aspirar (= desejar): VTI (a). Visar (= objetivar): VTI (a). Implicar (= acarretar): VTD (sem preposicao). Obedecer: VTI (a). Preferir: VTD e VTI (algo A algo)." },
      { title: "Concordancia Verbal", content: "Verbos impessoais ficam no singular: HAVER (=existir), FAZER (tempo). Existir, Parecer, Faltar, Bastar concordam com o sujeito. Sujeito coletivo: verbo no singular." },
      { title: "Crase", content: "Crase = preposicao A + artigo A. NAO ocorre antes de: masculino, verbo, pronomes pessoais, 'a' no singular + palavra no plural. Casos obrigatorios: 'a moda de', 'a medida que', antes de horas." },
      { title: "Colocacao Pronominal", content: "Proclise: com palavra atrativa (nao, nunca, que, quem, adverbios). Mesoclise: futuro do presente/preterito sem atrativo. Enclise: inicio de frase, imperativo afirmativo, gerundio." },
    ],
    tips: [
      "'Implicar EM' e ERRADO quando significa acarretar (pegadinha classica).",
      "'Preferir mais X do que Y' e ERRADO. Correto: 'Preferir X A Y'.",
      "Verbo HAVER no sentido de existir NUNCA vai ao plural.",
    ],
    mnemonics: [
      "Verbos impessoais: 'HAVER nao EXISTE plural, FAZER tempo nao MUDA'",
    ],
  },
  {
    id: 9,
    title: "Morfologia e Ortografia",
    category: "portugues",
    keyPoints: [
      { title: "Classes Gramaticais", content: "Substantivo, Adjetivo, Verbo, Adverbio, Pronome, Artigo, Numeral, Preposicao, Conjuncao, Interjeicao. Total: 10 classes." },
      { title: "Processos de Formacao", content: "Derivacao (prefixal, sufixal, parassintese, regressiva, impropria). Composicao (justaposicao, aglutinacao)." },
      { title: "Acentuacao", content: "Oxitonas: acentuam-se terminadas em A(s), E(s), O(s), EM, ENS. Paroxitonas: acentuam-se quando NAO terminam em A(s), E(s), O(s), EM, ENS. Proparoxitonas: todas acentuadas." },
      { title: "Pontuacao", content: "Virgula NAO separa sujeito de predicado nem verbo de complemento. Ponto e virgula separa itens de enumeracao e oracoes coordenadas extensas." },
    ],
    tips: [
      "Parassintese: prefixo + radical + sufixo SIMULTANEAMENTE (anoitecer, empobrecer).",
      "NUNCA virgula entre sujeito e verbo, mesmo que o sujeito seja longo.",
    ],
    mnemonics: [
      "Proparoxitonas: 'TODAS tem acento, sem excecao'",
    ],
  },
  // INFORMATICA
  {
    id: 10,
    title: "Algoritmos, Estruturas de Dados e POO",
    category: "informatica",
    keyPoints: [
      { title: "Estruturas de Dados Basicas", content: "Fila (FIFO), Pilha (LIFO), Lista encadeada, Arvore binaria, Tabela hash, Grafo. Busca binaria: O(log n). Busca linear: O(n)." },
      { title: "Complexidade de Algoritmos", content: "O(1) constante, O(log n) logaritmico, O(n) linear, O(n log n) linearitmico, O(n^2) quadratico. Quick Sort medio: O(n log n). Merge Sort: O(n log n) sempre." },
      { title: "POO - 4 Pilares", content: "Encapsulamento (ocultar dados internos), Heranca (reusar codigo), Polimorfismo (multiplas formas), Abstracao (modelar essencia). SOLID: SRP, OCP, LSP, ISP, DIP." },
      { title: "Design Patterns", content: "Criacionais: Singleton, Factory, Builder. Estruturais: Adapter, Facade, Decorator. Comportamentais: Observer, Strategy, Command." },
    ],
    tips: [
      "Fila = FIFO (fila de banco). Pilha = LIFO (pilha de pratos).",
      "Quick Sort pior caso e O(n^2), mas MEDIA e O(n log n).",
    ],
    mnemonics: [
      "Pilares POO: 'E-H-P-A' = Encapsulamento, Heranca, Polimorfismo, Abstracao",
      "SOLID: Single resp., Open/closed, Liskov, Interface segregation, Dependency inversion",
    ],
  },
  {
    id: 11,
    title: "Banco de Dados, Redes e Seguranca",
    category: "informatica",
    keyPoints: [
      { title: "Normalizacao (BD)", content: "1FN: atributos atomicos. 2FN: sem dependencia parcial. 3FN: sem dependencia transitiva. FNBC: todo determinante e chave candidata." },
      { title: "ACID (BD)", content: "Atomicidade (tudo ou nada), Consistencia (estado valido), Isolamento (transacoes independentes), Durabilidade (permanencia apos commit)." },
      { title: "Modelo OSI (7 camadas)", content: "Fisica, Enlace, Rede, Transporte, Sessao, Apresentacao, Aplicacao. TCP/IP: Acesso a rede, Internet, Transporte, Aplicacao." },
      { title: "Seguranca - CID", content: "Confidencialidade (sigilo), Integridade (nao alteracao), Disponibilidade (acesso quando necessario). Autenticidade e Nao-repudio complementam." },
      { title: "Criptografia", content: "Simetrica: mesma chave (AES, DES). Assimetrica: par de chaves publica/privada (RSA). Hash: funcao unidirecional (SHA-256, MD5)." },
    ],
    tips: [
      "TCP: confiavel, com confirmacao. UDP: rapido, sem garantia.",
      "Para CONFIDENCIALIDADE: cifra com chave PUBLICA do destinatario.",
      "Para ASSINATURA DIGITAL: cifra com chave PRIVADA do remetente.",
    ],
    mnemonics: [
      "OSI: 'Farei Esse Roteiro Todo Sem Perder Aplicacao' = Fisica, Enlace, Rede, Transporte, Sessao, Apresentacao, Aplicacao",
      "ACID: 'A transacao e Atomica, Consistente, Isolada e Duravel'",
    ],
  },
  {
    id: 12,
    title: "Engenharia de Software, Web, Mobile e IA",
    category: "informatica",
    keyPoints: [
      { title: "Metodologias Ageis", content: "Scrum: Sprints (1-4 semanas), Product Owner, Scrum Master, Daily Standup, Sprint Review, Retrospectiva. Kanban: fluxo continuo, quadro visual." },
      { title: "Desenvolvimento Web", content: "Frontend (HTML, CSS, JS), Backend (API REST, servidor), Banco de Dados. HTTP metodos: GET (ler), POST (criar), PUT (atualizar), DELETE (remover). MVC: Model-View-Controller." },
      { title: "Mobile", content: "Nativo: Android (Kotlin/Java), iOS (Swift). Hibrido/Multiplataforma: Flutter (Dart), React Native (JS). PWA: app web com funcionalidades nativas (offline, notificacoes)." },
      { title: "Inteligencia Artificial", content: "Supervisionado: dados rotulados (classificacao, regressao). Nao supervisionado: sem rotulos (clustering, reducao dimensionalidade). Reforco: recompensas. LLMs: baseados em Transformers." },
    ],
    tips: [
      "Sprint no Scrum tem DURACAO FIXA. Nao se altera durante a execucao.",
      "REST e stateless (sem estado). Cada requisicao e independente.",
      "PWA funciona OFFLINE usando Service Workers.",
    ],
    mnemonics: [
      "HTTP: 'GET Pega, POST Posta, PUT atualiza, DELETE deleta'",
      "ML: 'COM rotulo = Supervisionado, SEM rotulo = Nao supervisionado'",
    ],
  },
  // PEDAGOGIA
  {
    id: 13,
    title: "Teorias da Aprendizagem e Psicologia da Educacao",
    category: "pedagogia",
    keyPoints: [
      { title: "Piaget - Construtivismo", content: "Estagios: Sensorio-motor (0-2), Pre-operatorio (2-7), Operatorio concreto (7-11), Operatorio formal (12+). Conceitos: assimilacao, acomodacao, equilibracao." },
      { title: "Vygotsky - Sociointeracionismo", content: "Zona de Desenvolvimento Proximal (ZDP): distancia entre nivel real e potencial. Mediacao: instrumentos e signos. O aprendizado precede o desenvolvimento." },
      { title: "Ausubel - Aprendizagem Significativa", content: "O fator mais importante e o que o aluno JA SABE. Organizadores previos ancoram novos conhecimentos. Opoe-se a aprendizagem mecanica (decoreba)." },
      { title: "Wallon - Psicogenetica", content: "Desenvolvimento descontinuo. Alternancia funcional (afetividade x cognicao). Emocao tem papel central. Estagios: impulsivo-emocional, sensorio-motor, personalismo, categorial, puberdade." },
      { title: "Freire - Pedagogia Critica", content: "Educacao bancaria vs educacao libertadora. Dialogicidade. Problematizacao da realidade. Conscientizacao. Autonomia do educando." },
    ],
    tips: [
      "Piaget: o SUJEITO constroi o conhecimento interagindo com o OBJETO.",
      "Vygotsky: o SOCIAL e fundamental; aprendizagem PRECEDE o desenvolvimento.",
      "Nao confunda: Piaget foca no biologico/cognitivo. Vygotsky no social/cultural.",
    ],
    mnemonics: [
      "Piaget estagios: 'SEN-PRE-CON-FOR' = Sensorio-motor, Pre-operatorio, Concreto, Formal",
      "Vygotsky: 'ZDP = o que FAZ com ajuda HOJE, fara SOZINHO amanha'",
    ],
  },
  {
    id: 14,
    title: "Didatica, Metodologias Ativas e Avaliacao",
    category: "pedagogia",
    keyPoints: [
      { title: "Tendencias Pedagogicas", content: "Liberal: Tradicional, Renovada progressivista, Renovada nao-diretiva, Tecnicista. Progressista: Libertadora (Freire), Libertaria, Critico-social dos conteudos (Saviani/Libâneo)." },
      { title: "Metodologias Ativas", content: "Sala de Aula Invertida (estudo previo + pratica em aula), ABP/PBL (problema como ponto de partida), Gamificacao (elementos de jogos), Aprendizagem por projetos, Design Thinking." },
      { title: "Avaliacao", content: "Diagnostica: inicio do processo (o que o aluno sabe). Formativa: durante o processo (feedback continuo). Somativa: ao final (resultado/classificacao)." },
      { title: "Planejamento de Ensino", content: "Plano de curso, plano de unidade, plano de aula. Elementos: objetivos, conteudos, metodologia, recursos, avaliacao. Taxonomia de Bloom: Lembrar, Compreender, Aplicar, Analisar, Avaliar, Criar." },
    ],
    tips: [
      "Na Sala de Aula Invertida, o aluno ESTUDA ANTES da aula presencial.",
      "Avaliacao formativa e a mais valorizada nas questoes de concurso (feedback continuo).",
      "Bloom revisada: o nivel mais alto e CRIAR (nao Avaliar como na versao original).",
    ],
    mnemonics: [
      "Avaliacao: 'DIA-FOR-SOM' = Diagnostica (antes), Formativa (durante), Somativa (depois)",
      "Bloom: 'Le-Com-A-Ana-Ava-Cria' = Lembrar, Compreender, Aplicar, Analisar, Avaliar, Criar",
    ],
  },
  {
    id: 15,
    title: "Educacao Inclusiva, EPT e Gestao Escolar",
    category: "pedagogia",
    keyPoints: [
      { title: "Educacao Inclusiva", content: "Declaracao de Salamanca (1994): escolas regulares devem acolher TODOS. LBI (Lei 13.146/2015): AEE complementa/suplementa, nao substitui. PNEE: atendimento preferencialmente na rede regular." },
      { title: "EPT - Fundamentos", content: "Educacao politecnica/omnilateral: articulacao trabalho-ciencia-tecnologia-cultura. Criacao Escolas Aprendizes Artifices: 1909 (Nilo Pecanha). Lei 11.892/2008 cria os IFs." },
      { title: "Gestao Escolar Democratica", content: "PPP: construcao coletiva. Conselho Escolar: participacao da comunidade. Autonomia da escola com responsabilidade social. Principio constitucional (art. 206, VI)." },
      { title: "Estagio Supervisionado", content: "Articulacao teoria-pratica. Construcao da identidade docente. Vivencia do cotidiano escolar. NAO e mao de obra gratuita." },
      { title: "Curriculo", content: "Curriculo prescrito (oficial), curriculo real (praticado), curriculo oculto (implicito). BNCC define competencias e habilidades. Ensino medio: formacao geral basica + itinerarios formativos." },
    ],
    tips: [
      "AEE e COMPLEMENTAR, nunca substitutivo ao ensino regular.",
      "1909 = Nilo Pecanha = Escolas de Aprendizes Artifices (marco da EPT).",
      "Curriculo oculto: aprendizagens NAO planejadas (valores, normas implicitas).",
    ],
    mnemonics: [
      "Inclusao: 'SALAMANCA = TODOS na escola REGULAR'",
      "EPT: '1909 Nilo Pecanha, 2008 IFs, 50% Tecnico, 20% Licenciatura'",
    ],
  },
]

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

export function getQuestionsByCategory(category: Category | "todas"): Question[] {
  if (category === "todas") return [...questions]
  return questions.filter(q => q.category === category)
}

export function getQuestionsByDifficulty(qs: Question[], difficulty: Difficulty | "todas"): Question[] {
  if (difficulty === "todas") return qs
  return qs.filter(q => q.difficulty === difficulty)
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function getSimuladoQuestions(area: "informatica" | "educacionais"): Question[] {
  const allPortugues = questions.filter(q => q.category === "portugues")
  const allLegislacao = questions.filter(q => q.category === "legislacao")
  const specificCategory = area === "informatica" ? "informatica" : "pedagogia"
  const allEspecificas = questions.filter(q => q.category === specificCategory)

  // Guarantee exact counts: 10 PT + 10 LEG + 40 ESPECIFICAS = 60
  const portugues = getExactQuestions(allPortugues, 10)
  const legislacao = getExactQuestions(allLegislacao, 10)
  const especificas = getExactQuestions(allEspecificas, 40)

  return [...portugues, ...legislacao, ...especificas]
}

function getExactQuestions(pool: Question[], count: number): Question[] {
  const shuffled = shuffleArray(pool)
  if (shuffled.length >= count) {
    return shuffled.slice(0, count)
  }
  // If not enough unique questions, repeat shuffled pool to fill
  const result: Question[] = []
  while (result.length < count) {
    const remaining = count - result.length
    const batch = shuffleArray(pool).slice(0, Math.min(remaining, pool.length))
    result.push(...batch)
  }
  return result.slice(0, count)
}

export function getCategoryLabel(category: Category | "todas"): string {
  const labels: Record<string, string> = {
    todas: "Todas as Categorias",
    portugues: "Lingua Portuguesa",
    legislacao: "Legislacao",
    informatica: "Informatica",
    pedagogia: "Assuntos Educacionais"
  }
  return labels[category] || category
}

export function getDifficultyLabel(difficulty: Difficulty | "todas"): string {
  const labels: Record<string, string> = {
    todas: "Todas",
    facil: "Facil",
    medio: "Medio",
    dificil: "Dificil"
  }
  return labels[difficulty] || difficulty
}
