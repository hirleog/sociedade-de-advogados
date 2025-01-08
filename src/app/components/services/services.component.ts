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
        image: 'fa-solid fa-pregnant-woman',
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

  public wppMessageOptions(option: any) {

    const phoneNumber: string = '5511973752898'

    switch (option) {
      case 'Vitrificação de Pintura':
        window.open(
          `https://wa.me/${phoneNumber}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20Vitrifica%C3%A7%C3%A3o%20de%20Pintura!`, "_blank"
        );
        break;
      case ' Automotivo':
        window.open(
          `https://wa.me/${phoneNumber}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20%20Automotivo!`, "_blank"
        );
        break;
      case 'Higienização Interna':
        window.open(
          `https://wa.me/${phoneNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Higienização%20Interna!`, "_blank"
        );
        break;

      case 'Lavagem de Motor':
        window.open(
          `https://wa.me/${phoneNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Lavagem%20de%20Motor!`, "_blank"
        );
        break;
      case 'Lavagem de Chassi':
        window.open(
          `https://wa.me/${phoneNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Lavagem%20de%20Chassi!`, "_blank"
        );
        break;
      case 'Lavagem Detalhada':
        window.open(
          `https://wa.me/${phoneNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Lavagem%20Detalhada!`, "_blank"
        );
        break;
      case 'Lavagem convencional':
        window.open(
          `https://wa.me/${phoneNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Lavagem%20convencional!`, "_blank"
        );
        break;
      default:
        break;
    }
  }

}
