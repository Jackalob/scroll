import { usePhotos } from '../../api/photo';
import Box from '../../components/Box';
import STYLE from './style.module.scss';

function Home() {
  const { data } = usePhotos();
  const pages = data?.pages;

  return (
    <div>
      {pages?.map((pageData) =>
        pageData.map((photo) => (
          <Box key={photo.id} className={STYLE.gap}>
            <img
              className={STYLE.img}
              src={photo.download_url}
              alt=""
              loading="lazy"
            />
            <span className={STYLE.author}>Author: {photo.author}</span>
          </Box>
        ))
      )}
    </div>
  );
}

export default Home;
