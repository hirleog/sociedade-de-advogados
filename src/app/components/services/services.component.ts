import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public cards: Array<any> = []
  constructor() {
    this.cards = [
      {
        image: 'fa-solid fa-sign-out-alt',
        title: 'Rescisão Contratual',
        description: 'Orientação e análise sobre verbas rescisórias e direitos na rescisão do contrato de trabalho.',
      },
      {
        image: 'fa-solid fa-redo-alt',
        title: 'Reintegração',
        description: 'Ação para reintegração ao trabalho em caso de demissão injusta ou discriminatória.',
      },

      {
        image: 'fa-solid fa-user-slash',
        title: 'Assédio Moral',
        description: 'Representação em casos de humilhação, intimidação ou assédio no ambiente de trabalho.',
      },
      {
        image: 'fa-solid fa-piggy-bank',
        title: 'FGTS Retido',
        description: 'Ações para liberação do saldo do FGTS não depositado pelo empregador.',
      },
      {
        image: 'fa-solid fa-ambulance',
        title: 'Acidente de Trabalho',
        description: 'Direito à indenização ou estabilidade em casos de acidentes no ambiente de trabalho.',
      },
      {
        image: 'fa-solid fa-moon',
        title: 'Adicional Noturno',
        description: 'Reclamação de valores devidos por trabalho em horários noturnos.',
      },
      {
        image: 'fa-solid fa-clock',
        title: 'Horas Extras',
        description: 'Cálculo e reivindicação de horas extras não pagas pelo empregador.',
      },

      {
        image: 'fa-solid fa-tasks',
        title: 'Desvio de Função',
        description: 'Defesa contra exploração de atividades fora do contrato de trabalho.',
      },
      {
        image: 'fa-solid fa-id-card',
        title: 'Registro em Carteira',
        description: 'Ação para regularização do vínculo empregatício e carteira assinada.',
      },
      {
        image: 'fa-solid fa-baby',
        title: 'Licença-Maternidade',
        description: 'Garantia dos direitos relacionados à gravidez e licença maternidade.',
      },
      {
        image: 'fa-solid fa-balance-scale',
        title: 'Equiparação Salarial',
        description: 'Ações para garantir salários iguais para funções iguais na empresa.',
      },
      {
        image: 'fa-solid fa-female',
        title: 'Assédio Sexual',
        description: 'Atendimento para vítimas de assédio sexual no trabalho.',
      },

      {
        image: 'fa-solid fa-biohazard',
        title: 'Adicional de Insalubridade',
        description: 'Defesa do direito ao adicional por trabalho em condições insalubres.',
      },
      {
        image: 'fa-solid fa-handshake',
        title: 'Acordo Trabalhista',
        description: 'Negociação de acordos para evitar ações judiciais prolongadas.',
      },
      {
        image: 'fa-solid fa-person-pregnant',
        title: 'Estabilidade Gestante',
        description: 'Garantia da estabilidade da gestante no emprego até 5 meses após o parto.',
      },
      {
        image: 'fa-solid fa-heart',
        title: 'Previdência Social',
        description: 'Auxílio em questões relacionadas a INSS e benefícios previdenciários.',
      },
      {
        image: 'fa-solid fa-universal-access',
        title: 'Seguro-Desemprego',
        description: 'Assistência para habilitação e recebimento do seguro-desemprego.',
      },

      {
        image: 'fa-solid fa-ban',
        title: 'Demissão por Justa Causa',
        description: 'Análise da validade de demissão por justa causa aplicada ao trabalhador.',
      },
      {
        image: 'fa-solid fa-gavel',
        title: 'Reclamação Trabalhista',
        description: 'Representação em reclamações por direitos trabalhistas não cumpridos.',
      },
      {
        image: 'fa-solid fa-file-alt',
        title: 'Contratos de Trabalho',
        description: 'Consultoria na elaboração ou revisão de contratos de trabalho.',
      },
    ];

  }

  ngOnInit(): void {
  }

  public goToServices(): void { }

  public wppMessageOptions(option: string): void {
    const phoneNumber: string = '5511973752898';
    
    const messages: { [key: string]: string } = {
      'Rescisão Contratual': 'Olá! Gostaria de saber mais sobre o serviço de Rescisão Contratual.',
      'Reintegração': 'Olá! Gostaria de entender como funciona o serviço de Reintegração.',
      'Assédio Moral': 'Olá! Preciso de informações sobre casos de Assédio Moral.',
      'FGTS Retido': 'Olá! Tenho dúvidas sobre como liberar meu FGTS retido.',
      'Acidente de Trabalho': 'Olá! Quero saber mais sobre os serviços relacionados a Acidente de Trabalho.',
      'Adicional Noturno': 'Olá! Gostaria de saber mais sobre Adicional Noturno.',
      'Horas Extras': 'Olá! Preciso de ajuda com questões relacionadas a Horas Extras.',
      'Desvio de Função': 'Olá! Quero entender como lidar com um Desvio de Função.',
      'Registro em Carteira': 'Olá! Gostaria de mais informações sobre Registro em Carteira.',
      'Licença-Maternidade': 'Olá! Preciso de informações sobre Licença-Maternidade.',
      'Equiparação Salarial': 'Olá! Quero saber mais sobre Equiparação Salarial.',
      'Assédio Sexual': 'Olá! Preciso de orientação sobre Assédio Sexual.',
      'Adicional de Insalubridade': 'Olá! Gostaria de entender mais sobre Adicional de Insalubridade.',
      'Acordo Trabalhista': 'Olá! Quero mais informações sobre Acordo Trabalhista.',
      'Estabilidade Gestante': 'Olá! Preciso saber mais sobre Estabilidade Gestante.',
      'Previdência Social': 'Olá! Tenho dúvidas sobre Previdência Social.',
      'Seguro-Desemprego': 'Olá! Gostaria de informações sobre Seguro-Desemprego.',
      'Demissão por Justa Causa': 'Olá! Quero entender como funciona Demissão por Justa Causa.',
      'Reclamação Trabalhista': 'Olá! Preciso de ajuda com uma Reclamação Trabalhista.',
      'Contratos de Trabalho': 'Olá! Quero informações sobre Contratos de Trabalho.'
    };
  
    const message = messages[option] || 'Olá! Gostaria de mais informações sobre seus serviços.';
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }
  
}
