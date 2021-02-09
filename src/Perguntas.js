import React, { useState, useRef } from "react";
import { View, ScrollView, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default ({route , navigation}) => {
  const {ofens} = route.params;
  const [ofensiva, setOfensiva] = useState(ofens);
  const [selecionado, setSelecionado] = useState("");
  const [acertou, setAcertou] = useState(2);  
  const [aleat, setAleat] = useState(Math.floor(Math.random() * 160));


  const [perguntas, setPerguntas] = useState([
    {
    pergunta: "Havendo indícios de que Sara obteve inscrição na Ordem dos Advogados do Brasil mediante prova falsa, foi instaurado contra ela processo disciplinar. Sobre o tema, assinale a afirmativa correta.",
    a: "O processo disciplinar contra Sara pode ser instaurado de ofício ou mediante representação, que pode ser anônima.",
    b: "Em caso de revelia de Sara, o processo disciplinar seguirá, independentemente de designação de defensor dativo.",
    c: "O processo disciplinar instaurado contra Sara será, em regra, público.",
    d: "O recurso contra eventual decisão que determine o cancelamento da inscrição de Sara não terá efeito suspensivo.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "1"
}, {
    pergunta: "Em certo município, os advogados André e Helena são os únicos especialistas em determinado assunto jurídico. Por isso, André foi convidado a participar de entrevista na imprensa escrita sobre as repercussões de medidas tomadas pelo Poder Executivo local, relacionadas à sua área de especialidade. Durante a entrevista, André convidou os leitores a litigarem em face da Administração Pública, conclamando - os a procurarem advogados especializados para ajuizarem, desde logo, as demandas que considerava tecnicamente cabíveis. Porém, quando indagado sobre os meios de contato de seu escritório, para os leitores interessados, André disse que, por obrigação ética, não poderia divulgá - los por meio daquele veículo. Por sua vez, a advogada Helena, irresignada com as mesmas medidas tomadas pelo Executivo, procurou um programa de rádio, oferecendo - se para uma reportagem sobre o assunto.No programa, Helena manifestou - se de forma técnica, educativa e geral, evitando sensacionalismo. Considerando as situações acima narradas e o disposto no Código de Ética e Disciplina da OAB, assinale a afirmativa correta.",
    a: "André e Helena agiram de forma ética, observando as normas previstas no Código de Ética e Disciplina da OAB.",
    b: "Nenhum dos dois advogados agiu de forma ética, tendo ambos inobservado as normas previstas no Código de Ética e Disciplina da OAB.",
    c: "Apenas André agiu de forma ética, observando as normas previstas no Código de Ética e Disciplina da OAB.",
    d: "Apenas Helena agiu de forma ética, observando as normas previstas no Código de Ética e Disciplina da OAB.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "2"
}, {
    pergunta: "O advogado Fernando foi contratado por Flávio para defendê-lo, extrajudicialmente, tendo em vista a pendência de inquérito civil em face do cliente. O contrato celebrado por ambos foi assinado em 10/03/15, não prevista data de vencimento. Em 10 / 03 / 17, foi concluída a atuação de Fernando, tendo sido homologado o arquivamento do inquérito civil junto ao Conselho Superior do Ministério Público.Em 10 / 03 / 18, Fernando notificou extrajudicialmente Flávio, pois este ainda não havia adimplido os valores relativos aos honorários contratuais acordados. A ação de cobrança de honorários a ser proposta por Fernando prescreve em ",
    a: "três anos, contados de 10/03/15.",
    b: "cinco anos, contados de 10/03/17.",
    c: "três anos, contados de 10/03/18.",
    d: "cinco anos, contados de 10/03/15.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "3"
}, {
    pergunta: "Os sócios Antônio, Daniel e Marcos constituíram a sociedade Antônio, Daniel & Marcos Advogados Associados , com sede em São Paulo e filial em Brasília. Após desentendimentos entre eles, Antônio constitui sociedade unipessoal de advocacia, com sede no Rio de Janeiro. Marcos, por sua vez, retira-se da sociedade Antônio, Daniel & Marcos Advogados Associados . Sobre a situação apresentada, assinale a afirmativa correta.",
    a: "Daniel não está obrigado a manter inscrição suplementar em Brasília, já que a sociedade Antônio, Daniel & Marcos Advogados Associados tem sede em São Paulo.",
    b: "Antônio deverá retirar-se da Antônio, Daniel & Marcos Advogados Associados , já que não pode integrar, simultaneamente, uma sociedade de advogados e uma sociedade unipessoal de advocacia.",
    c: "Mesmo após Marcos se retirar da sociedade Antônio, Daniel & Marcos Advogados Associados permanece o impedimento para que ele e Antônio representem em juízo clientes com interesses opostos.",
    d: "Caso Antônio também se retire da Antônio, Daniel & Marcos Advogados Associados , a sociedade deverá passar a ser denominada Daniel Sociedade Individual de Advocacia.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "4"
}, {
    pergunta: "Um escritório de renome internacional considera expandir suas operações, iniciando atividades no Brasil. Preocupados em adaptar seus procedimentos internos para que reflitam os códigos brasileiros de ética profissional, seus dirigentes estrangeiros desejam entender melhor as normas a respeito da relação entre clientes e advogados no país. Sobre esse tema, é correto afirmar que os advogados brasileiros",
    a: "podem, para a adoção de medidas judiciais urgentes e inadiáveis, aceitar procuração de quem já tenha patrono constituído, sem prévio conhecimento deste.",
    b: "deverão considerar sua própria opinião a respeito da culpa do acusado ao assumir defesa criminal.",
    c: "podem funcionar, no mesmo processo, simultaneamente, como patrono e preposto de seu cliente, desde que tenham conhecimento direto dos fatos.",
    d: "podem representar, em juízo, clientes com interesses opostos se não integrarem a mesma sociedade profissional, mas estiverem reunidos em caráter permanente para cooperação recíproca.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "5"
}, {
    pergunta: "O advogado João era conselheiro de certo Conselho Seccional da OAB. Todavia, por problemas pessoais, João decidiu renunciar ao mandato. Considerando o caso narrado, assinale a afirmativa correta.",
    a: "Compete ao plenário do Conselho Seccional respectivo declarar extinto o mandato, sendo exigido que previamente ouça João no prazo de dez dias, após notificação deste mediante ofício com aviso de recebimento.",
    b: "Compete à Diretoria do Conselho Seccional respectivo declarar extinto o mandato, independentemente de exigência de prévia notificação para oitiva de João.",
    c: "Compete ao plenário do Conselho Seccional respectivo declarar extinto o mandato, sendo exigido que previamente ouça João no prazo de quinze dias, após notificação pessoal deste.",
    d: "Compete ao plenário do Conselho Seccional respectivo declarar extinto o mandato, sendo exigido que previamente ouça João no prazo de quinze dias, após notificação pessoal deste.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "6"
}, {
    pergunta: "A sociedade Antônio, Breno, Caio & Diego Advogados Associados é integrada, exclusivamente, pelos sócios Antônio, Breno, Caio e Diego, todos advogados regularmente inscritos na OAB. Em um determinado momento, Antônio vem a falecer. Breno passa a exercer mandato de vereador, sem figurar entre os integrantes da Mesa Diretora da Câmara Municipal ou seus substitutos legais. Caio passa a exercer, em caráter temporário, função de direção em empresa concessionária de serviço público. Considerando esses acontecimentos, assinale a afirmativa correta.",
    a: "O nome de Antônio poderá permanecer na razão social da sociedade após o seu falecimento, ainda que tal possibilidade não esteja prevista em seu ato constitutivo.",
    b: "Breno deverá licenciar-se durante o período em que exercer o mandato de vereador, devendo essa informação ser averbada no registro da sociedade.",
    c: "Caio deverá deixar a sociedade, por ter passado a exercer atividade incompatível com a advocacia.",
    d: "Com o falecimento de Antônio, se Breno e Caio deixarem a sociedade e nenhum outro sócio ingressar nela, Diego poderá continuar suas atividades, caso em que passará a ser titular de sociedade unipessoal de advocacia.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "7"
}, {
    pergunta: "Os advogados Diego, Willian e Pablo, todos em situação regular perante a OAB, desejam candidatar-se ao cargo de conselheiro de um Conselho Seccional da OAB. Diego é advogado há dois anos e um dia, sendo sócio de uma sociedade simples de prestação de serviços de advocacia e nunca foi condenado por infração disciplinar. Willian, por sua vez, exerce a advocacia há exatos quatro anos e constituiu sociedade unipessoal de advocacia, por meio da qual advoga atualmente.Willian já foi condenado pela prática de infração disciplinar, tendo obtido reabilitação um ano e três meses após o cumprimento da sanção imposta. Já Pablo é advogado há cinco anos e um dia e nunca respondeu por prática de qualquer infração disciplinar.Atualmente, Pablo exerce certo cargo em comissão, exonerável ad nutum, cumprindo atividades exclusivas da advocacia. Considerando as informações acima e o disposto na Lei no 8.906 / 94, assinale a afirmativa correta.",
    a: "Apenas Diego e Willian cumprem os requisitos para serem eleitos para o cargo pretendido.",
    b: "Apenas Willian cumpre os requisitos para ser eleito para o cargo pretendido.",
    c: "Apenas Diego e Pablo cumprem os requisitos para serem eleitos para o cargo pretendido.",
    d: "Apenas Pablo cumpre os requisitos para ser eleito para o cargo pretendido.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "8"
}, {
    pergunta: '"É preciso sair do estado natural, no qual cada um age em função dos seus próprios caprichos, e convencionar com todos os demais em submeter - se a uma limitação exterior, publicamente acordada, e, por conseguinte, entrar num estado em que tudo que deve ser reconhecido como seu é determinado pela lei" Immanuel Kant .A perspectiva contratualista de Kant, apresentada na obra Doutrina do Direito, sustenta ser necessário passar de um estado de natureza, no qual as pessoas agem egoisticamente, para um estado civil, em que a vida em comum seja regulada pela lei, como forma de justiça pública.Isso implica interferir na liberdade das pessoas. Em relação à liberdade no estado civil, assinale a opção que apresenta a posição que Kant sustenta na obra em referência.',
    a: "O homem deixou sua liberdade selvagem e sem freio para encontrar toda a sua liberdade na dependência legal, isto é, num estado jurídico, porque essa dependência procede de sua própria vontade legisladora.",
    b: "A liberdade num estado jurídico ou civil consiste na capacidade da vontade soberana de cada indivíduo de fazer aquilo que deseja, pois somente nesse estado o homem se vê livre das forças da natureza que limitam sua vontade.",
    c: "A liberdade civil resulta da estrutura política do estado, de forma que somente pode ser considerado liberdade aquilo que decorre de uma afirmação de vontade do soberano. No estado civil, a liberdade não pode ser considerada uma vontade pessoal.",
    d: "Na república, a liberdade é do governante para governar em prol de todos os cidadãos, de modo que o governante possui liberdade, e os governados possuem direitos que são instituídos pelo governo.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "9"
}, {
    pergunta: '"Temos pois definido o justo e o injusto.Após distingui - los assim um do outro, é evidente que a ação justa é intermediária entre o agir injustamente e o ser vítima da injustiça;pois um deles é ter demais e o outro é ter demasiado pouco ". (ARISTÓTELES.Ética a Nicômaco.Coleção Os Pensadores.São Paulo: Abril Cultural, 1973). Em seu livro Ética a Nicômaco, Aristóteles apresenta a justiça como uma virtude e a diferencia daquilo que é injusto.Assinale a opção que define aquilo que, nos termos do livro citado, deve ser entendido como justiça enquanto virtude.',
    a: "Uma espécie de meio-termo, porém não no mesmo sentido que as outras virtudes, e sim porque se relaciona com uma quantia intermediária, enquanto a injustiça se relaciona com os extremos.",
    b: "Uma maneira de proteger aquilo que é o mais conveniente para o mais forte, uma vez que a justiça como produto do governo dos homens expressa sempre as forças que conseguem fazer valer seus próprios interesses.",
    c: "O cumprimento dos pactos que decorrem da vida em sociedade, seja da lei como pacto que vincula todos os cidadãos da cidade, seja dos contratos que funcionam como pactos celebrados entre particulares e vinculam as partes contratantes.",
    d: "Um imperativo categórico que define um modelo de ação moralmente desejável para toda e qualquer pessoa e se expressa da seguinte maneira: “ Age como se a máxima de tua ação devesse tornar-se, por meio da tua vontade, uma lei universal ”.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "10"
}, {
    pergunta: "Preocupado com o grande número de ações judiciais referentes a possíveis omissões inconstitucionais sobre direitos sociais e, em especial, sobre o direito à saúde, o Procurador-Geral do Estado Beta (PGE) procurou traçar sua estratégia hermenêutica de defesa a partir de dois grandes argumentos jurídicos: em primeiro lugar, destacou que a efetividade dos direitos prestacionais de segunda dimensão, promovida pelo Poder Judiciário, deve levar em consideração a disponibilidade financeira estatal; um segundo argumento é o relativo à falta de legitimidade democrática de juízes e tribunais para fixar políticas públicas no lugar do legislador eleito pelo povo. Diante de tal situação, assinale a opção que apresenta os conceitos jurídicos que correspondem aos argumentos usados pelo PGE do Estado Beta.",
    a: "Dificuldade contraparlamentar e reserva do impossível.",
    b: "Reserva do possível fática e separação dos Poderes.",
    c: "Reserva do possível jurídica e reserva de jurisdição do Poder Judiciário.",
    d: "Reserva do possível fática e reserva de plenário.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "11"
}, {
    pergunta: "Josué, deputado federal no regular exercício do mandato, em entrevista dada, em sua residência, à revista Pensamento , acusa sua adversária política Aline de envolvimento com escândalos de desvio de verbas públicas, o que é objeto de investigação em Comissão Parlamentar de Inquérito instaurada poucos dias antes. Não obstante, após ser indagado sobre os motivos que nutriam as acaloradas disputas entre ambos, Josué emite opinião com ofensas de cunho pessoal, sem qualquer relação com o exercício do mandato parlamentar. Diante do caso hipotético narrado, conforme reiterada jurisprudência do Supremo Tribunal Federal sobre o tema, assinale a afirmativa correta.",
    a: "Josué poderá ser responsabilizado penal e civilmente, inclusive por danos morais, pelas ofensas proferidas em desfavor de Aline que não guardem qualquer relação com o exercício do mandato parlamentar.",
    b: "Josué encontra-se protegido pela imunidade material ou inviolabilidade por suas opiniões, palavras e votos, o que, considerado o caráter absoluto dessa prerrogativa, impede a sua responsabilização por quaisquer das declarações prestadas à revista.",
    c: "Josué poderá ter sua imunidade material afastada em virtude de as declarações terem sido prestadas fora da respectiva casa legislativa, independentemente de estarem, ou não, relacionadas ao exercício do mandato.",
    d: "A imunidade material, consagrada constitucionalmente, foi declarada inconstitucional pelo Supremo Tribunal Federal, de modo que Josué não poderá valer-se de tal prerrogativa para se isentar de eventual responsabilidade pelas ofensas dirigidas a Aline.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "12"
}, {
    pergunta: "Diante das intensas chuvas que atingiram o Estado Alfa, que se encontra em situação de calamidade pública, o Presidente da República, ante a relevância e urgência latentes, edita a Medida Provisória nº XX/19, determinando a abertura de crédito extraordinário para atender às despesas imprevisíveis a serem realizadas pela União, em decorrência do referido desastre natural. A partir da situação hipotética narrada, com base no texto constitucional vigente, assinale a afirmativa correta.",
    a: "A Constituição de 1988 veda, em absoluto, a edição de ato normativo dessa natureza sobre matéria orçamentária, de modo que a abertura de crédito extraordinário deve ser feita por meio de lei ordinária de iniciativa do Chefe do Executivo.",
    b: "A Constituição de 1988 veda a edição de ato normativo dessa natureza em matéria de orçamento e créditos adicionais e suplementares, mas ressalva a possibilidade de abertura de crédito extraordinário para atender a despesas imprevisíveis e urgentes, como as decorrentes de calamidade pública.",
    c: "O ato normativo editado afronta o princípio constitucional da anterioridade orçamentária, o qual impede quaisquer modificações nas leis orçamentárias após sua aprovação pelo Congresso Nacional e consequente promulgação presidencial.",
    d: "O ato normativo editado é harmônico com a ordem constitucional, que autoriza a edição de medidas provisórias que versem sobre planos plurianuais, diretrizes orçamentárias, orçamento e créditos adicionais, suplementares e extraordinários, desde que haja motivação razoável.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "13"
}, {
    pergunta: "Alfa, entidade de classe de abrangência regional, legalmente constituída e em funcionamento há mais de 1 ano, ingressa, perante o Supremo Tribunal Federal, com mandado de segurança coletivo para tutelar os interesses jurídicos de seus representados. Considerando a urgência do caso, Alfa não colheu autorização dos seus associados para a impetração da medida. Com base na narrativa acima, assinale a afirmativa correta.",
    a: "Alfa não tem legitimidade para impetrar mandado de segurança coletivo, de modo que a defesa dos seus associados em juízo deve ser feita pelo Ministério Público ou, caso evidenciada situação de vulnerabilidade, pela Defensoria Pública.",
    b: "Alfa goza de ampla legitimidade para impetrar mandado de segurança coletivo, inclusive para tutelar direitos e interesses titularizados por pessoas estranhas à classe por ela representada.",
    c: "Alfa possui legitimidade para impetrar mandado de segurança coletivo em defesa dos interesses jurídicos dos seus associados, sendo, todavia, imprescindível a prévia autorização nominal e individualizada dos representados, em assembleia especialmente convocada para esse fim.",
    d: "Alfa possui legitimidade para impetrar mandado de segurança coletivo em defesa dos interesses jurídicos da totalidade ou mesmo de parte dos seus associados, independentemente de autorização.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "14"
}, {
    pergunta: "O governo federal, visando ao desenvolvimento e à redução das desigualdades no sertão nordestino do Brasil, editou a Lei Complementar Y, que dispôs sobre a concessão de isenções e reduções temporárias de tributos federais devidos por pessoas físicas e jurídicas situadas na referida região. Sobre a Lei Complementar Y, assinale a afirmativa correta.",
    a: "É formalmente inconstitucional, eis que a Constituição da República de 1988 proíbe expressamente a criação de regiões, para efeitos administrativos, pela União.",
    b: "É materialmente inconstitucional, sendo vedada a concessão de incentivos regionais de tributos federais, sob pena de violação ao princípio da isonomia federativa.",
    c: "É formal e materialmente constitucional, sendo possível que a União conceda incentivos visando ao desenvolvimento econômico e à redução das desigualdades no sertão nordestino.",
    d: "Apresenta inconstitucionalidade formal subjetiva, eis que cabe aos Estados e ao Distrito Federal, privativamente, criar regiões administrativas visando ao seu desenvolvimento e à redução das desigualdades.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "15"
}, {
    pergunta: "José Maria, no ano de 2016, foi eleito para exercer o seu primeiro mandato como Prefeito da Cidade Delta, situada no Estado Alfa. Nesse mesmo ano, a filha mais jovem de José Maria, Janaína (22 anos), elegeu-se vereadora e já se organiza para um segundo mandato como vereadora. Rosária(26 anos), a outra filha de José Maria, animada com o sucesso da irmã mais nova e com a popularidade do pai, que pretende concorrer à reeleição, faz planos para ingressar na política, disputando uma das cadeiras da Assembleia Legislativa do Estado Alfa. Diante desse quadro, a família contrata um advogado para orientá - la.Após analisar a situação, seguindo o sistema jurídico - constitucional brasileiro, o advogado afirma que ", 
    a: "as filhas não poderão concorrer aos cargos almejados, a menos que José Maria desista de concorrer à reeleição para o cargo de chefe do Poder Executivo do Município Delta.",
    b: "Rosária pode se candidatar ao cargo de deputada estadual, mas Janaína não poderá se candidatar ao cargo de vereadora em Delta, pois seu pai ocupa o cargo de chefe do Poder Executivo do referido município.",
    c: "as candidaturas de Janaína, para reeleição ao cargo de vereadora, e de Rosária, para o cargo de deputada estadual, não encontram obstáculo no fato de José Maria ser prefeito de Delta.",
    d: "Janaína pode se candidatar ao cargo de vereadora, mas sua irmã Rosária não poderá se candidatar ao cargo de deputada estadual, tendo em vista o fato de seu pai exercer a chefia do Poder Executivo do município.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "16"
}, {
    pergunta: "João dos Santos foi selecionado para atuar como praça prestadora de serviço militar inicial, fato que lhe permitirá ser o principal responsável pelos meios de subsistência de sua família. No entanto, ficou indignado ao saber que sua remuneração será inferior ao salário mínimo, contrariando o texto constitucional, insculpido no Art. 7º, inciso IV, da CRFB/88. Desesperado com tal situação, João entrou no gabinete do seu comandante e o questionou, de forma ríspida e descortês, acerca dessa remuneração supostamente inconstitucional, sofrendo, em consequência dessa conduta, punição administrativo - disciplinar de prisão por 5 dias, nos termos da legislação pertinente.Desolada, a família de João procurou um advogado para saber sobre a constitucionalidade da remuneração inferior ao salário mínimo, bem como da possibilidade de a prisão ser relaxada por ordem judicial. Nessas circunstâncias, nos termos do direito constitucional brasileiro e da jurisprudência do STF, assinale a opção que apresenta a resposta do advogado.",
    a: "A remuneração inferior ao salário mínimo para as praças prestadoras de serviço militar inicial não viola a Constituição de 1988, bem como não cabe habeas corpus em relação às punições disciplinares militares, exceto para análise de pressupostos de legalidade, excluída a apreciação de questões referentes ao mérito.",
    b: "A remuneração inferior ao salário mínimo contraria o Art. 7º, inciso IV, da Constituição de 1988, bem como se reconhece o cabimento de habeas corpus para as punições disciplinares militares, qualquer que seja a circunstância.",
    c: "O estabelecimento de remuneração inferior ao salário mínimo para as praças prestadoras de serviço militar inicial não viola a Constituição da República, mas é cabível o habeas corpus para as punições disciplinares militares, até mesmo em relação a questões de mérito da sanção adminsitrativa.",
    d: "A remuneração inferior ao salário mínimo contraria a ordem constitucional, mais especificamente o texto constitucional inserido no Art. 7º, inciso IV, da Constituição de 1988, bem como não se reconhece o cabimento de habeas corpus em relação às punições disciplinares militares, exceto para análise dos pressupostos de legalidade, excluídas as questões de mérito da sanção administrativa.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "17"
}, {
    pergunta: "Recentemente assumiu a presidência da Câmara dos Deputados um parlamentar que afirma que o Brasil é um país soberano e não deve ter nenhum compromisso com os Direitos Humanos na ordem internacional. Afirma que, apesar de ter sido internamente ratificado, o Pacto Internacional dos Direitos Civis e Políticos não se caracteriza como norma vigente, e os direitos ali previstos podem ser suspensos ou não precisam ser aplicados. Por ser atuante na área dos Direitos Humanos, você foi convidado(a) pela Comissão de Direitos Humanos da Câmara dos Deputados para prestar mais esclarecimentos sobre o assunto. Com base no que dispõe o próprio Pacto Internacional dos Direitos Civis e Políticos - PIDCP, assinale a opção que apresenta o esclarecimento dado à Comissão.",
    a: "Caso situações excepcionais ameacem a existência da nação e sejam proclamadas oficialmente, os Estados-partes podem adotar, na estrita medida exigida pela situação, medidas que suspendam as obrigações decorrentes do PIDCP, desde que tais medidas não acarretem discriminação por motivo de raça, cor, sexo, língua, religião ou origem social.",
    b: "É admissível a suspensão das obrigações decorrentes do PIDCP quando houver, no âmbito do Estado- parte, um ato formal do Poder Legislativo e do Poder Executivo declarando o efeito suspensivo, desde que tal ato declare um prazo para essa suspensão, que, em nenhuma hipótese, pode exceder o período de 2 anos.",
    c: "Em nenhuma hipótese ou situação os Estados-partes do PIDCP podem adotar medidas que suspendam as obrigações decorrentes do Pacto, uma vez que, ratificado o Pacto, todos os seus direitos vigoram de forma efetiva, não sendo admitida nenhuma possibilidade de suspensão ou exceção.",
    d: "Mesmo ratificado, o Pacto Internacional dos Direitos Civis e Políticos e os direitos nele contidos não podem ser caracterizados como normas vigentes, uma vez que se trata de direitos em sentido fraco, de forma que apenas os direitos fundamentais, previstos na Constituição, são direitos em sentido forte.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "18"
}, {
    pergunta: "Recentemente houve grande polêmica na cidade de Piraporanga, porque o Prefeito proibiu o museu local de realizar uma exposição, sob a alegação de que as obras de arte misturavam temas religiosos com conteúdos sexuais, além de haver quadros e esculturas obscenas. Você é contratada(o) para atuar no caso pelos autores das obras de arte e por intelectuais. Com base na Convenção Americana de Direitos Humanos e na Constituição Federal de 1988, assinale a opção que apresenta o argumento que você, como advogada(o), deveria adotar.",
    a: "A censura prévia por autoridades administrativas competentes, como mecanismo eficaz para assegurar o respeito à reputação de pessoas e como forma de garantir a moralidade pública, deve ser admitida.",
    b: "O exercício da liberdade de expressão e o da criação artística estão sujeitos à censura prévia, mas apenas por força de lei devidamente justificada, como forma de proteção da honra individual e da moral pública.",
    c: "A liberdade de expressão e de criação artística estão sujeitas à censura prévia pelas autoridades competentes quando elas ocorrem por meio de exposições em museus, tendo em vista a proteção da memória nacional e da ordem pública.",
    d: "A lei pode regular o acesso a diversões e espetáculos públicos, tendo em vista a proteção moral da infância e da adolescência, sendo vedada, porém, toda e qualquer censura prévia de natureza política, ideológica e artística.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "19"
}, {
    pergunta: "Em razão da profunda crise econômica e da grave instabilidade institucional que assola seu país, Pablo resolve migrar para o Brasil, uma vez que, neste último, há melhores oportunidades para exercer seu trabalho e sustentar sua família. Em que pese Pablo possuir a finalidade de trabalhar, acabou por omitir tal informação, obtendo visto de visita, na modalidade turismo, para o Brasil. Considerando - se o enunciado acima, à luz da Lei de Migração em vigor(Lei n° 13.445 / 17), assinale a afirmativa correta.",
    a: "Se Pablo, com o visto de visita, vier a exercer atividade remunerada no Brasil, poderá ser expulso do país.",
    b: "Se Pablo, com o visto de visita, vier a exercer atividade remunerada no Brasil, poderá ser extraditado do país.",
    c: "Pablo poderia solicitar, bem como obter, visto temporário para acolhida humanitária, diante da grave instabilidade institucional que assola seu país.",
    d: "Pablo poderá obter asilo, em razão da profunda crise econômica que assola seu país.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "20"
}, {
    pergunta: "Em função do incremento nas atividades de transporte aéreo no Brasil, a sociedade empresária Fast Plane, sediada no país, resolveu adquirir helicópteros de última geração da pessoa jurídica holandesa Nederland Air Transport , que ficou responsável pela fabricação, montagem e envio da mercadoria. O contrato de compra e venda restou celebrado, presencialmente, nos Estados Unidos da América, restando ajustado que o cumprimento da obrigação se dará no Brasil. No momento de receber as aeronaves, contudo, a adquirente verificou que o produto enviado era diverso do apontado no instrumento contratual.Decidiu a sociedade empresária Fast Plane, então, buscar auxílio jurídico para resolver a questão, inclusive para a propositura de eventual ação, caso não haja solução consensual. Considerando - se o enunciado acima, aplicando - se a Lei de Introdução às Normas do Direito Brasileiro(Decreto - lei n° 4.657 / 42) e o Código de Processo Civil, assinale a afirmativa correta.",
    a: "A lei aplicável na solução da questão é a holandesa, em razão do local de fabricação e montagem das aeronaves adquiridas.",
    b: "A autoridade judiciária brasileira será competente para processar e julgar eventual ação proposta pela Fast Plane , mesmo se estabelecida cláusula de eleição de foro exclusivo estrangeiro, em razão do princípio da inafastabilidade da jurisdição.",
    c: "A autoridade judiciária brasileira tem competência exclusiva para processar e julgar eventual ação a ser proposta pela Fast Plane para resolver a questão.",
    d: "A autoridade judiciária brasileira tem competência concorrente para processar e julgar eventual ação a ser proposta pela Fast Plane para resolver a questão.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "21"
}, {
    pergunta: "A sociedade empresária ABC, concessionária de serviço de transporte público coletivo de passageiros, opera a linha de ônibus 123, que inicia seu trajeto no Município X e completa seu percurso no Município Y, ambos localizados no Estado Z. Sobre a prestação onerosa desse serviço de transporte, deve incidir",
    a: "o ISS, a ser recolhido para o Município X.",
    b: "o ISS, a ser recolhido para o Município Y.",
    c: "o ICMS, a ser cobrado de forma conjunta pelo Município X e o Município Y.",
    d: "o ICMS, a ser recolhido para o Estado em que se localizam o Município X e o Município Y.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "22"
}, {
    pergunta: "João da Silva, servidor da Administração Tributária do Município Y, recebeu propina de José Pereira, adquirente de um imóvel, para, em conluio com este, emitir uma certidão que atestava falsamente a quitação de débito do Imposto de Transmissão de Bens Imóveis (ITBI) incidente sobre a transferência de propriedade. A certidão seria apresentada ao tabelião para lavrar-se a escritura pública de compra e venda imobiliária e para posterior registro. Considerando - se que, nesse Município, o contribuinte de ITBI é o adquirente de imóvel, assinale a afirmativa correta.",
    a: "O servidor João da Silva poderá ser responsabilizado funcional e criminalmente por esse ato, mas a dívida tributária somente poderá ser cobrada de José Pereira, o único que é parte na relação jurídico-tributária com o Município credor.",
    b: "O servidor João da Silva poderá ser responsabilizado pessoalmente pelo crédito tributário e juros de mora acrescidos.",
    c: "O tabelião poderá ser o único responsabilizado pela dívida tributária e juros de mora acrescidos, por ter lavrado a escritura pública sem averiguar, junto ao Fisco Municipal, a veracidade das informações da certidão apresentada.",
    d: "Caso seja aplicada multa tributária punitiva contra José Pereira, este poderá exigir do Fisco que 50% do valor da multa seja cobrado do servidor João da Silva.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "23"
}, {
    pergunta: "Maria dos Santos, querendo constituir hipoteca sobre imóvel de sua propriedade em garantia de empréstimo bancário a ser por ela contraído, vai a um tabelionato para lavrar a escritura pública da referida garantia real. Ali, é informada que o Município Z, onde se situa o bem, cobra o Imposto de Transmissão de Bens Imóveis (ITBI) sobre a constituição de direitos reais de garantia. Diante desse cenário, assinale a afirmativa correta.",
    a: "É possível tal cobrança, pois a constituição de direito real de garantia sobre bens imóveis, por ato inter vivos , é uma das hipóteses de incidência do ITBI.",
    b: "O contribuinte do ITBI, nesse caso, não seria Maria dos Santos, mas sim a instituição bancária em favor de quem a garantia real será constituída.",
    c: "O tabelião atua como responsável por substituição tributária, recolhendo, no lugar do contribuinte, o ITBI devido em favor do Município Z nessa constituição de direitos reais de garantia.",
    d: "Não é possível exigir ITBI sobre direitos reais de garantia sobre imóveis",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "24"
}, {
    pergunta: "Uma sociedade empresária em recuperação judicial requereu, perante a Secretaria Estadual de Fazenda do Estado X, o parcelamento de suas dívidas tributárias estaduais. O Estado X dispunha de uma lei geral de parcelamento tributário, mas não de uma lei específica para parcelamento de débitos tributários de devedor em recuperação judicial. Diante desse cenário, assinale a afirmativa correta.",
    a: "O parcelamento não pode ser concedido caso inexista lei específica estadual que disponha sobre as condições de parcelamento dos créditos tributários do devedor em recuperação judicial.",
    b: "O prazo de parcelamento a ser concedido ao devedor em recuperação judicial quanto a tais débitos para com o Estado X não pode ser inferior ao concedido por lei federal específica de parcelamento dos créditos tributários do devedor em recuperação judicial.",
    c: "O parcelamento do crédito tributário exclui a incidência de juros, em regra, no caso de devedor em recuperação judicial.",
    d: "O parcelamento do crédito tributário exclui a incidência de multas, em regra, no caso de devedor em recuperação judicial.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "25"
}, {
    pergunta: "Uma lei ordinária federal tratava de direitos do beneficiário de pensão previdenciária e também previa norma que ampliava, para 10 anos, o prazo decadencial para o lançamento dos créditos tributários referentes a uma contribuição previdenciária federal. A respeito da ampliação de prazo, assinale a afirmativa correta.",
    a: "É inválida, pois, em razão do caráter nacional das contribuições previdenciárias federais, somente poderia ser veiculada por Resolução do Senado Federal.",
    b: "É inválida, pois somente poderia ser veiculada por Lei Complementar.",
    c: "É válida, pois o CTN prevê a possibilidade de que o prazo geral de 5 anos, nele previsto para a Fazenda Pública constituir o crédito tributário, seja ampliado por meio de Lei Ordinária Específica.",
    d: "É válida, por existir expressa previsão constitucional, específica para contribuições de seguridade social, autorizando a alteração de prazo de constituição do crédito tributário por Lei Ordinária.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "26"
}, {
    pergunta: "Maria foi contratada, temporariamente, sem a realização de concurso público, para exercer o cargo de professora substituta em entidade autárquica federal, em decorrência do grande número de professores do quadro permanente em gozo de licença. A contratação foi objeto de prorrogação, de modo que Maria permaneceu em exercício por mais três anos, período durante o qual recebeu muitos elogios. Em razão disso, alunos, pais e colegas de trabalho levaram à direção da autarquia o pedido de criação de um cargo em comissão de professora, para que Maria fosse nomeada para ocupá - lo e continuasse a ali lecionar. Avalie a situação hipotética apresentada e, na qualidade de advogado(a), assinale a afirmativa correta.",
    a: "Não é possível a criação de um cargo em comissão de professora, visto que tais cargos destinam-se apenas às funções de direção, chefia e assessoramento.",
    b: "É adequada a criação de um cargo em comissão para que Maria prolongue suas atividades como professora na entidade administrativa, diante do justificado interesse público.",
    c: "Maria tem estabilidade porque exerceu a função de professora por mais de três anos consecutivos, tornando desnecessária a criação de um cargo em comissão para que ela continue como professora na entidade autárquica.",
    d: "Não é necessária a criação de um cargo em comissão para que Maria permaneça exercendo a função de professora, porque a contratação temporária pode ser prorrogada por tempo indeterminado.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "27"
}, {
    pergunta: "Otacílio, novo prefeito do Município Kappa, acredita que o controle interno é uma das principais ferramentas da função administrativa, razão pela qual determinou o levantamento de dados nos mais diversos setores da Administração local, a fim de apurar se os atos administrativos até então praticados continham vícios, bem como se ainda atendiam ao interesse público. Diante dos resultados de tal apuração, Otacílio deverá ", 
    a: "revogar os atos administrativos que contenham vícios insanáveis, ainda que com base em valores jurídicos abstratos.",
    b: "convalidar os atos administrativos que apresentem vícios sanáveis, mesmo que acarretem lesão ao interesse público.",
    c: "desconsiderar as circunstâncias jurídicas e administrativas que houvessem imposto, limitado ou condicionado a conduta do agente nas decisões sobre a regularidade de ato administrativo.",
    d: "indicar, de modo expresso, as consequências jurídicas e administrativas da invalidação de ato administrativo.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "28"
}, {
    pergunta: "A autoridade competente, em âmbito federal, no regular exercício do poder de polícia, aplicou à sociedade empresária Soneca S/A multa em razão do descumprimento das normas administrativas pertinentes. Inconformada, a sociedade Soneca S/A apresentou recurso administrativo, ao qual foi conferido efeito suspensivo, sendo certo que não sobreveio qualquer manifestação do superior hierárquico responsável pelo julgamento, após o transcurso do prazo de oitenta dias. Considerando o contexto descrito, assinale a afirmativa correta.",
    a: "Não se concederá Mandado de Segurança para invalidar a penalidade de multa aplicada a Soneca S/A, submetida a recurso administrativo provido de efeito suspensivo.",
    b: "O ajuizamento de qualquer medida judicial por Soneca S/A depende do esgotamento da via administrativa.",
    c: "Não há mora da autoridade superior hierárquica, que, por determinação legal, dispõe do prazo de noventa dias para decidir.",
    d: "A omissão da autoridade competente em relação ao seu dever de decidir, ainda que se prolongue por período mais extenso, não enseja a concessão de Mandado de Segurança.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "29"
}, {
    pergunta: "O Município Beta concedeu a execução do serviço público de veículos leves sobre trilhos e, ao verificar que a concessionária não estava cumprindo adequadamente as obrigações determinadas no respectivo contrato, considerou tomar as providências cabíveis para a regularização das atividades em favor dos usuários. Nesse caso,",
    a: "impõe-se a encampação, mediante a retomada do serviço pelo Município Beta, sem o pagamento de indenização.",
    b: "a hipótese é de caducidade a ser declarada pelo Município Beta, mediante decreto, que independe da verificação prévia da inadimplência da concessionária.",
    c: "cabe a revogação do contrato administrativo pelo Município Beta, diante da discricionariedade e precariedade da concessão, formalizada por mero ato administrativo.",
    d: "é possível a intervenção do Município Beta na concessão, com o fim de assegurar a adequada prestação dos serviços, por decreto do poder concedente, que conterá designação do interventor, o prazo, os objetivos e os limites da medida.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "30"
}, {
    pergunta: "Diante da necessidade de construção de uma barragem no Município Alfa, a ser efetuada em terreno rural de propriedade de certa sociedade de economia mista federal, o Poder Legislativo local fez editar uma lei para declarar a desapropriação por utilidade pública, após a autorização por decreto do Presidente da República, sendo certo que, diante do sucesso das tratativas entre os chefes do Executivo dos entes federativos em questão, foi realizado acordo na via administrativa para ultimar tal intervenção do Estado na propriedade. Diante dessa situação hipotética, assinale a afirmativa correta.",
    a: "A autorização por decreto não pode viabilizar a desapropriação do bem em questão pelo Município Alfa, porque os bens federais não são expropriáveis.",
    b: "A iniciativa do Poder Legislativo do Município Alfa para declarar a desapropriação é válida, cumprindo ao respectivo Executivo praticar os atos necessários para sua efetivação.",
    c: "A intervenção na propriedade em tela não pode ser ultimada na via administrativa, mediante acordo entre os entes federativos envolvidos.",
    d: "O Município Alfa não tem competência para declarar a desapropriação por utilidade pública de propriedades rurais.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "31"
}, {
    pergunta: "Rafael, funcionário da concessionária prestadora do serviço público de fornecimento de gás canalizado, realizava reparo na rede subterrânea, quando deixou a tampa do bueiro aberta, sem qualquer sinalização, causando a queda de Sônia, transeunte que caminhava pela calçada. Sônia, que trabalha como faxineira diarista, quebrou o fêmur da perna direita em razão do ocorrido e ficou internada no hospital por 60 dias, sem poder trabalhar. Após receber alta, Sônia procurou você, como advogado(a), para ajuizar ação indenizatória em face ", 
    a: "da concessionária, com base em sua responsabilidade civil objetiva, para cuja configuração é desnecessária a comprovação de dolo ou culpa de Rafael.",
    b: "do Estado, como poder concedente, com base em sua responsabilidade civil direta e subjetiva, para cuja configuração é prescindível a comprovação de dolo ou culpa de Rafael.",
    c: "de Rafael, com base em sua responsabilidade civil direta e objetiva, para cuja configuração é desnecessária a comprovação de ter agido com dolo ou culpa, assegurado o direito de regresso contra a concessionária.",
    d: "do Município, como poder concedente, com base em sua responsabilidade civil objetiva, para cuja configuração é imprescindível a comprovação de dolo ou culpa de Rafael.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "32"
}, {
    pergunta: "Seguindo plano de expansão de seu parque industrial para a produção de bebidas, o conselho de administração da sociedade empresária Frescor S/A autoriza a destruição de parte de floresta inserida em Área de Preservação Permanente, medida que se consuma na implantação de nova fábrica. Sobre responsabilidade ambiental, tendo como referência a hipótese narrada, assinale a afirmativa correta.",
    a: "Frescor S/A responde civil e administrativamente, sendo excluída a responsabilidade penal por ter a decisão sido tomada por órgão colegiado da sociedade.",
    b: "Frescor S/A responde civil e administrativamente, uma vez que não há tipificação criminal para casos de destruição de Área de Preservação Permanente, mas apenas de Unidades de Conservação.",
    c: "Frescor S/A responde civil, administrativa e penalmente, sendo a ação penal pública, condicionada à prévia apuração pela autoridade ambiental competente.",
    d: "Frescor S/A responde civil, administrativa e penalmente, sendo agravante da pena a intenção de obtenção de vantagem pecuniária.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "33"
}, {
    pergunta: "Efeito Estufa Ltda., sociedade empresária que atua no processamento de alimentos, pretende instalar nova unidade produtiva na área urbana do Município de Ar Puro, inserida no Estado Y. Para esse fim, verificou que a autoridade competente para realizar o licenciamento ambiental será a do próprio Município de Ar Puro. Sobre o caso, assinale a opção que indica quem deve realizar o estudo de impacto ambiental.",
    a: "O Município de Ar Puro.",
    b: "O Estado Y.",
    c: "O IBAMA.",
    d: "Profissionais legalmente habilitados, às expensas do empreendedor.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "34"
}, {
    pergunta: "João, único herdeiro de seu avô Leonardo, recebeu, por ocasião da abertura da sucessão deste último, todos os seus bens, inclusive uma casa repleta de antiguidades. Necessitando de dinheiro para quitar suas dívidas, uma das primeiras providências de João foi alienar uma pintura antiga que sempre estivera exposta na sala da casa, por um valor módico, ao primeiro comprador que encontrou. João, semanas depois, leu nos jornais a notícia de que reaparecera no mercado de arte uma pintura valiosíssima de um célebre artista plástico.Sua surpresa foi enorme ao descobrir que se tratava da pintura que ele alienara, com valor milhares de vezes maior do que o por ela cobrado.Por isso, pretende pleitear a invalidação da alienação. A respeito do caso narrado, assinale a afirmativa correta.",
    a: "O negócio jurídico de alienação da pintura celebrado por João está viciado por lesão e chegou a produzir seus efeitos regulares, no momento de sua celebração.",
    b: "O direito de João a obter a invalidação do negócio jurídico, por erro, de alienação da pintura, não se sujeita a nenhum prazo prescricional",
    c: "A validade do negócio jurídico de alienação da pintura subordina-se necessariamente à prova de que o comprador desejava se aproveitar de sua necessidade de obter dinheiro rapidamente.",
    d: "Se o comprador da pintura oferecer suplemento do preço pago de acordo com o valor de mercado da obra, João poderá optar entre aceitar a oferta ou invalidar o negócio.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "35"
}, {
    pergunta: "Salomão, solteiro, sem filhos, 65 anos, é filho de Lígia e Célio, que faleceram recentemente e eram divorciados. Ele é irmão de Bernardo, 35 anos, médico bem-sucedido, filho único do segundo casamento de Lígia. Salomão, por circunstâncias sociais, não mantinha contato com Bernardo. Em razão de uma deficiência física, Salomão nunca exerceu atividade laborativa e sempre morou com o pai, Célio, até o falecimento deste. Com frequência, seu primo Marcos, comerciante e grande amigo, o visita. Com base no caso apresentado, assinale a opção que indica quem tem obrigação de pagar alimento a Salomão.",
    a: "Marcos é obrigado a pagar alimentos a Salomão, no caso de necessidade deste.",
    b: "Por ser irmão unilateral, Bernardo não deve, em hipótese alguma, alimentos a Salomão.",
    c: "Bernardo, no caso de necessidade de Salomão, deve arcar com alimentos.",
    d: "Bernardo e Marcos deverão dividir alimentos, entre ambos, de forma igualitária.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "36"
}, {
    pergunta: "Jacira mora em um apartamento alugado, sendo a locação garantida por fiança prestada por seu pai, José. Certa vez, Jacira conversava com sua irmã Laura acerca de suas dificuldades financeiras, e declarou que temia não ser capaz de pagar o próximo aluguel do imóvel. Compadecida da situação da irmã, Laura procurou o locador do imóvel e, na data de vencimento do aluguel, pagou, em nome próprio, o valor devido por Jacira, sem oposição desta. Nesse cenário, em relação ao débito do aluguel daquele mês, assinale a afirmativa correta.",
    a: "Laura, como terceira interessada, sub-rogou-se em todos os direitos que o locador tinha em face de Jacira, inclusive a garantia fidejussória.",
    b: "Laura, como terceira não interessada, tem apenas direito de regresso em face de Jacira.",
    c: "Laura, como devedora solidária, sub-rogou-se nos direitos que o locador tinha em face de Jacira, mas não quanto à garantia fidejussória.",
    d: "Laura, tendo realizado mera liberalidade, não tem qualquer direito em face de Jacira.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "37"
}, {
    pergunta: "Antônio, divorciado, proprietário de três imóveis devidamente registrados no RGI, de valores de mercado semelhantes, decidiu transferir onerosamente um de seus bens ao seu filho mais velho, Bruno, que mostrou interesse na aquisição por valor próximo ao de mercado. No entanto, ao consultar seus dois outros filhos(irmãos do pretendente comprador), um deles, Carlos, opôs - se à venda.Diante disso, bastante chateado com a atitude de Carlos, seu filho que não concordou com a compra e venda do imóvel, decidiu realizar uma doação a favor de Bruno. Em face do exposto, assinale a afirmativa correta.",
    a: "A compra e venda de ascendente para descendente só pode ser impedida pelos demais descendentes e pelo cônjuge, se a oposição for unânime.",
    b: "Não há, na ordem civil, qualquer impedimento à realização de contrato de compra e venda de pai para filho, motivo pelo qual a oposição feita por Carlos não poderia gerar a anulação do negócio.",
    c: "Antônio não poderia, como reação à legítima oposição de Carlos, promover a doação do bem para um de seus filhos (Bruno), sendo tal contrato nulo de pleno direito.",
    d: "É legítima a doação de ascendentes para descendente, independentemente da anuência dos demais, eis que o ato importa antecipação do que lhe cabe na herança.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "38"
}, {
    pergunta: "Márcia, adolescente com 17 anos de idade, sempre demonstrou uma maturidade muito superior à sua faixa etária. Seu maior objetivo profissional é o de tornar-se professora de História e, por isso, decidiu criar um canal em uma plataforma on-line , na qual publica vídeos com aulas por ela própria elaboradas sobre conteúdos históricos. O canal tornou - se um sucesso, atraindo multidões de jovens seguidores e despertando o interesse de vários patrocinadores, que começaram a procurar a jovem, propondo contratos de publicidade.Embora ainda não tenha obtido nenhum lucro com o canal, Márcia está animada com a perspectiva de conseguir custear seus estudos na Faculdade de História se conseguir firmar alguns desses contratos.Para facilitar as atividades da jovem, seus pais decidiram emancipá - la, o que permitirá que celebre negócios com futuros patrocinadores com mais agilidade. Sobre o ato de emancipação de Márcia por seus pais, assinale a afirmativa correta.",
    a: "Depende de homologação judicial, tendo em vista o alto grau de exposição que a adolescente tem na internet.",
    b: "Não tem requisitos formais específicos, podendo ser concedida por instrumento particular.",
    c: "Deve, necessariamente, ser levado a registro no cartório competente do Registro Civil de Pessoas Naturais.",
    d: "É nulo, pois ela apenas poderia ser emancipada caso já contasse com economia própria, o que ainda não aconteceu.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "39"
}, {
    pergunta: "Arnaldo faleceu e deixou os filhos Roberto e Álvaro. No inventário judicial de Arnaldo, Roberto, devedor contumaz na praça, renunciou à herança, em 05/11/2019, conforme declaração nos autos. Considerando que o falecido não deixou testamento e nem dívidas a serem pagas, o valor líquido do monte a ser partilhado era de R$ 100.000, 00(cem mil reais).Bruno é primo de Roberto e também seu credor no valor de R$ 30.000, 00(trinta mil reais).No dia 09 / 11 / 2019, Bruno tomou conhecimento da manifestação de renúncia supracitada e, no dia 29 / 11 / 2019, procurou um advogado para tomar as medidas cabíveis. Sobre esta situação, assinale a afirmativa correta.",
    a: "Em nenhuma hipótese Bruno poderá contestar a renúncia da herança feita por Roberto.",
    b: "Bruno poderá aceitar a herança em nome de Roberto, desde que o faça no prazo de quarenta dias seguintes ao conhecimento do fato.",
    c: "Bruno poderá, mediante autorização judicial, aceitar a herança em nome de Roberto, recebendo integralmente o quinhão do renunciante.",
    d: "Bruno poderá, mediante autorização judicial, aceitar a herança em nome de Roberto, no limite de seu crédito.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "40"
}, {
    pergunta: "Aldo e Mariane são casados sob o regime da comunhão parcial de bens, desde setembro de 2013. Em momento anterior ao casamento, Rubens, pai de Mariane, realizou a doação de um imóvel à filha. Desde então, a nova proprietária acumula os valores que lhe foram pagos pelos locatários do imóvel. No ano corrente, alguns desentendimentos fizeram com que Mariane pretendesse se divorciar de Aldo.Para tal finalidade, procurou um advogado, informando que a soma dos aluguéis que lhe foram pagos desde a doação do imóvel totalizava R$ 150.000, 00(cento e cinquenta mil reais), sendo que R$ 50.000, 00(cinquenta mil reais) foram auferidos antes do casamento e o restante, após.Mariane relatou, ainda, que atualmente o imóvel se encontra vazio, sem locatários. Sobre essa situação e diante de eventual divórcio, assinale a afirmativa correta.",
    a: "Quanto aos aluguéis, Aldo tem direito à meação sob o total dos valores.",
    b: "Tendo em vista que o imóvel locado por Mariane é seu bem particular, os aluguéis por ela auferidos não se comunicam com Aldo.",
    c: "Aldo tem direito à meação dos valores recebidos por Mariane, durante o casamento, a título de aluguel.",
    d: "Aldo faz jus à meação tanto sobre a propriedade do imóvel doado a Mariane por Rubens, quanto sobre os valores recebidos a título de aluguel desse imóvel na constância do casamento.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "41"
}, {
    pergunta: "O adolescente João, com 16 anos completos, foi apreendido em flagrante quando praticava ato infracional análogo ao crime de furto. Devidamente conduzido o processo, de forma hígida, ele foi sentenciado ao cumprimento de medida socioeducativa de 1 ano, em regime de semiliberdade. Sobre as medidas socioeducativas aplicadas a João, assinale a afirmativa correta.",
    a: "A medida de liberdade assistida será fixada pelo prazo máximo de 6 meses, sendo que, ao final de tal período, caso João não se revele suficientemente ressocializado, a medida será convolada em internação.",
    b: "A medida aplicada foi equivocada, pois deveria ter sido, necessariamente, determinada a internação de João.",
    c: "No regime de semiliberdade, João poderia sair da instituição para ocupações rotineiras de trabalho e estudo, sem necessidade de autorização judicial.",
    d: "A medida aplicada foi equivocada, pois não poderia, pelo fato análogo ao furto, ter a si aplicada medida diversa da liberdade assistida.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "42"
}, {
    pergunta: "Maria chega à maternidade já em trabalho de parto, sendo atendida emergencialmente. Felizmente, o parto ocorre sem problemas e Maria dá à luz, Fernanda. No mesmo dia do parto, a enfermeira Cláudia escuta a conversa entre Maria e uma amiga que a visitava, na qual Maria oferecia Fernanda a essa amiga em adoção, por não se sentir preparada para a maternidade. Preocupada com a conversa, Cláudia a relata ao médico obstetra de plantão, Paulo, o qual, por sua vez, noticia o ocorrido a Carlos, diretor - geral do hospital.Naquela noite, já recuperada, Maria e a mesma amiga vão embora da maternidade, sem que nada tenha ocorrido e nenhuma providência tenha sido tomada por qualquer dos personagens envolvidos– Cláudia, Paulo ou Carlos. Diante dos fatos acima, assinale a afirmativa correta.",
    a: "Não foi cometida qualquer infração, porque a adoção irregular não se consumou no âmbito da maternidade.",
    b: "Carlos cometeu infração administrativa, consubstanciada no não encaminhamento do caso à autoridade judiciária, porque somente o diretor do hospital pode fazê-lo.",
    c: "Carlos e Paulo não cometeram infração administrativa ao não encaminharem o caso à autoridade judiciária, porque não cabe ao corpo médico tal atribuição.",
    d: "Carlos, Paulo e Cláudia cometeram infração administrativa por não encaminharem o caso de que tinham conhecimento para a autoridade judiciária.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "43"
}, {
    pergunta: "O médico de João indicou a necessidade de realizar a cirurgia de gastroplastia (bariátrica) como tratamento de obesidade mórbida, com a finalidade de reduzir peso. Posteriormente, o profissional de saúde explicou a necessidade de realizar a cirurgia plástica pós-gastroplastia, visando à remoção de excesso epitelial que comumente acomete os pacientes nessas condições, impactando a qualidade de vida daquele que deixou de ser obeso mórbido. Nesse caso, nos termos do Código de Defesa do Consumidor e do entendimento do STJ, o plano de saúde de João",
    a: "terá que custear ambas as cirurgias, porque configuram tratamentos, sendo a cirurgia plástica medida reparadora; portanto, terapêutica.",
    b: "terá que custear apenas a cirurgia de gastroplastia, e não a plástica, considerada estética e excluída da cobertura dos planos de saúde.",
    c: "não terá que custear as cirurgias, exceto mediante previsão contratual expressa para esses tipos de procedimentos.",
    d: "não terá que custear qualquer das cirurgias até que passem a integrar o rol de procedimentos da ANS, competente para a regulação das coberturas contratuais.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "44"
}, {
    pergunta: "Adriano, por meio de um site especializado, efetuou reserva de hotel para estada com sua família em praia caribenha. A reserva foi imediatamente confirmada pelo site, um mês antes das suas férias, quando fariam a viagem. Ocorre que, dez dias antes do embarque, o site especializado comunicou a Adriano que o hotel havia informado o cancelamento da contratação por erro no parcelamento com o cartão de crédito. Adriano, então, buscou nova compra do serviço, mas os valores estavam cerca de 30 % mais caros do que na contratação inicial, com o qual anuiu por não ser mais possível alterar a data de suas férias.Ao retornar de viagem, Adriano procurou você, como advogado(a), a fim de saber se seria possível a restituição dessa diferença de valores. Neste caso, é correto afirmar que o ressarcimento da diferença arcada pelo consumidor ", 
	a: "poderá ser buscado em face exclusivamente do hotel, fornecedor que cancelou a contratação.",
    b: "poderá ser buscado em face do site de viagens e do hotel, que respondem solidariamente, por comporem a cadeia de fornecimento do serviço.",
    c: "não poderá ser revisto, porque o consumidor tinha o dever de confirmar a compra em sua fatura de cartão de crédito.",
    d: "poderá ser revisto, sendo a responsabilidade exclusiva do site de viagens, com base na teoria da aparência, respondendo o hotel apenas subsidiariamente.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "45"
}, {
    pergunta: "No contrato da sociedade empresária Arealva Calçados Finos Ltda., não consta cláusula de regência supletiva pelas disposições de outro tipo societário. Ademais, tanto no contrato social quanto nas disposições legais relativas ao tipo adotado pela sociedade não há norma regulando a sucessão por morte de sócio. Diante da situação narrada, assinale a afirmativa correta.",
    a: "Haverá resolução da sociedade em relação ao sócio em caso de morte.",
    b: "Haverá transmissão causa mortis da quota social.",
    c: "Caberá aos sócios remanescentes regular a substituição do sócio falecido.",
    d: "Os sócios serão obrigados a incluir, no contrato, cláusula dispondo sobre a sucessão por morte de sócio.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "46"
}, {
    pergunta: "Anadia e Deodoro são condôminos de uma quota de sociedade limitada no valor de R$ 13.000,00 (treze mil reais). Nem a quota nem o capital da sociedade – fixado em R$ 50.000,00 (cinquenta mil reais) – se encontram integralizados. Você é consultado(a), como advogado(a), sobre a possibilidade de a sociedade demandar os condôminos para que integralizem a referida quota.Assinale a opção que apresenta a resposta correta.",
    a: "Eles são obrigados à integralização apenas a partir da decretação de falência da sociedade.",
    b: "Eles não são obrigados à integralização, pelo fato de serem condôminos de quota indivisa.",
    c: "Eles são obrigados à integralização, porque todos os sócios, mesmo os condôminos, devem integralizar o capital.",
    d: "Eles não são obrigados à integralização, porque o capital da sociedade é inferior a 100 salários mínimos.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "47"
}, {
    pergunta: "As sociedades empresárias Y e J celebraram contrato tendo por objeto a alienação do estabelecimento da primeira, situado em Antônio Dias/MG. Na data da assinatura do contrato, dentre outros débitos regularmente contabilizados, constava uma nota promissória vencida havia três meses no valor de R$ 25.000,00 (vinte e cinco mil reais). O contrato não tem nenhuma cláusula quanto à existência de solidariedade entre as partes, tanto pelos débitos vencidos quanto pelos vincendos. Sabendo - se que, em 15 / 10 / 2018, após averbação na Junta Comercial competente, houve publicação do contrato na imprensa oficial e, tomando por base comparativa o dia 15 / 01 / 2020, o alienante ", 
	a: "responderá pelo débito vencido com o adquirente por não terem decorrido cinco anos da publicação do contrato na imprensa oficial.",
    b: "não responderá pelo débito vencido com o adquirente em razão de não ter sido estipulada tal solidariedade no contrato.",
    c: "responderá pelo débito vencido com o adquirente até a ocorrência da prescrição relativa à cobrança da nota promissória.",
    d: "não responderá pelo débito vencido com o adquirente diante do decurso de mais de 1 (um) ano da publicação do contrato na imprensa oficial.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "48"
}, {
    pergunta: "Duas sociedades empresárias celebraram contrato de agência com uma terceira sociedade empresária, que assumiu a obrigação de, em caráter não eventual e sem vínculos de dependência com as proponentes, promover, à conta das primeiras, mediante retribuição, a realização de certos negócios com exclusividade, nos municípios integrantes da região metropolitana de Curitiba/PR. Ficou pactuado que as proponentes conferirão poderes à agente para que esta as represente, como mandatária, na conclusão dos contratos.Antônio Prado, sócio de uma das sociedades empresárias contratantes, consulta seu advogado quanto à legalidade do contrato, notadamente da delimitação de zona geográfica e da concessão de mandato ao agente. Sobre a hipótese apresentada, considerando as disposições legais relativas ao contrato de agência, assinale a afirmativa correta.",
    a: "Não há ilegalidade quanto à delimitação de zona geográfica para atuação exclusiva do agente, bem como em relação à possibilidade de ser o agente mandatário das proponentes, por serem características do contrato de agência.",
    b: "Há ilegalidade na fixação de zona determinada para atuação exclusiva do agente, por ferir a livre concorrência entre agentes, mas não há ilegalidade na outorga de mandato ao agente para representação das proponentes.",
    c: "Há ilegalidade tanto na outorga de mandato ao agente para representação dos proponentes, por ser vedada qualquer relação de dependência entre agente e proponente, e também quanto à fixação de zona determinada para atuação exclusiva do agente.",
    d: "Não há ilegalidade quanto à fixação de zona determinada para atuação exclusiva do agente, mas há ilegalidade quanto à concessão de mandato do agente, porque é obrigatório por lei que o agente apenas faça a mediação dos negócios no interesse do proponente.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "49"
}, {
    pergunta: "José da Silva, credor de sociedade empresária, consulta você, como advogado(a), para obter orientação quanto aos efeitos de uma provável convolação de recuperação judicial em falência. Em relação à hipótese apresentada, analise as afirmativas a seguir e assinale a única correta.",
    a: "Os créditos remanescentes da recuperação judicial serão considerados habilitados quando definitivamente incluídos no quadro-geral de credores, tendo prosseguimento as habilitações que estiverem em curso.",
    b: "As ações que devam ser propostas no juízo da falência estão sujeitas à distribuição por dependência, exceto a ação revocatória e a ação revisional de crédito admitido ao quadro geral de credores.",
    c: "A decretação da falência determina o vencimento antecipado das dívidas do devedor quanto aos créditos excluídos dos efeitos da recuperação judicial; quanto aos créditos submetidos ao plano de recuperação, são mantidos os prazos nele estabelecidos e homologados pelo juiz.",
    d: "As ações intentadas pelo devedor durante a recuperação judicial serão encerradas, devendo ser intimado o administrador judicial da extinção dos feitos, sob pena de nulidade do processo.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "50"
}, {
    pergunta: "Julieta ajuizou demanda em face de Rafaela e, a fim de provar os fatos constitutivos de seu direito, arrolou como testemunhas Fernanda e Vicente. A demandada, por sua vez, arrolou as testemunhas Pedro e Mônica. Durante a instrução, Fernanda e Vicente em nada contribuíram para o esclarecimento dos fatos, enquanto Pedro e Mônica confirmaram o alegado na petição inicial.Em razões finais, o advogado da autora requereu a procedência dos pedidos, ao que se contrapôs o patrono da ré, sob o argumento de que as provas produzidas pela autora não confirmaram suas alegações e, ademais, as provas produzidas pela ré não podem prejudicá - la. Consideradas as normas processuais em vigor, assinale a afirmativa correta.",
    a: "O advogado da demandada está correto, pois competia à demandante a prova dos fatos constitutivos do seu direito.",
    b: "O advogado da demandante está correto, porque a prova, uma vez produzida, pode beneficiar parte distinta da que a requereu.",
    c: "O advogado da demandante está incorreto, pois o princípio da aquisição da prova não é aplicável à hipótese.",
    d: "O advogado da demandada está incorreto, porque as provas só podem beneficiar a parte que as produziu, segundo o princípio da aquisição da prova.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "51"
}, {
    pergunta: "Um advogado elabora uma petição inicial em observância aos requisitos legais. Da análise da peça postulatória, mesmo se deparando com controvérsia fática, o magistrado julga o pedido improcedente liminarmente. Diante dessa situação, o patrono do autor opta por recorrer contra o provimento do juiz, arguindo a nulidade da decisão por necessidade de dilação probatória. Com base nessa situação hipotética, assinale a afirmativa correta.",
    a: "O advogado pode aduzir que, antes de proferir sentença extintiva, o juiz deve, necessariamente, determinar a emenda à inicial, em atenção ao princípio da primazia de mérito.",
    b: "Não existem hipóteses de improcedência liminar no atual sistema processual, por traduzirem restrição do princípio da inafastabilidade da prestação jurisdicional e ofensa ao princípio do devido processo legal.",
    c: "Somente a inépcia da petição inicial autoriza a improcedência liminar dos pedidos.",
    d: "Nas hipóteses em que há necessidade de dilação probatória, não cabe improcedência liminar do pedido.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "52"
}, {
    pergunta: "Marcos foi contratado por Júlio para realizar obras de instalação elétrica no apartamento deste. Por negligência de Marcos, houve um incêndio que destruiu boa parte do imóvel e dos móveis que o guarneciam. Como não conseguiu obter a reparação dos prejuízos amigavelmente, Júlio ajuizou ação em face de Marcos e obteve sua condenação ao pagamento da quantia de R$ 148.000,00 (cento e quarenta e oito mil reais). Após a prolação da sentença, foi interposta apelação por Marcos, que ainda aguarda julgamento pelo Tribunal.Júlio, ato contínuo, apresentou cópia da sentença perante o cartório de registro imobiliário, para registro da hipoteca judiciária sob um imóvel de propriedade de Marcos, visando a garantir futuro pagamento do crédito. Sobre o caso apresentado, assinale a afirmativa correta.",
    a: "Júlio não pode solicitar o registro da hipoteca judiciária, uma vez que ainda está pendente de julgamento o recurso de apelação de Marcos.",
    b: "Júlio, mesmo que seja registrada a hipoteca judiciária, não terá direito de preferência sobre o bem em relação a outros credores.",
    c: "A hipoteca judiciária apenas poderá ser constituída e registrada mediante decisão proferida no Tribunal, em caráter de tutela provisória, na pendência do recurso de apelação interposto por Marcos.",
    d: "Júlio poderá levar a registro a sentença, e, uma vez constituída a hipoteca judiciária, esta conferirá a Júlio o direito de preferência em relação a outros credores, observada a prioridade do registro.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "53"
}, {
    pergunta: "Bruno ajuizou contra Flávio ação de execução de título executivo extrajudicial, com base em instrumento particular, firmado por duas testemunhas, para obter o pagamento forçado de R$ 10.000,00 (dez mil reais). Devidamente citado, Flávio prestou, em juízo, garantia integral do valor executado e opôs embargos à execução dentro do prazo legal, alegando, preliminarmente, a incompetência relativa do juízo da execução e, no mérito, que o exequente pleiteia quantia superior à do título (excesso de execução). No entanto, em seus embargos à execução, embora tenha alegado excesso de execução, Flávio não apontou o valor que entendia ser correto, tampouco apresentou cálculo com o demonstrativo discriminado e atualizado do valor em questão. Considerando essa situação hipotética, assinale a afirmativa correta.",
    a: "Os embargos à execução devem ser liminarmente rejeitados, sem resolução do mérito, porquanto Flávio não demonstrou adequadamente o excesso de execução, ao deixar de apontar o valor que entendia correto e de apresentar cálculo com o demonstrativo discriminado e atualizado do valor em questão.",
    b: "O juiz deverá rejeitar as alegações de incompetência relativa do juízo e de excesso de execução deduzidas por Flávio, por não constituírem matérias passíveis de alegação em sede de embargos à execução.",
    c: "Os embargos à execução serão processados para a apreciação da alegação de incompetência relativa do juízo, mas o juiz não examinará a alegação de excesso de execução, tendo em vista que Flávio não indicou o valor que entendia correto para a execução, não apresentando o cálculo discriminado e atualizado do valor em questão.",
    d: "O juiz deverá processar e julgar os embargos à execução em sua integralidade, não surtindo qualquer efeito a falta de indicação do valor alegado como excesso e a ausência de apresentação de cálculo discriminado e atualizado do valor em questão, uma vez que os embargos foram apresentados dentro do prazo legal.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "54"
}, {
    pergunta: "Em um processo em que Carla disputava a titularidade de um apartamento com Marcos, este obteve sentença favorável, por apresentar, em juízo, cópia de um contrato de compra e venda e termo de quitação, anteriores ao contrato firmado por Carla. A sentença transitou em julgado sem que Carla apresentasse recurso. Alguns meses depois, Carla descobriu que Marcos era réu em um processo criminal no qual tinha sido comprovada a falsidade de vários documentos, dentre eles o contrato de compra e venda do apartamento disputado e o referido termo de quitação. Carla pretende, com base em seu contrato, retornar a juízo para buscar o direito ao imóvel.Para isso, ela pode ", 
	a: "interpor recurso de apelação contra a sentença, ainda que já tenha ocorrido o trânsito em julgado, fundado em prova nova.",
    b: "propor reclamação, para garantir a autoridade da decisão prolatada no juízo criminal, e formular pedido que lhe reconheça o direito ao imóvel.",
    c: "ajuizar rescisória, demonstrando que a sentença foi fundada em prova cuja falsidade foi apurada em processo criminal.",
    d: "requerer cumprimento de sentença diretamente no juízo criminal, para que a decisão que reconheceu a falsidade do documento valha como título judicial para transferência da propriedade do imóvel para seu nome.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "55"
}, {
    pergunta: "Gustavo procura você, como advogado(a), visando ao ajuizamento de uma ação em face de João, para a defesa da posse de um imóvel localizado em Minas Gerais. Na defesa dos interesses do seu cliente, quanto à ação possessória a ser proposta, assinale a afirmativa correta.",
    a: "Não é lícito cumular o pedido possessório com condenação em perdas e danos a Gustavo, dada a especialidade do procedimento.",
    b: "Na pendência da ação possessória proposta por Gustavo, não é possível, nem a ele, nem a João, propor ação de reconhecimento de domínio, salvo em face de terceira pessoa.",
    c: "Se a proposta de ação de manutenção de posse por Gustavo for um esbulho, o juiz não pode receber a ação de manutenção de posse como reintegração de posse, por falta de interesse de adequação.",
    d: "Caso se entenda possuidor do imóvel e pretenda defender sua posse, o meio adequado a ser utilizado por João é a reconvenção em face de Gustavo.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "56"
}, {
    pergunta: "O arquiteto Fernando ajuizou ação exclusivamente em face de Daniela, sua cliente, buscando a cobrança de valores que não teriam sido pagos no âmbito de um contrato de reforma de apartamento. Daniela, devidamente citada, deixou de oferecer contestação, mas, em litisconsórcio com seu marido José, apresentou reconvenção em peça autônoma, buscando indenização por danos morais em face de Fernando e sua empresa, sob o argumento de que estes, após a conclusão das obras de reforma, expuseram, em site próprio, fotos do interior do imóvel dos reconvintes sem que tivessem autorização para tanto. Diante dessa situação hipotética, assinale a afirmativa correta.",
    a: "Como Daniela deixou de contestar a ação, ela e seu marido não poderiam ter apresentado reconvenção, devendo ter ajuizado ação autônoma para buscar a indenização pretendida.",
    b: "A reconvenção deverá ser processada, a despeito de Daniela não ter contestado a ação originária, na medida em que o réu pode propor reconvenção independentemente de oferecer contestação.",
    c: "A reconvenção não poderá ser processada, na medida em que não é lícito a Daniela propor reconvenção em litisconsórcio com seu marido, que é um terceiro que não faz parte da ação originária.",
    d: "A reconvenção não poderá ser processada, na medida em que não é lícito a Daniela incluir no polo passivo da reconvenção a empresa de Fernando, que é um terceiro que não faz parte da ação originária.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "57"
}, {
    pergunta: "Caio, funcionário público, Antônio, empresário, Ricardo, comerciante, e Vitor, adolescente, de forma recorrente se reúnem, de maneira estruturalmente ordenada e com clara divisão de tarefas, inclusive Antônio figurando como líder, com o objetivo de organizarem a prática de diversos delitos de falsidade ideológica de documento particular (Art. 299 do CP: pena: 01 a 03 anos de reclusão e multa). Apesar de o objetivo ser a falsificação de documentos particulares, Caio utilizava-se da sua função pública para obter as informações a serem inseridas de forma falsa na documentação. Descobertos os fatos, Caio, Ricardo e Antônio foram denunciados, devidamente processados e condenados como incursos nas sanções do Art.2 º da Lei nº 12.850 / 13(constituir organização criminosa), sendo reconhecidas as causas de aumento em razão do envolvimento de funcionário público e em razão do envolvimento de adolescente.A Antônio foi, ainda, agravada a pena diante da posição de liderança. Constituído nos autos apenas para defesa dos interesses de Antônio, o advogado, em sede de recurso, sob o ponto de vista técnico, de acordo com as previsões legais, deverá requerer ", 
	a: "desclassificação para o crime de associação criminosa, previsto no Código Penal (antigo bando ou quadrilha).",
    b: "afastamento da causa de aumento em razão do envolvimento de adolescente, diante da ausência de previsão legal.",
    c: "afastamento da causa de aumento em razão da presença de funcionário público, tendo em vista que Antônio não é funcionário público e nem equiparado, devendo a majorante ser restrita a Caio.",
    d: "afastamento da agravante, pelo fato de Antônio ser o comandante da organização criminosa, uma vez que tal incremento da pena não está previsto na Lei nº 12.850/13.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "58"
}, {
    pergunta: "Maria, em uma loja de departamento, apresentou roupas no valor de R$ 1.200 (mil e duzentos reais) ao caixa, buscando efetuar o pagamento por meio de um cheque de terceira pessoa, inclusive assinando como se fosse a titular da conta. Na ocasião, não foi exigido qualquer documento de identidade. Todavia, o caixa da loja desconfiou do seu nervosismo no preenchimento do cheque, apesar da assinatura perfeita, e consultou o banco sacado, constatando que aquele documento constava como furtado.Assim, Maria foi presa em flagrante naquele momento e, posteriormente, denunciada pelos crimes de estelionato e falsificação de documento público, em concurso material. Confirmados os fatos, o advogado de Maria, no momento das alegações finais, sob o ponto de vista técnico, deverá buscar o reconhecimento ", 
	a: "do concurso formal entre os crimes de estelionato consumado e falsificação de documento público.",
    b: "do concurso formal entre os crimes de estelionato tentado e falsificação de documento particular.",
    c: "de crime único de estelionato, na forma consumada, afastando-se o concurso de crimes.",
    d: "de crime único de estelionato, na forma tentada, afastando-se o concurso de crimes.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "59"
}, {
    pergunta: "Durante uma reunião de condomínio, Paulo, com o animus de ofender a honra objetiva do condômino Arthur, funcionário público, mesmo sabendo que o ofendido foi absolvido daquela imputação por decisão transitada em julgado, afirmou que Artur não tem condições morais para conviver naquele prédio, porquanto se apropriara de dinheiro do condomínio quando exercia a função de síndico. Inconformado com a ofensa à sua honra, Arthur ofereceu queixa - crime em face de Paulo, imputando - lhe a prática do crime de calúnia.Preocupado com as consequências de seu ato, após ser regularmente citado, Paulo procura você, como advogado(a), para assistência técnica. Considerando apenas as informações expostas, você deverá esclarecer que a conduta de Paulo configura crime de ",
    a: "difamação, não de calúnia, cabendo exceção da verdade por parte de Paulo.",
    b: "injúria, não de calúnia, de modo que não cabe exceção da verdade por parte de Paulo.",
    c: "calúnia efetivamente imputado, não cabendo exceção da verdade por parte de Paulo.",
    d: "calúnia efetivamente imputado, sendo possível o oferecimento da exceção da verdade por parte de Paulo.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "60"
}, {
    pergunta: "Inconformado por estar desempregado, Lúcio resolve se embriagar. Quando se encontrava no interior do coletivo retornando para casa, ele verifica que o passageiro sentado à sua frente estava dormindo, e o telefone celular deste estava solto em seu bolso. Aproveitando-se da situação, Lúcio subtrai o aparelho sem ser notado pelo lesado, que continuava dormindo profundamente. Ao tentar sair do coletivo, Lúcio foi interpelado por outro passageiro, que assistiu ao ocorrido, iniciando-se uma grande confusão, que fez com que o lesado acordasse e verificasse que seu aparelho fora subtraído. Após denúncia pelo crime de furto qualificado pela destreza e regular processamento do feito, Lúcio foi condenado nos termos da denúncia, sendo, ainda, aplicada a agravante da embriaguez preordenada, já que Lúcio teria se embriagado dolosamente. Considerando apenas as informações expostas e que os fatos foram confirmados, o(a) advogado(a) de Lúcio, no momento da apresentação de recurso de apelação, poderá requerer ", 
	a: "o reconhecimento de causa de diminuição de pena diante da redução da capacidade em razão da sua embriaguez, mas não o afastamento da qualificadora da destreza.",
    b: "a desclassificação para o crime de furto simples, mas não o afastamento da agravante da embriaguez preordenada.",
    c: "a desclassificação para o crime de furto simples e o afastamento da agravante, não devendo a embriaguez do autor do fato interferir na tipificação da conduta ou na dosimetria da pena.",
    d: "a absolvição, diante da ausência de culpabilidade, em razão da embriaguez completa.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "61"
}, {
    pergunta: "Yuri foi denunciado pela suposta prática de crime de estupro qualificado em razão da idade da vítima, porque teria praticado conjunção carnal contra a vontade de Luana, de 15 anos, mediante emprego de grave ameaça. No curso da instrução, Luana mudou sua versão e afirmou que, na realidade, havia consentido na prática do ato sexual, sendo a informação confirmada por Yuri em seu interrogatório. Considerando apenas as informações expostas, no momento de apresentar alegações finais, a defesa técnica de Yuri deverá pugnar por sua absolvição, sob o fundamento de que o consentimento da suposta ofendida, na hipótese, funciona como ", 
	a: "causa supralegal de exclusão da ilicitude.",
    b: "causa legal de exclusão da ilicitude.",
    c: "fundamento para reconhecimento da atipicidade da conduta.",
    d: "causa supralegal de exclusão da culpabilidade.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "62"
}, {
    pergunta: "André, nascido em 21/11/2001, adquiriu de Francisco, em 18/11/2019, grande quantidade de droga, com o fim de vendê-la aos convidados de seu aniversário, que seria celebrado em 24/11/2019. Imediatamente após a compra, guardou a droga no armário de seu quarto. Em 23 / 11 / 2019, a partir de uma denúncia anônima e munidos do respectivo mandado de busca e apreensão deferido judicialmente, policiais compareceram à residência de André, onde encontraram e apreenderam a droga que era por ele armazenada.De imediato, a mãe de André entrou em contato com o advogado da família. Considerando apenas as informações expostas, na Delegacia, o advogado de André deverá esclarecer à família que André, penalmente, será considerado ", 
	a: "inimputável, devendo responder apenas por ato infracional análogo ao delito de tráfico, em razão de sua menoridade quando da aquisição da droga, com base na Teoria da Atividade adotada pelo Código Penal para definir o momento do crime.",
    b: "inimputável, devendo responder apenas por ato infracional análogo ao delito de tráfico, tendo em vista que o Código Penal adota a Teoria da Ubiquidade para definir o momento do crime.",
    c: "imputável, podendo responder pelo delito de tráfico de drogas, mesmo adotando o Código Penal a Teoria da Atividade para definir o momento do crime.",
    d: "imputável, podendo responder pelo delito de associação para o tráfico, que tem natureza permanente, tendo em vista que o Código Penal adota a Teoria do Resultado para definir o momento do crime.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "63"
}, {
    pergunta: "Ricardo foi pronunciado pela suposta prática do crime de homicídio qualificado. No dia anterior à sessão plenária do Tribunal do Júri, o defensor público que assistia Ricardo até aquele momento acostou ao processo a folha de antecedentes criminais da vítima, matérias jornalísticas e fotografias que poderiam ser favoráveis à defesa do acusado. O Ministério Público, em sessão plenária, foi surpreendido por aquele material do qual não tinha tido ciência, mas o juiz presidente manteve o julgamento para a data agendada e, após o defensor público mencionar a documentação acostada, Ricardo foi absolvido pelos jurados, em 23 / 10 / 2018(terça - feira).No dia 29 / 10 / 2018, o Ministério Público apresentou recurso de apelação, acompanhado das razões recursais, requerendo a realização de novo júri, pois a decisão dos jurados havia sido manifestamente contrária à prova dos autos. O Tribunal de Justiça conheceu do recurso interposto e anulou o julgamento realizado, determinando nova sessão plenária, sob o fundamento de que a defesa se utilizou em plenário de documentos acostados fora do prazo permitido pela lei.A família de Ricardo procura você, como advogado(a), para patrocinar os interesses do réu. Considerando as informações narradas, você, como advogado(a) de Ricardo, deverá questionar a decisão do Tribunal, sob o fundamento de que ", 
	a: "respeitando-se o princípio da amplitude de defesa, não existe vedação legal na juntada e utilização em plenário de documentação pela defesa no prazo mencionado.",
    b: "diante da nulidade reconhecida, caberia ao Tribunal de Justiça realizar, diretamente, novo julgamento, e não submeter o réu a novo julgamento pelo Tribunal do Júri.",
    c: "não poderia o Tribunal anular o julgamento com base em nulidade não arguida, mas tão só reconhecer, se fosse o caso, que a decisão dos jurados era manifestamente contrária à prova dos autos.",
    d: "o recurso foi apresentado de maneira intempestiva, de modo que sequer deveria ter sido conhecido.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "64"
}, {
    pergunta: "Mariana foi vítima de um crime de apropriação indébita consumado, que teria sido praticado por Paloma. Ao tomar conhecimento de que Paloma teria sido denunciada pelo crime mencionado, inclusive sendo apresentado pelo Ministério Público o valor do prejuízo sofrido pela vítima e o requerimento de reparação do dano, Mariana passou a acompanhar o andamento processual, sem, porém, habilitar-se como assistente de acusação. No momento em que constatou que os autos estariam conclusos para sentença, Mariana procurou seu advogado para adoção das medidas cabíveis, esclarecendo o temor de ver a ré absolvida e não ter seu prejuízo reparado. O advogado de Mariana deverá informar à sua cliente que ", 
	a: "não poderá ser fixado pelo juiz valor mínimo a título de indenização, mas, em caso de sentença condenatória, poderá esta ser executada, por meio de ação civil ex delicto , por Mariana ou seu representante legal.",
    b: "poderá ser apresentado recurso de apelação, diante de eventual sentença absolutória e omissão do Ministério Público, por parte de Mariana, por meio de seu patrono, ainda que não esteja, no momento da sentença, habilitada como assistente de acusação.",
    c: "poderá ser fixado pelo juiz valor a título de indenização em caso de sentença condenatória, não podendo a ofendida, porém, nesta hipótese, buscar a apuração do dano efetivamente sofrido perante o juízo cível.",
    d: "não poderá ser buscada reparação cível diante de eventual sentença absolutória, com trânsito em julgado, que reconheça não existir prova suficiente para condenação.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "65"
}, {
    pergunta: "Durante escuta telefônica devidamente deferida para investigar organização criminosa destinada ao contrabando de armas, policiais obtiveram a informação de que Marcelo receberia, naquele dia, grande quantidade de armamento, que seria depois repassada a Daniel, chefe de sua facção. Diante dessa informação, os policiais se dirigiram até o local combinado.Após informarem o fato à autoridade policial, que o comunicou ao juízo competente, eles acompanharam o recebimento do armamento por Marcelo, optando por não o prender naquele momento, pois aguardariam que ele se encontrasse com o chefe da sua organização para, então, prendê - los. De posse do armamento, Marcelo se dirigiu ao encontro de Daniel e lhe repassou as armas contrabandeadas, quando, então, ambos foram surpreendidos e presos em flagrante pelos policiais que monitoravam a operação.Encaminhados para a Delegacia, os presos entraram em contato com um advogado para esclarecimentos sobre a validade das prisões ocorridas. Com base nos fatos acima narrados, o advogado deverá esclarecer aos seus clientes que a prisão em flagrante efetuada pelos policiais foi ", 
	a: "ilegal, por se tratar de flagrante esperado.",
    b: "legal, restando configurado o flagrante preparado.",
    c: "legal, tratando-se de flagrante retardado.",
    d: "ilegal, pois a conduta dos policiais dependeria de prévia autorização judicial.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "66"
}, {
    pergunta: "O Ministério Público ofereceu denúncia em face de Tiago e Talles, imputando-lhes a prática do crime de sequestro qualificado, arrolando como testemunhas de acusação a vítima, pessoas que presenciaram o fato, os policiais responsáveis pela prisão em flagrante, além da esposa do acusado Tiago, que teria conhecimento sobre o ocorrido. Na audiência de instrução e julgamento, por ter sido arrolada como testemunha de acusação, Rosa, esposa de Tiago, compareceu, mas demonstrou que não tinha interesse em prestar declarações.O Ministério Público insistiu na sua oitiva, mesmo com outras testemunhas tendo conhecimento sobre os fatos.Temendo pelas consequências, já que foi prestado o compromisso de dizer a verdade perante o magistrado, Rosa disse o que tinha conhecimento, mesmo contra sua vontade, o que veio a prejudicar seu marido.Por ocasião dos interrogatórios, Tiago, que seria interrogado por último, foi retirado da sala de audiência enquanto o corréu prestava suas declarações, apesar de seu advogado ter participado do ato. Com base nas previsões do Código de Processo Penal, considerando apenas as informações narradas, Tiago ",
	a: "não teria direito de anular a instrução probatória com fundamento na sua ausência durante o interrogatório de Talles e nem na oitiva de Rosa na condição de testemunha, já que devidamente arrolada pelo Ministério Público.",
    b: "teria direito de anular a instrução probatória com fundamento na ausência de Tiago no interrogatório de Talles e na oitiva de Rosa na condição de testemunha.",
    c: "não teria direito de anular a instrução probatória com base na sua ausência no interrogatório de Talles, mas deveria questionar a oitiva de Rosa como testemunha, já que ela poderia se recusar a prestar declarações.",
    d: "não teria direito de anular a instrução probatória com base na sua ausência no interrogatório de Talles, mas deveria questionar a oitiva de Rosa como testemunha, pois, em que pese seja obrigada a prestar declarações, deveria ser ouvida na condição de informante, sem compromisso legal de dizer a verdade.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "67"
}, {
    pergunta: "Durante longa investigação, o Ministério Público identificou que determinado senador seria autor de um crime de concussão no exercício do mandato, que teria sido praticado após sua diplomação. Com o indiciamento, o senador foi intimado a, se fosse de sua vontade, prestar esclarecimentos sobre os fatos no procedimento investigatório. Preocupado com as consequências, o senador procurou seu advogado para esclarecimentos. Considerando apenas as informações narradas e com base nas previsões constitucionais, o advogado deverá esclarecer que ", 
	a: "o Ministério Público não poderá oferecer denúncia em face do senador sem autorização da Casa Legislativa, pois a Constituição prevê imunidade de natureza formal aos parlamentares.",
    b: "a denúncia poderá ser oferecida e recebida, assim como a ação penal ter regular prosseguimento, independentemente de autorização da Casa Legislativa, que não poderá determinar a suspensão do processo, considerando que o crime imputado é comum, e não de responsabilidade.",
    c: "a denúncia não poderá ser recebida pelo Poder Judiciário sem autorização da Casa Legislativa, em razão da imunidade material prevista na Constituição, apesar de poder ser oferecida pelo Ministério Público independentemente de tal autorização.",
    d: "a denúncia poderá ser oferecida e recebida independentemente de autorização parlamentar, mas deverá ser dada ciência à Casa Legislativa respectiva, que poderá, seguidas as exigências, até a decisão final, sustar o andamento da ação.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "68"
}, {
    pergunta: "Caio foi denunciado pela suposta prática do crime de estupro de vulnerável. Ocorre que, apesar da capitulação delitiva, a denúncia apresentava-se confusa na narrativa dos fatos, inclusive não sendo indicada qual seria a idade da vítima. Logo após a citação, Caio procurou seu advogado para esclarecimentos, destacando a dificuldade na compreensão dos fatos imputados. O advogado de Caio, constatando que a denúncia estava inepta, deve esclarecer ao cliente que, sob o ponto de vista técnico, com esse fundamento poderia buscar ", 
	a: "a rejeição da denúncia, podendo o Ministério Público apresentar recurso em sentido estrito em caso de acolhimento do pedido pelo magistrado, ou oferecer, posteriormente, nova denúncia.",
    b: "sua absolvição sumária, podendo o Ministério Público apresentar recurso de apelação em caso de acolhimento do pedido pelo magistrado, ou oferecer, posteriormente, nova denúncia.",
    c: "sua absolvição sumária, podendo o Ministério Público apresentar recurso em sentido estrito em caso de acolhimento do pedido pelo magistrado, mas, transitada em julgado a decisão, não poderá ser oferecida nova denúncia com base nos mesmos fatos.",
    d: "a rejeição da denúncia, podendo o Ministério Público apresentar recurso de apelação em caso de acolhimento do pedido pelo magistrado, mas, uma vez transitada em julgado a decisão, não caberá oferecimento de nova denúncia.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "69"
}, {
    pergunta: "Gervásia é empregada na Lanchonete Pará desde fevereiro de 2018, exercendo a função de atendente e recebendo o valor correspondente a um salário mínimo por mês. Acerca da cláusula compromissória de arbitragem que o empregador pretende inserir no contrato da empregada, de acordo com a CLT, assinale a afirmativa correta.",
    a: "A inserção não é possível, porque, no Direito do Trabalho, não cabe arbitragem em lides individuais.",
    b: "A cláusula compromissória de arbitragem não poderá ser inserida no contrato citado, em razão do salário recebido pela empregada.",
    c: "Não há mais óbice à inserção de cláusula compromissória de arbitragem nos contratos de trabalho, inclusive no de Gervásia.",
    d: "A cláusula de arbitragem pode ser inserida em todos os contratos de trabalho, sendo admitida de forma expressa ou tácita.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "70"
}, {
    pergunta: "Paulo trabalhou para a Editora Livro Legal Ltda . de 10/12/2017 a 30/08/2018 sem receber as verbas rescisórias ao final do contrato, sob a alegação de dificuldades financeiras da empregadora. Em razão disso, ele pretende ajuizar ação trabalhista e procurou você, como advogado(a). Sabe-se que a empregadora de Paulo estava sob o controle e a direção da sócia majoritária, a Editora Mundial Ltda . Assinale a afirmativa que melhor atende à necessidade e à segurança de satisfazer o crédito do seu cliente.",
    a: "Poderá incluir a sociedade empresária controladora no polo passivo da demanda, e esta responderá solidariamente com a empregadora, pois se trata de grupo econômico.",
    b: "Poderá incluir a sociedade empresária controladora no polo passivo da demanda, e esta responderá subsidiariamente com a empregadora, pois se trata de grupo econômico.",
    c: "Não há relação de responsabilização entre as sociedades empresárias, uma vez que possuem personalidades jurídicas distintas, o que afasta a caracterização de grupo econômico.",
    d: "Não se trata de grupo econômico, porque a mera identidade de sócios não o caracteriza; portanto, descabe a responsabilização da segunda sociedade empresária.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "71"
}, {
    pergunta: "Enzo é professor de Matemática em uma escola particular, em que é empregado há 8 anos. Após 2 anos de namoro e 1 ano de noivado, irá se casar com Carla, advogada, empregada em um escritório de advocacia há 5 anos. Sobre o direito à licença pelo casamento, de acordo com a CLT, assinale a afirmativa correta.",
    a: "O casal poderá faltar aos seus empregos respectivos por até 3 dias úteis para as núpcias.",
    b: "Carla, por ser advogada, terá afastamento de 5 dias e Enzo, por ser professor, poderá faltar por 2 dias corridos.",
    c: "Enzo poderá faltar ao serviço por 9 dias, enquanto Carla poderá se ausentar por 3 dias consecutivos.",
    d: "Não há previsão específica, devendo ser acertado o período de afastamento com o empregador, observado o limite de 10 dias.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "72"
}, {
    pergunta: "Rafaela trabalha em uma empresa de calçados. Apesar de sua formação como estoquista, foi preterida em uma vaga para tal por ser mulher, o que seria uma promoção e geraria aumento salarial. Um mês depois, a empresa exigiu que todas as funcionárias do sexo feminino apresentassem atestado médico de gravidez. Rafaela, 4 meses após esse fato, engravidou e, após apresentação de atestado médico, teve a jornada reduzida em duas horas, por se tratar de uma gestação delicada, o que acarretou a redução salarial proporcional.Sete meses após o parto, Rafaela foi dispensada. Como advogado(a) de Rafaela, de acordo com a legislação trabalhista em vigor, assinale a opção que contém todas as violações aos direitos trabalhistas de Rafaela.",
    a: "Recusa, fundamentada no sexo, da promoção para a função de estoquista.",
    b: "Recusa, fundamentada no sexo, da promoção para a função de estoquista, exigência de atestado de gravidez e redução salarial.",
    c: "Recusa, fundamentada no sexo, da promoção para a função de estoquista, exigência de atestado de gravidez, redução salarial e dispensa dentro do período de estabilidade gestante.",
    d: "Dispensa dentro do período de estabilidade gestante.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "73"
}, {
    pergunta: "Eduardo e Carla são empregados do Supermercado Praiano Ltda., exercendo a função de caixa. Após 10 meses de vigência do contrato, ambos receberam aviso prévio em setembro de 2019, para ser cumprido com trabalho. Contudo, 17 dias após, o Supermercado resolveu reconsiderar a sua decisão e manter Eduardo e Carla no seu quadro de empregados. Ocorre que ambos não desejam prosseguir, porque, nesse período, distribuíram seus currículos e conseguiram a promessa de outras colocações num concorrente do Supermercado Praiano, com salário um pouco superior. Diante da situação posta e dos termos da CLT, assinale a afirmativa correta.",
    a: "Os empregados não são obrigados a aceitar a retratação, que só gera efeito se houver consenso entre empregado e empregador.",
    b: "Os empregados são obrigados a aceitá-la, uma vez que a retratação foi feita pelo empregador ainda no período do aviso prévio.",
    c: "A retratação deve ser obrigatoriamente aceita pela parte contrária se o aviso prévio for trabalhado, e, se for indenizado, há necessidade de concordância das partes.",
    d: "O empregador jamais poderia ter feito isso, porque a CLT não prevê a possibilidade de reconsideração de aviso prévio, que se torna irreversível a partir da concessão.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "74"
}, {
    pergunta: "Renato é um empregado doméstico que atua como caseiro no sítio de lazer do seu empregador. Contudo, a CTPS de Renato foi assinada como sendo operador de máquinas da empresa de titularidade do seu empregador. Renato tem receio de que, no futuro, não possa comprovar experiência na função de empregado doméstico e, por isso, intenciona ajuizar reclamação trabalhista para regularizar a situação. Considerando a situação narrada e o entendimento consolidado do TST, assinale a afirmativa correta.",
    a: "Caso comprove que, de fato, é doméstico, Renato conseguirá a retificação na CTPS, pois as anotações nela lançadas têm presunção relativa.",
    b: "Somente o salário poderia ser objeto de demanda judicial para se comprovar que o empregado recebia valor superior ao anotado, sendo que a alteração na função não é prevista, e a demanda não terá sucesso.",
    c: "Caso Renato comprove que é doméstico, o pedido será julgado procedente, mas a alteração será feita com modulação de efeitos, com retificação da data da sentença em diante.",
    d: "Renato não terá sucesso na sua reclamação trabalhista, porque a anotação feita na carteira profissional tem presunção absoluta.",
    certo: "a",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "75"
}, {
    pergunta: "Após tentar executar judicialmente seu ex-empregador (a empresa Tecidos Suaves Ltda.) sem sucesso, o credor trabalhista Rodrigo instaurou o incidente de desconsideração de personalidade jurídica, objetivando direcionar a execução contra os sócios da empresa, o que foi aceito pelo magistrado. De acordo com a CLT, assinale a opção que indica o ato seguinte.",
    a: "O sócio será citado por oficial de justiça para pagar a dívida em 48 horas.",
    b: "O sócio será citado para manifestar-se e requerer as provas cabíveis no prazo de 15 dias.",
    c: "O juiz determinará de plano o bloqueio de bens e valores do sócio, posto que desnecessária a sua citação ou intimação.",
    d: "Será conferida vista prévia ao Ministério Público do Trabalho, para que o parquet diga se concorda com a desconsideração pretendida.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "76"
}, {
    pergunta: "José da Silva, que trabalhou em determinada sociedade empresária de 20/11/2018 a 30/04/2019, recebeu, apenas parcialmente, as verbas rescisórias, não tendo recebido algumas horas extras e reflexos. A sociedade empresária pretende pagar ao ex-empregado o que entende devido, mas também quer evitar uma possível ação trabalhista. Sobre a hipótese, na qualidade de advogado(a) da sociedade empresária, assinale a afirmativa correta.",
    a: "Deverá ser indicado e custeado um advogado para o empregado, a fim de que seja ajuizada uma ação para, então, comparecerem para um acordo, que já estará previamente entabulado no valor pretendido pela empresa.",
    b: "Deverá ser instaurado um processo de homologação de acordo extrajudicial, proposto em petição conjunta, mas com cada parte representada obrigatoriamente por advogado diferente.",
    c: "Deverá ser instaurado um processo de homologação de acordo extrajudicial, proposto em petição conjunta, mas cada parte poderá ser representada por advogado, ou não, já que, na Justiça do Trabalho, vigora o jus postulandi .",
    d: "Deverá ser instaurado um processo de homologação de acordo extrajudicial, proposto em petição conjunta, mas com advogado único representando ambas as partes, por se tratar de acordo extrajudicial.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "77"
}, {
    pergunta: "Você foi contratado(a) para atuar nas seguintes ações trabalhistas: (i) uma ação de cumprimento, como advogado da parte autora; (ii) uma reclamação plúrima, também como advogado da parte autora; (iii) uma reclamação trabalhista movida por João, ex - empregado de uma empresa, autor da ação; (iv) uma reclamação trabalhista, por uma sociedade empresária, ré na ação. Sobre essas ações, de acordo com a legislação trabalhista em vigor, assinale a afirmativa correta.",
    a: "Tanto na ação de cumprimento como na ação plúrima, todos os empregados autores deverão obrigatoriamente estar presentes. O mesmo deve ocorrer com João. Já a sociedade empresária poderá se fazer representar por preposto não empregado da ré.",
    b: "O sindicato de classe da categoria poderá representar os empregados nas ações plúrima e de cumprimento. João deverá estar presente, em qualquer hipótese, de forma obrigatória. A sociedade empresária tem que se fazer representar por preposto, que não precisa ser empregado da ré.",
    c: "Nas ações plúrima e de cumprimento, a parte autora poderá se fazer representar pelo Sindicato da categoria. João deverá estar presente, mas, por doença ou motivo ponderoso comprovado, poderá se fazer representar por empregado da mesma profissão ou pelo seu sindicato. Na ação em face da sociedade empresária, o preposto não precisará ser empregado da ré.",
    d: "O sindicato da categoria poderá representar os empregados nas ações plúrima e de cumprimento. João deverá estar presente, mas, por doença ou motivo ponderoso comprovado, poderá se fazer representar por empregado da mesma profissão ou pelo seu sindicato. Na ação em face da sociedade empresária, o preposto deverá, obrigatoriamente, ser empregado da ré.",
    certo: "c",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "78"
}, {
    pergunta: "Em setembro de 2019, durante a audiência de um caso que envolvia apenas pedido de adicional de insalubridade, o Juiz do Trabalho determinou a realização de perícia e que a reclamada antecipasse os honorários periciais. Inconformada com essa decisão, a sociedade empresária impetrou mandado de segurança contra esse ato judicial, mas o TRT, em decisão colegiada, não concedeu a segurança. Caso a sociedade empresária pretenda recorrer dessa decisão, assinale a opção que indica a medida recursal da qual deverá se valer.",
    a: "Agravo de Instrumento.",
    b: "Recurso Ordinário.",
    c: "Agravo de Petição.",
    d: "Recurso de Revista.",
    certo: "b",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "79"
}, {
    pergunta: "Heloísa era empregada doméstica e ajuizou, em julho de 2019, ação contra sua ex-empregadora, Selma Reis. Após regularmente instruída, foi prolatada sentença julgando o pedido procedente em parte. A sentença foi proferida de forma líquida, apurando o valor devido de R$ 9.000,00 (nove mil reais) e custas de R$ 180,00 (cento e oitenta reais). A ex - empregadora, não se conformando com a decisão, pretende dela recorrer.Indique a opção que corresponde ao preparo que a ex - empregadora deverá realizar para viabilizar o seu recurso, sabendo - se que ela não requereu gratuidade de justiça porque tem boas condições financeiras.",
    a: "Tratando-se de empregador doméstico, só haverá necessidade de recolher as custas.",
    b: "Deverá recolher integralmente as custas e o depósito recursal.",
    c: "Por ser empregador doméstico, basta efetuar o recolhimento do depósito recursal.",
    d: "Deverá recolher as custas integralmente e metade do depósito recursal.",
    certo: "d",
    ano: "Exame de Ordem Unificado - XXXI (FGV) - 2020",
    questao: "80"
},{
  pergunta: "Em certa situação, uma advogada, inscrita na OAB, foi ofendida em razão do exercício profissional durante a realização de uma audiência judicial. O ocorrido foi amplamente divulgado na mídia, assumindo grande notoriedade e revelando, de modo urgente, a necessidade de desagravo público. Considerando que o desagravo será promovido pelo Conselho competente, seja pelo órgão com atribuição ou pela Diretoria ad referendum , assinale a afirmativa correta.",
  a: "A atuação se dará apenas mediante provocação, a pedido da ofendida ou de qualquer outra pessoa. É condição para concessão do desagravo a solicitação de informações à pessoa ou autoridade apontada como ofensora.",
  b: "A atuação se dará de ofício ou mediante pedido, o qual deverá ser formulado pela ofendida, seu representante legal ou advogado inscrito na OAB. É condição para concessão do desagravo a solicitação de informações à pessoa ou autoridade apontada como ofensora.",
  c: "A atuação se dará de ofício ou mediante provocação, seja da ofendida ou de qualquer outra pessoa. Não é condição para concessão do desagravo a solicitação de informações à pessoa ou autoridade apontada como ofensora.",
  d: "A atuação se dará de ofício ou mediante pedido, o qual deverá ser formulado pela ofendida, seu representante legal ou advogado inscrito na OAB. Não é condição para concessão do desagravo a solicitação de informações à pessoa ou autoridade apontada como ofensora.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "1"
},{
  pergunta: "O advogado Geraldo foi regularmente constituído por certo cliente para defendê-lo em um processo judicial no qual esse cliente é réu. Geraldo ofereceu contestação, e o processo segue atualmente seu trâmite regular, não tendo sido, por ora, designada audiência de instrução e julgamento. Todavia, por razões insuperáveis que o impedem de continuar exercendo o mandato, Geraldo resolve renunciar. Em 12/02/2019, Geraldo fez a notificação válida da renúncia. Três dias depois da notificação, o mandante constituiu novo advogado, substituindo-o. Todo o ocorrido foi informado nos autos. Considerando o caso narrado, de acordo com o Estatuto da Advocacia e da OAB, assinale a afirmativa correta.",
  a: "Geraldo continuará a representar o mandante durante os dez dias seguintes à notificação da renúncia.",
  b: "O dever de Geraldo de representar o mandante cessa diante da substituição do advogado, independentemente do decurso de prazo.",
  c: "Geraldo continuará a representar o mandante até que seja proferida e publicada sentença nos autos, ainda que recorrível.",
  d: "Geraldo continuará a representar o mandante até o término da audiência de instrução e julgamento.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "2"
},{
  pergunta: "Beatriz, advogada regularmente inscrita na OAB, deseja organizar uma chapa para concorrer à diretoria de Subseção. Ao estudar os pressupostos para a formação da chapa, a realização das eleições e o futuro exercício do cargo, Beatriz concluiu corretamente que",
  a: "a chapa deverá ser integrada por advogados em situação regular junto à OAB, que exerçam cargos em comissão, desde que atuem, efetivamente, na profissão há mais de cinco anos",
  b: "a eleição será realizada na segunda quinzena do mês de novembro, do último ano do mandato, sendo o comparecimento obrigatório para todos os advogados inscritos na OAB.",
  c: "o mandato é de três anos, iniciando-se em primeiro de fevereiro do ano seguinte ao da eleição.",
  d: "o mandato extingue-se automaticamente, antes do seu término, sempre que o titular faltar, sem motivo justificado, a mais de três reuniões ordinárias.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "3"
},{
  pergunta: "O advogado Carlos não adimpliu suas obrigações relativas às anuidades devidas à OAB. Assinale a opção que, corretamente, trata das consequências de tal inadimplemento.",
  a: "Carlos deverá quitar o débito em 15 dias contados da notificação para tanto, sob pena de suspensão, independentemente de processo disciplinar. Na terceira suspensão por não pagamento de anuidade, seja a mesma ou anuidades distintas, será cancelada sua inscrição.",
  b: "Carlos deverá quitar o débito no prazo fixado em notificação, sob pena de suspensão mediante processo disciplinar. Após 15 dias de suspensão, caso não realizado o pagamento da mesma anuidade, será cancelada sua inscrição.",
  c: "Carlos deverá quitar o débito em 15 dias contados da notificação para tanto, sob pena de suspensão, mediante processo disciplinar. Na terceira suspensão por não pagamento de anuidades, será cancelada sua inscrição.",
  d: "Carlos deverá quitar o débito em 15 dias contados da notificação para tanto, sob pena de suspensão, independentemente de processo disciplinar. Na segunda suspensão por não pagamento de anuidades distintas, será cancelada sua inscrição, após o transcurso de processo disciplinar.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "4"
},{
  pergunta: "Jailton, advogado, após dez anos de exercício da advocacia, passou a apresentar comportamentos incomuns. Após avaliação médica, ele foi diagnosticado com uma doença mental curável, mediante medicação e tratamento bastante demorado. Segundo as disposições do Estatuto da Advocacia e da OAB, o caso do advogado Jailton incide em causa de",
  a: "suspensão do exercício profissional.",
  b: "impedimento para o exercício profissional.",
  c: "cancelamento da inscrição profissional.",
  d: "licença do exercício profissional.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "5"
},{
  pergunta: "Antônio e José são advogados e atuam em matéria trabalhista. Antônio tomou conhecimento de certos fatos relativos à vida pessoal de seu cliente, que respondia a processo considerado de interesse acadêmico. Após o encerramento do feito judicial, Antônio resolveu abordar os fatos que deram origem ao processo em sua dissertação pública de mestrado. Então, a fim de se resguardar, Antônio notificou o cliente, indagando se este solicitava sigilo sobre os fatos pessoais ou se estes podiam ser tratados na aludida dissertação. Tendo obtido resposta favorável do cliente, Antônio abordou o assunto na dissertação. Por sua vez, o advogado José também soube de fatos pessoais de seu cliente, em razão de sua atuação em outro processo. Entretanto, José foi difamado em público, gravemente, por uma das partes da demanda. Por ser necessário à defesa de sua honra, José divulgou o conteúdo particular de que teve conhecimento. Considerando os dois casos narrados, assinale a afirmativa correta.",
  a: "Antônio infringiu o disposto no Código de Ética e Disciplina da OAB, violando o dever de sigilo profissional. Por outro lado, José não cometeu infração ética, já que o dever de sigilo profissional cede na situação descrita.",
  b: "Antônio e José infringiram, ambos, o disposto no Código de Ética e Disciplina da OAB, violando seus deveres de sigilo profissional.",
  c: "José infringiu o disposto no Código de Ética e Disciplina da OAB, violando o dever de sigilo profissional. Por outro lado, Antônio não cometeu infração ética, já que o dever de sigilo profissional cede na situação descrita.",
  d: "Antônio e José não cometeram infração ética, já que o dever de sigilo profissional, em ambos os casos, cede nas situações descritas.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "6"
},{
  pergunta: "Maria, formada em uma renomada faculdade de Direito, é transexual. Após a aprovação no Exame de Ordem e do cumprimento dos demais requisitos, Maria receberá a carteira de identidade de advogado, relativa à sua inscrição originária. Sobre a hipótese apresentada, de acordo com o disposto na Lei nº 8.906/94 e no Regulamento Geral do Estatuto da Advocacia e da OAB, assinale a afirmativa correta.",
  a: "É admitida a inclusão do nome social de Maria, em seguida ao nome registral, havendo exigência normativa de que este seja o nome pelo qual Maria se identifica e é socialmente reconhecida, mediante mero requerimento formulado pela advogada.",
  b: "É admitida a inclusão do nome social de Maria, desde que, por exigência normativa, este seja o nome pelo qual Maria se identifica e que consta em registro civil de pessoas naturais, originariamente ou por alteração, mediante mero requerimento formulado pela advogada.",
  c: "É admitida a inclusão do nome social de Maria, independentemente de menção ao nome registral, havendo exigência normativa de que este seja o nome pelo qual Maria se identifica, e é socialmente reconhecida, e de que haja prévia aprovação em sessão do Conselho Seccional respectivo.",
  d: "Não há previsão na Lei nº 8.906/94 e no Regulamento Geral do Estatuto da Advocacia e da OAB sobre a inclusão do nome social de Maria na carteira de identidade do advogado, embora tal direito possa advir de interpretação do disposto na Constituição Federal, desde que haja cirurgia prévia de redesignação sexual e posterior alteração do nome registral da advogada para aquele pelo qual ela se identifica e é socialmente reconhecida.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "7"
},{
  pergunta: "João Pedro, advogado conhecido no Município Alfa, foi eleito para mandato na Câmara Municipal, na legislatura de 2012 a 2015. Após a posse e o exercício do cargo de vereador em 2012 e 2013, João Pedro licenciou-se do mandato em 2014 e 2015 a convite do Prefeito, para exercer o cargo de Procurador-Geral do Município Alfa. Diante desses fatos, João Pedro,",
  a: "em 2012 e 2013, poderia exercer a advocacia a favor de entidades paraestatais.",
  b: "em 2012 e 2013, não poderia exercer a advocacia contra empresa concessionária de serviço público estadual.",
  c: "em 2014 e 2015, poderia exercer a advocacia privada, desde que não atuasse contra o Município Alfa ou entidade que lhe seja vinculada.",
  d: "em 2014 e 2015, não poderia exercer a advocacia a favor de autarquia vinculada ao Município Alfa.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "8"
},{
  pergunta: '"Um juiz pode dar uma sentença favorável a uma querelante com um rostinho bonito ou proveniente de determinada classe social, na realidade porque gosta do rosto ou da classe, mas ostensivamente pelas razões que apresentar para sua decisão." Neil MacCormick .Existem diferentes motivos pelos quais uma decisão é tomada, segundo MacCormick. Alguns argumentos podem ser até mesmo inconfessáveis, porém, de qualquer forma, a autoridade que decide precisa persuadir um auditório quanto à sua decisão. Assinale a opção que, segundo Neil MacCormick, em seu livro Argumentação Jurídica e Teoria do Direito , apresenta a noção essencial daquilo que a fundamentação de uma decisão deve fazer.',
  a: "Dar boas razões ostensivamente justificadoras em defesa da decisão, de modo que o processo de argumentação seja apresentado como processo de justificação.",
  b: "Realizar uma dedução silogística por intermédio da qual a decisão seja a premissa maior, resultante da lei, que deve ser considerada a premissa menor do raciocínio lógico.",
  c: "Proceder a um ato de vontade no qual cabe ao juiz escolher uma norma válida contida no ordenamento jurídico vigente e aplicá-la ao caso concreto.",
  d: "Alinhar-se à jurisprudência dominante em respeito às decisões dos tribunais superiores expressas na firma de precedentes, enunciados e súmulas.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "9"
},{
  pergunta: '"É preciso repetir mais uma vez aquilo que os adversários do utilitarismo raramente fazem o favor de reconhecer: a felicidade que os utilitaristas adotaram como padrão do que é certo na conduta não é a do próprio agente, mas a de todos os envolvidos"  John Stuart Mill .Na defesa que Stuart Mill faz do utilitarismo como princípio moral, em seu texto Utilitarismo, ele afirma que o utilitarismo exige que o indivíduo não coloque seus interesses acima dos interesses dos demais, devendo, por isso, ser imparcial e até mesmo benevolente. Assim, no texto em referência, Stuart Mill afirma que, para aproximar os indivíduos desse ideal, a utilidade recomenda que',
  a: "as leis e os dispositivos sociais coloquem, o máximo possível, a felicidade ou o interesse de cada indivíduo em harmonia com os interesses do todo.",
  b: "o Direito Natural, que possui como base a própria natureza das coisas, seja o fundamento primeiro e último de todas as leis, para que o desejo de ninguém se sobreponha ao convívio social.",
  c: "os sentimentos morais que são inatos aos seres humanos e conformam, de fato, uma parte de nossa natureza, já que estão presentes em todos, sejam a base da legislação.",
  d: "as leis de cada país garantam a liberdade de cada indivíduo em buscar sua própria felicidade, ainda que a felicidade de um não seja compatível com a felicidade de outro.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "10"
},{
  pergunta: "Em março de 2017, o Supremo Tribunal Federal, em decisão definitiva de mérito proferida no âmbito de uma Ação Declaratória de Constitucionalidade, com eficácia contra todos ( erga omnes ) e efeito vinculante, declarou que a lei federal, que autoriza o uso de determinado agrotóxico no cultivo de soja, é constitucional, desde que respeitados os limites e os parâmetros técnicos estabelecidos pela Agência Nacional de Vigilância Sanitária (ANVISA). Inconformados com tal decisão, os congressistas do partido Y apresentaram um projeto de lei perante a Câmara dos Deputados visando proibir, em todo o território nacional, o uso do referido agrotóxico e, com isso, “derrubar” a decisão da Suprema Corte. Em outubro de 2017, o projeto de lei é apresentado para ser votado. Diante da hipótese narrada, assinale a afirmativa correta.",
  a: "A superação legislativa das decisões definitivas de mérito do Supremo Tribunal Federal, no âmbito de uma ação declaratória de constitucionalidade, deve ser feita pela via da emenda constitucional, ou seja, como fruto da atuação do poder constituinte derivado reformador; logo, o projeto de lei proposto deve ser impugnado por mandado de segurança em controle prévio de constitucionalidade.",
  b: "Embora as decisões definitivas de mérito proferidas pelo Supremo Tribunal Federal nas ações declaratórias de constitucionalidade não vinculem o Poder Legislativo em sua função típica de legislar, a Constituição de 1988 veda a rediscussão de temática já analisada pela Suprema Corte na mesma sessão legislativa, de modo que o projeto de lei apresenta vício formal de inconstitucionalidade.",
  c: "Como as decisões definitivas de mérito proferidas pelo Supremo Tribunal Federal em sede de controle concentrado de constitucionalidade gozam de eficácia contra todos e efeito vinculante, não poderia ser apresentado projeto de lei que contrariasse questão já pacificada pela Suprema Corte, cabendo sua impugnação pela via da reclamação constitucional.",
  d: "O Poder Legislativo, em sua função típica de legislar, não fica vinculado às decisões definitivas de mérito proferidas pelo Supremo Tribunal Federal no controle de constitucionalidade, de modo que o projeto de lei apresentado em data posterior ao julgamento poderá ser regularmente votado e, se aprovado, implicará a superação ou reação legislativa da jurisprudência.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "11"
},{
  pergunta: "Em decorrência de um surto de dengue, o Município Alfa, após regular procedimento licitatório, firmou ajuste com a sociedade empresária Mata Mosquitos Ltda ., pessoa jurídica de direito privado com fins lucrativos, visando à prestação de serviços relacionados ao combate à proliferação de mosquitos e à realização de campanhas de conscientização da população local. Nos termos do ajuste celebrado, a sociedade empresarial passaria a integrar, de forma complementar, o Sistema Único de Saúde (SUS). Diante da situação narrada, com base no texto constitucional, assinale a afirmativa correta.",
  a: "O ajuste firmado entre o ente municipal e a sociedade empresária é inconstitucional, eis que a Constituição de 1988 veda a participação de entidades privadas com fins lucrativos no Sistema Único de Saúde, ainda que de forma complementar.",
  b: "A participação complementar de entidades privadas com fins lucrativos no Sistema Único de Saúde é admitida, sendo apenas vedada a destinação de recursos públicos para fins de auxílio ou subvenção às atividades que desempenhem.",
  c: "O ajuste firmado entre o Município Alfa e a sociedade empresária Mata Mosquito Ltda . encontra-se em perfeita consonância com o texto constitucional, que autoriza a participação de entidades privadas com fins lucrativos no Sistema Único de Saúde e o posterior repasse de recursos públicos.",
  d: "As ações de vigilância sanitária e epidemiológica, conforme explicita a Constituição de 1988, não se encontram no âmbito de atribuições do Sistema Único de Saúde, razão pela qual devem ser prestadas exclusivamente pelo poder público.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "12"
},{
  pergunta: "As chuvas torrenciais que assolaram as regiões Norte e Nordeste do país resultaram na paralisação de serviços públicos essenciais ligados às áreas de saúde, educação e segurança. Além disso, diversos moradores foram desalojados de suas residências, e o suprimento de alimentos e remédios ficou prejudicado em decorrência dos alagamentos. O Presidente da República, uma vez constatado o estado de calamidade pública de grande proporção, decretou estado de defesa. Dentre as medidas coercitivas adotadas com o propósito de restabelecer a ordem pública estava o uso temporário de ambulâncias e viaturas pertencentes ao Município Alfa. Diante do caso hipotético narrado, assinale a afirmativa correta.",
  a: "A fundamentação empregada pelo Presidente da República para decretar o estado de defesa viola a Constituição de 1988, porque esta exige, para tal finalidade, a declaração de estado de guerra ou resposta a agressão armada estrangeira.",
  b: "Embora seja admitida a decretação do estado de defesa para restabelecer a ordem pública em locais atingidos por calamidades de grandes proporções da natureza, não pode o Presidente da República, durante a vigência do período de exceção, determinar o uso temporário de bens pertencentes a outros entes da federação.",
  c: "O estado de defesa, no caso em comento, viola o texto constitucional, porque apenas poderia vir a ser decretado pelo Presidente da República caso constatada a ineficácia de medidas adotadas durante o estado de sítio.",
  d: "A União pode determinar a ocupação e o uso temporário de bens e serviços públicos, respondendo pelos danos e custos decorrentes, porque a necessidade de restabelecer a ordem pública em locais atingidos por calamidades de grandes proporções da natureza é fundamento idôneo para o estado de defesa.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "13"
},{
  pergunta: "O Supremo Tribunal Federal reconheceu a periculosidade inerente ao ofício desempenhado pelos agentes penitenciários, por tratar-se de atividade de risco. Contudo, ante a ausência de norma que regulamente a concessão da aposentadoria especial no Estado Alfa, os agentes penitenciários dessa unidade federativa encontram-se privados da concessão do referido direito constitucional. Diante disso, assinale a opção que apresenta a medida judicial adequada a ser adotada pelo Sindicato dos Agentes Penitenciários do Estado Alfa, organização sindical legalmente constituída e em funcionamento há mais de 1 (um) ano, em defesa da respectiva categoria profissional.",
  a: "Ele pode ingressar com mandado de injunção coletivo para sanar a falta da norma regulamentadora, dispensada autorização especial dos seus membros.",
  b: "Ele não possui legitimidade ativa para ingressar com mandado de injunção coletivo, mas pode pleitear aplicação do direito constitucional via ação civil pública.",
  c: "Ele tem legitimidade para ingressar com mandado de injunção coletivo, cuja decisão pode vir a ter eficácia ultra partes , desde que apresente autorização especial dos seus membros.",
  d: "Ele pode ingressar com mandado de injunção coletivo, mas, uma vez reconhecida a mora legislativa, a decisão não pode estabelecer as condições em que se dará o exercício do direito à aposentadoria especial, sob pena de ofensa à separação dos Poderes.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "14"
},{
  pergunta: "Durante campeonato oficial de judô promovido pela Federação de Judô do Estado Alfa, Fernando, um dos atletas inscritos, foi eliminado da competição esportiva em decorrência de uma decisão contestável da arbitragem que dirigiu a luta. Na qualidade de advogado(a) contratado(a) por Fernando, assinale a opção que apresenta a medida juridicamente adequada para o caso narrado.",
  a: "Fernando poderá ingressar com processo perante a justiça desportiva para contestar o resultado da luta e, uma vez esgotadas as instâncias desportivas e proferida decisão final sobre o caso, não poderá recorrer ao Poder Judiciário.",
  b: "Fernando poderá impugnar o resultado da luta perante o Poder Judiciário, independentemente de esgotamento das instâncias da justiça desportiva, em virtude do princípio da inafastabilidade da jurisdição.",
  c: "Fernando, uma vez esgotadas as instâncias da justiça desportiva (que terá o prazo máximo de 60 dias, contados da instauração do processo, para proferir decisão final), poderá impugnar o teor da decisão perante o Poder Judiciário.",
  d: "A ordem jurídica, que adotou o princípio da unidade de jurisdição a partir da Constituição de 1988, passou a prever a exclusividade do Poder Judiciário para dirimir todas as questões que venham a ser judicializadas em território nacional, deslegitimando a atuação da justiça desportiva.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "15"
},{
  pergunta: "Giuseppe, italiano, veio ainda criança para o Brasil, juntamente com seus pais. Desde então, nunca sofreu qualquer tipo de condenação penal, constituiu família, sendo pai de um casal de filhos nascidos no país, possui título de eleitor e nunca deixou de participar dos pleitos eleitorais. Embora tenha se naturalizado brasileiro na década de 1990, não se sente brasileiro. Nesse sentido, Giuseppe afirma que é muito grato ao Brasil, mas que, apesar do longo tempo aqui vivido, não partilha dos mesmos valores espirituais e culturais dos brasileiros. Giuseppe mora em Vitória/ES e descobriu o envolvimento do Ministro de Estado Alfa em fraude em uma licitação cujo resultado beneficiou, indevidamente, a empresa de propriedade de seus irmãos. Indignado com tal atitude, Giuseppe resolveu, em nome da intangibilidade do patrimônio público e do princípio da moralidade administrativa, propor ação popular contra o Ministro de Estado Alfa, ingressando no juízo de primeira instância da justiça comum, não no Supremo Tribunal Federal. Sobre o caso, com base no Direito Constitucional e na jurisprudência do Supremo Tribunal Federal, assinale a afirmativa correta.",
  a: "A ação não deve prosperar, uma vez que a competência para processá-la e julgá-la é do Supremo Tribunal Federal, e falta legitimidade ativa para o autor da ação, porque não possui a nacionalidade brasileira, não sendo, portanto, classificado como cidadão brasileiro.",
  b: "A ação deve prosperar, porque a competência para julgar a ação popular em tela é do juiz de primeira instância da justiça comum, e o autor da ação tem legitimidade ativa porque é cidadão no pleno gozo de seus direitos políticos, muito embora não faça parte da nação brasileira.",
  c: "A ação não deve prosperar, uma vez que a competência para julgar a mencionada ação popular é do Supremo Tribunal Federal, muito embora não falte legitimidade ad causam para o autor da ação, que é cidadão brasileiro, detentor da nacionalidade brasileira e no pleno gozo dos seus direitos políticos.",
  d: "A ação deve prosperar, porque a competência para julgar a ação popular em tela tanto pode ser do juiz de primeira instância da justiça comum quanto do Supremo Tribunal Federal, e não falta legitimidade ad causam para o autor da ação, já que integra o povo brasileiro.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "16"
},{
  pergunta: "Bento ficou surpreso ao ler, em um jornal de grande circulação, que um cidadão americano adquiriu fortuna ao encontrar petróleo em sua propriedade, situada no Estado do Texas. Acresça-se que um amigo, com formação na área de Geologia, tinha informado que as imensas propriedades de Bento possuíam rochas sedimentares normalmente presentes em regiões petrolíferas. Antes de pedir um aprofundado estudo geológico do terreno, Bento buscou um advogado especialista na matéria, a fim de saber sobre possíveis direitos econômicos que lhe caberiam como resultado da extração do petróleo em sua propriedade. O advogado respondeu que, segundo o sistema jurídico-constitucional brasileiro, caso seja encontrado petróleo na propriedade, Bento",
  a: "poderá, por ser proprietário do solo e, por extensão, do subsolo de sua propriedade, explorar, per se, a atividade, auferindo para si os bônus e ônus econômicos advindos da exploração.",
  b: "receberá indenização justa e prévia pela desapropriação do terreno em que se encontra a jazida, mas não terá direito a qualquer participação nos resultados econômicos provenientes da atividade.",
  c: "terá assegurada, nos termos estabelecidos pela via legislativa ordinária, participação nos resultados econômicos decorrentes da exploração da referida atividade em sua propriedade.",
  d: "não terá direito a qualquer participação no resultado econômico da atividade, pois, embora seja proprietário do solo, as riquezas extraídas do subsolo são de propriedade exclusiva da União.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "17"
},{
  pergunta: "Um rapaz, que era pessoa em situação de rua, acabou de sair da prisão. Ele fora condenado pelo crime de latrocínio e, posteriormente, a defensoria pública ajuizou, a seu favor, uma ação de revisão criminal, na qual ele foi absolvido por ausência de provas, caracterizando, assim, um erro judiciário. Nesse período, ele ficou cinco anos preso. Agora a família indaga se existe um direito de indenização em função de condenação por erro judiciário. Assinale a opção que apresenta a informação que você, na condição de advogado(a) especializado(a) em Direitos Humanos, deve prestar à família, com base na Convenção Americana Sobre Direitos Humanos .",
  a: "O direito à indenização está previsto na Convenção Americana Sobre Direitos Humanos de forma geral, mas não há previsão expressa de indenização por erro judiciário; portanto, essa é uma construção argumentativa que deve ser produzida no caso concreto.",
  b: "A indenização por erro judiciário não é uma matéria própria do campo dos Direitos Humanos, por isso não existe tal previsão nem na Convenção Americana Sobre Direitos Humanos, nem em nenhum outro tratado de Direitos Humanos de que o Brasil seja signatário.",
  c: "A Convenção Americana Sobre Direitos Humanos assegura o direito à indenização por erro judiciário, mas o restringe aos erros que resultam em condenação na esfera civil, excluindo eventuais erros que ocorram na jurisdição penal.",
  d: "A Convenção Americana Sobre Direitos Humanos dispõe que toda pessoa tem direito de ser indenizada conforme a lei, no caso de haver sido condenada em sentença transitada em julgado por erro judiciário.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "18"
},{
  pergunta: "Em uma cidade brasileira de fronteira, foi detectado um intenso movimento de entrada de pessoas de outro país para trabalhar, residir e se estabelecer temporária ou definitivamente no Brasil. Após algum tempo, houve uma reação de moradores da cidade que começaram a hostilizar essas pessoas, exigindo que as autoridades brasileiras proibissem sua entrada e a regularização documental. Você foi procurado(a), como advogado(a), por instituições humanitárias, para redigir um parecer jurídico sobre a situação. Nesse sentido, com base na Lei nº 13.445/17 ( Lei da Migração ), assinale a afirmativa correta.",
  a: "A admissão de imigrantes por meio de entrada e regularização documental não caracteriza uma diretriz específica da política migratória brasileira, e sim um ato discricionário do chefe do Poder Executivo.",
  b: "A promoção de entrada e a regularização documental de imigrantes são coisas distintas. A política migratória brasileira adota o princípio da regularização documental dos imigrantes, mas não dispõe sobre promoção de entrada regular de imigrantes.",
  c: "A política migratória brasileira rege-se pelos princípios da promoção de entrada regular e de regularização documental, bem como da acolhida humanitária e da não criminalização da migração.",
  d: "O imigrante, de acordo com a Lei da Migração, é a pessoa nacional de outro país que vem ao Brasil para estadas de curta duração, sem pretensão de se estabelecer temporária ou definitivamente no território nacional.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "19"
},{
  pergunta: "Uma arbitragem, conduzida na Argentina segundo as regras da Câmara de Comércio Internacional - CCI, condenou uma empresa com sede no Brasil ao pagamento de uma indenização à sua ex-sócia argentina. Para ser executável no Brasil, esse laudo arbitral",
  a: "dispensa homologação pelo STJ, nos termos da Convenção de Nova York.",
  b: "precisa ser homologado pelo Judiciário argentino e depois, pelo STJ.",
  c: "precisa ser homologado pelo STJ, por ser laudo arbitral estrangeiro.",
  d: "dispensa homologação, por ser laudo arbitral proveniente de país do Mercosul.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "20"
},{
  pergunta: "Victor, após divorciar-se no Brasil, transferiu seu domicílio para os Estados Unidos. Os dois filhos brasileiros de sua primeira união continuaram vivendo no Brasil. Victor contraiu novo matrimônio nos Estados Unidos com uma cidadã norte-americana e, alguns anos depois, vem a falecer nos Estados Unidos, deixando um imóvel e aplicações financeiras nesse país. A regra de conexão do direito brasileiro estabelece que a sucessão de Victor será regida",
  a: "pela lei brasileira, em razão da nacionalidade brasileira do de cujus .",
  b: "pela lei brasileira, porque o de cujus tem dois filhos brasileiros.",
  c: "pela lei norte-americana, em razão do último domicílio do de cujus .",
  d: "pela lei norte-americana, em razão do local da situação dos bens a serem partilhados.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "21"
},{
  pergunta: "A sociedade empresária ABC Ltda. foi autuada pelo Fisco do Estado Z apenas pelo descumprimento de uma determinada obrigação tributária acessória, referente à fiscalização do ICMS prevista em lei estadual (mas sem deixar de recolher o tributo devido). Inconformada, realiza a impugnação administrativa por meio do auto de infração. Antes que sobreviesse a decisão administrativa da impugnação, outra lei estadual extingue a previsão da obrigação acessória que havia sido descumprida. Diante desse cenário, assinale a afirmativa correta.",
  a: "A lei estadual não é instrumento normativo hábil para extinguir a previsão dessa obrigação tributária acessória referente ao ICMS, em virtude do caráter nacional desse tributo.",
  b: "O julgamento administrativo, nesse caso, deverá levar em consideração apenas a legislação tributária vigente na época do fato gerador.",
  c: "Não é possível a extinção dos efeitos da infração a essa obrigação tributária acessória após a lavratura do respectivo auto de infração.",
  d: "A superveniência da extinção da previsão dessa obrigação acessória, desde que não tenha havido fraude, nem ausência de pagamento de tributo, constitui hipótese de aplicação da legislação tributária a ato pretérito.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "22"
},{
  pergunta: "Otávio, domiciliado no Estado X, possui ações representativas do capital social da Sociedade BETA S/A, com sede no Estado Y, e decide doar parte da sua participação acionária a Mário, seu filho, então domiciliado no Estado Z. Com dúvidas quanto ao Estado para o qual deverá ser recolhido o imposto sobre a Transmissão Causa Mortis e Doação (ITCD) incidente nessa operação, Mário consulta seu escritório, destacando que o Estado Z estabelece alíquotas inferiores às praticadas pelos demais Estados. Com base nisso, assinale a afirmativa correta.",
  a: "O ente competente para exigir o ITCD na operação em análise é o Estado X, onde tem domicílio o doador.",
  b: "O ITCD deverá ser recolhido ao Estado Y, uma vez que o bem a ser doado consiste em participação acionária relativa à sociedade ali estabelecida, e o imposto compete ao Estado da situação do bem.",
  c: "O ITCD deverá ser recolhido ao Estado Z, uma vez que o contribuinte do imposto é o donatário.",
  d: "Doador ou donatário poderão recolher o imposto ao Estado X ou ao Estado Z, pois o contribuinte do imposto é qualquer das partes na operação tributada.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "23"
},{
  pergunta: "Projeto de Resolução do Senado Federal pretende fixar nacionalmente as alíquotas mínimas do Imposto sobre a Propriedade de Veículos Automotores (IPVA), tributo de competência estadual. Um Senador, membro da Comissão de Constituição, Justiça e Cidadania do Senado Federal, que terá de elaborar parecer sobre o tema, consulta você sobre sua opinião jurídica acerca desse projeto de Resolução. Diante desse cenário, assinale a afirmativa correta.",
  a: "O Senado, por ser órgão do Poder Legislativo da União, não possui competência constitucional para, por Resolução, dispor sobre o tema, por se tratar de ingerência indevida da União na autonomia dos Estados.",
  b: "É lícito ao Senado instituir a referida Resolução, pois existe autorização expressa na Constituição para tal fixação por Resolução do Senado.",
  c: "A fixação de alíquota mínima de tributo, por mera Resolução do Senado, viola o princípio da legalidade tributária.",
  d: "Resolução do Senado poderia tratar do tema, desde que ratificada por ao menos dois terços dos membros do Conselho Nacional de Política Fazendária (CONFAZ).",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "24"
},{
  pergunta: "O Estado Y concedeu, em 2018, por iniciativa própria e isoladamente, mediante uma lei ordinária estadual, isenção fiscal do Imposto sobre Circulação de Mercadorias e Serviços (ICMS) a um determinado setor de atividade econômica, como forma de atrair investimentos para aquele Estado. Diante desse cenário, assinale a afirmativa correta.",
  a: "É suficiente lei ordinária estadual para a concessão de tal isenção de ICMS, por se tratar de tributo de competência estadual.",
  b: "Ainda que se trate de tributo de competência estadual, somente por lei estadual complementar seria possível a concessão de tal isenção de ICMS.",
  c: "A lei ordinária estadual pode conceder tal isenção de ICMS, desde que condicionada a uma contrapartida do contribuinte beneficiado.",
  d: "Apesar de se tratar de tributo de competência estadual, a concessão de tal isenção de ICMS pelo Estado deve ser precedida de deliberação dos Estados e do Distrito Federal (CONFAZ).",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "25"
},{
  pergunta: "No final do ano de 2018, o Município X foi gravemente afetado por fortes chuvas que causaram grandes estragos na localidade. Em razão disso, a Assembleia Legislativa do Estado Y, em que está localizado o Município X, aprovou lei estadual ordinária concedendo moratória quanto ao pagamento do Imposto Predial e Territorial Urbano (IPTU) do ano subsequente, em favor de todos os contribuintes desse imposto situados no Município X. Diante desse cenário, assinale a afirmativa correta.",
  a: "Lei ordinária não é espécie normativa adequada para concessão de moratória.",
  b: "Lei estadual pode conceder moratória de IPTU, em situação de calamidade pública ou de guerra externa ou sua iminência.",
  c: "Lei estadual não pode, em nenhuma hipótese, conceder moratória de IPTU.",
  d: "A referida moratória somente poderia ser concedida mediante despacho da autoridade administrativa em caráter individual.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "26"
},{
  pergunta: "A sociedade empresária Feliz S/A, após apresentar a melhor proposta em licitação para a contratação de obra de grande vulto, promovida por certa empresa pública federal, apresentou os documentos exigidos no edital e foi habilitada. Este último ato foi objeto de recurso administrativo, no qual restou provado que a mencionada licitante foi constituída para burlar a sanção que lhe fora aplicada, já que se constituíra por transformação da sociedade empresária Alegre S/A, com os mesmos sócios e dirigentes, mesmo patrimônio, igual endereço e idêntico objeto social. A sociedade empresária Alegre S/A, em decorrência de escândalo que envolvia pagamento de propina e fraudes em licitações, foi penalizada em diversos processos administrativos. Após os trâmites previstos na Lei nº 12.846/13 (Lei Anticorrupção Empresarial), diante do reconhecimento de haver praticado atos lesivos à Administração Pública, ela foi penalizada com a aplicação de multa e a declaração de inidoneidade para licitar ou contratar com a Administração Pública, pelo prazo de quatro anos. Diante dessa situação hipotética, assinale a afirmativa correta.",
  a: "A exclusão da sociedade empresária Feliz S/A da licitação em curso é legítima, pois, diante da transformação, subsiste a responsabilidade da sociedade Alegre S/A.",
  b: "O reconhecimento da responsabilização administrativa da sociedade empresária Alegre S/A, por ato lesivo contra a Administração Pública, dependia da comprovação do elemento subjetivo culpa.",
  c: "A penalização da sociedade empresária Alegre S/A impede a responsabilização individual de seus dirigentes; por isso, não pode ser estendida à sociedade Feliz S/A.",
  d: "A imposição da sanção de declaração de inidoneidade à sociedade empresária Alegre S/A deveria impedir a aplicação de multa por ato lesivo à Administração Pública pelos mesmos fatos, sob pena de bis in idem .",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "27"
},{
  pergunta: "Determinada empresa pública estadual, com vistas a realizar a aquisição de bens necessários para o adequado funcionamento de seus serviços de informática, divulgou, após a devida fase de preparação, o respectivo instrumento convocatório, no qual indicou certa marca, que é comercializada por diversos fornecedores, por considerá-la a única capaz de atender ao objeto do contrato, e adotou a sequência de fases previstas na lei de regência. No curso da licitação, a proposta apresentada pela sociedade empresária Beta foi considerada a melhor, mas a sociedade empresária Alfa considerou que houve um equívoco no julgamento e apresentou recurso administrativo para impugnar tal fato, antes da habilitação, que não foi aceito. Foi dado prosseguimento ao certame, com a inabilitação da sociedade Beta, de modo que a vencedora foi a sociedade empresária Sigma, consoante resultado homologado. Considerando o regime licitatório aplicável às empresas estatais e as circunstâncias do caso concreto, assinale a afirmativa correta.",
  a: "Existe vício insanável no instrumento convocatório, pois é vedada a indicação de marca, mesmo nas circunstâncias apontadas.",
  b: "A homologação foi equivocada, na medida em que a empresa pública não observou a sequência das fases previstas em lei ao efetuar o julgamento das propostas antes da habilitação.",
  c: "O recurso da sociedade Alfa foi apresentado em momento oportuno e a ele deveria ter sido conferido efeito suspensivo com a postergação da fase da habilitação.",
  d: "A homologação do resultado implica a constituição de direito relativo à celebração do contrato em favor da sociedade empresária Sigma.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "28"
},{
  pergunta: "Determinado Estado da Federação passa por grave problema devido à superlotação de sua população carcerária, tendo os órgãos de inteligência estatal verificado a possibilidade de rebelião e fuga dos apenados. Visando ao atendimento do princípio constitucional da dignidade da pessoa humana e tendo em vista a configurada situação de grave e iminente risco à segurança pública, o ente federativo instaurou processo administrativo e, em seguida, procedeu à contratação, mediante inexigibilidade de licitação, de certa sociedade empresária para a execução de obras de ampliação e reforma de seu principal estabelecimento penal. Diante das disposições da Lei nº 8.666/93, no que tange à obrigatoriedade de licitação, o Estado contratante agiu",
  a: "corretamente, diante da impossibilidade fática de licitação decorrente do iminente risco de rebelião e grave perturbação da ordem pública.",
  b: "corretamente, haja vista que, apesar de ser possível a licitação, seu demorado trâmite procedimental acarretaria risco à ordem social.",
  c: "erradamente, eis que as circunstâncias do caso concreto autorizariam a dispensa de licitação, observados os trâmites legais.",
  d: "erradamente, uma vez que a prévia licitação é obrigatória na espécie, diante das circunstâncias do caso concreto.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "29"
},{
  pergunta: "O mandato de João como dirigente de determinada agência reguladora federal terminou pelo decurso do prazo, em junho de 2019, sem sua recondução ao cargo. No mês seguinte, João recebeu vultosa e tentadora proposta de certa sociedade empresária para prestar serviço de consultoria na área do setor regulado pela citada agência. Levando em conta que a lei específica da agência em tela seguiu as normas gerais de gestão de recursos humanos das agências reguladoras previstas na Lei nº 9.986/00, João",
  a: "está impedido de aceitar a proposta, pois precisa cumprir quatro meses de quarentena, contados do término do seu mandato, período durante o qual ficará vinculado à agência, fazendo jus à remuneração compensatória equivalente à do cargo de direção que exerceu e aos benefícios a ele inerentes, sob pena de incorrer na prática de crime de advocacia administrativa.",
  b: "está impedido de aceitar a proposta, pois precisa cumprir noventa dias de quarentena, contados do término do seu mandato, período durante o qual não ficará vinculado à agência, nem fará jus a qualquer remuneração compensatória, sob pena de incorrer na prática de ato de improbidade administrativa.",
  c: "pode aceitar a proposta, desde que abra mão da remuneração compensatória equivalente à do cargo de direção que exerceu e aos benefícios a ele inerentes, que receberia durante noventa dias após o término de seu mandato, sob pena de incorrer na prática de enriquecimento ilícito.",
  d: "pode aceitar a proposta, inclusive acumulando sua nova remuneração da iniciativa privada com a remuneração compensatória equivalente à do cargo de direção que exerceu e aos benefícios a ele inerentes, a que faz jus durante noventa dias após o término de seu mandato.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "30"
},{
  pergunta: "José, servidor público federal ocupante exclusivamente de cargo em comissão, foi exonerado, tendo a autoridade competente motivado o ato em reiterado descumprimento da carga horária de trabalho pelo servidor. José obteve, junto ao departamento de recursos humanos, documento oficial com extrato de seu ponto eletrônico, comprovando o regular cumprimento de sua jornada de trabalho. Assim, o servidor buscou assistência jurídica junto a um advogado, que lhe informou corretamente, à luz do ordenamento jurídico, que",
  a: "não é viável o ajuizamento de ação judicial visando a invalidar o ato de exoneração, eis que o próprio texto constitucional estabelece que cargo em comissão é de livre nomeação e exoneração pela autoridade competente, que não está vinculada ou limitada aos motivos expostos para a prática do ato administrativo.",
  b: "não é viável o ajuizamento de ação judicial visando a invalidar o ato de exoneração, eis que tal ato é classificado como vinculado, no que tange à liberdade de ação do administrador público, razão pela qual o Poder Judiciário não pode se imiscuir no controle do mérito administrativo, sob pena de violação à separação dos Poderes.",
  c: "é viável o ajuizamento de ação judicial visando a invalidar o ato de exoneração, eis que, apesar de ser dispensável a motivação para o ato administrativo discricionário de exoneração, uma vez expostos os motivos que conduziram à prática do ato, estes passam a vincular a Administração Pública, em razão da teoria dos motivos determinantes.",
  d: "é viável o ajuizamento de ação judicial visando a invalidar o ato de exoneração, eis que, por se tratar de um ato administrativo vinculado, pode o Poder Judiciário proceder ao exame do mérito administrativo, a fim de aferir a conveniência e a oportunidade de manutenção do ato, em razão do princípio da inafastabilidade do controle jurisdicional.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "31"
},{
  pergunta: "Após comprar um terreno, Roberto iniciou a construção de sua casa, sem prévia licença, avançando para além dos limites de sua propriedade e ocupando parcialmente a via pública, inclusive com possibilidade de desabamento de parte da obra e risco à integridade dos pedestres. No regular exercício da fiscalização da ocupação do solo urbano, o poder público municipal, observadas as formalidades legais, valendo-se da prerrogativa de direito público que, calcada na lei, autoriza-o a restringir o uso e o gozo da liberdade e da propriedade privada em favor do interesse da coletividade, determinou que Roberto demolisse a parte irregular da obra. O poder administrativo que fundamentou a determinação do Município é o poder",
  a: "de hierarquia, e, pelo seu atributo da coercibilidade, o particular é obrigado a obedecer às ordens emanadas pelos agentes públicos, que estão em nível de superioridade hierárquica e podem usar meios indiretos de coerção para fazer valer a supremacia do interesse público sobre o privado.",
  b: "disciplinar, e o particular está sujeito às sanções impostas pela Administração Pública, em razão do atributo da imperatividade, desde que haja a prévia e imprescindível chancela por parte do Poder Judiciário.",
  c: "regulamentar, e os agentes públicos estão autorizados a realizar atos concretos para aplicar a lei, ainda que tenham que se valer do atributo da autoexecutoriedade, a fim de concretizar suas determinações, independentemente de prévia ordem judicial.",
  d: "de polícia, e a fiscalização apresenta duplo aspecto: um preventivo, por meio do qual os agentes públicos procuram impedir um dano social, e um repressivo, que, face à transgressão da norma de polícia, redunda na aplicação de uma sanção.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "32"
},{
  pergunta: "Renato, proprietário de terra rural inserida no Município X, pretende promover a queimada da vegetação existente para o cultivo de cana-de-açúcar. Assim, consulta seu advogado, indagando sobre a possibilidade da realização da queimada. Sobre o caso narrado, assinale a afirmativa correta.",
  a: "A queimada poderá ser autorizada pelo órgão estadual ambiental competente do SISNAMA, caso as peculiaridades dos locais justifiquem o emprego do fogo em práticas agropastoris ou florestais.",
  b: "A queimada poderá ser autorizada pelo órgão municipal ambiental competente, após audiência pública realizada pelo Município X no âmbito do SISNAMA.",
  c: "A queimada não pode ser realizada, constituindo, ainda, ato tipificado como crime ambiental caso a área esteja inserida em Unidade de Conservação.",
  d: "A queimada não dependerá de autorização, caso Renato comprove a manutenção da área mínima de cobertura de vegetação nativa, a título de reserva legal.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "33"
},{
  pergunta: "Pedro, proprietário de fazenda com grande diversidade florestal, decide preservar os recursos ambientais nela existentes, limitando, de forma perpétua, o uso de parcela de sua propriedade por parte de outros possuidores a qualquer título, o que realiza por meio de instrumento particular, averbado na matrícula do imóvel no registro de imóveis competente. Assinale a opção que indica o instrumento jurídico a que se refere o caso descrito.",
  a: "Zoneamento Ambiental.",
  b: "Servidão Ambiental.",
  c: "Área Ambiental Restrita.",
  d: "Área de Relevante Interesse Ecológico.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "34"
},{
  pergunta: "Joana doou a Renata um livro raro de Direito Civil, que constava da coleção de sua falecida avó, Marta. Esta, na condição de testadora, havia destinado a biblioteca como legado, em testamento, para sua neta, Joana (legatária). Renata se ofereceu para visitar a biblioteca, circunstância na qual se encantou com a coleção de clássicos franceses. Renata, então, ofereceu-se para adquirir, ao preço de R$ 1.000,00 (mil reais), todos os livros da coleção, oportunidade em que foi informada, por Joana, acerca da existência de ação que corria na Vara de Sucessões, movida pelos herdeiros legítimos de Marta. A ação visava impugnar a validade do testamento e, por conseguinte, reconhecer a ineficácia do legado (da biblioteca) recebido por Joana. Mesmo assim, Renata decidiu adquirir a coleção, pagando o respectivo preço. Diante de tais situações, assinale a afirmativa correta.",
  a: "Quanto aos livros adquiridos pelo contrato de compra e venda, Renata não pode demandar Joana pela evicção, pois sabia que a coisa era litigiosa.",
  b: "Com relação ao livro recebido em doação, Joana responde pela evicção, especialmente porque, na data da avença, Renata não sabia da existência de litígio.",
  c: "A informação prestada por Joana a Renata, acerca da existência de litígio sobre a biblioteca que recebeu em legado, deve ser interpretada como cláusula tácita de reforço da responsabilidade pela evicção.",
  d: "O contrato gratuito firmado entre Renata e Joana classifica-se como contrato de natureza aleatória, pois Marta soube posteriormente do risco da perda do bem pela evicção.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "35"
},{
  pergunta: "Vilmar, produtor rural, possui contratos de compra e venda de safra com diversos pequenos proprietários. Com o intuito de adquirir novos insumos, Vilmar procurou Geraldo, no intuito de adquirir sua safra, cuja expectativa de colheita era de cinco toneladas de milho, que, naquele momento, estava sendo plantado em sua fazenda. Como era a primeira vez que Geraldo contratava com Vilmar, ele ficou em dúvida quanto à estipulação do preço do contrato. Considerando a natureza aleatória do contrato, bem como a dúvida das partes a respeito da estipulação do preço deste, assinale a afirmativa correta.",
  a: "A estipulação do preço do contrato entre Vilmar e Geraldo pode ser deixada ao arbítrio exclusivo de uma das partes.",
  b: "Se Vilmar contratar com Geraldo a compra da colheita de milho, mas, por conta de uma praga inesperada, para cujo evento o agricultor não tiver concorrido com culpa, e este não conseguir colher nenhuma espiga, Vilmar não deverá lhe pagar nada, pois não recebeu o objeto contratado.",
  c: "Se Vilmar contratar com Geraldo a compra das cinco toneladas de milho, tendo sido plantado o exato número de sementes para cumprir tal quantidade, e se, apesar disso, somente forem colhidas três toneladas de milho, em virtude das poucas chuvas, Geraldo não receberá o valor total, em virtude da entrega em menor quantidade.",
  d: "A estipulação do preço do contrato entre Vilmar e Geraldo poderá ser deixada ao arbítrio de terceiro, que, desde logo, prometerem designar.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "36"
},{
  pergunta: "Lucas, interessado na aquisição de um carro seminovo, procurou Leonardo, que revende veículos usados. Ao final das tratativas, e para garantir que o negócio seria fechado, Lucas pagou a Leonardo um percentual do valor do veículo, a título de sinal. Após a celebração do contrato, porém, Leonardo informou a Lucas que, infelizmente, o carro que haviam negociado já havia sido prometido informalmente para um outro comprador, velho amigo de Leonardo, motivo pelo qual Leonardo não honraria a avença. Frustrado, diante do inadimplemento de Leonardo, Lucas procurou você, como advogado(a), para orientá-lo. Nesse caso, assinale a opção que apresenta a orientação dada.",
  a: "Leonardo terá de restituir a Lucas o valor pago a título de sinal, com atualização monetária, juros e honorários de advogado, mas não o seu equivalente.",
  b: "Leonardo terá de restituir a Lucas o valor pago a título de sinal, mais o seu equivalente, com atualização monetária, juros e honorários de advogado.",
  c: "Leonardo terá de restituir a Lucas apenas metade do valor pago a título de sinal, pois informou, tão logo quanto possível, que não cumpriria o contrato.",
  d: "Leonardo não terá de restituir a Lucas o valor pago a título de sinal, pois este é computado como início de pagamento, o qual se perde em caso de inadimplemento.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "37"
},{
  pergunta: "Juliana, Lorena e Júlia são filhas de Hermes, casado com Dóris. Recentemente, em razão de uma doença degenerativa, Hermes tornou-se paraplégico e começou a exigir cuidados maiores para a manutenção de sua saúde. Nesse cenário, Dóris e as filhas Juliana e Júlia se revezavam a fim de suprir as necessidades de Hermes, causadas pela enfermidade. Quanto a Lorena, esta deixou de visitar o pai após este perder o movimento das pernas, recusando-se a colaborar com a família, inclusive financeiramente. Diante desse contexto, Hermes procura você, como advogado(a), para saber quais medidas ele poderá tomar para que, após sua morte, seu patrimônio não seja transmitido a Lorena. Sobre o caso apresentado, assinale a afirmativa correta.",
  a: "A pretensão de Hermes não poderá ser concretizada segundo o Direito brasileiro, visto que o descendente, herdeiro necessário, não poderá ser privado de sua legítima pelo ascendente, em nenhuma hipótese.",
  b: "Não é necessário que Hermes realize qualquer disposição ainda em vida, pois o abandono pelos descendentes é causa legal de exclusão da sucessão do ascendente, por indignidade.",
  c: "Existe a possibilidade de deserdar o herdeiro necessário por meio de testamento, mas apenas em razão de ofensa física, injúria grave e relações ilicítas com madastra ou padrasto atribuídas ao descendente.",
  d: "É possível que Hermes disponha sobre deserdação de Lorena em testamento, indicando, expressamente, o seu desamparo em momento de grave enfermidade como causa que justifica esse ato.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "38"
},{
  pergunta: "Alberto, adolescente, obteve autorização de seus pais para casar-se aos dezesseis anos de idade com sua namorada Gabriela. O casal viveu feliz nos primeiros meses de casamento, mas, após certo tempo de convivência, começaram a ter constantes desavenças. Assim, a despeito dos esforços de ambos para que o relacionamento progredisse, os dois se divorciaram pouco mais de um ano após o casamento. Muito frustrado, Alberto decidiu reunir algumas economias e adquiriu um pacote turístico para viajar pelo mundo e tentar esquecer o ocorrido. Considerando que Alberto tinha dezessete anos quando celebrou o contrato com a agência de turismo e que o fez sem qualquer participação de seus pais, o contrato é",
  a: "válido, pois Alberto é plenamente capaz.",
  b: "nulo, pois Alberto é absolutamente incapaz.",
  c: "anulável, pois Alberto é relativamente incapaz.",
  d: "ineficaz, pois Alberto não pediu a anuência de Gabriela.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "39"	
},{
  pergunta: "Lucas, um grande industrial do ramo de couro, decidiu ajudar Pablo, seu amigo de infância, na abertura do seu primeiro negócio: uma pequena fábrica de sapatos. Lucas doou 50 prensas para a fábrica, mas Pablo achou pouco e passou a constantemente importunar o amigo com novas solicitações. Após sucessivos e infrutíferos pedidos de empréstimos de toda ordem, a relação entre os dois se desgasta a tal ponto que Pablo, totalmente fora de controle, atenta contra a vida de Lucas. Este, porém, sobrevive ao atentado e decide revogar a doação feita a Pablo. Ocorre que Pablo havia constituído penhor sobre as prensas, doadas por Lucas, para obter um empréstimo junto ao Banco XPTO, mas, para não interromper a produção, manteve as prensas em sua fábrica. Diante do exposto, assinale a afirmativa correta.",
  a: "Para a constituição válida do penhor, é necessário que as coisas empenhadas estejam em poder do credor. Como isso não ocorreu, o penhor realizado por Pablo é nulo.",
  b: "Tendo em vista que o Banco XPTO figura como terceiro de má-fé, a realização do penhor é causa impeditiva da revogação da doação feita por Lucas.",
  c: "Como causa superveniente da resolução da propriedade de Pablo, a revogação da doação operada por Lucas não interfere no direito de garantia dado ao Banco XPTO.",
  d: "Em razão da tentativa de homicídio, a revogação da doação é automática, razão pela qual os direitos adquiridos pelo Banco XPTO resolvem-se junto com a propriedade de Pablo.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "40"
},{
  pergunta: "Arnaldo, publicitário, é casado com Silvana, advogada, sob o regime de comunhão parcial de bens. Silvana sempre considerou diversificar sua atividade profissional e pensa em se tornar sócia de uma sociedade empresária do ramo de tecnologia. Para realizar esse investimento, pretende vender um apartamento adquirido antes de seu casamento com Arnaldo; este, mais conservador na área negocial, não concorda com a venda do bem para empreender. Sobre a situação descrita, assinale a afirmativa correta.",
  a: "Silvana não precisa de autorização de Arnaldo para alienar o apartamento, pois destina-se ao incremento da renda familiar.",
  b: "A autorização de Arnaldo para alienação por Silvana é necessária, por conta do regime da comunhão parcial de bens.",
  c: "Silvana não precisa de autorização de Arnaldo para alienar o apartamento, pois se trata de bem particular.",
  d: "A autorização de Arnaldo para alienação por Silvana é necessária e decorre do casamento, independentemente do regime de bens.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "41"
},{
  pergunta: "Roberta produziu, em seu computador, vídeo de animação em que se percebe a simulação de atos pornográficos entre crianças. O vídeo não mostra nenhuma imagem reconhecível, nenhuma pessoa identificável, mas apresenta, inequivocamente, figuras de crianças, e bem jovens. Sobre o fato apresentado, sob a perspectiva do Estatuto da Criança e do Adolescente, assinale a afirmativa correta.",
  a: "Não é ilícito penal: o crime ocorre quando se simula a atividade pornográfica com imagens reais de crianças.",
  b: "É crime, pois o Estatuto da Criança e do Adolescente prevê a conduta típica de simular a participação de criança ou adolescente em cena pornográfica por meio de qualquer forma de representação visual.",
  c: "É crime se houver a divulgação pública do filme, pois a mera produção de filme envolvendo simulacro de imagem de criança ou adolescente em situação pornográfica não é reprovada pelo Estatuto da Criança e do Adolescente.",
  d: "Não é ilícito penal, pois a animação somente se afigura como simulação suficientemente apta a despertar a reprovabilidade criminal se reproduzir a imagem real de alguma criança diretamente identificável.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "42"
},{
  pergunta: "Pedro, 16 anos, foi apreendido em flagrante quando subtraía um aparelho de som de uma loja. Questionado sobre sua família, disse não ter absolutamente nenhum familiar conhecido. Encaminhado à autoridade competente, foi-lhe designado defensor dativo, diante da completa carência de pessoas que por ele pudessem responder. Após a prática dos atos iniciais, Pedro requereu ao juiz a substituição do seu defensor por um advogado conhecido, por não ter se sentido bem assistido tecnicamente, não confiando no representante originariamente designado. Com base nessa narrativa, assinale a afirmativa correta.",
  a: "É direito do adolescente ter seu defensor substituído por outro de sua preferência, uma vez que não deposita confiança no que lhe foi designado.",
  b: "A defesa técnica deve permanecer incumbida ao defensor atualmente designado, pois não é facultado ao adolescente optar por sua substituição.",
  c: "O processo deve ser suspenso, adiando-se os atos até que seja solucionada a questão da representação do adolescente.",
  d: "A substituição somente deverá ser realizada se evidenciada imperícia técnica, não podendo a mera preferência do adolescente ser motivo para a substituição.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "43"
},{
  pergunta: "Durante período de intenso calor, o Condomínio do Edifício X, por seu representante, adquiriu, junto à sociedade empresária Equipamentos Aquáticos, peças plásticas recreativas próprias para uso em piscinas, produzidas com material atóxico. Na primeira semana de uso, os produtos soltaram gradualmente sua tinta na vestimenta dos usuários, o que gerou apenas problema estético, na medida em que a pigmentação era atóxica e podia ser removida facilmente das roupas dos usuários por meio de uso de sabão. O Condomínio do Edifício X, por seu representante, procurou você, como advogado(a), buscando orientação para receber de volta o valor pago e ser indenizado pelos danos morais suportados. Nesse caso, cuida-se de",
  a: "fato do produto, sendo excluída a responsabilidade civil da sociedade empresária, respondendo pelo evento o fabricante das peças; não cabe indenização por danos extrapatrimoniais, por ser o Condomínio pessoa jurídica, que não sofre essa modalidade de dano.",
  b: "inaplicabilidade do CDC, haja vista a natureza da relação jurídica estabelecida entre o Condomínio e a sociedade empresária, cabendo a responsabilização civil com base nas regras gerais de Direito Civil, e incabível pleitear indenização por danos morais, por ter o Condomínio a qualidade de pessoa jurídica.",
  c: "aplicabilidade do CDC somente por meio de medida de defesa coletiva dos condôminos, cuja legitimidade será exercida pelo Condomínio, na defesa dos interesses a título coletivo.",
  d: "vício do produto, sendo solidária a responsabilidade da sociedade empresária e do fabricante das peças; o Condomínio do Edifício X é parte legítima para ingressar individualmente com a medida judicial por ser consumidor, segundo a teoria finalista mitigada.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "44"
},{
  pergunta: "O Ministério Público ajuizou ação coletiva em face de Vaquinha Laticínios , em função do descumprimento de normas para o transporte de alimentos lácteos. A sentença condenou a ré ao pagamento de indenização a ser revertida em favor de um fundo específico, bem como a indenizar os consumidores genericamente considerados, além de determinar a publicação da parte dispositiva da sentença em jornais de grande circulação, a fim de que os consumidores tomassem ciência do ato judicial. João, leitor de um dos jornais, procurou você como advogado(a) para saber de seus direitos, uma vez que era consumidor daqueles produtos. Nesse caso, à luz do Código do Consumidor, trata-se de hipótese",
  a: "de interesse difuso; por esse motivo, as indenizações pelos prejuízos individuais de João perderão preferência no concurso de crédito frente às condenações decorrentes das ações civis públicas derivadas do mesmo evento danoso.",
  b: "de interesses individuais homogêneos; nesses casos, tem-se, por inviável, a liquidação e execução individual, devendo João aguardar que o Ministério Público, autor da ação, receba a verba indenizatória genérica para, então, habilitar-se como interessado junto ao referido órgão.",
  c: "de interesses coletivos; em razão disso, João poderá liquidar e executar a sentença individualmente, mas o mesmo direito não poderia ser exercido por seus sucessores, sendo inviável a sucessão processual na hipótese.",
  d: "de interesses individuais homogêneos; João pode, em legitimidade originária ou por seus sucessores, por meio de processo de liquidação, provar a existência do seu dano pessoal e do nexo causal, a fim de quantificá-lo e promover a execução.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "45"
},{
  pergunta: "Determinadas pessoas naturais, em razão de sua atividade profissional, e certas espécies de pessoas jurídicas, todas devidamente registradas no órgão competente, gozam de tratamento simplificado, favorecido e diferenciado em relação aos demais agentes econômicos – microempresas e empresas de pequeno porte. De acordo com a Lei Complementar nº 123, de 14 de dezembro de 2006, as microempresas e as empresas de pequeno porte, quanto à forma jurídica, são",
  a: "cooperativa de produção, empresário individual, empresa pública e sociedade limitada.",
  b: "empresário individual, empresa individual de responsabilidade limitada, sociedade simples e sociedade empresária, exceto por ações.",
  c: "cooperativa de crédito, empresário individual, empresa individual de responsabilidade limitada e sociedade simples.",
  d: "empresário individual, profissional liberal, empresa Individual de responsabilidade limitada e sociedade por ações.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "46"
},{
  pergunta: "Nos contratos de comissão, corretagem e agência, é dever do corretor, do comissário e do agente atuar com toda diligência, atendo-se às instruções recebidas da parte interessada. Apesar dessa característica comum, cada contrato conserva sua tipicidade em razão de seu modus operandi . A esse respeito, assinale a afirmativa correta.",
  a: "O agente pratica, em nome próprio, os atos a ele incumbidos à conta do proponente; o comissário não pode tomar parte – sequer como mandatário – nos negócios que vierem a ser celebrados em razão de sua intermediação; o corretor pode receber poderes do cliente para representá-lo na conclusão dos contratos.",
  b: "O comissário pratica, em nome próprio, os atos a ele incumbidos à conta do comitente; o corretor não pode tomar parte – sequer como mandatário – nos negócios que vierem a ser celebrados em razão de sua mediação; o agente pode receber poderes do proponente para representá-lo na conclusão dos contratos.",
  c: "O corretor pratica, em nome próprio, os atos a ele incumbidos à conta do cliente; o agente não pode tomar parte – sequer como mandatário – nos negócios que vierem a ser celebrados no interesse do proponente; o comissário pode receber poderes do comitente para representá-lo na conclusão dos contratos.",
  d: "Tanto o comissário quanto o corretor praticam, em nome próprio, os atos a eles incumbidos pelo comitente ou cliente, mas o primeiro tem sua atuação restrita à zona geográfica fixada no contrato; o agente deve atuar com exclusividade tão somente na mediação para realização de negócios em favor do proponente.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "47"
},{
  pergunta: "Além da impontualidade, a falência pode ser decretada pela prática de atos de falência por parte do devedor empresário individual ou dos administradores da sociedade empresária. Assinale a opção que constitui um ato de falência por parte do devedor.",
  a: "Deixar de pagar, no vencimento, obrigação líquida materializada em título executivo protestado por falta de pagamento, cuja soma ultrapasse o equivalente a 40 (quarenta) salários mínimos na data do pedido de falência.",
  b: "Transferir, durante a recuperação judicial, estabelecimento a terceiro sem o consentimento de todos os credores e sem ficar com bens suficientes para solver seu passivo, em cumprimento à disposição de plano de recuperação.",
  c: "Não pagar, depositar ou nomear à penhora, no prazo de 3 (três) dias, contados da citação, bens suficientes para garantir a execução.",
  d: "Deixar de cumprir, no prazo estabelecido, obrigação assumida no plano de recuperação judicial, após o cumprimento de todas as obrigações previstas no plano que vencerem até dois anos depois da concessão da recuperação judicial.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "48"
},{
  pergunta: "Amambaí Inovação e Engenharia S/A obteve, junto ao Instituto Nacional da Propriedade Industrial (INPI), patente de invenção no ano de 2013. Dois anos após, chegou ao conhecimento dos administradores a prática de atos violadores de direitos de patente. No entanto, a ação para reparação de dano causado ao direito de propriedade industrial só foi intentada no ano de 2019. Você é consultado(a), como advogado(a), sobre o caso. Assinale a opção que apresenta seu parecer.",
  a: "A reparação do dano causado pode ser pleiteada, porque o direito de patente é protegido por 20 (vinte) anos, a contar da data do depósito.",
  b: "A pretensão indenizatória, na data da propositura da ação, encontrava-se prescrita, em razão do decurso de mais de 3 (três) anos.",
  c: "A pretensão indenizatória, na data da propositura da ação, não se encontrava prescrita porque o prazo de 5 (cinco) anos não havia se esgotado.",
  d: "A reparação do dano causado não pode ser pleiteada, porque a patente concedida não foi objeto de licenciamento pelo seu titular.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "49"
},{
  pergunta: "Rolim Crespo, administrador da sociedade Indústrias Reunidas Novo Horizonte do Oeste Ltda. , consultou sua advogada para lhe prestar orientação quanto à inserção de cláusula compromissória em um contrato que a pessoa jurídica pretende celebrar com uma operadora de planos de saúde empresariais. Pela leitura da proposta, verifica-se que não há margem para a negociação das cláusulas, por tratar-se de contrato padronizado, aplicado a todos os aderentes. Quanto à cláusula compromissória inserida nesse contrato, assinale a opção que apresenta a orientação dada pela advogada.",
  a: "É necessária a concordância expressa e por escrito do aderente com a sua instituição, em documento anexo ou em negrito, com a assinatura ou o visto para essa cláusula.",
  b: "É nula de pleno direito, por subtrair do aderente o direito fundamental de acesso à justiça, e o contrato não deve ser assinado.",
  c: "Somente será eficaz se o aderente tomar a iniciativa de instituir a arbitragem, e, como a iniciativa foi do proponente e unilateral, ela é nula.",
  d: "Somente será eficaz se houver a assinatura do aderente no contrato, vedada qualquer forma de manifestação da vontade em documento anexo ou, simplesmente, com o visto para essa cláusula.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "50"
},{
  pergunta: "Carolina foi citada para comparecer com seu advogado ao Centro Judiciário de Solução de Conflitos (CEJUSC) da comarca da capital, para Audiência de Mediação (Art. 334 do CPC), interessada em restabelecer o diálogo com Nestor, seu ex-marido. O fato de o advogado de seu ex-cônjuge conversar intimamente com o mediador Teófilo, que asseverava ter celebrado cinco acordos na qualidade de mediador na última semana, retirou sua concentração e a deixou desconfiada da lisura daquela audiência. Não tendo sido possível o acordo nessa primeira oportunidade, foi marcada uma nova sessão de mediação para buscar a composição entre as partes, quinze dias mais tarde. Sobre o caso narrado, assinale a afirmativa correta.",
  a: "Carolina pode comparecer sem seu advogado na próxima sessão de mediação.",
  b: "O advogado só pode atuar como mediador no CEJUSC se realizar concurso público específico para integrar quadro próprio do tribunal.",
  c: "Pode haver mais de uma sessão destinada à conciliação e à mediação, não podendo exceder 2 (dois) meses da data de realização da primeira sessão, desde que necessária(s) à composição das partes.",
  d: "O mediador judicial pode atuar como advogado da parte no CEJUSC, pois o CPC apenas impede o exercício da advocacia nos juízos em que desempenhe suas funções.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "51"
},{
  pergunta: "João dirigia seu carro a caminho do trabalho quando, ao virar em uma esquina, foi atingido por Fernando, que seguia na faixa ao lado. Diante dos danos ocasionados a seu veículo, João ingressou com ação, junto a uma Vara Cível, em face de Fernando, alegando que este trafegava pela faixa que teria como caminho obrigatório a rua para onde aquele seguiria. Realizada a citação, Fernando procurou seu advogado, alegando que, além de oferecer sua defesa nos autos daquele processo, gostaria de formular pedido contra João, uma vez que este teria invadido a faixa sem antes acionar a “seta”, sendo, portanto, o verdadeiro culpado pelo acidente. Considerando o caso narrado, o advogado de Fernando deve",
  a: "instruí-lo a ajuizar nova ação, uma vez que não é possível formular pedido contra quem deu origem ao processo.",
  b: "informar-lhe que poderá, na contestação, propor reconvenção para manifestar pretensão própria, sendo desnecessária a conexão com a ação principal ou com o fundamento da defesa, bastando a identidade das partes.",
  c: "informar-lhe sobre a possibilidade de propor a reconvenção, advertindo-o, porém, que, caso João desista da ação, a reconvenção restará prejudicada.",
  d: "informar-lhe que poderá, na contestação, propor reconvenção para manifestar pretensão própria, desde que conexa com a ação principal ou com o fundamento da defesa.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "52"
},{
  pergunta: "Um advogado, com estudos apurados em torno das regras do CPC, resolve entrar em contato com o patrono da parte adversa de um processo em que atua. Sua intenção é tentar um saneamento compartilhado do processo. Diante disso, acerca das situações que autorizam a prática de negócios jurídicos processuais, assinale a afirmativa correta.",
  a: "As partes poderão apresentar ao juiz a delimitação consensual das questões de fato e de direito da demanda litigiosa.",
  b: "As partes não poderão, na fase de saneamento, definir a inversão consensual do ônus probatório, uma vez que a regra sobre produção de provas é matéria de ordem pública.",
  c: "As partes poderão abrir mão do princípio do contraditório consensualmente de forma integral, em prol do princípio da duração razoável do processo.",
  d: "As partes poderão afastar a audiência de instrução e julgamento, mesmo se houver provas orais a serem produzidas no feito e que sejam essenciais à solução da controvérsia.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "53"
},{
  pergunta: "Daniel, sensibilizado com a necessidade de Joana em alugar um apartamento, disponibiliza-se a ser seu fiador no contrato de locação, fazendo constar nele cláusula de benefício de ordem. Um ano e meio após a assinatura do contrato, Daniel é citado em ação judicial visando à cobrança de aluguéis atrasados. Ciente de que Joana possui bens suficientes para fazer frente à dívida contraída, Daniel consulta você, como advogado(a), sobre a possibilidade de Joana também figurar no polo passivo da ação. Diante do caso narrado, assinale a opção que apresenta a modalidade de intervenção de terceiros a ser arguida por Daniel em sua contestação.",
  a: "Assistência.",
  b: "Denunciação da lide.",
  c: "Chamamento ao processo.",
  d: "Nomeação à autoria.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "54"
},{
  pergunta: "Cláudio, em face da execução por título extrajudicial que lhe moveu Daniel, ajuizou embargos à execução, os quais foram julgados improcedentes. O advogado de Cláudio, inconformado, interpõe recurso de apelação. Uma semana após a interposição do referido recurso, o advogado de Daniel requer a penhora de um automóvel pertencente a Cláudio. Diante do caso concreto e considerando que o juízo não concedeu efeito suspensivo aos embargos, assinale a afirmativa correta.",
  a: "A penhora foi indevida, tendo em vista que os embargos à execução possuem efeito suspensivo decorrente de lei.",
  b: "O recurso de apelação interposto por Cláudio é dotado de efeito suspensivo por força de lei, tornando a penhora incorreta.",
  c: "A apelação interposta em face de sentença que julga improcedentes os embargos à execução é dotada de efeito meramente devolutivo, o que não impede a prática de atos de constrição patrimonial, tal como a penhora.",
  d: "O recurso de apelação não deve ser conhecido, pois o pronunciamento judicial que julga os embargos do executado tem natureza jurídica de decisão interlocutória, devendo ser impugnada por meio de agravo de instrumento.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "55"
},{
  pergunta: "A Associação “X”, devidamente representada por seu advogado, visando à proteção de determinados interesses coletivos, propôs ação civil pública, cujos pedidos foram julgados improcedentes. Ademais, a associação foi condenada ao pagamento de honorários advocatícios no percentual de 20% (vinte por cento) sobre o valor da causa. Diante de tal quadro, especificamente sobre os honorários advocatícios, a sentença está",
  a: "correta no que se refere à possibilidade de condenação ao pagamento de honorários e, incorreta, no que tange ao respectivo valor, porquanto fixado fora dos parâmetros estabelecidos pelo Art. 85 do CPC.",
  b: "incorreta, pois as associações não podem ser condenadas ao pagamento de honorários advocatícios, exceto no caso de litigância de ma-fé, no âmbito da tutela individual e coletiva.",
  c: "correta, pois o juiz pode fixar os honorários de acordo com seu prudente arbítrio, observados os parâmetros do Art. 85 do CPC.",
  d: "incorreta, pois as associações são isentas do pagamento de honorários advocatícios em ações civis públicas, exceto no caso de má-fé, hipótese em que também serão condenadas ao pagamento do décuplo das custas.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "56"
},{
  pergunta: "O edifício Vila Real ajuizou ação de execução das contribuições de condomínio em atraso em face de Paper & Paper Ltda ., proprietária da unidade 101. Citada a ré em janeiro de 2018, não houve o pagamento da dívida e, preenchidos os requisitos legais para tanto, houve a desconsideração da personalidade jurídica da devedora, a fim de que seus sócios Ana e Guilherme, casados, fossem citados, o que ocorreu em dezembro de 2018. Posteriormente, o condomínio exequente identificou que Ana e Guilherme venderam a Consuelo um imóvel de sua propriedade, em julho de 2018. Considerando que a execução em tela é capaz de reduzir à insolvência de Paper & Paper Ltda . e que não foram localizados bens penhoráveis de Ana e Guilherme, assinale a afirmativa correta.",
  a: "A alienação realizada por Ana e Guilherme configura fraude à execução, e deverá ser reconhecida independentemente da intimação de Consuelo.",
  b: "A alienação realizada por Ana e Guilherme configura fraude à execução e seu reconhecimento não pode se dar antes da intimação de Consuelo, que poderá opor embargos de terceiro.",
  c: "A alienação realizada por Ana e Guilherme não configura fraude à execução, pois realizada antes da citação dos sócios.",
  d: "A alienação realizada por Ana e Guilherme não configura fraude à execução, uma vez que a insolvência atingiria apenas a devedora original, e não os sócios.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "57"
},{
  pergunta: "Gabriel foi condenado pela prática de um crime de falso testemunho, sendo-lhe aplicada a pena de 03 anos de reclusão, em regime inicial aberto, substituída a pena privativa de liberdade por duas restritivas de direitos (prestação de serviços à comunidade e limitação de final de semana). Após cumprir o equivalente a 01 ano da pena aplicada, Gabriel deixa de cumprir a prestação de serviços à comunidade. Ao ser informado sobre tal situação pela entidade beneficiada, o juiz da execução, de imediato, converte a pena restritiva de direitos em privativa de liberdade, determinando o cumprimento dos 03 anos da pena imposta em regime semiaberto, já que Gabriel teria demonstrado não preencher as condições para cumprimento de pena em regime aberto. Para impugnar a decisão, o(a) advogado(a) de Gabriel deverá alegar que a conversão da pena restritiva de direitos em privativa de liberdade",
  a: "foi válida, mas o regime inicial a ser observado é o aberto, fixado na sentença, e não o semiaberto.",
  b: "foi válida, inclusive sendo possível ao magistrado determinar a regressão ao regime semiaberto, restando a Gabriel cumprir apenas 02 anos de pena privativa de liberdade, pois os serviços à comunidade já prestados são considerados pena cumprida.",
  c: "não foi válida, pois o descumprimento da prestação de serviços à comunidade não é causa a justificar a conversão em privativa de liberdade.",
  d: "não foi válida, pois, apesar de possível a conversão em privativa de liberdade pelo descumprimento da prestação de serviços à comunidade, deveria o apenado ser previamente intimado para justificar o descumprimento.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "58"
},{
  pergunta: "Enquanto assistia a um jogo de futebol em um bar, Francisco começou a provocar Raul, dizendo que seu clube, que perdia a partida, seria rebaixado. Inconformado com a indevida provocação, Raul, que estava acompanhado de um cachorro de grande porte, atiça o animal a atacar Francisco, o que efetivamente acontece. Na tentativa de se defender, Francisco desfere uma facada no cachorro de Raul, o qual vem a falecer. O fato foi levado à autoridade policial, que instaurou inquérito para apuração. Francisco, então, contrata você, na condição de advogado(a), para patrocinar seus interesses. Considerando os fatos narrados, com relação à conduta praticada por Francisco, você, como advogado(a), deverá esclarecer que seu cliente",
  a: "não poderá alegar qualquer excludente de ilicitude, em razão de sua provocação anterior.",
  b: "atuou escorado na excludente de ilicitude da legítima defesa.",
  c: "praticou conduta atípica, pois a vida do animal não é protegida penalmente.",
  d: "atuou escorado na excludente de ilicitude do estado de necessidade.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "59"
},{
  pergunta: "Mário trabalhava como jardineiro na casa de uma família rica, sendo tratado por todos como um funcionário exemplar, com livre acesso a toda a residência, em razão da confiança estabelecida. Certo dia, enfrentando dificuldades financeiras, Mário resolveu utilizar o cartão bancário de seu patrão, Joaquim, e, tendo conhecimento da respectiva senha, promoveu o saque da quantia de R$ 1.000,00 (mil reais). Joaquim, ao ser comunicado pelo sistema eletrônico do banco sobre o saque feito em sua conta, efetuou o bloqueio do cartão e encerrou sua conta. Sem saber que o cartão se encontrava bloqueado e a conta encerrada, Mário tentou novo saque no dia seguinte, não obtendo êxito. De posse das filmagens das câmeras de segurança do banco, Mário foi identificado como o autor dos fatos, tendo admitido a prática delitiva. Preocupado com as consequências jurídicas de seus atos, Mário procurou você, como advogado(a), para esclarecimentos em relação à tipificação de sua conduta. Considerando as informações expostas, sob o ponto de vista técnico, você, como advogado(a) de Mário, deverá esclarecer que sua conduta configura",
  a: "os crimes de furto simples consumado e de furto simples tentado, na forma continuada.",
  b: "os crimes de furto qualificado pelo abuso de confiança consumado e de furto qualificado pelo abuso de confiança tentado, na forma continuada.",
  c: "um crime de furto qualificado pelo abuso de confiança consumado, apenas.",
  d: "os crimes de furto qualificado pelo abuso de confiança consumado e de furto qualificado pelo abuso de confiança tentado, em concurso material.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "60"
},{
  pergunta: "Regina dá à luz seu primeiro filho, Davi. Logo após realizado o parto, ela, sob influência do estado puerperal, comparece ao berçário da maternidade, no intuito de matar Davi. No entanto, pensando tratar-se de seu filho, ela, com uma corda, asfixia Bruno, filho recém-nascido do casal Marta e Rogério, causando-lhe a morte. Descobertos os fatos, Regina é denunciada pelo crime de homicídio qualificado pela asfixia com causa de aumento de pena pela idade da vítima. Diante dos fatos acima narrados, o(a) advogado(a) de Regina, em alegações finais da primeira fase do procedimento do Tribunal do Júri, deverá requerer",
  a: "o afastamento da qualificadora, devendo Regina responder pelo crime de homicídio simples com causa de aumento, diante do erro de tipo.",
  b: "a desclassificação para o crime de infanticídio, diante do erro sobre a pessoa, não podendo ser reconhecida a agravante pelo fato de quem se pretendia atingir ser descendente da agente.",
  c: "a desclassificação para o crime de infanticídio, diante do erro na execução ( aberratio ictus ), podendo ser reconhecida a agravante de o crime ser contra descendente, já que são consideradas as características de quem se pretendia atingir.",
  d: "a desclassificação para o crime de infanticídio, diante do erro sobre a pessoa, podendo ser reconhecida a agravante de o crime ser contra descendente, já que são consideradas as características de quem se pretendia atingir.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "61"
},{
  pergunta: "Durante ação penal em que Guilherme figura como denunciado pela prática do crime de abandono de incapaz ( Pena: detenção, de 6 meses a 3 anos ), foi instaurado incidente de insanidade mental do acusado, constatando o laudo que Guilherme era, na data dos fatos (e permanecia até aquele momento), inteiramente incapaz de entender o caráter ilícito do fato, em razão de doença mental. Não foi indicado, porém, qual seria o tratamento adequado para Guilherme. Durante a instrução, os fatos imputados na denúncia são confirmados, assim como a autoria e a materialidade delitiva. Considerando apenas as informações expostas, com base nas previsões do Código Penal, no momento das alegações finais, a defesa técnica de Guilherme, sob o ponto de vista técnico, deverá requerer",
  a: "a absolvição imprópria, com aplicação de medida de segurança de tratamento ambulatorial, podendo a sentença ser considerada para fins de reincidência no futuro.",
  b: "a absolvição própria, sem aplicação de qualquer sanção, considerando a ausência de culpabilidade.",
  c: "a absolvição imprópria, com aplicação de medida de segurança de tratamento ambulatorial, não sendo a sentença considerada posteriormente para fins de reincidência.",
  d: "a absolvição imprópria, com aplicação de medida de segurança de internação pelo prazo máximo de 02 anos, não sendo a sentença considerada posteriormente para fins de reincidência.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "62"
},{
  pergunta: "Zélia, professora de determinada escola particular, no dia 12 de setembro de 2019, presencia, em via pública, o momento em que Luiz, nascido em 20 de dezembro de 2012, adota comportamento extremamente mal-educado e pega brinquedos de outras crianças que estavam no local. Insatisfeita com a omissão da mãe da criança, sentindo-se na obrigação de intervir por ser professora, mesmo sem conhecer Luiz anteriormente, Zélia passa a, mediante grave ameaça, desferir golpes com um pedaço de madeira na mão de Luiz, como forma de lhe aplicar castigo pessoal, causando-lhe intenso sofrimento físico e mental. Descobertos os fatos, foi instaurado inquérito policial. Nele, Zélia foi indiciada pelo crime de tortura com a causa de aumento em razão da idade da vítima. Após a instrução, confirmada a integralidade dos fatos, a ré foi condenada nos termos da denúncia, reconhecendo o magistrado, ainda, a presença da agravante em razão da idade de Luiz. Considerando apenas as informações expostas, a defesa técnica de Zélia, no momento da apresentação da apelação, poderá, sob o ponto de vista técnico, requerer",
  a: "a absolvição de Zélia do crime imputado, pelo fato de sua conduta não se adequar à figura típica do crime de tortura.",
  b: "a absolvição de Zélia do delito de tortura, com fundamento na causa de exclusão da ilicitude do exercício regular do direito, em que pese a conduta seja formalmente típica em relação ao crime imputado.",
  c: "o afastamento da causa de aumento de pena em razão da idade da vítima, restando apenas a agravante com o mesmo fundamento, apesar de não ser possível pugnar pela absolvição em relação ao crime de tortura.",
  d: "o afastamento da agravante em razão da idade da vítima, sob pena de configurar bis in idem , já que não é possível requerer a absolvição do crime de tortura majorada.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "63"
},{
  pergunta: "O advogado de Josefina, ré em processo criminal, entendendo que, entre o recebimento da denúncia e o término da instrução, ocorreu a prescrição da pretensão punitiva estatal, apresentou requerimento, antes mesmo do oferecimento de alegações finais, de reconhecimento da extinção da punibilidade da agente, sendo o pedido imediatamente indeferido pelo magistrado. Intimado, caberá ao(à) advogado(a) de Josefina, discordando da decisão, apresentar",
  a: "recurso em sentido estrito, no prazo de 5 dias.",
  b: "recurso de apelação, no prazo de 5 dias.",
  c: "carta testemunhável, no prazo de 48h.",
  d: "reclamação constitucional, no prazo de 15 dias.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "64"
},{
  pergunta: "Rogério foi denunciado pela prática de um crime de homicídio qualificado por fatos que teriam ocorrido em 2017. Após regular citação e apresentação de resposta à acusação, Rogério decide não comparecer aos atos do processo, apesar de regularmente intimado, razão pela qual foi decretada sua revelia. Em audiência realizada na primeira fase do procedimento do Tribunal do Júri, sem a presença de Rogério, mas tão só de sua defesa técnica, foi proferida decisão de pronúncia. Rogério mudou-se e não informou ao juízo o novo endereço, não sendo localizado para ser pessoalmente intimado dessa decisão, ocorrendo, então, a intimação por edital. Posteriormente, a ação penal teve regular prosseguimento, sem a participação do acusado, sendo designada data para realização da sessão plenária. Ao tomar conhecimento desse fato por terceiros, Rogério procura seu advogado para esclarecimentos, informando não ter interesse em comparecer à sessão plenária. Com base apenas nas informações narradas, o advogado de Rogério deverá esclarecer que",
  a: "o processo e o curso do prazo prescricional, diante da intimação por edital, deveriam ficar suspensos.",
  b: "a intimação da decisão de pronúncia por edital não é admitida pelo Código de Processo Penal.",
  c: "o julgamento em sessão plenária do Tribunal do Júri, na hipótese, poderá ocorrer mesmo sem a presença do réu.",
  d: "a revelia gerou presunção de veracidade dos fatos e a intimação foi válida, mas a presença do réu é indispensável para a realização da sessão plenária do Tribunal do Júri.",
  certo: "c",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "65"
},{
  pergunta: "Fred foi denunciado e condenado, em primeira instância, pela prática de crime de corrupção ativa, sendo ele e seu advogado intimados do teor da sentença no dia 05 de junho de 2018, terça-feira. A juntada do mandado de intimação do réu ao processo, todavia, somente ocorreu em 11 de junho de 2018, segunda-feira. Considerando as informações narradas, o prazo para interposição de recurso de apelação pelo advogado de Fred, de acordo com a jurisprudência dos Tribunais Superiores, será iniciado",
  a: "no dia seguinte à juntada do mandado de intimação (12/06/18), devendo a data final do prazo ser prorrogada para o primeiro dia útil seguinte, caso se encerre no final de semana.",
  b: "no dia da juntada do mandado de intimação (11/06/18), devendo ser cumprido até o final do prazo de 05 dias previsto em lei, ainda que este ocorra no final de semana.",
  c: "no dia da intimação (05/06/18), independentemente da data da juntada do mandado, devendo ser cumprido até o final do prazo de 05 dias previsto em lei, ainda que este ocorra no final de semana.",
  d: "no dia seguinte à intimação (06/06/18), independentemente da data da juntada do mandado, devendo a data final do prazo ser prorrogada para o primeiro dia útil seguinte, caso se encerre no final de semana.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "66"
},{
  pergunta: "Enquanto cumpria pena em regime fechado, Antônio trabalhava na unidade prisional de maneira regular. Após progressão para o regime semiaberto, o apenado passou a estudar por meio de metodologia de ensino a distância, devidamente certificado pelas autoridades educacionais. Com a obtenção de livramento condicional, passou a frequentar curso de educação profissional. Ocorre que havia contra Antônio procedimento administrativo disciplinar em que se investigava a prática de falta grave durante o cumprimento da pena em regime semiaberto, sendo, após observância de todas as formalidades legais, reconhecida a prática da falta grave. Preocupado, Antônio procura seu advogado para esclarecimentos sobre o tempo de pena que poderá ser remido e as consequências do reconhecimento da falta grave. Considerando as informações narradas, o advogado de Antônio deverá esclarecer que",
  a: "o trabalho na unidade prisional e o estudo durante cumprimento de pena em regime semiaberto justificam a remição da pena, mas não o curso frequentado durante livramento condicional, sendo certo que a falta grave permite perda de parte dos dias remidos.",
  b: "o trabalho somente quando realizado em regime fechado ou semiaberto justifica a remição de pena, mas o estudo a distância e a frequência ao curso poderão gerar remição mesmo no regime aberto ou durante livramento condicional, podendo a punição por falta grave gerar perda de parte dos dias remidos.",
  c: "o reconhecimento de falta grave não permite a perda dos dias remidos com o trabalho na unidade e a frequência a curso em regime semiaberto, mas tão só a regressão do regime de cumprimento da pena.",
  d: "o tempo remido exclusivamente com o trabalho em regime fechado, mas não com o estudo, será computado como pena cumprida, para todos os efeitos, mas, diante da falta grave, poderá haver perda de todos os dias remidos anteriormente.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "67"
},{
  pergunta: "Após uma partida de futebol amador, realizada em 03/05/2018, o atleta André se desentendeu com jogadores da equipe adversária. Ao final do jogo, dirigiu-se ao estacionamento e encontrou, em seu carro, um bilhete anônimo, em que constavam diversas ofensas à sua honra. Em 28/06/2018, André encontrou um dos jogadores da equipe adversária, Marcelo, que lhe confessou a autoria do bilhete, ressaltando que Luiz e Rogério também estavam envolvidos na ofensa. André, em 17/11/2018, procurou seu advogado, apresentando todas as provas do crime praticado, manifestando seu interesse em apresentar queixa-crime contra os três autores do fato. Diante disso, o advogado do ofendido, após procuração com poderes especiais, apresenta, em 14/12/2018, queixa-crime em face de Luiz, Rogério e Marcelo, imputando-lhes a prática dos crimes de calúnia e injúria. Após o recebimento da queixa-crime pelo magistrado, André se arrependeu de ter buscado a responsabilização penal de Marcelo, tendo em vista que somente descobriu a autoria do crime em decorrência da ajuda por ele fornecida. Diante disso, comparece à residência de Marcelo, informa seu arrependimento, afirma não ter interesse em vê-lo responsabilizado criminalmente e o convida para a festa de aniversário de sua filha, sendo a conversa toda registrada em mídia audiovisual. Considerando as informações narradas, é correto afirmar que o(a) advogado(a) dos querelados poderá",
  a: "questionar o recebimento da queixa-crime, com fundamento na ocorrência de decadência, já que oferecida a inicial mais de 06 meses após a data dos fatos.",
  b: "buscar a extinção da punibilidade dos três querelados, diante da renúncia ao exercício do direito de queixa realizado por André, que poderá ser expresso ou tácito.",
  c: "buscar a extinção da punibilidade de Marcelo, mas não de Luiz e Rogério, em razão da renúncia ao exercício do direito de queixa realizado por André.",
  d: "buscar a extinção da punibilidade dos três querelados, caso concordem, diante do perdão oferecido a Marcelo por parte de André, que deverá ser estendido aos demais coautores.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "68"
},{
  pergunta: "Carlos, advogado, em conversa com seus amigos, na cidade de Campinas, afirmou, categoricamente, que o desembargador Tício exigiu R$ 50.000,00 para proferir voto favorável para determinada parte em processo criminal de grande repercussão, na Comarca em que atuava. Ao tomar conhecimento dos fatos, já que uma das pessoas que participavam da conversa era amiga do filho de Tício, o desembargador apresentou queixa-crime, imputando a Carlos o crime de calúnia majorada (Art. 138 c/c. o Art. 141, inciso II, ambos do CP. Pena: 06 meses a 2 anos e multa, aumentada de 1/3) . Convicto de que sua afirmativa seria verdadeira, Carlos pretende apresentar exceção da verdade, com a intenção de demonstrar que Tício realmente havia realizado a conduta por ele mencionada. Procura, então, seu advogado, para adoção das medidas cabíveis. Com base apenas nas informações narradas, o advogado de Carlos deverá esclarecer que, para julgamento da exceção da verdade, será competente",
  a: "a Vara Criminal da Comarca de Campinas, órgão competente para apreciar a queixa-crime apresentada.",
  b: "o Juizado Especial Criminal da Comarca de Campinas, órgão competente para apreciar a queixa-crime apresentada.",
  c: "o Tribunal de Justiça do Estado de São Paulo, apesar de não ser o órgão competente para apreciar a queixa-crime apresentada.",
  d: "o Superior Tribunal de Justiça, apesar de não ser o órgão competente para apreciar a queixa-crime apresentada.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "69"
},{
  pergunta: "Reinaldo é empregado da padaria Cruz de Prata Ltda., na qual exerce a função de auxiliar de padeiro, com jornada de segunda a sexta-feira, das 12h às 17h, e pausa alimentar de 15 minutos. Aproxima-se o final do ano, e Reinaldo aguarda ansiosamente pelo pagamento do 13º salário, pois pretende utilizá-lo para comprar uma televisão. A respeito do 13º salário, assinale a afirmativa correta.",
  a: "Com a reforma da CLT, a gratificação natalina poderá ser paga em até três vezes, desde que haja concordância do empregado.",
  b: "A gratificação natalina deve ser paga em duas parcelas, sendo a primeira entre os meses de fevereiro e novembro e a segunda, até o dia 20 de dezembro de cada ano.",
  c: "Atualmente é possível negociar a supressão do 13º salário em convenção coletiva de trabalho.",
  d: "O empregado tem direito a receber a primeira parcela do 13º salário juntamente com as férias, desde que a requeira no mês de março.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "70"
},{
  pergunta: "Uma indústria de calçados, que se dedica à exportação, possui 75 empregados. No último ano, Davi foi aposentado por invalidez, Heitor pediu demissão do emprego, Lorenzo foi dispensado por justa causa e Laura rompeu o contrato por acordo com o empregador, aproveitando-se da nova modalidade de ruptura trazida pela Lei nº 13.467/17 (Reforma Trabalhista). De acordo com a norma de regência, assinale a opção que indica, em razão dos eventos relatados, quem tem direito ao saque do FGTS.",
  a: "Davi e Laura, somente.",
  b: "Todos poderão sacar o FGTS.",
  c: "Laura, somente.",
  d: "Davi, Heitor e Lorenzo, somente.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "71"
},{
  pergunta: "João e Maria são casados e trabalham na mesma empresa, localizada em Fortaleza/CE. Maria ocupa cargo de confiança e, por absoluta necessidade do serviço, será transferida para Porto Alegre/RS, lá devendo fixar residência, em razão da distância. Diante da situação retratada e da legislação em vigor, assinale a afirmativa correta.",
  a: "A transferência não poderá ser realizada, porque o núcleo familiar seria desfeito, daí ser vedada por Lei.",
  b: "A transferência poderá ser realizada, mas, como o casal ficará separado, isso deverá durar, no máximo, 1 ano.",
  c: "João terá direito, pela CLT, a ser transferido para o mesmo local da esposa e, com isso, manter a família unida.",
  d: "Não há óbice para a transferência, que poderá ser realizada sem que haja obrigação de a empresa transferir João.",
  certo: "d",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "72"
},{
  pergunta: "Vera Lúcia tem 17 anos e foi contratada como atendente em uma loja de conveniência, trabalhando em escala de 12x36 horas, no horário de 19 às 7h, com pausa alimentar de 1 hora. Essa escala é prevista no acordo coletivo assinado pela loja com o sindicato de classe, em vigor. A empregada teve a CTPS assinada e tem, como atribuições, auxiliar os clientes, receber o pagamento das compras e dar o troco quando necessário. Diante do quadro apresentado e das normas legais, assinale a afirmativa correta.",
  a: "A hipótese trata de trabalho proibido.",
  b: "O contrato é plenamente válido.",
  c: "A situação retrata caso de atividade com objeto ilícito.",
  d: "Por ter 17 anos, Vera Lúcia fica impedida de trabalhar em escala 12x36 horas, devendo ser alterada a jornada.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "73"
},{
  pergunta: "O sindicato dos empregados X entabulou, com o sindicato dos empregadores Y, uma convenção coletiva de trabalho para vigorar de julho de 2019 a junho de 2021. Nela ficou acertado que a jornada seria marcada pelos trabalhadores por meio de um aplicativo desenvolvido pelos sindicatos; que haveria instituição de banco de horas anual; que, nas jornadas de trabalho de até 7 horas diárias, haveria intervalo para refeição de 20 minutos; e que a participação nos lucros seria dividida em 4 parcelas anuais. Considerando o teor da norma coletiva e suas cláusulas, e considerando o disposto na CLT, assinale a afirmativa correta.",
  a: "A convenção é nula quanto à participação nos lucros, que não pode ser dividida em mais de 2 parcelas anuais.",
  b: "É nula a fixação de pausa alimentar inferior a 30 minutos para jornadas superiores a 6 horas, mesmo que por norma coletiva.",
  c: "Inválida a cláusula referente à modalidade de registro da jornada de trabalho, que não pode ser feito por meio de um aplicativo.",
  d: "Inválido o banco de horas estipulado, pois, em norma coletiva, ele somente pode ser realizado para compensação semestral.",
  certo: "b",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "74"
},{
  pergunta: "Edimilson é vigia noturno em um condomínio residencial de apartamentos. Paulo é vigilante armado de uma agência bancária. Letícia é motociclista de entregas de uma empresa de logística. Avalie os três casos apresentados e, observadas as regras da CLT, assinale a afirmativa correta.",
  a: "Paulo e Letícia exercem atividade perigosa e fazem jus ao adicional de periculosidade. A atividade de Edimilson não é considerada perigosa, e, por isso, ele não deve receber adicional.",
  b: "Considerando que os três empregados não lidam com explosivos e inflamáveis, salvo por disposição em norma coletiva, nenhum deles terá direito ao recebimento de adicional de periculosidade.",
  c: "Os três empregados fazem jus ao adicional de periculosidade, pois as profissões de Edimilson e Paulo estão sujeitas ao risco de violência física e, a de Letícia, a risco de vida.",
  d: "Apenas Paulo e Edimilson têm direito ao adicional de periculosidade por conta do risco de violência física.",
  certo: "a",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "75"
},{
  pergunta: "O juiz, em sede de execução trabalhista, intimou a parte para cumprir despacho, determinando que o exequente desse seguimento à execução, indicando os meios de prosseguimento na execução, já que não foram encontrados bens no patrimônio do réu. Com fundamento na legislação vigente, assinale a afirmativa correta.",
  a: "O processo ficará parado aguardando a manifestação do exequente por período indefinido de tempo.",
  b: "A declaração de prescrição somente poderá ocorrer por requerimento da parte contrária.",
  c: "A prescrição intercorrente ocorrerá após dois anos, se a parte não cumprir com o comando judicial.",
  d: "O juiz deverá intimar novamente a parte, a fim de dar início ao curso do prazo prescricional.",
  certo: "",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "76"
},{
  pergunta: "Em sede de reclamação trabalhista proposta por Sávio, os pedidos liquidados somaram valor inferior a 40 salários mínimos nacionais. A ação foi movida em face do exempregador e da União, em razão de alegação de responsabilidade subsidiária. Sobre o caso apresentado, assinale a opção que indica o procedimento a ser seguido.",
  a: "A ação correrá sob o rito sumaríssimo, pois cabível o rito especial para qualquer parte na Justiça do Trabalho, desde que o valor da causa seja compatível.",
  b: "A ação correrá sob o rito ordinário, porque, em que pese o valor da causa, figura ente de direito público no polo passivo.",
  c: "A ação correrá no rito ordinário, mas, caso a primeira ré não seja encontrada, não será possível realizar a citação por edital, em vista de a segunda ré ser a União.",
  d: "A ação correrá no rito sumaríssimo, e, em caso de prova testemunhal, cada parte terá direito a ouvir até três testemunhas.",
  certo: "",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "77"
},{
  pergunta: "No decorrer de uma reclamação trabalhista, que transitou em julgado e que se encontra na fase executória, o juiz intimou o autor a apresentar os cálculos de liquidação respectivos, o que foi feito. Então, o juiz determinou que o cálculo fosse levado ao setor de Contadoria da Vara para conferência, tendo o calculista confirmado que os cálculos estavam adequados e em consonância com a coisa julgada. Diante disso, o juiz homologou a conta e determinou que o executado depositasse voluntariamente a quantia, sob pena de execução forçada. Diante dessa narrativa e dos termos da CLT, assinale a afirmativa correta.",
  a: "Equivocou-se o juiz, porque ele não poderia homologar o cálculo sem antes conceder vista ao executado pelo prazo de 8 dias.",
  b: "Correta a atitude do magistrado, porque as contas foram conferidas e foi impressa celeridade ao processo do trabalho, observando a duração razoável do processo.",
  c: "A Lei não fixa a dinâmica específica para a liquidação, daí porque cada juiz tem liberdade para criar a forma que melhor atenda aos anseios da justiça.",
  d: "O juiz deveria conceder vista dos cálculos ao executado e ao INSS pelo prazo de 5 dias úteis, pelo que o procedimento adotado está errado.",
  certo: "",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "78"
},{
  pergunta: "Wilma foi dispensada sem justa causa e recebeu a indenização correspondente do ex-empregador. Ela, no entanto, alega ter direito a uma equiparação salarial com um colega que realizava as mesmas atividades. Em razão disso, Wilma procura você, como advogado(a), e, com sua assessoria, dá início a um acordo extrajudicial com o ex-empregador. O acordo é materializado em documento, especificando o valor e a identificação da parcela, sendo assinado pelas partes e seus respectivos advogados, e levado à Justiça do Trabalho para homologação. Contudo, a juíza do caso nega-se a homologar o acordo, argumentando que ele seria lesivo à trabalhadora, proferindo decisão nesse sentido. Diante disso, e de acordo com a norma legal, assinale a opção que indica a medida processual adequada para buscar a reforma da decisão proferida.",
  a: "Não há medida cabível, por se tratar de decisão interlocutória.",
  b: "Recurso Ordinário.",
  c: "Mandado de Segurança.",
  d: "Novo pedido de homologação de acordo extrajudicial idêntico, mas agora dirigido para outra Vara.",
  certo: "",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "79"
},{
  pergunta: "Considere as quatro situações jurídicas a seguir. (i) A Instituição ABCD é uma entidade sem fins lucrativos. (ii) Rosemary é uma empregadora doméstica. (iii)O Instituto Sonhar é uma entidade filantrópica. (iv) Mariana é uma microempreendedora individual. Considere que todas essas pessoas são empregadoras e têm reclamações trabalhistas ajuizadas contra si e que nenhuma delas comprovou ter as condições para ser beneficiária de justiça gratuita. Assinale a opção que indica, nos termos da CLT, quem estará isento de efetuar o depósito recursal para recorrer de uma sentença desfavorável proferida por uma Vara da Justiça do Trabalho.",
  a: "A Instituição ABCD e o Instituto Sonhar, somente.",
  b: "Todos estarão dispensados",
  c: "Instituto Sonhar, somente.",
  d: "Mariana e Rosemary, somente.",
  certo: "",
  ano: "Exame de Ordem Unificado - XXX (FGV) - 2019",
  questao: "80"
},
  ])

  return ( 
    <View style={{flex: 1,}}>
		
      <ScrollView>
              
        <View style={{flex:1, alignItems: 'center',}}>
        
		<View style={{ alignItems: 'center', marginTop: 50}}>
			<FontAwesome5 name="gripfire" size={35} color='#ff7f00' />
			<Text style = { styles.seq } > {ofensiva} </Text> 
		</View>
        <View style = { styles.VPergunta } >
          <Text style = { styles.ano } > {perguntas[aleat].ano} </Text> 
          <Text style = { styles.pergunta } > {perguntas[aleat].pergunta} </Text> 
        </View> 
		<View style = {{width: '93%', height: 4, backgroundColor: '#DCDCDC', marginTop: 20}}></View>
        <View style = { styles.VResposta } >
          
        {selecionado == "a" && acertou == 2 &&
          <TouchableOpacity style = { styles.sele } onPress={() => {
            if(selecionado == "a"){
              setSelecionado("");
            }else{
              setSelecionado("a")
            }}}> 
            <Text style = {styles.txtpergunta}> A - {perguntas[aleat].a} </Text>
          </TouchableOpacity>
          } 
          {selecionado != "a" && acertou == 2 &&
          <TouchableOpacity style = { styles.sem } onPress={() => {
            if(selecionado == "a"){
              setSelecionado("");
            }else{
              setSelecionado("a")
            }}}>
            <Text style = {styles.txtpergunta}> A - {perguntas[aleat].a} </Text>
          </TouchableOpacity>
          } 
          {selecionado == "a" && acertou == 1 &&
          <TouchableOpacity style = { styles.sele } > 
            <Text style = {styles.txtpergunta}> A - {perguntas[aleat].a} </Text>
          </TouchableOpacity>
          }
          {selecionado != "a" && perguntas[aleat].certo == "a" && acertou == 0 &&
          <TouchableOpacity style = { styles.sele } > 
            <Text style = {styles.txtpergunta}> A - {perguntas[aleat].a} </Text>
          </TouchableOpacity>
          }  
          {selecionado == "a" && acertou == 0 &&
          <TouchableOpacity style = { styles.errou }> 
            <Text style = {styles.txtpergunta}> A - {perguntas[aleat].a} </Text>
          </TouchableOpacity>
          }  
 
          
          {selecionado == "b" && acertou == 2 &&
          <TouchableOpacity style = { styles.sele } onPress={() => {
            if(selecionado == "b"){
              setSelecionado("");
            }else{
              setSelecionado("b")
            }}}> 
            <Text style = {styles.txtpergunta}> B - {perguntas[aleat].b} </Text>
          </TouchableOpacity>
          } 
          {selecionado != "b" && acertou == 2 &&
          <TouchableOpacity style = { styles.sem } onPress={() => {
            if(selecionado == "b"){
              setSelecionado("");
            }else{
              setSelecionado("b")
            }}}>
            <Text style = {styles.txtpergunta}> B - {perguntas[aleat].b} </Text>
          </TouchableOpacity>
          } 
          {selecionado == "b" && acertou == 1 &&
          <TouchableOpacity style = { styles.sele } > 
            <Text style = {styles.txtpergunta}> B - {perguntas[aleat].b} </Text>
          </TouchableOpacity>
          }
          {selecionado != "b" && perguntas[aleat].certo == "b" && acertou == 0 &&
          <TouchableOpacity style = { styles.sele }> 
            <Text style = {styles.txtpergunta}> B - {perguntas[aleat].b} </Text>
          </TouchableOpacity>
          }  
          {selecionado == "b" && acertou == 0 &&
          <TouchableOpacity style = { styles.errou } > 
            <Text style = {styles.txtpergunta}> B - {perguntas[aleat].b} </Text>
          </TouchableOpacity>
          }  

        {selecionado == "c" && acertou == 2 &&
          <TouchableOpacity style = { styles.sele } onPress={() => {
            if(selecionado == "c"){
              setSelecionado("");
            }else{
              setSelecionado("c")
            }}}> 
            <Text style = {styles.txtpergunta}> C - {perguntas[aleat].c} </Text>
          </TouchableOpacity>
          } 
          {selecionado != "c" && acertou == 2 &&
          <TouchableOpacity style = { styles.sem } onPress={() => {
            if(selecionado == "c"){
              setSelecionado("");
            }else{
              setSelecionado("c")
            }}}>
            <Text style = {styles.txtpergunta}> C - {perguntas[aleat].c} </Text>
          </TouchableOpacity>
          } 
          {selecionado == "c" && acertou == 1 &&
          <TouchableOpacity style = { styles.sele }> 
            <Text style = {styles.txtpergunta}> C - {perguntas[aleat].c} </Text>
          </TouchableOpacity>
          }
          {selecionado != "c" && perguntas[aleat].certo == "c" && acertou == 0 &&
          <TouchableOpacity style = { styles.sele } > 
            <Text style = {styles.txtpergunta}> C - {perguntas[aleat].c} </Text>
          </TouchableOpacity>
          }  
          {selecionado == "c" && acertou == 0 &&
          <TouchableOpacity style = { styles.errou } > 
            <Text style = {styles.txtpergunta}> C - {perguntas[aleat].c} </Text>
          </TouchableOpacity>
          }  


        {selecionado == "d" && acertou == 2 &&
          <TouchableOpacity style = { styles.sele } onPress={() => {
            if(selecionado == "d"){
              setSelecionado("");
            }else{
              setSelecionado("d")
            }}}> 
            <Text style = {styles.txtpergunta}> D - {perguntas[aleat].d} </Text>
          </TouchableOpacity>
          } 
          {selecionado != "d" && acertou == 2 &&
          <TouchableOpacity style = { styles.sem } onPress={() => {
            if(selecionado == "d"){
              setSelecionado("");
            }else{
              setSelecionado("d")
            }}}>
            <Text style = {styles.txtpergunta}> D - {perguntas[aleat].d} </Text>
          </TouchableOpacity>
          } 
          {selecionado == "d" && acertou == 1 &&
          <TouchableOpacity style = { styles.sele }> 
            <Text style = {styles.txtpergunta}> D - {perguntas[aleat].d} </Text>
          </TouchableOpacity>
          }
          {selecionado != "d" && perguntas[aleat].certo == "d" && acertou == 0 &&
          <TouchableOpacity style = { styles.sele } > 
            <Text style = {styles.txtpergunta}> D - {perguntas[aleat].d} </Text>
          </TouchableOpacity>
          }  
          {selecionado == "d" && acertou == 0 &&
          <TouchableOpacity style = { styles.errou }> 
            <Text style = {styles.txtpergunta}> D - {perguntas[aleat].d} </Text>
          </TouchableOpacity>
          }  


          {acertou == 1 &&
            <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
			        <Text style = {{color:'#90ee90', fontSize:24}}>VOCÊ ACERTOU</Text>
			        <FontAwesome name="smile-o" size={35} color="#90ee90" />
			      </View>
		      }
          {acertou == 0 &&
			      <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
              <Text style = {{color:'#ff4040', fontSize:24}}>VOCÊ ERROU</Text>
			        <FontAwesome name="frown-o" size={35} color="#ff4040" />
			      </View>
		      }
		
		</View> 
    </View>                
       
    </ScrollView>
      {acertou == 2 && selecionado != "" &&
      <TouchableOpacity style = { styles.enviarSem } onPress={() =>{
          if (selecionado == perguntas[aleat].certo){
            setAcertou(1);
            setOfensiva(ofensiva + 1);
          }
          else if (selecionado != perguntas[aleat].certo){
            setAcertou(0);
            setOfensiva(0);
          }
        }}> 
        <Text> RESPONDER </Text>
        <FontAwesome name="pencil-square-o" size={24} color="black" />
      </TouchableOpacity>
      }

      {acertou == 2 && selecionado == "" &&
      <TouchableOpacity style = { styles.enviarSem }> 
        <Text> RESPONDER </Text>
        <FontAwesome name="pencil-square-o" size={24} color="black" />
      </TouchableOpacity>
      }

      {acertou != 2 &&
      <TouchableOpacity style = { styles.enviarSem } onPress={() => navigation.reset({
        index: 1,
        routes: [{ name: 'Home'}, 
                  { name: 'Perguntas', params: { ofens: ofensiva }}]
		
      })}> 
        <Text> PROXIMA </Text>
        <FontAwesome name="arrow-circle-right" size={24} color="black" />
      </TouchableOpacity>
      }
       
    </View>
    );
}

const styles = StyleSheet.create({
    
    VPergunta: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center', 
		    width: '92%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderTopLeftRadius: 0,        
        padding: 15
    },
    VResposta: {
		marginTop: 20,
		justifyContent: 'center',
        alignItems: 'center' 
    },
    ano: {        
        color: '#9b111e',
    },
    pergunta: {
		//fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
    },
    sem: {
      borderRadius: 6,
      backgroundColor: '#d3d3d3',
      width: '90%',
      minHeight: 30,
      marginBottom: 20,
	    justifyContent: 'center',
    },   
    sele: {
	  	borderRadius: 6,
      backgroundColor: '#90ee90',
      width: '90%',
      minHeight: 30,
      marginBottom: 20,
	    justifyContent: 'center',
    },
    errou:{
      borderRadius: 6,
      backgroundColor: '#ff4040',
      width: '90%',
      minHeight: 30,
      marginBottom: 20,
	    justifyContent: 'center',
    },
	txtpergunta: {
		margin: 10,
	},
	seq: {
		fontSize: 20,
	},
	enviarSem: {
      borderRadius: 6,
      backgroundColor: '#90EE90',
      width: '100%',
      height: 60,
	    justifyContent: 'center',
	    alignItems: 'center'
    }

});
