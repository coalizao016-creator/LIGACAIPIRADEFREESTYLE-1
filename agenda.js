// agenda.js - Sincronizado com batalhas.js
const eventos = [
  {
    data: "2026-03-12",
    diaSemana: "Quinta-feira",
    horario: "20:00h",
    nomeBatalha: "NOMADES",
    cidade: "Franca - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadosnomades016/",
    codigo: "BAT019"
  },
  {
    data: "2026-03-13",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "BATALHA DOS 13",
    cidade: "Bauru - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhados13oficial",
    codigo: "BAT055"
  },
  {
    data: "2026-03-13",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "PRIMA",
    cidade: "Barretos - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadoprimabarretos",
    codigo: "BAT036"
  },
  {
    data: "2026-03-14",
    diaSemana: "Sábado",
    horario: "20:00h",
    nomeBatalha: "MUMM - RA",
    cidade: "São Manuel - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/soospitbullpormim",
    codigo: "BAT037"
  },
  {
    data: "2026-03-22",
    diaSemana: "Domingo",
    horario: "19:00h",
    nomeBatalha: "BATALHA DO BANDO",
    cidade: "Botucatu - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadobando014",
    codigo: "BAT034"
  },
  {
    data: "2026-03-17",
    diaSemana: "Terça-feira",
    horario: "20:00h",
    nomeBatalha: "HOME",
    cidade: "Campinas - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadahome/",
    codigo: "BAT046"
  },
  {
    data: "2026-03-18",
    diaSemana: "Quarta-feira",
    horario: "20:00h",
    nomeBatalha: "GIRASSOL",
    cidade: "Araraquara - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalha_do_girassoo016",
    codigo: "BAT039"
  },
  {
    data: "2026-03-18",
    diaSemana: "Quarta-feira",
    horario: "20:00h",
    nomeBatalha: "MAESTRO",
    cidade: "Campinas - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadomaestro/",
    codigo: "BAT047"
  },
  {
    data: "2026-03-19",
    diaSemana: "Quinta-feira",
    horario: "20:00h",
    nomeBatalha: "POMBOS",
    cidade: "São Carlos - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalha_dospombos",
    codigo: "BAT022"
  },
  {
    data: "2026-03-20",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "YINYANG",
    cidade: "São Carlos - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/bdyy3.0",
    codigo: "BAT035"
  },
  {
    data: "2026-03-21",
    diaSemana: "Sábado",
    horario: "20:00h",
    nomeBatalha: "BATALHA DO LIVRÃO",
    cidade: "Altinópolis - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadolivrao",
    codigo: "BAT040"
  },
  {
    data: "2026-03-21",
    diaSemana: "Sábado",
    horario: "20:00h",
    nomeBatalha: "UMPORCENTO",
    cidade: "Monte Alto - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/cacarecocla/",
    codigo: "BAT005"
  },
  {
    data: "2026-03-21",
    diaSemana: "Sábado",
    horario: "20:00h",
    nomeBatalha: "DIAMANTE",
    cidade: "Patrocínio Paulista - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalha_do_diamante_",
    codigo: "BAT016"
  },
  {
    data: "2026-03-22",
    diaSemana: "Domingo",
    horario: "19:00h",
    nomeBatalha: "VHD",
    cidade: "Vinhedo - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadavhd/",
    codigo: "BAT048"
  },
  {
    data: "2026-03-23",
    diaSemana: "Segunda-feira",
    horario: "20:00h",
    nomeBatalha: "ESTAÇÃO DA RIMA",
    cidade: "Campinas - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhaestacaodarima/",
    codigo: "BAT049"
  },
  {
    data: "2026-03-24",
    diaSemana: "Terça-feira",
    horario: "20:00h",
    nomeBatalha: "CASINHAS",
    cidade: "Bebedouro - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadabdc",
    codigo: "BAT044"
  },
  {
    data: "2026-03-28",
    diaSemana: "Sábado",
    horario: "20:00h",
    nomeBatalha: "BOOM BATTLE",
    cidade: "Araraquara - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/boombattle016",
    codigo: "BAT028"
  },
  {
    data: "2026-03-29",
    diaSemana: "Domingo",
    horario: "18:00h",
    nomeBatalha: "LA FAMILIA",
    cidade: "Araraquara - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/lafamilialfmc",
    codigo: "BAT043"
  },
  {
    data: "2026-03-29",
    diaSemana: "Domingo",
    horario: "18:00h",
    nomeBatalha: "PORTAS ABERTAS",
    cidade: "Marília - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/portasabertashiphop",
    codigo: "BAT042"
  },
  {
    data: "2026-03-31",
    diaSemana: "Terça-feira",
    horario: "20:00h",
    nomeBatalha: "RESSACA",
    cidade: "Araraquara - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadaressaca",
    codigo: "BAT025"
  },
  {
    data: "2026-04-02",
    diaSemana: "Quinta-feira",
    horario: "20:00h",
    nomeBatalha: "VAGALUMES",
    cidade: "São José do Rio Preto - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadosvagalumes",
    codigo: "BAT038"
  },
  {
    data: "2026-04-04",
    diaSemana: "Sábado",
    horario: "20:00h",
    nomeBatalha: "DUELO DE QUEBRADA",
    cidade: "Ourinhos - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/duelodequebrada",
    codigo: "BAT056"
  },
  {
    data: "2026-04-07",
    diaSemana: "Terça-feira",
    horario: "20:00h",
    nomeBatalha: "NORTE",
    cidade: "Piracicaba - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadanorte019/",
    codigo: "BAT050"
  },
  {
    data: "2026-04-09",
    diaSemana: "Quinta-feira",
    horario: "20:00h",
    nomeBatalha: "PISTA",
    cidade: "Indaiatuba - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/bdpista/",
    codigo: "BAT051"
  },
  {
    data: "2026-04-10",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "CONEXÃO",
    cidade: "São Joaquim da Barra - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/conexao_de_rima",
    codigo: "BAT004"
  },
  {
    data: "2026-04-11",
    diaSemana: "Sábado",
    horario: "20:00h",
    nomeBatalha: "BRODI",
    cidade: "Taquaritinga - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadosbrodi",
    codigo: "BAT014"
  },
  {
    data: "2026-04-12",
    diaSemana: "Domingo",
    horario: "18:00h",
    nomeBatalha: "BATALHA DO BENÇA",
    cidade: "Ribeirão Preto - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadobenca",
    codigo: "BAT012"
  },
  {
    data: "2026-04-12",
    diaSemana: "Domingo",
    horario: "18:00h",
    nomeBatalha: "RAIO DIVERSIDADE",
    cidade: "Araraquara - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadoraio",
    codigo: "BAT011"
  },
  {
    data: "2026-04-17",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "RAP NA ALTA",
    cidade: "Matão - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/rap.naalta/",
    codigo: "BAT010"
  },
  {
    data: "2026-04-18",
    diaSemana: "Sábado",
    horario: "20:00h",
    nomeBatalha: "VINTE",
    cidade: "Orlândia - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/bdvinte_",
    codigo: "BAT002"
  },
  {
    data: "2026-04-23",
    diaSemana: "Quinta-feira",
    horario: "20:00h",
    nomeBatalha: "SANGUE NA 7",
    cidade: "Ribeirão Preto - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhasn7",
    codigo: "BAT015"
  },
  {
    data: "2026-04-25",
    diaSemana: "Sábado",
    horario: "20:00h",
    nomeBatalha: "DUELO DA 3",
    cidade: "Sertãozinho - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/dueloda3/",
    codigo: "BAT006"
  },
  {
    data: "2026-04-26",
    diaSemana: "Domingo",
    horario: "18:00h",
    nomeBatalha: "CÉU",
    cidade: "Santa Bárbara D'Oeste - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadoceubdc/",
    codigo: "BAT052"
  },
  {
    data: "2026-04-27",
    diaSemana: "Segunda-feira",
    horario: "20:00h",
    nomeBatalha: "SINTONIA",
    cidade: "Hortolândia - SP",
    status: "Etapa Base - Liga Caipira",
    linkInstagram: "https://www.instagram.com/batalhadasintonia_/",
    codigo: "BAT053"
  }
];