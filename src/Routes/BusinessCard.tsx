import styled from "styled-components";
import {useNavigate, useParams} from "react-router";
import { useState, useEffect } from 'react';
import ContactModal from "../Components/ContactModal.tsx";
import {Link} from "react-router-dom";

const BusinessWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 375pt;
`;

const TitleWrapper = styled.div`
    width: 100%;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border-bottom: 1px solid rgb(231, 233, 239);
`;

const ProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProfileContentWrapper = styled.div`
    padding-top: 40px;
    width: 90%;
    gap: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const ProfilePhoto = styled.div`
    position: absolute;
    top: 140px;
    width: 110px;
    height: 110px;
    background-color: #fafafa;
    border-radius: 30px;
    z-index: 2;
    border: 1px solid rgb(231, 233, 239);
`;
const ProfileName = styled.h3`
    font-size: 22px;
    font-weight: 700;
`;
const ProfileAddress = styled.p`
    font-size: 15px;
`;
const ProfileText = styled.p`
    font-size: 11px;
`;
const ProfileLikeBtn = styled.button`
    @font-face {
        font-family: 'NexaRegular';
        src: url('/Fonts/Nexa-Regular.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
    }
    cursor: pointer;
    font-family: 'NexaRegular', sans-serif;
    min-width: 60px;
    min-height: 32px;
    color: black;
    font-size: 13px;
    line-height: 17px;
    padding: 8px;
    border-radius: 25px;
    border: 1px solid black;
    outline: none;
    background-color: white;
`;

const ProfileBackgroundArch = styled.div`
    position: relative;
    width: 100%;
    height: 170px;
    background-color: rgb(244, 244, 244);
    overflow: hidden;
    display: flex;
    justify-content: center;
    text-align: center;
    z-index: -1;
`;

const ProfileArch = styled.div`
    position: absolute;
    bottom: -50px;
    width: 120%;
    height: 100px;
    background-color: white;
    border-radius: 50%;
`;

const MoreBtnWrapper = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

const MoreBtnDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    min-width: 85px;
`;

const MoreBtn = styled.div`
    cursor: pointer;
    width: 85px;
    height: 85px;
    background-color: #fafafa;
    border: 1px solid rgb(231, 233, 239);
    border-radius: 16px;
`;

const MoreBtnText = styled.p`
    white-space: nowrap;
    font-size: 12px;
`;

const ProfileVideo = styled.iframe`
    margin-top: 23px;
    width: 100%;
    height: 190px;
    border-radius: 15px;
`;

const DownloadBtnDiv = styled.div`
    width: 100%;
    z-index: 3;
    position: fixed;
    bottom: 0;
    padding-top: 17px;
    padding-bottom: 17px;
    background-color: white;
    border-top: 1px solid rgba(0, 0, 0, 0.13);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DownloadBtn = styled.button`
    cursor: pointer;
    border: 1px solid #747775;
    border-radius: 54px;
    width: 90%;
    max-width: 315px;
    height: 54px;
    background-color: black;
    color: white;
    font-size: 18px;
`;

const DivideBar = styled.div`
    width: 90%;
    height: 1px;
    background-color: rgb(231, 233, 239);
    border-radius: 2px;
    margin-top: 33px;
    margin-bottom: 33px;
`;

const IntroduceWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const IntroduceTitle = styled.h3`
    font-size: 21px;
`;

const IntroduceText = styled.p`
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 30px;
`;

const SliderWrapper = styled.div`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    gap: 17px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    margin-bottom: 138px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar{
        display: none;
    }
`;

const SliderImg = styled.img`
    cursor: pointer;
    width: 220px;
    height: 332px;
    border: 1px solid black;
`;

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 90%;
    padding-top: 30px;
    gap: 20px;
`;

const ContactTitle = styled.p`
    font-size: 19px;
    line-height: 22px;
`;

const ContactInput = styled.input`
    width: 100%;
    height: 56px;
    margin-bottom: 20px;
`;

const ContactSelect = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;

    > select {
        font-family: 'NanumSquareNeo', sans-serif;
        height: 60px;
        width: 100%;
        min-width: 100px;
        font-size: 18px;
        padding: 15px;
        color: #7a7a7a;
        border-color: #ccccd7;
        border-style: solid;
        border-width: 1px;
        appearance: none;
        background: none;
        z-index: 1;

        &:focus {
            outline: none;
            border-color: #14d762;
        }
    }

    > img {
        position: absolute;
        right: 25px;
        pointer-events: none;
        width: 20px;
        height: auto;
        filter: invert(100%) grayscale(100%);
    }
`;

const ContactTextArea = styled.textarea`
    width: 100%;
    height: 136px;
    resize: none;
`;

const ContactLaw = styled.div`
    color: #bfbfbf;
    font-size: 10px;
    max-width: 272px;
`;


const ContactLink = styled(Link)`
    color: #bfbfbf;
    font-size: 10px;
    text-decoration: underline;
    &:visited {
        color: inherit;
    }
    &:hover {
        color: #0ec556;
    }
    &:active {
        color: inherit;
    }
    &:focus {
        color: inherit;
    }
`;

const ContactSubmitBtn = styled.button`
    width: 195px;
    height: 50px;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
    color: white;
    border: none;
    border-radius: 3px;
    background-color: rgb(20, 215, 98);
    cursor: pointer;
    &:hover{
        background-color: #0ec556;
    }
`;

function BusinessCard(){
    const {id} = useParams();
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const phoneNum = "01022458201";

    useEffect(() => {
        // 모달이 열릴 때 배경 스크롤을 막음
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // 컴포넌트 언마운트 시 원래 상태로 되돌림
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    const navigateMapRoute = () => {
        if(id !== undefined){
            navigate('BusinessCardMap', {
                state: {
                    latitude: "123",
                    longitude: "321",
                }
            });
        }
    };

    return(
        <BusinessWrapper>
            <ContactModal isOpen={isModalOpen} onClose={closeModal}>
                <ContactWrapper>
                    <ContactTitle>메시지를 남겨주시면, 가능한<br/>빠른시간 내에 연락드리겠습니다.</ContactTitle>
                    <form>
                        <ContactInput/>
                        <ContactInput/>
                        <ContactInput/>
                        <ContactSelect>
                            <select name="contactTime" id="contactTime" required >
                                <option value="" disabled hidden>연락 가능한 시간 선택</option>
                                <option value="11">오전 10시 부터 11시</option>
                                <option value="12">오전 11시 부터 12시</option>
                                <option value="13">오후 12시 부터 1시</option>
                                <option value="14">오후 1시 부터 2시</option>
                                <option value="15">오후 2시 부터 3시</option>
                                <option value="16">오후 3시 부터 4시</option>
                                <option value="17">오후 4시 부터 5시</option>
                                <option value="18">오후 5시 부터 6시</option>
                                <option value="19">오후 6시 부터 7시</option>
                            </select>
                            <img src="/Images/btn_arrow_down@3x.png" alt="dropDownLogo"/>
                        </ContactSelect>
                        <ContactTextArea/>
                    </form>
                    <ContactLaw>제출하신 개인정보는 당사 <ContactLink to={"https://www.newploy.net/privacy/"}>개인정보
                        처리방침</ContactLink> 에 따라 안전하게 관리됩니다. 정보를 제출하시면 당사 <ContactLink
                        to={"https://www.newploy.net/privacy/"}>개인정보 처리방침</ContactLink>과<br/><ContactLink
                        to={"https://www.newploy.net/marketinguse/"}>마케팅 활용정보 제공</ContactLink>에 동의한것으로
                        간주됩니다.</ContactLaw>
                    <ContactSubmitBtn>제출하기</ContactSubmitBtn>
                </ContactWrapper>
            </ContactModal>
            <DownloadBtnDiv>
                <DownloadBtn>연락처 저장하기</DownloadBtn>
            </DownloadBtnDiv>
            <TitleWrapper>
                <h2>이진욱님의 디지털 명함</h2>
            </TitleWrapper>
            <ProfileWrapper>
                <ProfileBackgroundArch>
                    {id && <h2>URL Id : {id}</h2>}
                    <ProfileArch/>
                </ProfileBackgroundArch>
                <ProfileContentWrapper>
                    <ProfilePhoto/>
                    <ProfileName>이진욱 대리</ProfileName>
                    <ProfileAddress>현대자동차 강남논현 지점 영업 1팀</ProfileAddress>
                    <ProfileText>서울특별시 서초구 강남대로 586 1, 4층 현대자동차</ProfileText>
                    <ProfileText>연락가능 시간 : 평일 오전 9시 - 오후 6시</ProfileText>
                    <ProfileLikeBtn>235</ProfileLikeBtn>
                    <MoreBtnWrapper>
                        <MoreBtnDiv>
                            <MoreBtn onClick={openModal}/>
                            <MoreBtnText>메시지 남기기</MoreBtnText>
                        </MoreBtnDiv>
                        <MoreBtnDiv>
                            <a href={`tel:${phoneNum}`}><MoreBtn/></a>
                            <MoreBtnText>전화걸기</MoreBtnText>
                        </MoreBtnDiv>
                        <MoreBtnDiv>
                            <MoreBtn onClick={navigateMapRoute}/>
                            <MoreBtnText>찾아오시는 길</MoreBtnText>
                        </MoreBtnDiv>
                    </MoreBtnWrapper>
                    <ProfileVideo src="https://www.youtube.com/embed/hFTs6HbtxbE" allowFullScreen></ProfileVideo>
                </ProfileContentWrapper>
            </ProfileWrapper>
            <DivideBar/>
            <IntroduceWrapper>
                <IntroduceTitle>소개글</IntroduceTitle>
                <IntroduceText>
                    현대자동차 강남논현지점에 오신 여러분 환영합니다.<br/><br/>
                    저희 지점은 강남대로변 편리한 교통과 고객전용 주차장을 완비한 논현역에 위치하고 있으며,<br/>
                    7대 규모의 전시 차량을 보유한 강남권역 전시장입니다.<br/><br/>
                    또한 최고 수준의 전문성을 갖춘 카마스터가 구매 상담부터 출고 후 차량관리까지 도와드리도록 하겠습니다.<br/>
                    차량 이용시에는 무료 발렛 서비스를 제공해드리고 있으니 편하게 방문하여 주시기 바랍니다.<br/><br/>
                    지점을 방문해주시는 모든분들께 자동차를 통해 새로운 경험과 가치있는 시간을 제공하도록 최선을 다하겠습니다. 감사합니다.
                </IntroduceText>
            </IntroduceWrapper>
            <SliderWrapper>
                <SliderImg
                    src={"https://www.newploy.net/wp-content/uploads/2023/05/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png"}
                    alt={"tmp"}/>
                <SliderImg
                    src={"https://www.newploy.net/wp-content/uploads/2023/05/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png"}
                    alt={"tmp"}/>
                <SliderImg
                    src={"https://www.newploy.net/wp-content/uploads/2023/05/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png"}
                    alt={"tmp"}/>
            </SliderWrapper>
        </BusinessWrapper>
    );
}

export default BusinessCard;