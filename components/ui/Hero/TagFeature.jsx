import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export function TagFeature() {
  return (
    <div className="hidden md:inline-flex items-center gap-3 p-1 pr-[10px] bg-brand-50 rounded-md absolute top-[-100px] left-1/2 transform -translate-x-1/2">
      <span className="inline-block h-6 bg-white px-[10px] rounded-md text-xs/6 xl:text-sm/6 font-medium text-brand-700">
        Updates
      </span>
      <Link
        href="/contato"
        className="flex items-center gap-1 text-xs/6 xl:text-sm/6 font-medium text-brand-700 hover:opacity-50 transition-opacity"
      >
        QRs codes personalizados para rastrear seus ativos <FiArrowRight />
      </Link>
    </div>
  );
}