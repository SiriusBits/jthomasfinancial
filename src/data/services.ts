export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
}

export const servicesList: Service[] = [
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    slug: 'tax-planning',
    shortDescription: 'Strategic tax planning and compliance to minimize liability and support your goals.',
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    slug: 'bookkeeping',
    shortDescription: 'Accurate, organized bookkeeping to keep your finances in order.',
  },
  {
    id: 'payroll',
    title: 'Payroll',
    slug: 'payroll',
    shortDescription: 'Payroll processing and tax filing so you can focus on your business.',
  },
  {
    id: 'financial-statements',
    title: 'Financial Statements',
    slug: 'financial-statements',
    shortDescription: 'Preparation of financial statements for reporting and decision-making.',
  },
  {
    id: 'consulting',
    title: 'Consulting',
    slug: 'consulting',
    shortDescription: 'Business and financial consulting tailored to your needs.',
  },
];
