import React from 'react'
import styled from "styled-components"


// TODO - tezbazar elemek ucun mui ile elemedim. mui componentlere kecirecem

function ChatPage() {
  return (
    <S.Container>
      <S.Header>
        <h1>Apex Legend</h1>
      </S.Header>
      <S.Sidebar>
        <S.SidebarHeader></S.SidebarHeader>
        <S.SidebarMain></S.SidebarMain>
      </S.Sidebar>
      <S.Chat>
        <S.Message who="user">
          <p>asdasdasd</p>
        </S.Message>
        <S.Message who="bot">
          <p>asdasd</p>
        </S.Message>
        <S.Message who="user">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
            dolorum.
          </p>
        </S.Message>
        <S.Message who="bot">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            iusto asperiores quasi repudiandae excepturi numquam possimus
            voluptates perspiciatis odit. Ad maiores fuga aperiam. Illo quo
            delectus provident tempore voluptates, dolore praesentium
            necessitatibus error id totam impedit explicabo vitae amet
            aspernatur architecto quia corrupti pariatur perferendis inventore
            vero, facilis sunt numquam!
          </p>
        </S.Message>
        <S.Message who="user">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            placeat minima esse optio odit animi quis illum! Quas modi quis,
            iure quisquam exercitationem natus repellendus mollitia voluptate
            minus dicta repudiandae non voluptas facilis? Perspiciatis aliquid
            unde officia veritatis nam neque mollitia dolor iusto. Tempora
            perspiciatis sunt provident vel cumque doloremque.
          </p>
        </S.Message>
        <S.Message who="bot">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            rerum aperiam omnis maiores, perspiciatis laudantium, tenetur
            provident natus laborum dolorum placeat autem, nisi alias eveniet
            adipisci consequuntur tempore hic modi dolores et eaque praesentium
            ab esse similique? Praesentium explicabo eveniet quibusdam amet
            commodi reiciendis, adipisci odit officiis rerum, aliquid asperiores
            eaque voluptatem illum iure. Rerum necessitatibus delectus unde?
            Eius omnis eaque ab dolorem voluptatem, inventore dolor numquam
            ipsum, doloribus labore vel suscipit ducimus nihil voluptatum
            perferendis veniam? Veniam id cupiditate incidunt. Eligendi aperiam
            quasi hic modi in omnis, nostrum, repellendus adipisci, fuga ullam
            placeat porro labore laborum dolorem voluptatem iusto?
          </p>
        </S.Message>
        <S.Message who="user">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            placeat minima esse optio odit animi quis illum! Quas modi quis,
            iure quisquam exercitationem natus repellendus mollitia voluptate
            minus dicta repudiandae non voluptas facilis? Perspiciatis aliquid
            unde officia veritatis nam neque mollitia dolor iusto. Tempora
            perspiciatis sunt provident vel cumque doloremque.
          </p>
        </S.Message>
        <S.Message who="bot">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            rerum aperiam omnis maiores, perspiciatis laudantium, tenetur
            provident natus laborum dolorum placeat autem, nisi alias eveniet
            adipisci consequuntur tempore hic modi dolores et eaque praesentium
            ab esse similique? Praesentium explicabo eveniet quibusdam amet
            commodi reiciendis, adipisci odit officiis rerum, aliquid asperiores
            eaque voluptatem illum iure. Rerum necessitatibus delectus unde?
            Eius omnis eaque ab dolorem voluptatem, inventore dolor numquam
            ipsum, doloribus labore vel suscipit ducimus nihil voluptatum
            perferendis veniam? Veniam id cupiditate incidunt. Eligendi aperiam
            quasi hic modi in omnis, nostrum, repellendus adipisci, fuga ullam
            placeat porro labore laborum dolorem voluptatem iusto?
          </p>
        </S.Message>
      </S.Chat>
    </S.Container>
  );
}


const S = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 80px auto;
    position: relative;
    overflow: hidden;
  `,
  Header: styled.header`
    grid-column: 1/5;
    grid-row: 1/2;
    background-color: white;
    display: grid;
    place-items: center;
  `,
  Sidebar: styled.aside`
    grid-column: 1/2;
    grid-row: 2/4;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
  `,
  SidebarHeader: styled.div``,
  SidebarMain: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Chat: styled.main`
    grid-column: 2/5;
    grid-row: span 2/4;
    background-color: gray;
    position: absolute;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    padding: 20px;
  `,
  Message: styled.div`
    background-color: ${(props) =>
      props.who === "user" ? "transparent" : "#333"};
    color: white;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;

    p {
      width: 94%;
    }

    &::before {
      content: "";
      width: 40px;
      height: 40px;
      background-color: ${(props) =>
        props.who === "user" ? "white" : "green"};
    }
  `,
};

export default ChatPage