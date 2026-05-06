import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Users, Book, Award, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';

type ArchiveItem = {
  title: string;
  year?: string;
  link: string;
  cover?: string;
};

type ArchiveLevel4 = {
  title: string;
  items: ArchiveItem[];
};

type ArchiveLevel3 = {
  title: string;
  items?: ArchiveItem[];
  level4?: ArchiveLevel4[];
};

type ArchiveLevel2 = {
  title: string;
  items?: ArchiveItem[];
  level3?: ArchiveLevel3[];
};

type ArchiveCategory = {
  id: string;
  title: string;
  items?: ArchiveItem[];
  level2?: ArchiveLevel2[];
  level3?: ArchiveLevel3[];
};

const ARCHIVE_CONTENT: ArchiveCategory[] = [
  {
    id: 'inicio',
    title: 'O início da Gestão Paulo Freire',
    items: [
      { 
        title: 'Aos Que Fazem Educação Conosco em São Paulo', 
        year: '1989', 
        link: 'https://drive.google.com/file/d/1inaRIOzFdErnSUNeQvhNm6CH1Y6l-qpd/view',
        cover: 'https://i.postimg.cc/Sj2t63fL/Aos-que-fazem-a-Educacao-conosco-em-Sao-Paulo.png'
      },
      { 
        title: 'Problematização das Escolas: A Visão dos Educadores, Educandos e Pais', 
        year: '1992', 
        link: 'https://drive.google.com/file/d/1BQOTnVu8haVXcfuIwcqQ6R6z9iLjzIjK/view',
        cover: 'https://i.postimg.cc/XXGDfmkc/Problematizacao-da-Escola-A-Visao-dos-Educadores-Educandos-Pais.png'
      },
    ]
  },
  {
    id: 'reorientacao',
    title: 'Movimento de Reorientação Curricular',
    level2: [
      {
        title: 'Educação Infantil',
        items: [
          { title: 'Grupo de Formação - Uma (Re)visão da Educação do Educador', link: 'https://drive.google.com/file/d/1CycVR3HI8KC4-yVUxpTEVq45Ca2Jn0OT/view', cover: 'https://i.postimg.cc/dDkS2pjj/Grupo-de-Formacao-Uma-Revisao-da-Educacao-do-Educador.png' },
          { title: 'Reorientação Curricular das Escolas Municipais de Educação Infantil', year: '1989/1992', link: 'https://drive.google.com/file/d/1B8-N2Y5sxgj4F8pHqqIl8LId5Dh5Rgr3/view', cover: 'https://i.postimg.cc/yWgrmtyT/Reorientacao-Curricular-das-Escolas-Municipais-de-Educacao-Infantil.png' },
          { title: 'A Criança e o Desenho - Uma Conversa para Olhar/ Pensar Arte', link: 'https://drive.google.com/file/d/1BQqe6uKQQRVOE_YB07oIFcDsYZ33mcYl/view', cover: 'https://i.postimg.cc/jCwkHm4z/A-Crianc-a-e-o-Desenho-Uma-Conversa-para-Olhar-Pensar-Arte.png' },
        ]
      },
      {
        title: 'Ensino Fundamental',
        level3: [
          {
            title: '1. Ação pedagógica da Escola pela via da Interdisciplinaridade',
            items: [
              { title: 'Um Primeiro Olhar Sobre o Projeto', link: 'https://drive.google.com/file/d/1imh5GLEGtYmNjtZnh-qpCDdgJ4MYO8E3/view', cover: 'https://i.postimg.cc/FKz8NT66/Um-Primeiro-Olhar-Sobre-o-Projeto.png' },
              { title: 'Estudo Preliminar da Realidade Local: Resgatando o Cotidiano', link: 'https://drive.google.com/file/d/1icoBbkaD5vLMMdqPKZKOKS10kpd4QnNk/view', cover: 'https://i.postimg.cc/HkpFPY9J/Estudo-Preliminar-da-Realidade-Local.png' },
              { title: 'Tema Gerador e a Construção do Programa: uma nova relação entre currículo e realidade', link: 'https://drive.google.com/file/d/1ik67AUHm9Gn8YsMtLSODm5CG4FjPQsrO/view', cover: 'https://i.postimg.cc/N0FSBdnz/Tema-Gerador-e-a-Construcao-do-Programa.png' },
              { title: 'Ação pedagógica da Escola pela via da Interdisciplinaridade - Um Novo Olhar Sobre o Projeto', link: 'https://drive.google.com/file/d/1BErnpPBljf1a1oKMWw_XhXNyNDDrvDCM/view', cover: 'https://i.postimg.cc/9QWsNmtS/Acao-Pedagogica-da-Escola-pela-Via.png' },
            ]
          },
          {
            title: 'Visões das Áreas',
            items: [
              { title: 'Ciências', link: 'https://drive.google.com/file/d/1AVhvoM-KSN9pywSvcd8Sl6tGS_46GpPz/view', cover: 'https://i.postimg.cc/g075JvFF/visao-area-0008-ciencias.jpg' },
              { title: 'Educação Artística', link: 'https://drive.google.com/file/d/1Ai_aESSLb5LMbB6S_rDH6XYp2T28ReRP/view', cover: 'https://i.postimg.cc/SKR3kg5K/visao-area-0007-educaco-artistica.jpg' },
              { title: 'Educação Artística - Dança', link: 'https://drive.google.com/file/d/1AUC0HgmqNMlhYHV_WPZVnISWpbcjp-KS/view', cover: 'https://i.postimg.cc/SKR3kg5x/visao-area-0006-ea-danca.jpg' },
              { title: 'Educação Física', link: 'https://drive.google.com/file/d/1AkE1BVNqbq3nwu8F2eAYZhb1lyN4Fmei/view', cover: 'https://i.postimg.cc/wBMZgwP6/visao-area-0005-educacao-fisica.jpg' },
              { title: 'Geografia', link: 'https://drive.google.com/file/d/1AWNsncMZdA2l1sSNs1Etw6u5wVaO9715/view', cover: 'https://i.postimg.cc/FKz8NTqh/visao-area-0004-geografia.jpg' },
              { title: 'História', link: 'https://drive.google.com/file/d/1APZO4mxriXU86xsvt_VO9nBfNX7KdUk1/view', cover: 'https://i.postimg.cc/mrkJBmqR/visao-area-0003-historia.jpg' },
              { title: 'Matemática', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992', cover: 'https://i.postimg.cc/bvrWpmMj/visao-area-0002-matematica.jpg' },
              { title: 'Português', link: 'https://drive.google.com/file/d/1AWqG6NNd-zOkVFV12V3V7HHC_PdJMBEB/view', cover: 'https://i.postimg.cc/25yMr0ts/visao-area-0001-portugues.jpg' },
              { title: 'Bandas e Fanfarras e Instrutores de Fanfarras', link: 'https://drive.google.com/file/d/1A_ay03cd2tkNgoPrebExzpX85xlZS9rM/view', cover: 'https://i.postimg.cc/GptVdXfz/visao-area-0000-bandas-fanfarras.jpg' },
            ]
          },
          {
            title: 'Relatos de Práticas',
            items: [
              { title: 'Ciências', link: 'https://drive.google.com/file/d/1CISaJoEVusNJvE-k61RXMOZB1rZoS4Ut/view', cover: 'https://i.postimg.cc/VkDpxxKv/Relatos-Praticas-ciencias.png' },
              { title: 'Educação Artística', link: 'https://drive.google.com/file/d/1C4U7rgEtHaTNmZysThhs1OXFdsuVExym/view', cover: 'https://i.postimg.cc/fRBpGG8B/Relatos-Praticas-0006-edu-artistica.jpg' },
              { title: 'Educação Física', link: 'https://drive.google.com/file/d/1C9X9X0ssDYSnrxv2j3jRLX_4ItAtjAgq/view', cover: 'https://i.postimg.cc/SxD3BBgL/Relatos-Praticas-0005-educa-fisica.jpg' },
              { title: 'Geografia', link: 'https://drive.google.com/file/d/1CDiimLpTRiR2uZYK_u7AlLI0iaNyyacY/view', cover: 'https://i.postimg.cc/pLq4wwsD/Relatos-Praticas-0004-geografia.jpg' },
              { title: 'História', link: 'https://drive.google.com/file/d/1BeM_LrtTsBtNtMRbc3QAO6vczaqhuqYs/view', cover: 'https://i.postimg.cc/6pYgkkMC/Relatos-Praticas-0003-historia.jpg' },
              { title: 'Inglês', link: 'https://drive.google.com/file/d/1BYPtRptDWNVuQIz8QoQDtNTLRTeAeyvh/view', cover: 'https://i.postimg.cc/cLX2ppFJ/Relatos-Praticas-0002-ingles.jpg' },
              { title: 'Matemática', link: 'https://drive.google.com/file/d/1BU-ulVfrWDQyO4_03A9DdYjfcnYdrz74/view', cover: 'https://i.postimg.cc/2SzgXk71/Relatos-Praticas-0001-matematica.jpg' },
              { title: 'Português', link: 'https://drive.google.com/file/d/1BxHS29gekNlIsysygqP-mKSRD6TpbR75/view', cover: 'https://i.postimg.cc/fRw1gzfD/Relatos-Praticas-0000-portugues.jpg' },
            ]
          }
        ]
      },
      {
        title: 'Outros Projetos',
        items: [
          { title: 'Projeto de Orientação Sexual', year: '1992', link: 'https://drive.google.com/file/d/1-sYX3VJsEw4vtPg3zIoTeI88EAm6xoxU/view', cover: 'https://i.postimg.cc/SNLwr287/Projeto-de-Orientacao-Sexual.jpg' },
          { title: 'Projeto de Atendimento aos professores de 5ª Série', year: '1989/1992', link: 'https://drive.google.com/file/d/1cKKnlBDDnk7BTLBjCtJn1taBxPCiJS11/view', cover: 'https://i.postimg.cc/WbmQnFr9/Projeto-de-Atendimento-aos-professores.jpg' },
          { title: 'Salas de Leitura', link: 'https://drive.google.com/file/d/1ArzLuAsGDbT7lAgpiPORtumuVzCkAqj8/view', cover: 'https://i.postimg.cc/W4zCT5yf/Salas-de-Leitura.png' },
        ]
      },
      {
        title: 'Jovens e Adultos',
        level3: [
          {
            title: '1 - MOVA (Parceria entre SME e Entidades da Sociedade Civil)',
            items: [
              { title: 'MOVA- Movimento de Alfabetização de Jovens e Adultos na cidade de São Paulo', link: 'https://drive.google.com/file/d/1E007k14PpFxnkSBhvRt9P9UKh9corMU1/view', cover: 'https://i.postimg.cc/W1T6Gt6Q/MOVA-caderno1.png' },
              { title: 'Princípios Político-pedagógicos do MOVA-SP', link: 'https://drive.google.com/file/d/1E2KwBhfU0Sc4F5UyelBosoCItuNIkV61/view', cover: 'https://i.postimg.cc/mgBNYhNv/MOVA-caderno2.png' },
              { title: 'Reflexões sobre o processo metodológico de alfabetização', link: 'https://drive.google.com/file/d/1E0nihGJ2nCxLVUGzBV_ukLbOPSowbmmx/view', cover: 'https://i.postimg.cc/3x1jn7nz/MOVA-caderno3.png' },
              { title: 'Construindo o ciclo Ensino Fundamental', link: 'https://drive.google.com/file/d/1De7yFu9Rsd-4QStXOJTg0YxG60xVrl-G/view', cover: 'https://i.postimg.cc/dVwm2DmB/Construindo-o-Ciclo-Ensino-Fundamental.png' },
            ]
          },
          {
            title: '2 - Construindo a Educação do Jovem e Adulto Trabalhador',
            items: [
              { title: 'São Paulo 1989: Educar Adultos Para Quê?', link: 'https://drive.google.com/file/d/1D8NrjCBJ2Ki8GvXoj008TVqkox4du3qL/view', cover: 'https://i.postimg.cc/7LL3RcRq/Sa-o-Paulo-1989-Educar-Adultos-Para-Que.png' },
              { title: 'Reorientação do Ensino Noturno: Diretrizes para elaboração de projetos pelas escolas', link: 'https://drive.google.com/file/d/1D7UpJV1hmeS4irmQMdwZF27Btf6TfU3i/view', cover: 'https://i.postimg.cc/SKK6P5Pk/Reorientac-cao-do-Ensino-Noturno.png' },
              { title: 'Alfabetização: leitura do mundo, leitura do mundo, leitura da palavra', link: 'https://drive.google.com/file/d/1CwVSVAtbGXmAHNoh5ZuBqrpArpJhbMS-/view', cover: 'https://i.postimg.cc/rwMC1zC9/Alfabetizacao-Leitura-do-Mundo.png' },
              { title: 'Reorientação Curricular do Ensino Noturno: "Estudo do Meio e outras saídas para o Ensino Noturno"', link: 'https://drive.google.com/file/d/1CyOmYVaWZH20t_xiLbv-wHLD96J_McB2/view', cover: 'https://i.postimg.cc/K8f7JF0K/Reorientacao-Curricular-do-Ensino-Noturno-Estudo-do-Meio.png' },
              { title: 'Reorientação Curricular do Ensino Noturno: Construindo um novo ensino Noturno', link: 'https://drive.google.com/file/d/1BMbduUE6Tf99yq76KTNynV7Xi6r_TaWT/view', cover: 'https://i.postimg.cc/Hkz0BH6L/Reorientacao-Curricular-do-Ensino-Noturno-Construindo-um-Novo.png' },
            ]
          },
          {
            title: '3 - Projetos',
            level4: [
              {
                title: 'Curso de Magistério para monitores de Educação de Adultos',
                items: [
                  { title: 'Formação Especial para o Magistério EJA', link: 'https://drive.google.com/file/d/1DIEc2Te-cFb9cV3siG8KqZK-pV53QCnV/view', cover: 'https://i.postimg.cc/wjgcX3cZ/Formacao-Especial-para-o-Magisterio.png' },
                  { title: 'Projeto magistério: As monografias dos alunos das turmas especiais', link: 'https://drive.google.com/file/d/1DFWleYW1QU1ENYStuTW9pnjUe1ozlWak/view', cover: 'https://i.postimg.cc/Mp50dx9K/Projeto-Magisterio-As-Monografias.png' },
                  { title: 'Relatos de Práticas Pedagógicas: A produção dos monitores', link: 'https://drive.google.com/file/d/1COhAbNaGH-shS0q69oE7hPqHotHEyDJg/view', cover: 'https://i.postimg.cc/GmKPqrXm/Relatos-de-Praticas-Pedagogicas-A-Producao-dos-Monitores.png' },
                ]
              },
              {
                title: 'Oferta de Ensino Supletivo para Funcionários de outras Secretarias Municipais',
                items: [
                  { title: 'Frente do Funcionalismo: Projeto Supletivo Educação e Saúde', link: 'https://drive.google.com/file/d/1Ch6Sj6Y_lRjsnKL-9Y1yhntjsJQMsAYE/view', cover: 'https://i.postimg.cc/cL0MR6MP/Frente-do-Funcionalismo.png' },
                ]
              },
              {
                title: 'Oficinas',
                items: [
                  { title: 'Relatos de práticas pedagógicas - Produção e Difusão de Textos', link: 'https://drive.google.com/file/d/1Cdo0iZmGtbAMPdQyrRt_Any3M-QYw7OG/view', cover: 'https://i.postimg.cc/GmKPqrX0/oficinas-Relatos-de-Praticas-Pedagogicas.png' },
                  { title: 'Relatos de Práticas Pedagógicas - Alfabetização de Adultos', link: 'https://drive.google.com/file/d/1CQqoS9UYe9gG3_JojEem_MLXt9KWqPZJ/view', cover: 'https://i.postimg.cc/K8f7JFJd/oficinas-Relatos-de-Praticas-Pedagogicas-Alfabetizacao.png' },
                ]
              }
            ]
          },
          {
            title: 'Ciclo de Debates',
            items: [
              { title: '(Re) Construindo a Educação: A contribuição dos negros brasileiros', link: 'https://drive.google.com/file/d/1Cia3IxxRoP_prDwgfbwyArc6C_fZDTn9/view', cover: 'https://i.postimg.cc/pLRYfyYJ/Ciclo-de-Debates.png' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'gabinete',
    title: 'Projetos Especiais - Secretaria Municipal de Educação (Gabinete)',
    items: [
      { title: 'Educação Especial ou Educação? A busca de novos caminhos', link: 'https://drive.google.com/file/d/1-rxvnXZ8sUuml0mg7dfaMzbea1tkIB0C/view', cover: 'https://i.postimg.cc/P5TzWNzy/Educacao-Especial-ou-Educacao.png' },
      { title: 'Projeto Gênese - A Informática Chega ao Aluno da Escola Pública Municipal', year: '1992', link: 'https://drive.google.com/file/d/1Efqk4lcMWG30wDSdw9KntRNByhfiJw5e/view', cover: 'https://i.postimg.cc/jSc6ZKMq/Projeto-Genese.png' },
      { title: 'Pela Vida, Não à Violência', year: '1992', link: 'https://drive.google.com/file/d/1Ev5TQ9yFwocUUvmYE6vT2quuWBWunofJ/view', cover: 'https://i.postimg.cc/sgmPwyTd/Pela-Vida-Nao-a-Violencia.png' },
      { title: 'Cartazes Não à Violência', link: 'https://drive.google.com/file/d/1VVUoiG-TYwlhtaq3eU-e-OpwIP1LrNi-/view' },
      { title: 'Seleção e Formação de Operacionais', year: '1990', link: 'https://drive.google.com/file/d/1CxdysJaj9-e3W9OxUsCTHepCJJ62koYt/view' },
    ]
  },
  {
    id: 'congressos',
    title: 'Congressos de Educação (1991/1992)',
    items: [
      { title: 'I e II Congressos Municipais de Educação', year: '1991-1992', link: 'https://drive.google.com/file/d/1ERKdve42iEdNCjeS-NacLsIDfQhb_v1M/view', cover: 'https://i.postimg.cc/cCZkvWhz/I-e-II-Congressos-Municipais-de-Educacao.png' },
      { title: 'I Congresso Municipal – Programa', year: '1991', link: 'https://drive.google.com/file/d/1-r13i0yg8LGZFR0AgPDz5bklCJ60oNk-/view', cover: 'https://i.postimg.cc/8cDX7G4K/I-Congresso-Municipal.png' },
      { title: 'II Congresso Municipal – Programa', year: '1992', link: 'https://drive.google.com/file/d/1-l_4eNZT8XnabncJypPbE91sLOOLuuWI/view', cover: 'https://i.postimg.cc/rscZDTgL/II-Congresso-Municipal.png' },
    ]
  },
  {
    id: 'politicas',
    title: 'Acompanhamentos das Políticas Públicas para a Educação',
    items: [
      { title: 'Dez Meses de Administração: O Que Mudou', link: 'https://drive.google.com/file/d/1FAxI0zM1cWUq4r5ZSD1lUDWyoxzyUtLD/view', cover: 'https://i.postimg.cc/3N7fkh1c/Dez-Meses-de-Administracao.png' },
      { title: 'Construindo a Educação Pública Popular - Ano 2', link: 'https://drive.google.com/file/d/1EUS8CKtfV4sF4enuIBm5mCf8tj9Fd2jD/view', cover: 'https://i.postimg.cc/508k9yBx/Construindo-a-Educacao-Publica-Popular.png' },
      { title: 'Construindo a Educação Pública Popular - Caderno 22 Meses', link: 'https://drive.google.com/file/d/1ExLk4I_Hu9wX8oVFJUBhXCCGK5SWzN9j/view', cover: 'https://i.postimg.cc/MGCF8VQn/Construindo-a-Educacao-Publica-Popular-Caderno-22.png' },
      { title: 'Construindo a Educação Pública Popular - Diretrizes e Propriedades para 1991', year: '1991', link: 'https://drive.google.com/file/d/1EMjXv5LLf6dOGDPUdkySuxuXnvad5YXi/view', cover: 'https://i.postimg.cc/HLqhCXyJ/Construindo-a-Educacao-Publica-Popular-Diretrizes.png' },
      { title: 'Planejamento e Instrumento de Mobilização Popular', year: '1992', link: 'https://drive.google.com/file/d/1EPz7DhM9Kx4nvwNPEzmVyhhQFueXUfPn/view', cover: 'https://i.postimg.cc/wMVfJr4Z/Planejamento-e-Instrumento.png' },
      { title: 'Balanço Geral da SME - Projeção Trienal', year: '1992', link: 'https://drive.google.com/file/d/1EzhW3x66jWuxU9OVWlANiF1rfKkgTA9U/view', cover: 'https://i.postimg.cc/GpW51Gyc/Balanc-o-Geral-da-SME.png' },
    ]
  },
  {
    id: 'regimento',
    title: 'Regimento das Escolas Municipais',
    items: [
      { title: 'Regimento Comum das Escolas Municipais de São Paulo', year: '1992', link: 'https://drive.google.com/file/d/1EMgLln0LAoCJqDOi078F7vHDLmQx5PsK/view', cover: 'https://i.postimg.cc/MHDPRLrk/Regimento-Comum-das-Escolas.png' },
    ],
    level2: [
      {
        title: 'Regimento em Ação (1992)',
        items: [
          { title: 'Regimento em Ação - Caderno 1', year: '1992', link: 'https://drive.google.com/file/d/10FKRmOci3YqMeSb7lqCj_FoB1zlW3iPW/view', cover: 'https://i.postimg.cc/PJ43Z7Fk/Regimento-em-Acao-Caderno-1.png' },
          { title: 'Regimento em Ação - Caderno 2', year: '1992', link: 'https://drive.google.com/file/d/10KzGJEQI1KdTF0xi31JxcTYt6NXToUef/view', cover: 'https://i.postimg.cc/nrkR7Wwp/Regimento-em-Acao-Caderno-2.png' },
          { title: 'Regimento em Ação - Caderno 3', year: '1992', link: 'https://drive.google.com/file/d/10P3A3LByOU28p8aAfx28AfsqSyA-9FC9/view', cover: 'https://i.postimg.cc/C5NPD26w/Regimento-em-Acao-Caderno-3.png' },
          { title: 'Regimento em Ação - Caderno 4', year: '1992', link: 'https://drive.google.com/file/d/107rzS5xu3W9PBrVi_dPPUAiC_Kp32vWj/view', cover: 'https://i.postimg.cc/4y5Lt0FJ/Regimento-em-Acao-Caderno-4.png' },
          { title: 'Regimento em Ação - Caderno 5', year: '1992', link: 'https://drive.google.com/file/d/10Bg1uybfd9pBTjMXP57TcWk7V5og1yLB/view', cover: 'https://i.postimg.cc/6q0jRP16/Regimento-em-Acao-Caderno-5.png' },
          { title: 'Regimento em Ação - Caderno 6', year: '1992', link: 'https://drive.google.com/file/d/104rPr9QwOscoCMq90eaeTsA2yZ6cN0qa/view', cover: 'https://i.postimg.cc/GtQ7YfSp/Regimento-em-Acao-Caderno-6.png' },
        ]
      },
    ]
  },
  {
    id: 'estatuto',
    title: 'Estatuto do Magistério Público Municipal de São Paulo',
    items: [
      { title: 'Estatuto do Magistério Público Municipal de São Paulo', link: 'https://drive.google.com/file/d/1EPwpiJrKfZIVZCip8NQspnqjNgPGQvp0/view', cover: 'https://i.postimg.cc/Xq31rWLm/Estatuto-do-Magisterio.png' },
    ]
  }
];

function ItemGrid({ items }: { items: ArchiveItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10">
      {items.map((item, idx) => (
        <ArchiveItemCard key={idx} item={item} />
      ))}
    </div>
  );
}

function ArchiveItemCard({ item }: { item: ArchiveItem, key?: any }) {
  const defaultPlaceholder = "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=400&h=600&auto=format&fit=crop&fm=jpg";
  
  return (
    <motion.a
      href={item.link}
      whileHover={{ y: -5 }}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-3 group/item h-full"
    >
      <div className="aspect-[3/4] bg-pf-feature border border-subtle flex flex-col items-center justify-center text-center relative overflow-hidden group-hover/item:border-pf-red transition-colors">
        <img 
          src={item.cover || defaultPlaceholder} 
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/item:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pf-dark/80 via-pf-dark/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-pf-red opacity-60"></div>
        
        <div className="relative z-10 p-4 flex flex-col items-center justify-end h-full w-full">
          {item.year && (
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/90 bg-pf-red/80 px-2 py-0.5 rounded-full mb-3 shadow-lg">
              {item.year}
            </span>
          )}
          <h4 className="text-[10px] font-bold leading-tight px-1 uppercase tracking-tight line-clamp-4 text-white drop-shadow-md">
            {item.title}
          </h4>
        </div>
      </div>

      <div className="px-0.5">
        <h3 className="font-bold text-[13px] leading-tight group-hover/item:text-pf-red transition-colors mb-1 line-clamp-3">
          {item.title}
        </h3>
        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-pf-red">
          Baixe o PDF →
        </div>
      </div>
    </motion.a>
  );
}

export default function SMEArchive() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryImages = [
    { src: "https://i.postimg.cc/02hWS7Vp/foto1.jpg", alt: "Registros históricos SME" },
    { src: "https://i.postimg.cc/zX4thTxF/foto2.png", alt: "Educadores em atividade" },
    { src: "https://i.postimg.cc/WbxWZ05k/foto3.jpg", alt: "Encontros de formação" },
    { src: "https://i.postimg.cc/pX3GjKs5/foto4.jpg", alt: "Processos educativos" },
    { src: "https://i.postimg.cc/FswWS0Tx/foto5.jpg", alt: "Gestão Paulo Freire" },
    { src: "https://i.postimg.cc/65FjZCMz/foto6.png", alt: "Equipe técnica SME" },
    { src: "https://i.postimg.cc/HsFZMb6B/foto7.png", alt: "Reorientação Curricular" },
    { src: "https://i.postimg.cc/DyRjG1xx/foto8.png", alt: "Escola Pública Popular" },
    { src: "https://i.postimg.cc/CxDvsd2P/foto9.jpg", alt: "Memória da educação" },
    { src: "https://i.postimg.cc/vZ9PtDjF/foto10.png", alt: "Diálogos com a rede" },
    { src: "https://i.postimg.cc/mgMdyhqx/foto11.jpg", alt: "Seminários e debates" },
    { src: "https://i.postimg.cc/rwWhNzbT/foto12.jpg", alt: "Produção de materiais" },
    { src: "https://i.postimg.cc/JzJT5tgL/foto13.jpg", alt: "Legado freireano" },
  ];

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="bg-pf-bg min-h-screen">
      {/* Hero Section */}
      <section className="py-24 border-b-subtle bg-pf-bg">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-pf-red/20"></div>
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-pf-red">Acervo Histórico</span>
            <div className="h-px flex-1 bg-pf-red/20"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 text-center text-pf-dark">
            Secretaria Municipal de Educação <br />
            <span className="text-pf-red">1989 — 1992</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-6 text-pf-muted text-base md:text-lg leading-relaxed text-center">
            <p>
              De 1989 a 1992, durante a gestão da prefeita Luiza Erundina, o município de São Paulo vivenciou uma experiência singular em termos de educação. Tendo como inspiração e fundamento as ideias de Paulo Freire, então Secretário Municipal de Educação, as escolas, seus diretores, coordenadores, professores, funcionários, alunos, pais e comunidades foram envolvidos em um movimento amplo e participativo de construção de uma educação democrática.
            </p>
            <p>
              Nomeado como Reorientação Curricular, esse movimento traduziu-se em renovação para as escolas da rede, sob todos os aspectos, fossem eles materiais, curriculares ou de gestão. A partir de um contínuo diálogo entre os diferentes colegiados e as escolas, diversos projetos foram construídos e outros, já existentes, foram repensados à luz das necessidades que se colocavam nessa busca pela qualidade da educação.
            </p>
            <p>
              Os documentos aqui apresentados são registros parciais da implementação da política educacional conduzida pela gestão de Paulo Freire e Mario Sergio Cortella à frente da Secretaria Municipal de Educação no governo da Prefeita Luiza Erundina.
            </p>
            <p>
              São documentos que explicitam fatos, dados, reflexões e resultados parciais do desenvolvimento dos princípios e pressupostos anunciados nos planos de governo, principalmente na Carta que Paulo Freire encaminhou à rede de escolas no primeiro mês do ano letivo de 1989 (<em>Aos que fazem a educação conosco em São Paulo: Construindo a educação pública e popular</em>).
            </p>
            <p>
              Seus conteúdos foram registrados a partir do diálogo intenso que acontecia nos diferentes colegiados da secretaria, onde as equipes centrais decidiam com as equipes das dez regiões da cidade, bem como na interlocução com os representantes das universidades e dos movimentos sociais e outros parceiros da sociedade civil.
            </p>
            <p>
              Devem ser vistos como a expressão de uma dinâmica de trabalho onde se priorizava o diálogo, a participação e o registro como instrumento metodológico.
            </p>
            <p>
              A produção desse material se destinava ao compartilhamento dos envolvidos nas frentes de trabalho; portanto, foi produzido em sua maioria nas gráficas da secretaria, com a revisão textual feita pelas diferentes equipes de trabalho, sem uma produção gráfica padronizada.
              Trata-se, portanto, de documentação histórica que não foi revisada com relação às atuais diretrizes acordadas para a língua portuguesa.
            </p>

            {/* Gallery Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedIndex(idx)}
                  className="aspect-square overflow-hidden rounded-sm bg-pf-feature group relative cursor-pointer"
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-pf-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest bg-pf-dark/60 px-3 py-1.5 backdrop-blur-sm rounded-[2px] border border-white/20">Ver foto</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Folheto Comemorativo Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-10 bg-pf-feature p-8 md:p-12 border border-subtle relative overflow-hidden group">
                <div className="w-48 md:w-56 flex-shrink-0 shadow-2xl transform group-hover:rotate-1 transition-transform duration-500">
                  <img 
                    src="https://i.postimg.cc/x8wyrKCj/image-2026-05-01-153135938.png" 
                    alt="Folheto Comemorativo"
                    className="w-full h-auto border border-subtle shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 text-center md:text-left space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pf-red bg-pf-red/10 px-3 py-1 rounded-full">Destaque</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-pf-dark">Folheto Comemorativo</h3>
                  <p className="text-pf-muted text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
                    Baixe o folheto produzido em celebração ao legado da gestão que transformou a educação paulistana, contendo marcos e registros fundamentais desse período histórico.
                  </p>
                  <div className="pt-4">
                    <a 
                      href="https://drive.google.com/file/d/1W6xJiY3MiOt1wAZ7kYtbF-A860Cm1OMK/view" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-pf-red text-white px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:invert transition-all"
                    >
                      <FileText size={18} />
                      Download do Folheto (PDF)
                    </a>
                  </div>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute -right-8 -bottom-8 text-pf-red opacity-5 transform rotate-12 hidden md:block">
                  <Award size={200} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col gap-32">
            {ARCHIVE_CONTENT.map((category) => (
              <div key={category.id} className="scroll-mt-24">
                <div className="border-l-4 border-pf-red pl-8 mb-16">
                  <h2 className="text-4xl font-bold tracking-tighter text-pf-red mb-12">{category.title}</h2>
                  {category.items && (
                    <div className={category.level2 || category.level3 ? "mb-16" : ""}>
                      <ItemGrid items={category.items} />
                    </div>
                  )}
                </div>

                {category.level2 && (
                  <div className="space-y-24">
                    {category.level2.map((l2, idx) => (
                      <div key={idx} className="pl-8">
                        <div className="mb-10">
                          <h3 className="text-2xl font-bold tracking-tight text-pf-blue mb-4">{l2.title}</h3>
                          <div className="h-0.5 w-16 bg-pf-blue/30"></div>
                        </div>
                        
                        {l2.items && <ItemGrid items={l2.items} />}
                        
                        {l2.level3 && (
                          <div className="space-y-16 mt-16">
                            {l2.level3.map((l3, idx3) => (
                              <div key={idx3}>
                                <h4 className="text-xl font-bold text-pf-dark mb-8">{l3.title}</h4>
                                {l3.items && <ItemGrid items={l3.items} />}
                                {l3.level4 && (
                                  <div className="space-y-12 mt-12">
                                    {l3.level4.map((l4, idx4) => (
                                      <div key={idx4}>
                                        <h5 className="text-base font-bold tracking-wider text-pf-dark/70 mb-6">{l4.title}</h5>
                                        <ItemGrid items={l4.items} />
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {category.level3 && !category.level2 && (
                   <div className="space-y-24 pl-8">
                     {category.level3.map((l3, idx3) => (
                       <div key={idx3}>
                         <h3 className="text-xl font-bold text-pf-dark/90 mb-10">{l3.title}</h3>
                         {l3.items && <ItemGrid items={l3.items} />}
                         {l3.level4 && (
                           <div className="space-y-16 mt-16">
                             {l3.level4.map((l4, idx4) => (
                               <div key={idx4}>
                                 <h4 className="text-sm font-bold uppercase tracking-widest text-pf-red/60 mb-8">{l4.title}</h4>
                                 <ItemGrid items={l4.items} />
                               </div>
                             ))}
                           </div>
                         )}
                       </div>
                     ))}
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-pf-feature border-y border-subtle">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-6">Ajude a construir este acervo</h2>
          <p className="text-pf-muted mb-8 leading-relaxed">
            Se você possui documentos, fotos ou registros deste período e deseja contribuir para a preservação desta memória, entre em contato conosco.
          </p>
          <a 
            href="mailto:coletivopaulofreire1@gmail.com"
            className="inline-block bg-pf-red text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:invert transition-all"
          >
            Contribuir com o Acervo
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] bg-pf-dark/95 backdrop-blur-md flex items-center justify-center p-5 md:p-20"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-10 right-10 text-white hover:text-pf-yellow transition-colors z-[110]"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={32} />
            </motion.button>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 md:left-10 text-white hover:text-pf-yellow transition-colors z-[110]"
              onClick={handlePrev}
            >
              <ChevronLeft size={48} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 md:right-10 text-white hover:text-pf-yellow transition-colors z-[110]"
              onClick={handleNext}
            >
              <ChevronRight size={48} />
            </motion.button>

            <div className="relative group max-w-full max-h-full flex flex-col items-center gap-4">
              <motion.img
                key={selectedIndex}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[80vh] object-contain shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              />
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={`text-${selectedIndex}`}
                className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold"
              >
                {selectedIndex + 1} / {galleryImages.length}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
