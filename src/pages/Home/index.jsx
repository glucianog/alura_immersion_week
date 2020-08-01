import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAlert } from 'react-alert';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../respositories/categories';

const HomeWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 45px;

  @media(max-width: 800px) {
    padding-top: 40px;
  }
`;

function Home() {
  const [initialData, setInitialData] = useState([]);
  const alert = useAlert();

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialData(categoriesWithVideos);
      })
      .catch((err) => {
        alert.show('An error occurred during the data retrieval. Try again later');
      });
  }, [alert]);

  return (
    <HomeWrapper>
      <PageDefault paddingAll={0}>
        {initialData.length === 0 && (<div> Loading ...</div>)}
        {initialData.map((category, index) => {
          if (index === 0) {
            return (
              <div key={category.id}>
                <BannerMain
                  videoTitle={initialData[0].videos[0].title}
                  url={initialData[0].videos[0].url}
                  videoDescription="O que front-end"
                />
                <Carousel
                  ignoreFirstVideo
                  category={initialData[0]}
                />
              </div>
            );
          }
          return (
            <Carousel
              key={category.id}
              category={category}
            />
          );
        })}
      </PageDefault>
    </HomeWrapper>
  );
}

export default Home;
