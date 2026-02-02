import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Database, FileCheck } from 'lucide-react';

const COMPANY_NAME = 'Webyte Hub';
const CNPJ = '29.793.949/0001-78';

export default function PoliticaPrivacidade() {
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
            <Shield className="w-6 h-6 text-emerald-600" />
            <h1 className="text-xl font-bold text-gray-900">Política de Privacidade</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <p className="text-sm text-gray-500">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}. {COMPANY_NAME}, CNPJ {CNPJ}, compromete-se com a proteção dos seus dados conforme a LGPD (Lei Geral de Proteção de Dados).
        </p>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-600" />
            1. Dados que coletamos
          </h2>
          <p className="text-gray-700 mb-2">
            Coletamos apenas os dados necessários para o funcionamento do Sistema de Movimento de Caixa (PloutosLedger): identificação de usuário, dados de movimentação financeira que você insere (entradas, saídas, lançamentos) e preferências de uso. Não vendemos nem compartilhamos seus dados com terceiros para marketing.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-600" />
            2. Como usamos seus dados
          </h2>
          <p className="text-gray-700 mb-2">
            Os dados são utilizados para: prestação do serviço (cálculos, relatórios, cupons fiscais), autenticação e controle de acesso, backups e recuperação, e cumprimento de obrigações legais quando aplicável. Podemos utilizar dados agregados e anonimizados para melhorar o produto.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-600" />
            3. Seus direitos (LGPD)
          </h2>
          <p className="text-gray-700 mb-2">
            Você tem direito a: acesso aos seus dados, correção de dados inexatos, exclusão (quando não houver dever legal de retenção), portabilidade, revogação do consentimento quando aplicável, e informação sobre com quem compartilhamos dados. Para exercer esses direitos, entre em contato conosco pelos canais oficiais da {COMPANY_NAME}.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">4. Segurança e armazenamento</h2>
          <p className="text-gray-700 mb-2">
            Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração. Parte dos dados pode ser armazenada localmente no seu dispositivo (por exemplo, dados de movimento de caixa) conforme a configuração do sistema. Em ambiente online, utilizamos práticas recomendadas de segurança.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">5. Alterações</h2>
          <p className="text-gray-700 mb-2">
            Esta política pode ser atualizada. Alterações relevantes serão comunicadas por meio do sistema ou por e-mail quando necessário. O uso continuado do serviço após a publicação de alterações constitui aceite da nova versão.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">6. Contato</h2>
          <p className="text-gray-700 mb-2">
            Para dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados, entre em contato com a {COMPANY_NAME}, CNPJ {CNPJ}, pelos canais disponíveis no site ou no próprio sistema.
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
