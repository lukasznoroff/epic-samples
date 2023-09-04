import styled from 'styled-components';

export type CardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  title: string;
  text: string;
  image: string;
  className: string;
};

export function Card({ image, title, text, className, ...rest }: CardProps) {
  return (
    <div {...rest}>
      <CardContainer>
        <CardImage src={image} alt={title} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
        </CardContent>
      </CardContainer>
    </div>
  );
}

const CardContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
  text-align: left;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin: 0 0 8px;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`;
