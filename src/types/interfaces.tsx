export interface  CardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  alt: string;
}
export interface  Topics {
  name: string;
  id: string;
  description: string;
  resources: string[];
}
export interface  Resources {
  resourceId: string;
  topicId: string;
}