export interface ServiceDetail {
    title: string;
    description: string;
    image: string;
    details: string[];
  }
  
  export interface ServiceCategory {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
    services: ServiceDetail[];
  }