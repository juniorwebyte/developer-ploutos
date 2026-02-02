// Componente para exibir informações institucionais (Razão Social, CNPJ, links LGPD)
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, Lock } from 'lucide-react';

interface InstitutionalInfoProps {
  className?: string;
}

export default function InstitutionalInfo({ className = '' }: InstitutionalInfoProps) {
  // Informações institucionais - env ou padrão Webyte Hub
  const razaoSocial = import.meta.env.VITE_RAZAO_SOCIAL || 'Webyte Hub';
  const cnpj = import.meta.env.VITE_CNPJ || '29.793.949/0001-78';

  return (
    <div className={`bg-gradient-to-r from-slate-50 to-gray-50 border-t border-gray-200 py-4 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {razaoSocial && (
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-emerald-600" />
                <span className="font-medium">{razaoSocial}</span>
                {cnpj && <span className="text-gray-500">• CNPJ: {cnpj}</span>}
              </div>
            )}
            <div className="flex items-center gap-1 text-emerald-600">
              <Lock className="w-3 h-3" />
              <span className="font-medium">Dados protegidos • Backups automáticos • Conformidade com LGPD</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/politica-de-privacidade"
              className="flex items-center gap-1 hover:text-emerald-600 transition-colors"
            >
              <FileText className="w-3 h-3" />
              <span>Política de Privacidade</span>
            </Link>
            <Link
              to="/termos-de-uso"
              className="flex items-center gap-1 hover:text-emerald-600 transition-colors"
            >
              <FileText className="w-3 h-3" />
              <span>Termos de Uso</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
