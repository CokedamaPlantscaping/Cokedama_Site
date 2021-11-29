import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <UpperHalf>
          <Col1>
            <H2>Cokedama Plantscaping</H2>
            <P>
              Our mission is to promote eco-friendly interior designing and
              inspire people to pursue careers working with plants while finding
              meaningful creative work to financially support them and their
              families.
            </P>
          </Col1>
          <Col2>
            <InnerDiv1>
              <a
                href="https://www.facebook.com/cokedamainteriorplantscaping"
                class="fbLink"
              >
                <div className="facebook">
                  <img src="Facebook.png" width="25" height="25" />
                  <H1>https://www.facebook.com/cokedamainteriorplantscaping</H1>
                </div>
              </a>
              <H1>+94 71 412 0033</H1>
            </InnerDiv1>
          </Col2>
        </UpperHalf>
      </Container>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.div`
  width: 100%;
  background-color: #444;
  flex-direction: column;
  color: white;
  line-height: 1.2;
`;
const Container = styled.div`
  justify-content: space-between;
  margin: 60px 25px;
  height: 100%;
  flex-direction: column;
  @media ${(props) => props.theme.tablet} {
    margin: 60px 105px;
  }
`;
const UpperHalf = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.tablet} {
    flex-direction: row;
  }
`;
const Col1 = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  margin-bottom: 30px;
  @media ${(props) => props.theme.tablet} {
    width: 47%;
    margin-bottom: 0px;
  }
`;
const H2 = styled.h2`
  font-size: 20px;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 12px;
`;
const P = styled.p`
  line-height: 1.5;
  font-size: 12px;
  width: 70%;
`;
const Col2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  @media ${(props) => props.theme.tablet} {
    width: 50%;
    margin-bottom: 0px;
  }
`;
const InnerDiv1 = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
`;
const InnerDiv2 = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
  margin-bottom: 16px;
`;
const LowerHalf = styled.h2`
  display: flex;
  justify-content: space-between;
  background-color: #444;
  color: white;
  font-size: 16px;
`;