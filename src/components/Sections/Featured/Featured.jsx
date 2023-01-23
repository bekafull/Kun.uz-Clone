import React from "react";
import { Calendar } from "react-feather";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px 0px;
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  /* align-items: center; */
  /* justify-content: space-between; */
`;

const Image = styled.img`
  width: 50%;
  /* padding-bottom: 34%; */
  position: relative;
  overflow: hidden;
`;
const TextWrapper = styled.div`
  width: 50%;
  padding: 25px;
  background: #eff2f7;
`;
const NewsMeta = styled.div`
  color: #8f8f8f;
  font-weight: 300;
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-bottom: 10px;
`;
const Heading = styled.h2`
  font-size: 22px;
  line-height: 27px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  color: #000000;
  display: block;
`;

const Featured = () => {
  return (
    <Container>
      <Image
        src={
          "https://storage.kun.uz/source/thumbnails/_medium/9/V-p4hTr7itp20UBtHyMB-M1-DGNmPzFK_medium.jpg"
        }
      />

      <TextWrapper>
        <NewsMeta>
          <Calendar size={12} /> 21:18 / 22.01.2023
        </NewsMeta>
        <Heading>
          
Ҳудудларда 3-чорак онлайн бошланадиган мактаблар рўйхати эълон қилинмоқда. Сўнгги маълумотлар
        </Heading>
        <Description>
        Тошкент шаҳридаги мавжуд 335 умумтаълим муассасасидан 278 тасида 23 январ куни ўқув машғулотларига рухсат берилади.
        </Description>
      </TextWrapper>
    </Container>
  );
};


export default Featured;
