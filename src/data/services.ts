export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
  image?: string;
}

export const servicesList: Service[] = [
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    slug: 'tax-planning',
    shortDescription: 'Strategic tax planning and compliance to minimize liability and support your goals.',
    icon: 'calculator',
    image: '/assets/images/man-working-at-desk.jpg',
  },
  {
    id: 'payroll',
    title: 'Payroll',
    slug: 'payroll',
    shortDescription: 'Payroll processing and tax filing so you can focus on your business.',
    icon: 'dollar-sign',
    image: '/assets/images/payroll-office-desk.jpg',
  },
  {
    id: 'financial-statements',
    title: 'Financial Statements',
    slug: 'financial-statements',
    shortDescription: 'Preparation of financial statements for reporting and decision-making.',
    icon: 'file-text',
    image: '/assets/images/financial-statement-on-conference-table.jpg',
  },
  {
    id: 'consulting',
    title: 'Consulting',
    slug: 'consulting',
    shortDescription: 'Business and financial consulting tailored to your needs.',
    icon: 'briefcase',
    image: '/assets/images/consulting-two-business-men-at-a-desk.jpg',
  },
];
