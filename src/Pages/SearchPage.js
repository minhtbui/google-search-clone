import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from '../Components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import data from '../response';
function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // LIVE API CALL
  const { data } = useGoogleSearch(term);

  console.log();
  return (
    <div className='searchPage'>
      <div className='searchPage_header'>
        <Link to='/'>
          <img
            className='searchPage_header--logo'
            src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
            alt='Google Logo'
          />
        </Link>
        <div className='searchPage_headerBody'>
          <Search hideBtns />

          <div className='searchPage_headerBody--options'>
            <div className='searchPage_headerBody--optionsLeft'>
              <div className='searchPage_headerBody--option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPage_headerBody--option'>
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className='searchPage_headerBody--option'>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className='searchPage_headerBody--option'>
                <LocalOfferIcon />
                <Link to='/shopping'>Shopping</Link>
              </div>
              <div className='searchPage_headerBody--option'>
                <RoomIcon />
                <Link to='/map'>Map</Link>
              </div>
              <div className='searchPage_headerBody--option'>
                <MoreVertIcon />
                <Link to='/more'>More</Link>
              </div>
            </div>

            <div className='searchPage_headerBody--optionsRight'>
              <div className='searchPage_headerBody--option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchPage_headerBody--option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className='searchPage_results'>
          <span className='searchPage_resultsCount'>
            About {data?.searchInformation.totalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </span>

          {data?.items.map((item) => (
            <div className='searchPage_result'>
              <a className='searchPage_result--Title' href={item.link}>
                <h2>{item.title}</h2>
                <a className='searchPage_result--Link'>
                  {/* {item.pagemap?.cse_thumbnail?.length > 0 && (
                    <img
                      className='searchPage_result--logoLink'
                      src={
                        item.pagemap?.cse_thumbnail?.length > 0 &&
                        item.pagemap?.cse_thumbnail[0]?.src
                      }
                      alt='img link'
                    />
                  )} */}
                  {item.displayLink} <icon>🚀</icon>
                </a>
              </a>

              <p className='searchPage_result--Desc'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
