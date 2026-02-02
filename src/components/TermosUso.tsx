import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertCircle, CheckCircle } from 'lucide-react';

const COMPANY_NAME = 'Webyte Hub';
const CNPJ = '29.793.949/0001-78';

export default function TermosUso() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-emerald-600" />
            <h1 className="text-xl font-bold text-gray-900">Termos de Uso</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <p className="text-sm text-gray-500">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}. Ao utilizar o Sistema de Movimento de Caixa (PloutosLedger), você concorda com estes Termos de Uso.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" />
            1. Objeto e aceitação
          </h2>
          <p className="text-gray-700 mb-2">
            Estes Termos regem o uso do software PloutosLedger (Sistema de Movimento de Caixa), oferecido pela {COMPANY_NAME}, CNPJ {CNPJ}. O acesso ou uso do sistema implica aceitação integral destes Termos. Se você não concordar, não utilize o serviço.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            2. Uso permitido
          </h2>
          <p className="text-gray-700 mb-2">
            O sistema destina-se ao controle de movimento de caixa, lançamentos financeiros, emissão de relatórios e funcionalidades correlatas, em conformidade com a licença adquirida. É permitido usar o sistema de forma lícita, responsável e de acordo com a documentação e orientações fornecidas. O usuário é responsável pela veracidade e pela guarda dos dados que inserir.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            3. Uso proibido
          </h2>
          <p className="text-gray-700 mb-2">
            É vedado: (a) utilizar o sistema para fins ilícitos ou em desacordo com a lei; (b) tentar acessar áreas restritas, outros usuários ou dados de terceiros sem autorização; (c) copiar, modificar, distribuir ou engenhar reversa do software sem autorização expressa; (d) sobrecarregar a infraestrutura ou prejudicar a disponibilidade do serviço; (e) usar o sistema para distribuir malware ou conteúdo ofensivo. O descumprimento pode resultar em rescisão do acesso e medidas legais.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">4. Licença e propriedade</h2>
          <p className="text-gray-700 mb-2">
            O PloutosLedger e todo o conteúdo técnico e de marca relacionados são de propriedade da {COMPANY_NAME} ou de seus licenciadores. É concedida ao usuário uma licença de uso, não exclusiva e intransferível, conforme o plano ou contrato vigente. Nenhuma parte destes Termos transmite propriedade do software ao usuário.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">5. Disponibilidade e suporte</h2>
          <p className="text-gray-700 mb-2">
            A {COMPANY_NAME} busca manter o sistema disponível, mas não garante disponibilidade ininterrupta. Manutenções programadas podem ser comunicadas previamente. O suporte técnico é oferecido conforme o plano contratado e pelos canais oficiais de atendimento.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">6. Limitação de responsabilidade</h2>
          <p className="text-gray-700 mb-2">
            O sistema é fornecido "como está". Na medida permitida pela lei, a {COMPANY_NAME} não se responsabiliza por danos indiretos, lucros cessantes ou perda de dados decorrentes do uso ou da indisponibilidade do sistema. A responsabilidade do usuário pelos lançamentos e decisões tomadas com base nos dados do sistema é exclusiva do usuário.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">7. Alterações e rescisão</h2>
          <p className="text-gray-700 mb-2">
            Estes Termos podem ser alterados a qualquer momento, com divulgação no sistema ou por e-mail. O uso continuado após alterações constitui aceite. A {COMPANY_NAME} pode encerrar ou suspender o acesso em caso de violação destes Termos ou por decisão comercial, com aviso quando aplicável.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">8. Lei aplicável e foro</h2>
          <p className="text-gray-700 mb-2">
            Estes Termos são regidos pelas leis da República Federativa do Brasil. Eventuais disputas serão submetidas ao foro da comarca do domicílio da {COMPANY_NAME}, com renúncia a qualquer outro, por mais privilegiado que seja.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">9. Contato</h2>
          <p className="text-gray-700 mb-2">
            Dúvidas sobre estes Termos de Uso devem ser dirigidas à {COMPANY_NAME}, CNPJ {CNPJ}, pelos canais oficiais de contato disponíveis no site ou no sistema.
          </p>
        </section>

        <div className="pt-6 border-t border-gray-200">
          <Link to="/" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </div>
      </main>

      <footer className="border-t border-gray-200 mt-12 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {COMPANY_NAME}. CNPJ {CNPJ}. Todos os direitos reservados.
      </footer>
    </div>
  );
}
