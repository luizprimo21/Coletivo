import { motion } from 'motion/react';
import { ArrowLeft, Facebook, ExternalLink, Calendar } from 'lucide-react';

interface DiarioCronologiaProps {
  onBack: () => void;
}

export default function DiarioCronologia({ onBack }: DiarioCronologiaProps) {
  const groups = [
    {
      date: '27 de agosto de 2022',
      items: [
        {
          id: 1,
          title: 'Mochilão Libertário: O Início',
          description: 'Primeira postagem compartilhando a jornada.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/826990981806510/',
          width: 267,
          height: 600,
        }
      ]
    },
    {
      date: '29 de agosto de 2022',
      items: [
        {
          id: 2,
          title: 'Reflexões sobre a Educação',
          description: 'Discussão sobre práticas libertárias no cotidiano escolar.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02UmxWSEiaLBLZTDmBw8qVME5Y1CgAhpbZMPsYrLVShavmwu23YEnwRBtTxW2C4SL9l',
          width: 500,
          height: 698,
        },
        {
          id: 3,
          title: 'Diálogo na Comunidade',
          description: 'Intervenção pedagógica em coletivo local.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02YDp6QgP1HmuDqDf5sEMhCNjcQksM4oHxaSR2ZMM4keptVjgShaL5gncsGS5ZD22hl',
          width: 500,
          height: 588,
        },
        {
          id: 4,
          title: 'Vivências na Estrada',
          description: 'Relato em vídeo sobre as passagens pelo Uruguai.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/1777006849348710/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '30 de agosto de 2022',
      items: [
        {
          id: 5,
          title: 'Encontros e Saberes',
          description: 'Compartilhando experiências de educação popular.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/447377530745951/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '31 de agosto de 2022',
      items: [
        {
          id: 6,
          title: 'A Práxis na Prática',
          description: 'Análise de contexto e atuação em rede.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0qyLXaTAaTrVj3o9G59SSeLV7BD4wZMBTisoeQ7McpPWwD9aCjjARk8sizGdryYGVl',
          width: 500,
          height: 510,
        },
        {
          id: 7,
          title: 'O Caminho se Faz Caminhando',
          description: 'Vídeo-relato da jornada pela América Latina.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/1990426051146077/',
          width: 267,
          height: 591,
        },
        {
          id: 8,
          title: 'Panorama do Mochilão',
          description: 'Live informativa sobre os próximos passos da expedição.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/1241550543351149/',
          width: 560,
          height: 423,
          aspect: 'landscape'
        }
      ]
    },
    {
      date: '1 de setembro de 2022',
      items: [
        {
          id: 9,
          title: 'Rumo ao Sul',
          description: 'Seguindo a jornada pela espinha dorsal do continente.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02rJZJv8jrG9reGdSV5Y7xJv2UYw9VQ6D2q3JYgtLyHUniWbCdJ3EQSy4pFUPbvmFUl',
          width: 500,
          height: 806,
        },
        {
          id: 10,
          title: 'Conexões Pedagógicas',
          description: 'Mapeando novos pontos de encontro.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02gUGBuoWkKJgV26ktQtiCqCpcBpQ9ZUAi21jVjgKakNLD6GZsumeFFwe6vCix1rgxl',
          width: 500,
          height: 250,
        }
      ]
    },
    {
      date: '2 de setembro de 2022',
      items: [
        {
          id: 11,
          title: 'Educação Libertária em Debate',
          description: 'Rodas de conversa e trocas de experiências.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0245T34dzknm1uada5jdpJinAyiFdm3KCW4aeBC268cBtnJRZTXJsUL4c5gBnBt76Fl',
          width: 500,
          height: 460,
        },
        {
          id: 12,
          title: 'Diário de Bordo',
          description: 'Relato em vídeo sobre o percurso no Uruguai.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/1252560001953937/',
          width: 267,
          height: 591,
        },
        {
          id: 13,
          title: 'Saberes Compartilhados',
          description: 'A força da educação popular na estrada.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0345tK8E7h51uQxgZ44RPueJn2H33QZNRTo8t534EXkhtBvJnxiBumEpX3U5XqJYwvl',
          width: 500,
          height: 679,
        }
      ]
    },
    {
      date: '3 de setembro de 2022',
      items: [
        {
          id: 14,
          title: 'Caminhos de Paulo Freire',
          description: 'Preservando o legado na América do Sul.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02NyGEgyNGDG33oicmZBGurcz8Y5pz2WfQUUWjnbWjmZ9Xyy1D32Qs28EY8Lo5UPnnl',
          width: 500,
          height: 672,
        },
        {
          id: 15,
          title: 'Vídeo-Relato',
          description: 'Impressões e diálogos em solo uruguaio.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/641071353946965/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '4 de setembro de 2022',
      items: [
        {
          id: 16,
          title: 'Integração Latino-Americana',
          description: 'A educação como força de união entre os povos.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0333i9mKcmhWUiS3cJcVsnxTQkXDdgfqZdVceS3sE9svuHA6YwTBMB6GY6N29P9C7dl',
          width: 500,
          height: 511,
        },
        {
          id: 17,
          title: 'Processos Formativos',
          description: 'Registros da jornada libertária.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/1318702572212266/',
          width: 267,
          height: 591,
        },
        {
          id: 18,
          title: 'Territórios e Vivências',
          description: 'Explorando novas realidades pedagógicas.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02EXM6s3GPPH7efpFdsNi3vs9G9b69ktEtD73Zh8cB3o6o1d1RuDfKX9NUHA7oXtwal',
          width: 500,
          height: 748,
        },
        {
          id: 19,
          title: 'Diálogos Urgentes',
          description: 'Temas centrais da educação decolonial.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02VZ4aQjZTdZxyZC6JmcqjJPFLcpe5aEeztRv1qq9g6KPiJTzzTSvFPKQ78WV5SQDTl',
          width: 500,
          height: 450,
        }
      ]
    },
    {
      date: '5 de setembro de 2022',
      items: [
        {
          id: 20,
          title: 'Educação Popular',
          description: 'Práticas de resistência e construção democrática.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid027D4nfg7xfp2LVHBt8QydZ2SMiLSEwzJgSTqbaPZ1hP9641cxDXj6i6K6n7KfnKSFl',
          width: 500,
          height: 767,
        },
        {
          id: 21,
          title: 'Memórias do Mochilão',
          description: 'Fragmentos da caminhada libertária.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02zicnfref9Uwkdnt9jxXFPPkmadHfiL9inxK4TGhiHEvbf33J5F8BJqSYRNhPdTP3l',
          width: 500,
          height: 250,
        }
      ]
    },
    {
      date: '6 de setembro de 2022',
      items: [
        {
          id: 22,
          title: 'Horizontes da Educação',
          description: 'Vídeo sobre as trocas em Montevidéu.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/1694849890915243/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '7 de setembro de 2022',
      items: [
        {
          id: 23,
          title: 'Cartografia de Afetos',
          description: 'Traçando caminhos freireanos.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid089tcJdtz9CNqgisszAzMTTnhPm4VHDv3LNkgvCsTMwTCn1sdn1tgv3rTuEYoGGqhl',
          width: 500,
          height: 705,
        },
        {
          id: 24,
          title: 'Relato da Expedição',
          description: 'Avançando pelo sul do continente.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/669363694040369/',
          width: 267,
          height: 591,
        },
        {
          id: 25,
          title: 'Práxis e Resistência',
          description: 'Reflexões sobre a educação na América Latina.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02tYJKguN7Adu1m878ADiGu8nBsbHVRtgpqRf7F7fiaAePX68HVHHGxE6NT2DPyQ64l',
          width: 500,
          height: 250,
        }
      ]
    },
    {
      date: '8 de setembro de 2022',
      items: [
        {
          id: 26,
          title: 'Encontros na Argentina',
          description: 'Iniciando as intervenções em Buenos Aires.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0G1jW8aAHA5pwfUEwvs3TGRqJuoifTJbJe1tSSRxJoCynw18HF86RMoLhEAVkVXFXl',
          width: 500,
          height: 698,
        },
        {
          id: 27,
          title: 'Saberes em Movimento',
          description: 'Novas rodas de conversa e aprofundamentos.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0RFQgnf8potfPGhCMkiXf8CS8NtWJZfS5G2mW1c6Dgrk8WCpUxePLkJEaet22ti8yl',
          width: 500,
          height: 653,
        }
      ]
    },
    {
      date: '9 de setembro de 2022',
      items: [
        {
          id: 28,
          title: 'Intervenção Urbana',
          description: 'Vídeo da atividade pedagógica em praça pública.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/486922503239311/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '10 de setembro de 2022',
      items: [
        {
          id: 29,
          title: 'Educação na Prática',
          description: 'Mais um dia de trocas intensas em solo argentino.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/485981456399501/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '11 de setembro de 2022',
      items: [
        {
          id: 30,
          title: 'Caminhando com Resistência',
          description: 'Análise de conjuntura e educação libertária.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid024dSvnnVcxpjftKTpmTtqjQCqyxCZ2fF5yBYWmg7X82MB2QsQLgURnZFW2Hk1fnmKl',
          width: 500,
          height: 748,
        },
        {
          id: 31,
          title: 'Registros do Caminho',
          description: 'Vídeo-memória das passagens por Buenos Aires.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/797225875053052/',
          width: 267,
          height: 591,
        },
        {
          id: 32,
          title: 'Polifonia de Vozes',
          description: 'A pluralidade de saberes na educação popular.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0PMSAJa7mwXHAc29SNKEiXTiaTfUdk3t8kgUVZ911KmKDaZJWkZe7CBCZJmYT8HwBl',
          width: 500,
          height: 698,
        }
      ]
    },
    {
      date: '12 de setembro de 2022',
      items: [
        {
          id: 33,
          title: 'Novos Rumos',
          description: 'Planejando as próximas etapas da jornada sul-americana.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02AF7VkNkfCdhXDZEU1zBmxvzheBxyf1tva5gAdR51EbkdjadVpmVGbfeRYSAXQrCml',
          width: 500,
          height: 654,
        }
      ]
    },
    {
      date: '13 de setembro de 2022',
      items: [
        {
          id: 34,
          title: 'Experiências Estéticas',
          description: 'A arte como ferramenta de libertação.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/1072068310346907/',
          width: 267,
          height: 591,
        },
        {
          id: 35,
          title: 'Ecoando Saberes',
          description: 'Compartilhando reflexões decoloniais.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0z7nF2RniRvKe5HtuyNmqL4xw5XusCX1DPqSkNX4KDEahCYexF8BanetdjzoK6FiDl',
          width: 500,
          height: 704,
        },
        {
          id: 36,
          title: 'Diálogos de Fronteira',
          description: 'Eliminando barreiras através da educação.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0qNcHHEoM5gvthGNWZxbsQUKRKUAjpCFRGPWSpg4Rvbdxs5yVkkeHLJER6RiGfK3rl',
          width: 500,
          height: 654,
        }
      ]
    },
    {
      date: '14 de setembro de 2022',
      items: [
        {
          id: 37,
          title: 'Construindo o Coletivo',
          description: 'A pedagogia do oprimido na atualidade.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0t7BYYkKCuzM4fPzywNAd9znFvwLwAReCuHe1gEAtaE26X9y3Me4MhxUyYqqixizzl',
          width: 500,
          height: 773,
        },
        {
          id: 38,
          title: 'Nas Trilhas da América',
          description: 'Relato em vídeo da expedição pedagógica.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/533016641963630/',
          width: 267,
          height: 591,
        },
        {
          id: 39,
          title: 'Vozes da Liberdade',
          description: 'Registros sonoros e visuais da caminhada.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/633195151666248/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '15 de setembro de 2022',
      items: [
        {
          id: 40,
          title: 'Mística e Luta',
          description: 'A dimensão espiritual da educação popular.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02KZJNmjC45djZ42JazxAd8JxDLyz1hWBLZr8tjSWngMGVnzsbhGoEnNUakF42WdJl',
          width: 500,
          height: 640,
        },
        {
          id: 41,
          title: 'Territórios de Esperança',
          description: 'Onde a utopia se faz caminho.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02rAoajk9rM5NZU3br31EazHEyqWngZH2WZtuzy4MHuiuciao1hBPAEAKQq35bwyEYl',
          width: 500,
          height: 654,
        },
        {
          id: 42,
          title: 'Documento-Vídeo',
          description: 'Testemunhos da jornada libertária.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/1728528184163147/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '16 de setembro de 2022',
      items: [
        {
          id: 43,
          title: 'Educação Decolonial',
          description: 'Rompendos amarras e construindo autonomias.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02iEUzDVwoGfp73fz8CawKLqhrjV3tVzNxUijJ4igDiRXGWMtajY1Wo4BZPRPx3rxTl',
          width: 500,
          height: 673,
        },
        {
          id: 44,
          title: 'Cenas do Mochilão',
          description: 'Mais um registro da caminhada pedagógica.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/463305559084256/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '17 de setembro de 2022',
      items: [
        {
          id: 45,
          title: 'Narrativas de Vida',
          description: 'Vídeo curto sobre as histórias encontradas no caminho.',
          type: 'video',
          url: 'https://www.facebook.com/reel/1077874042874900/',
          width: 267,
          height: 591,
        },
        {
          id: 46,
          title: 'A Pedagogia do Encontro',
          description: 'Celebrando a diversidade de saberes.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02YFtU7mMpmaqfm4RmkERaFXydXUxDN7jQNSxQ6mYHZ4xHktgorHVDjf7VTApDe26Hl',
          width: 500,
          height: 628,
        }
      ]
    },
    {
      date: '18 de setembro de 2022',
      items: [
        {
          id: 47,
          title: 'Semeando Futuros',
          description: 'A educação como prática de liberdade no Mercosul.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid03539SG1ekfYqRSeC3CfqYQu3DTQ11kufHwvrKqJDvKzNChf7tozZ42TUfLkP6HNHgl',
          width: 500,
          height: 673,
        },
        {
          id: 48,
          title: 'Construção da Autonomia',
          description: 'Aprofundando os diálogos libertários.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02Yb7G4CZ4KbUBi4f3ispjNPqhrRChqpfibeWpcqdk39k2bpB82weJUSixcKZzXfZFl',
          width: 500,
          height: 495,
        }
      ]
    },
    {
      date: '19 de setembro de 2022',
      items: [
        {
          id: 49,
          title: 'Vivências Compartilhadas',
          description: 'Vídeo da atividade coletiva na estrada.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/3364558527107059/',
          width: 476,
          height: 591,
        },
        {
          id: 50,
          title: 'Pedagogia da Esperança',
          description: 'Mantendo viva a chama da transformação social.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0iHm5AoVCYz9yLpqztu47SdHQkoNoXBDjFDAzMmMFqMVpnDakHx8fKKnED6RqwF1Kl',
          width: 500,
          height: 549,
        }
      ]
    },
    {
      date: '20 de setembro de 2022',
      items: [
        {
          id: 51,
          title: 'Novas Perspectivas',
          description: 'Olhando para o futuro da educação popular.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02X4sGBgNG3LwJ7bBZ7nejWqLnWBakDF7vmNkcPAAQ1MLrknEHGa4dsHveBZVNKNrjl',
          width: 500,
          height: 619,
        },
        {
          id: 52,
          title: 'Práticas de Cuidado',
          description: 'A dimensão humana na educação libertária.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0mP5ojam8wN4yQhrZdMqSi8PwA8t7qK3NzJNhgxMDfe3nU21qasY9TQV4NyoViqNSl',
          width: 500,
          height: 729,
        },
        {
          id: 53,
          title: 'Diálogos de Rua',
          description: 'Vídeo das intervenções urbanas.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/2890988341207712/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '21 de setembro de 2022',
      items: [
        {
          id: 54,
          title: 'Resistência no Sul',
          description: 'A educação firme contra as opressões.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0vkWia4KgWCu1J25F11A7p2XNerCUNwcRQYkY9K6q1AqFhHeEDF8vuU7jDEZpiD7rl',
          width: 500,
          height: 673,
        },
        {
          id: 55,
          title: 'Educação em Rede',
          description: 'Fortalecendo os laços latino-americanos.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0Z2SsmgC2yYr8wsYgszwpFQ6M613AbT6x4az4nyDzXQ2Mez6np9g9hWum7aznQ7TCl',
          width: 500,
          height: 400,
        }
      ]
    },
    {
      date: '22 de setembro de 2022',
      items: [
        {
          id: 56,
          title: 'Cartografias Sociais',
          description: 'Vídeo sobre as dinâmicas de poder no território.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/847337303340687/',
          width: 267,
          height: 591,
        },
        {
          id: 57,
          title: 'Saberes Coletivos',
          description: 'Live informativa sobre a construção do conhecimento.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/644325447331640/',
          width: 560,
          height: 429,
          aspect: 'landscape'
        }
      ]
    },
    {
      date: '23 de setembro de 2022',
      items: [
        {
          id: 58,
          title: 'Diálogos Libertários',
          description: 'Vídeo sobre a práxis freireana em novos contextos.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/669405431510689/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '26 de setembro de 2022',
      items: [
        {
          id: 59,
          title: 'Educação em Movimento',
          description: 'Registros da jornada pela América Latina.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/5576039602516330/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '27 de setembro de 2022',
      items: [
        {
          id: 60,
          title: 'Autonomia e Liberdade',
          description: 'Apostando na educação como ferramenta de transformação.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0nyaryF2FGLSDtVYZTr4nzimLk5Nw8fT9GAcdZTxX9NnY2ZYeWzKt2EeEedFtmJodl',
          width: 500,
          height: 767,
        },
        {
          id: 61,
          title: 'Semeando Ideias',
          description: 'Vídeo-memória das intervenções pedagógicas.',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/1745287085839514/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '28 de setembro de 2022',
      items: [
        {
          id: 62,
          title: 'Tecendo Redes',
          description: 'A importância da articulação coletiva na educação.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid021Nx9WDTiSGQdJSJZJ7VRkJb42ww2qmCURJ13E8qTgRqkoTjADDuFosQS7sEzqy9vl',
          width: 500,
          height: 692,
        },
        {
          id: 63,
          title: 'Caminhos de Esperança',
          description: 'Novas perspectivas para o ensino libertário.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0dB9RUMdK6tVUFNdMDrPa2cz9VZEcCNn4HRamihgBH7qzrUSWkTN82XjWDEJD7EzBl',
          width: 500,
          height: 510,
        }
      ]
    },
    {
      date: '29 de setembro de 2022',
      items: [
        {
          id: 64,
          title: 'Narrativas Decoloniais',
          description: 'Ouvindo e aprendendo com as vozes periféricas.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid07H7EjdatHqo69EJacPVHRTdrx2v316F2JaNFjkpSNH5MHzhZXDp7jnf5EDsy5UoQl',
          width: 500,
          height: 654,
        },
        {
          id: 65,
          title: 'Práxis e Território',
          description: 'A educação que nasce do chão que pisamos.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02jjCJjBZkZMntpdzqg5vs8PUaRbGDiLpK22GSrqF8zMYVq7r52HsBek4SFUXPuRG3l',
          width: 500,
          height: 761,
        },
        {
          id: 66,
          title: 'Conexões Libertárias',
          description: 'Fortalecendo a rede de educação popular.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02XYVp2xKEv3vdkQDBn4yJhEqdteujvhTG859hbWNuAB8tJG2ToNyYMr3j9wtnsQqml',
          width: 500,
          height: 673,
        }
      ]
    },
    {
      date: '30 de setembro de 2022',
      items: [
        {
          id: 67,
          title: 'Encerramento do Ciclo',
          description: 'Balanço das atividades do mês de setembro.',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0jTudUW5fhPbUj41MpBbsYnDkjqF4pu4AFVNTMWDjwECtYRBRwjGNJtc9F1PufBMql',
          width: 500,
          height: 741,
        }
      ]
    },
    {
      date: '1 de outubro de 2022',
      items: [
        {
          id: 68,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid037YcYijKTQx3dBYFDhGsH3r4yvTHiEahbLawn6fLA1zrgMFdQVw7DGUy9fuyJh6Wal',
          width: 500,
          height: 667,
        }
      ]
    },
    {
      date: '3 de outubro de 2022',
      items: [
        {
          id: 69,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0LDvk5jkLzT6WHfmZjBH1uAsBtmiYQEJqW4qrvsnbBJhezeR4cb6qh6xcmxUeDFAzl',
          width: 500,
          height: 844,
        }
      ]
    },
    {
      date: '5 de outubro de 2022',
      items: [
        {
          id: 70,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0M9fART5TkRtQdqB8XZdhsLDPZ5f6Km1eCuP5UVMTcK2CqBqccgF89bjy1VxqQEAbl',
          width: 500,
          height: 673,
        },
        {
          id: 71,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid034ZJDeLCDw74FgvxQJBWAk2WPAcrvVkzYRWNtgiQq9paiZSRtcZvzgCxzoV5NYeQUl',
          width: 500,
          height: 474,
        },
        {
          id: 72,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0Cj41kiPnDoJsyynszmP72k32EHgzq9YQAi5ryZG24HZZwLcfGfL2eWScAAJtGEB8l',
          width: 500,
          height: 629,
        }
      ]
    },
    {
      date: '6 de outubro de 2022',
      items: [
        {
          id: 73,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid07xXrVZQRbHfAUf4RQjrvhcoxdrTdtfbrroS5Hv2fVxL6FPid6bS89KvctS36DdhGl',
          width: 500,
          height: 806,
        },
        {
          id: 74,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02ZpRWTn2zPP1NwJSTCwo7RUbDYtdTZPju5q7rCjWf958fh77fEh6njRkwpDPBGS9sl',
          width: 500,
          height: 769,
        },
        {
          id: 75,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02o8ksf3X9pPRBK7wrEE8WeJC2eoxq5hw9czsocmV4CSGmhpcnpmaJhwq1yvpdAUJhl',
          width: 500,
          height: 654,
        },
        {
          id: 76,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid03NPSbf7f9qSsnkdHcfm51ogayvvW2tG38J7twJJGFnfd52rrrKQHJR6UrWevhB5Nl',
          width: 500,
          height: 654,
        }
      ]
    },
    {
      date: '7 de outubro de 2022',
      items: [
        {
          id: 77,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0Swb7vreDQtwBX2SMf2JyJVgG3eGFQJe5qDydCx2756UpFfKZMeDXfeFEm56dSPFbl',
          width: 500,
          height: 654,
        },
        {
          id: 78,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0mamZhGX2GkKDmZjTwedBHCB6yYXUi41m1u6nFqXC8aWj86ooMihe3advtG9Mk6obl',
          width: 500,
          height: 480,
        }
      ]
    },
    {
      date: '8 de outubro de 2022',
      items: [
        {
          id: 79,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0sQzYEvw3Rzdwv2k2eiAXvkjMAUZwvySS7xLxjnfyyeUiC6KxYRTnLFQMuzEU9yX8l',
          width: 500,
          height: 731,
        },
        {
          id: 80,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0337yEZhLBaw8BE3ngb8XELSdP7hkY5wbd6i1aHviBN6JmomnRRfbBJ41ZbEzXod6Rl',
          width: 500,
          height: 654,
        },
        {
          id: 81,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0Ltb3bUvZdc2jmni9kHwtXuyhD8HKThep12gKJmpApKpGDxoUToPxnBCbDiznWkhql',
          width: 500,
          height: 673,
        }
      ]
    },
    {
      date: '9 de outubro de 2022',
      items: [
        {
          id: 82,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid03575U3Jpe65zhv2pAznGUsfFy5vJHFJdjRZoJBRGf9q4KZU8zKwmZ9QKYQ29AVZnNl',
          width: 500,
          height: 590,
        },
        {
          id: 83,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02zXNNEyusXM5ed41ii3EYw2i9CTCE7CVczLL3yPhopyJBmVwC4mgHcbHocWpHfDHLl',
          width: 500,
          height: 787,
        }
      ]
    },
    {
      date: '10 de outubro de 2022',
      items: [
        {
          id: 84,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0xs3g5T8p8p83bP2GiubmoPpqSLkcEKM2Nu75fzmWBK4keUX6gPbNGreuYXvPGf8tl',
          width: 500,
          height: 717,
        }
      ]
    },
    {
      date: '11 de outubro de 2022',
      items: [
        {
          id: 85,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0ue679oSu7qbphpYMJd3nQBcxki2xn6NwXtrjcDnQVNpLQGJyoCR5TTnd6gBe3krl',
          width: 500,
          height: 709,
        },
        {
          id: 86,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0hydd4PqiHWXQbBPdJexg9RwpXJMPkoYoxFDnnMCAkFSJWSQ3jkj5VxYy4cW7K6yAl',
          width: 500,
          height: 751,
        }
      ]
    },
    {
      date: '12 de outubro de 2022',
      items: [
        {
          id: 87,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02BAdFKgaE6r4wxB22v9PZVaMRCeZUQyqqY8FMBGEnBK24EVS5dCWRNxYAF2txzJgYl',
          width: 500,
          height: 654,
        }
      ]
    },
    {
      date: '13 de outubro de 2022',
      items: [
        {
          id: 88,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0QmfoZBS513s9Ywm34u1dQjq3P9Zofugau3QM6CMJeYktAG2fEo4seCfSAV26QFmpl',
          width: 500,
          height: 654,
        }
      ]
    },
    {
      date: '14 de outubro de 2022',
      items: [
        {
          id: 89,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02y4QNRJjDFh739uBcDZELjCc5bjS4W5PWabhkMaG5jXHHJG6oubAsKqtgAox74kNQl',
          width: 500,
          height: 673,
        },
        {
          id: 90,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0MypYEpv5A94PXxnRXVvpsKReDKsZVA6WnqHys2H3Jk42UsLSdZZi1DhPc8SnBNyWl',
          width: 500,
          height: 654,
        },
        {
          id: 91,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0Av6rsx6N4RA3djffGJ4gJ8Ea35hkmfcL4rHVs3N9iZ248eXaX2gJ8nkg8SX3dUQGl',
          width: 500,
          height: 574,
        }
      ]
    },
    {
      date: '15 de outubro de 2022',
      items: [
        {
          id: 92,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02dX8X4DquZZ66Yp4PPuuLpfKgDvHtjYoD8kQr1iFpVmgJ4ff5KrVgPjq7aGEYMseWl',
          width: 500,
          height: 751,
        },
        {
          id: 93,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0gw8TYt5U8UChNn3ygEjRVAEHTvdSVnnRMHQrFwURxvMTCegdZNunHEGo1WeYZiLnl',
          width: 500,
          height: 474,
        }
      ]
    },
    {
      date: '16 de outubro de 2022',
      items: [
        {
          id: 94,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02kVY1ahdMK72tNNXJ4n3j4hLYeDCUeNChm9oznxbNxFwH4GC8mLVaxWboaa9cWiuCl',
          width: 500,
          height: 614,
        }
      ]
    },
    {
      date: '17 de outubro de 2022',
      items: [
        {
          id: 95,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid038PkuYhJwLoa8N9B6uTGDUu9eN9yakTckJfpRKH1pftjH3F38SMRGB8y5dpg3sowdl',
          width: 500,
          height: 654,
        },
        {
          id: 96,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0zqpuQTMwrEWSX2vrHa978CqYCQ8jL3A9h2JB5VV7NrZ6cVZrEZ5siA5MwY9Ct2VVl',
          width: 500,
          height: 654,
        }
      ]
    },
    {
      date: '18 de outubro de 2022',
      items: [
        {
          id: 97,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0iYHX5ksE2X2hZvRjHKz9kYSHcURd7EqpR17zx3144WqR7drPEPu7Mv1KmmJuJFDil',
          width: 500,
          height: 789,
        }
      ]
    },
    {
      date: '19 de outubro de 2022',
      items: [
        {
          id: 98,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02nhRNHG4YGvc3nauVLpSiyvQJ73JUz2WjaFALWGdd68WbYFs4gTyQakaygyPHhj66l',
          width: 500,
          height: 725,
        },
        {
          id: 99,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid027Hypto5pSkxpYsmF64t9LaQd9xoWMcDTHZx7gz5iAJ2gvDvbQJqmh3q45zB7LqVzl',
          width: 500,
          height: 789,
        }
      ]
    },
    {
      date: '20 de outubro de 2022',
      items: [
        {
          id: 100,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02YUza45vnB5WTMA4AzmDeWHn8UBsdiCxazNEREUax5uKzdVqsotXzBeRvDPxwWAeel',
          width: 500,
          height: 396,
        },
        {
          id: 101,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02s3FybNqjFgspdZBeADmhRP3XVxpFk9EYkzfVA5Z9emgqUBSRBGKpcfxwJ1gCfizzl',
          width: 500,
          height: 709,
        },
        {
          id: 102,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02DDmqxnzLxCvg6BdK7FHrUTUYh1ixZdfDDMWzKQRo8L2dW88FxaX8ArdQXLYeiJvPl',
          width: 500,
          height: 712,
        }
      ]
    },
    {
      date: '22 de outubro de 2022',
      items: [
        {
          id: 103,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02n3xiYWYk18EJsoJqBfXkqx2AtpZLR96oCv5sFEgqjTwwAgJgZCgUZsgFKBaEurCEl',
          width: 500,
          height: 485,
        },
        {
          id: 104,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0DQUewsrRN9zPMhce4C72vi5WGrtZccWTtEttuzNq8n8Eu74wFsorw1PMQ6ReY422l',
          width: 500,
          height: 554,
        }
      ]
    },
    {
      date: '24 de outubro de 2022',
      items: [
        {
          id: 105,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02xRbkR1PAPhHsYv1JDyRmJTDFnRSprsbBc2oK6JNeuEcjhWYPoxZvsGCWRHAmo6Jfl',
          width: 500,
          height: 653,
        },
        {
          id: 106,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02Neb96nb192XxFUs47ByLjAe3u6iZyDJHQkigYKT29krpe3n4RVx4NrVxoc5oUM85l',
          width: 500,
          height: 654,
        }
      ]
    },
    {
      date: '25 de outubro de 2022',
      items: [
        {
          id: 107,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid01HPAT6sNXGc18ocPWJURybxyKZqsR4kh2tCAMtk4cFbGHon4mGwn6WJ65LGrg8NZl',
          width: 500,
          height: 600,
        }
      ]
    },
    {
      date: '27 de outubro de 2022',
      items: [
        {
          id: 108,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0evAYZpkqqufuPHKkqczMsgFHDUH6mdQxCJMjemW7jC3Eos1dUFQtQXrHocanzMg8l',
          width: 500,
          height: 480,
        }
      ]
    },
    {
      date: '28 de outubro de 2022',
      items: [
        {
          id: 109,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02Wh2Rd9RLN8nkB4tjV2KHvTFxn1gwAG9WYmHJAeHk5ykQZ3XFh2MMVsbBg8RvZ2kel',
          width: 500,
          height: 756,
        },
        {
          id: 110,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02p4pGi8UVX5cB1XZRuGFTqGCTMKNp1jXNLc36ZuSL8Hi7JsNR2ppbswyAS4hGd68nl',
          width: 500,
          height: 654,
        },
        {
          id: 111,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0RD7hBdvf9r2AGu8R4R4Lqy48Y98j3CGZiA84CU6RQCu7ccW9g3VdG1fXNa57QptJl',
          width: 500,
          height: 579,
        }
      ]
    },
    {
      date: '29 de outubro de 2022',
      items: [
        {
          id: 112,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0NW57GxyeKUmNfMHuzjuL7VtjAP1iLZ3oAoynFboi78puV2bSoFzvLEdijac7cY99l',
          width: 500,
          height: 690,
        }
      ]
    },
    {
      date: '30 de outubro de 2022',
      items: [
        {
          id: 113,
          title: '',
          description: '',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/569337078528160/',
          width: 267,
          height: 591,
        },
        {
          id: 114,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0yVxeuBsjmCxf1U3YCQLaJkeqGrT3uGPLoBvJR6E716au4E5X8LjiUbiPDABnzH1kl',
          width: 500,
          height: 645,
        }
      ]
    },
    {
      date: '31 de outubro de 2022',
      items: [
        {
          id: 115,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid09tajFVmC6h3hPLyMN5VU4hnti8zVaRTaEzQjRmKhAjr5eYCe1GMvmKexR866y225l',
          width: 500,
          height: 653,
        },
        {
          id: 116,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid026MbQFsE47mKm1NRDZXtvd55R8pfy7esYTDu5z345Xxj1C9xNija5y7XdqH4eo8zXl',
          width: 500,
          height: 654,
        }
      ]
    },
    {
      date: '1 de novembro de 2022',
      items: [
        {
          id: 117,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0HzWktp2WiNeUoqkzL5ysYvgpdkrRMzevwbEbfiNjJvw4RHX6XtwtjthZ7LgC5m5xl',
          width: 500,
          height: 654,
        },
        {
          id: 118,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02SXEY6SSJxNhQZx4b3VQjq4CAZJA3hkQrz86E6nvhBPTEpeFaJB6qrcMUFihXmT7gl',
          width: 500,
          height: 637,
        }
      ]
    },
    {
      date: '2 de novembro de 2022',
      items: [
        {
          id: 119,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02CXas6DFHKBs47GJdGo8LSayHBN1ntMydj4yC2pbWaRs5soKCG6f9K7xN88TTWbbhl',
          width: 500,
          height: 507,
        },
        {
          id: 120,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02TP9HUHzR4Usi2dmAda9dV2a6voy3Jtr5v3AVT2XhRZVYPz1qNDn8BvD5UdvBVpyil',
          width: 500,
          height: 654,
        },
        {
          id: 121,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0f9pLrPjmjKrHnQzGiSV2uPikPe4ZfoGyPSnAzGLNyphM1FezQ6xR8LWUuzMsGWrrl',
          width: 500,
          height: 562,
        }
      ]
    },
    {
      date: '3 de novembro de 2022',
      items: [
        {
          id: 122,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0sMwBXFoMSN48A5eRHqTRU6AH8yFCGQZNmtS2oLw75NqNygHhM2k9s8kuPAnPxoDGl',
          width: 500,
          height: 653,
        },
        {
          id: 123,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02855qzVnjs1VVNttz6JMDK16XVnM8zn86sBfFdW5uDfp76Adv7423WTPdFYKeEfRXl',
          width: 500,
          height: 654,
        },
        {
          id: 124,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02dZ6XwsRrGhasm6XYfAjpVk1NQW9587cHuiAc8YHALCnMLd2eDxRftFLdLoJsAZ89l',
          width: 500,
          height: 654,
        }
      ]
    },
    {
      date: '4 de novembro de 2022',
      items: [
        {
          id: 125,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02RyfxTsKSf5trea7rF5Q6jTprc2qJAjpKpSgZ7s42HLwmM7bmKFndZ3X5z7JsyQ5vl',
          width: 500,
          height: 654,
        },
        {
          id: 126,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0vbT1EUKVHmSQuhPZy7HC7KrVAEhQATJHo46HKcNUR2TWQEtdzfjhpDJJHCDpFrD4l',
          width: 500,
          height: 630,
        }
      ]
    },
    {
      date: '7 de novembro de 2022',
      items: [
        {
          id: 127,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02gUNYjEud5vdp8pp75bVXTqrho6K7jsbssQzmXDfUCdESTg8f8ZSbAAP3W4BiV2agl',
          width: 500,
          height: 723,
        }
      ]
    },
    {
      date: '8 de novembro de 2022',
      items: [
        {
          id: 128,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0TyYb67zV5yx7VdEDEGuyKb2LyfVpUFd9jBxYXahbtnHwFHtq2aY9NebQszDyexfBl',
          width: 500,
          height: 654,
        },
        {
          id: 129,
          title: '',
          description: '',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/5377086909083371/',
          width: 267,
          height: 591,
        },
        {
          id: 130,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02NZtme58hDeaayFQDkEbeSL8hdBHbx3cF84EKhG2R8eWsFU7jtbx3FfeTXrxvuAL3l',
          width: 500,
          height: 609,
        }
      ]
    },
    {
      date: '9 de novembro de 2022',
      items: [
        {
          id: 131,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0CAqRpvkGMS7srZHjWPTc8nVfStQTwXK6xekR2imxuheFqbp2Wz58ewYS3mEuyZ8Ml',
          width: 500,
          height: 684,
        }
      ]
    },
    {
      date: '10 de novembro de 2022',
      items: [
        {
          id: 132,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02YkwPNukyZAxqWiAyNrWaZnMLYQSHm6F4xsYMNYrmWNSeNAj9NVEXYmjiLqfZfaLGl',
          width: 500,
          height: 609,
        },
        {
          id: 133,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02pwVMmQK28Aanrqtq2Meayzx5EKKVgw9UY8pAusqF6A6snUoHRQSw2uioNXjqmv1yl',
          width: 500,
          height: 590,
        },
        {
          id: 134,
          title: '',
          description: '',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/1240448883199973/',
          width: 267,
          height: 591,
        }
      ]
    },
    {
      date: '11 de novembro de 2022',
      items: [
        {
          id: 135,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid025GgwCN8yDZK6XjM2bNM13bdRjZ4MNDBYf14ZNPJ8Pi3EbaPFYnbXACMm8w8c4JXyl',
          width: 500,
          height: 673,
        }
      ]
    },
    {
      date: '12 de novembro de 2022',
      items: [
        {
          id: 136,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02u5XuAsDegQBm8zf8Ck7hJgwtfxNzmYR47fA7d1CFuXi2NATBjHmoYWNi37EYEuGml',
          width: 500,
          height: 466,
        },
        {
          id: 137,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02knnp4isjzk6v7cu3DKieDZ6gX8FXkY4toPqw2zcYD41TWapUewS4fUvBu9EcLuLLl',
          width: 500,
          height: 582,
        }
      ]
    },
    {
      date: '13 de novembro de 2022',
      items: [
        {
          id: 138,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0Ja3Kyo6Dt2M7jiTVRw8xYfb7v8JQx2EFgQJLf29N2VvvbKHoeKwr6yeNNDqpbrfvl',
          width: 500,
          height: 466,
        }
      ]
    },
    {
      date: '14 de novembro de 2022',
      items: [
        {
          id: 139,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0sM6W8bHF6pkxk5CA46KJhHbxmRfssHUH2jg5VNFKMc8qrb8CiqstUDgjsD1j9TCl',
          width: 500,
          height: 692,
        },
        {
          id: 140,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02bUJvZih7ViNMHj3HsbVaLvWVvG6ohtdUyXHd6Ggd9fgTQW5TExF4WF3jkvQqMFyPl',
          width: 500,
          height: 674,
        }
      ]
    },
    {
      date: '15 de novembro de 2022',
      items: [
        {
          id: 141,
          title: '',
          description: '',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/881531643212050/',
          width: 267,
          height: 591,
        },
        {
          id: 142,
          title: '',
          description: '',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/467275508626329/',
          width: 267,
          height: 591,
        },
        {
          id: 143,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02fHEyyiXBb3mkcEqb1EF89VUSUhzcVD8GWc3nxFzg1UEaqQjZNwXzDbQWv7y1t3DWl',
          width: 500,
          height: 692,
        }
      ]
    },
    {
      date: '16 de novembro de 2022',
      items: [
        {
          id: 144,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0xAK2HrcsrRUTWwZ23bRwY3Kqh5WkJvbSGYbyqsYmrxnBrKarUAKdepXnhwtQ2SsXl',
          width: 500,
          height: 590,
        },
        {
          id: 145,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0cK8PambdkPZeJAeiA1XGfeAtyFW8cuybAnh1nZaXesUqhWQK7WArPYJKMH8AgVhWl',
          width: 500,
          height: 692,
        }
      ]
    },
    {
      date: '17 de novembro de 2022',
      items: [
        {
          id: 146,
          title: '',
          description: '',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/561066215829392/',
          width: 267,
          height: 591,
        },
        {
          id: 147,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02nwQ7qy2bGTtUyvyMS1kX93kacwajDQ8T9k4DwLfUf6Vk1qCHmu1xxRouPxfSaS51l',
          width: 500,
          height: 504,
        }
      ]
    },
    {
      date: '18 de novembro de 2022',
      items: [
        {
          id: 148,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0dcvHpBk8CU2454LgqyWHApBTAwLg6QYnanZtrvQxqmF8tmrkvNPE3hrNcxsXwM4Cl',
          width: 500,
          height: 466,
        },
        {
          id: 149,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0YrqVX5Qy7vnhhX7hGPqr2744x5dMKhhfNMMjJNaQoAYM59XW3bUhzKaGu7N41TDel',
          width: 500,
          height: 692,
        },
        {
          id: 150,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0XNzoCYZ1aYSLSnGbMK6KAcVNDaYm4chfht8FX5AZHsSRBG3jGAeiEKEgUC7LpuEdl',
          width: 500,
          height: 549,
        }
      ]
    },
    {
      date: '19 de novembro de 2022',
      items: [
        {
          id: 151,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0rKKi4mvSCHKjoDE4Q8z9eez4F6LFp6xJsmMMJhrExKW7TSjU9LXs4HdnxDVQnwwsl',
          width: 500,
          height: 590,
        }
      ]
    },
    {
      date: '21 de novembro de 2022',
      items: [
        {
          id: 152,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02DFrCEeL4bCBXefDkRXHoLmePZzRNDEGb4kiv3zzZ227r4CVjpVNT41NstZedsotxl',
          width: 500,
          height: 549,
        },
        {
          id: 153,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02fZQSdiDpzAkUmXUa1yhk4KEnCXDMevHJMvQ2HkhmCL8U384jdvCpVrx86geawckBl',
          width: 500,
          height: 587,
        }
      ]
    },
    {
      date: '22 de novembro de 2022',
      items: [
        {
          id: 154,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid026czVoD1BBGrWZVn2fXZroiRHQLsBeC5RXgzmJaRPnb75zMBzibWJ48ZRy2sYsWnfl',
          width: 500,
          height: 489,
        }
      ]
    },
    {
      date: '23 de novembro de 2022',
      items: [
        {
          id: 155,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0Eoqd8s8WztfknavM2NTw7VSJSSxZmvZ1bTLuFpqoiEGaS6Gf2KCvDa6Q6Ynk1W7Kl',
          width: 500,
          height: 692,
        }
      ]
    },
    {
      date: '24 de novembro de 2022',
      items: [
        {
          id: 156,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0T8QCpvMuKdNpfPFZ68HKj6SDLjS6dCbRn4ccYyGUnZr9RuLhxo1fUNFmFvtJjUzyl',
          width: 500,
          height: 750,
        },
        {
          id: 157,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0yV5yqZqYLNT2rGp2oh17NV9aDLftJkWvXVooxasJ5LuATMoVfkzUcmTi158SxzBEl',
          width: 500,
          height: 673,
        }
      ]
    },
    {
      date: '25 de novembro de 2022',
      items: [
        {
          id: 158,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0Byb1Q41UjUnZetBfAK2A9shLctm5VMCsCvnwayDJBTT8hHJGanT9nS7gYKipxRPLl',
          width: 500,
          height: 549,
        },
        {
          id: 159,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid02A9encF1vnEvnVoPzjjoyhM8ocdvkrsNxvUMbXx6D3wGLatDdFLNkSDmekVWKWE6bl',
          width: 500,
          height: 673,
        }
      ]
    },
    {
      date: '26 de novembro de 2022',
      items: [
        {
          id: 160,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0pEeQdbJNWAdCZhmi6FModp5U3y37BeFrB6XstedEcj55QRiQpmaq2815sZhsZ7cVl',
          width: 500,
          height: 466,
        },
        {
          id: 161,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid021SSqkhcW9PnnkkHEwJvaN3x2CPwGT5ReErBgmRdzo7WtUr9stpwX1GHvhW1iSd61l',
          width: 500,
          height: 549,
        },
        {
          id: 162,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0QvqsiCq8z4q9jm6Vmnfk9QZ8EdcJ4hrECMjD8S7no8yX8PrhZzPKGzHMLhEFEMwwl',
          width: 500,
          height: 615,
        }
      ]
    },
    {
      date: '27 de novembro de 2022',
      items: [
        {
          id: 163,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0Q5Upgbh1Mzb5ZBSYyrJPSC1q5AYJDnSiJpEmXkWzNZC8vTS2LMcEwRQSEZ2tpkLXl',
          width: 500,
          height: 663,
        }
      ]
    },
    {
      date: '28 de novembro de 2022',
      items: [
        {
          id: 164,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0oYTTCFCQhnSpJgVLXfqia3xCrHS6844s779fuYHETtmTh6V2HSPx6nzrNtiA13VYl',
          width: 500,
          height: 773,
        }
      ]
    },
    {
      date: '29 de novembro de 2022',
      items: [
        {
          id: 165,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid0enC9d2fJ57XeA8WeF2JdubJNusk6VRS4snzyoUoSF9sdnRLqBMqK39JmMnJ3awAKl',
          width: 500,
          height: 671,
        },
        {
          id: 166,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid028tUt8TLvmxKydzkDKU7UaCrXHc5XHToAotwfADG5Xe8fucfckfSddMiV7bW5yWccl',
          width: 500,
          height: 590,
        }
      ]
    },
    {
      date: '30 de novembro de 2022',
      items: [
        {
          id: 167,
          title: '',
          description: '',
          type: 'post',
          url: 'https://www.facebook.com/socrates.m.torres/posts/pfbid029fFu5YnXQSHewmM6bojwqp4cLzMDSLVbFqgeT7kfcxy8cGBAaujpcgm1KpWuRAnDl',
          width: 500,
          height: 673,
        },
        {
          id: 168,
          title: '',
          description: '',
          type: 'video',
          url: 'https://www.facebook.com/socrates.m.torres/videos/3018413638458804/',
          width: 267,
          height: 591,
        }
      ]
    }
  ];

  return (
    <div className="bg-pf-bg min-h-screen">
      <section className="py-20 border-b-subtle">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-pf-muted hover:text-pf-red transition-colors mb-8 uppercase tracking-widest text-[10px] font-bold"
          >
            <ArrowLeft size={14} /> Voltar para Diário de Classe
          </button>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-pf-red"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pf-red">Linha do Tempo</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-pf-dark">Cronologia das Redes</h1>
            <p className="text-pf-muted max-w-2xl text-lg">
              Acompanhe a jornada do Mochilão Libertário através das publicações realizadas nas redes sociais.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="space-y-24">
            {groups.map((group, groupIndex) => (
              <motion.div 
                key={group.date}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1 }}
                className="relative pl-8 md:pl-12 border-l-2 border-pf-red/20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-pf-red border-4 border-pf-bg shadow-sm"></div>
                
                <div className="flex flex-col gap-10">
                  <div className="flex items-center gap-2 text-pf-red font-bold text-sm bg-pf-red/5 w-fit px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {group.date}
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
                    {group.items.map((item) => (
                      <div key={item.id} className="flex flex-col gap-2">
                        <div className="flex justify-center lg:justify-start">
                          <div 
                            className="bg-white rounded-sm overflow-hidden shadow-xl border border-pf-red/5"
                            style={{ 
                              width: '100%',
                              maxWidth: `${item.width}px`, 
                              height: item.type === 'video' && item.width < 300 ? `${item.height}px` : 'auto',
                              aspectRatio: item.type === 'post' || (item.type === 'video' && item.aspect === 'landscape') ? `${item.width}/${item.height}` : 'auto'
                            }}
                          >
                            <iframe 
                              src={item.type === 'video' 
                                ? `https://www.facebook.com/plugins/video.php?height=${item.height - 124}&href=${encodeURIComponent(item.url)}&show_text=true&width=${item.width}&t=0`
                                : `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(item.url)}&show_text=true&width=${item.width}`
                              } 
                              width={item.width} 
                              height={item.height} 
                              style={{ border: 'none', overflow: 'hidden' }} 
                              scrolling="no" 
                              frameBorder="0" 
                              allowFullScreen={true} 
                              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                              className="w-full h-full"
                            ></iframe>
                          </div>
                        </div>
                        
                        <div className="mt-2 text-center lg:text-left">
                          <a 
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-pf-muted hover:text-pf-red transition-colors"
                          >
                            <Facebook size={12} />
                            Ver no Facebook
                            <ExternalLink size={10} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-pf-feature rounded-sm border-subtle text-center">
            <h3 className="text-xl font-bold text-pf-dark mb-4 uppercase tracking-tighter">Continua...</h3>
            <p className="text-pf-muted leading-relaxed max-w-2xl mx-auto">
              Esta é apenas uma parte da memória do Mochilão Libertário. Continuamos resgatando os registros dessa jornada pela América Latina.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
